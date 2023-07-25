const router = require('express').Router();
const Crypto = require("crypto");
const Request = require("sync-request");
const NodeRSA = require("node-rsa");
const FS = require("fs");
const apiHost = "https://api.tilko.net/";
const apiKey = "";

let result = "";

// AES 암호화 함수
function aesEncrypt(key, iv, plainText) {
    const cipher = Crypto.createCipheriv("aes-128-cbc", key, iv);
    let ret = cipher.update(plainText, "utf8", "base64");
    ret += cipher.final("base64");
    return ret;
}

// RSA 암호화 함수
function rsaEncrypt(publicKey, aesKey, padding) {
    const key = new NodeRSA(
      "-----BEGIN PUBLIC KEY-----\n" + publicKey + "\n-----END PUBLIC KEY-----",
      { encryptionScheme: padding }
    );
    return key.encrypt(aesKey, "base64", "utf8");
}

// RSA 공개키(Public Key) 조회 함수
function getPublicKey() {
    const uri = apiHost + "/api/Auth/GetPublicKey?APIkey=" + apiKey;
    const options = {
      json: true,
    };
  
    const response = Request("GET", uri, options);
    const rsaPublicKey = JSON.parse(response.getBody("utf8")).PublicKey;
    return rsaPublicKey;
}

// RSA Public Key 조회
const rsaPublicKey = getPublicKey();

// AES Secret Key 및 IV 생성
const aesKey = Crypto.randomBytes(16);
const aesIv = Buffer.from([
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x00, 0x00, 0x00,
]);

// AES Key를 RSA Public Key로 암호화
let aesCipherKey = Buffer.alloc(0);
aesCipherKey = rsaEncrypt(rsaPublicKey, aesKey, "pkcs1");

// API URL 설정
// HELP: https://tilko.net/Help/Api/POST-api-apiVersion-Hira-HIRAA050300000100
const url = apiHost + "api/v1.0/hira/hiraa050300000100";

// 인증서 경로 설정
const certPath = "./certificate/";
const certFile = certPath + "signCert.der";
const keyFile = certPath + "signPri.key";

router.post('/', function (req, res) {
    const userName = req.body.UserName;
    const identityNumber = req.body.IdentityNumber;
    const options = {
        headers: {
          "Content-Type": "application/json",
          "API-KEY": apiKey,
          "ENC-KEY": aesCipherKey,
        },
      
        json: {
          CertFile: aesEncrypt(aesKey, aesIv, FS.readFileSync(certFile)),
          KeyFile: aesEncrypt(aesKey, aesIv, FS.readFileSync(keyFile)),
          CertPassword: aesEncrypt(aesKey, aesIv, ""),
          IdentityNumber: aesEncrypt(aesKey, aesIv, identityNumber),
          UserName : userName
        },
    };
    result = JSON.parse(Request("Post", url, options).getBody("utf8"));
    res.sendStatus(200);
});

router.get('/data', function(req, res){
    res.json(result.ResultList);
});

module.exports = router;