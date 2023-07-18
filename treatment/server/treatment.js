const router = require('express').Router();
const Crypto = require("crypto");
const Request = require("sync-request");

const apiHost = "https://datahub-dev.scraping.co.kr/";

//본인의 것으로 작성
const token = "";
const encKey = "";
const encIV = "";

let callbackId = "";
let callbackType = "";

function aes256Encrypt(key, iv, plainText) {
    const cipher = Crypto.createCipheriv("aes-256-cbc", key, iv);
    let ret = cipher.update(plainText, "utf8", "base64");
    ret += cipher.final("base64");
    return ret;
}

router.post('/', function (req, res) {
    const loginOption = req.body.loginOption;
    const jumin_initial = req.body.jumin;
    const userName = req.body.userName;
    const phoneNumber = req.body.phoneNumber;
    const telecomGubun = req.body.telecomGubun;
    const jumin = aes256Encrypt(encKey, encIV, jumin_initial);

    const today = new Date();
    const initial = new Date(today.getFullYear(), today.getMonth() - 14, today.getDate());
    const startDate = initial.getFullYear() + '' + (initial.getMonth() + 1).toString().padStart(2, '0') + '' + initial.getDate().toString().padStart(2, '0');
    const last = new Date(today.getFullYear(), today.getMonth() - 2, today.getDate());
    const endDate = last.getFullYear() + '' + (last.getMonth() + 1).toString().padStart(2, '0') + '' + last.getDate().toString().padStart(2, '0');

    const url = apiHost + "scrap/common/nhis/ReceiveTreatmentHistSimple";

    const options = {

        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        json:{
            "LOGINOPTION" : loginOption,
            "JUMIN" : jumin,
            "STARTDATE" : startDate,
            "ENDDATE" : endDate,
            "USERNAME" : userName,
            "HPNUMBER" : phoneNumber,
            "TELECOMGUBUN" : telecomGubun
        }
    }

    const result = JSON.parse(Request("Post", url, options).getBody("utf8"));
    callbackId = result.data.callbackId;
    callbackType = result.data.callbackType;
    res.sendStatus(200);
});

router.get('/data', function(req, res){

    //데이터를 받는 코드

    const url = apiHost + "scrap/captcha";

    const options = {

        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        json:{
            "callbackId" : callbackId,
            "callbackType" : callbackType
        }
    }

    const result = JSON.parse(Request("Post", url, options).getBody("utf8"));

    const data = result.data.JOINLIST[0].JINLIST;

    res.json(data);
});

module.exports = router;