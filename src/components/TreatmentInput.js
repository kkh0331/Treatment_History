import React, {useState} from 'react';
import AppTitle from './common/AppTitle';
import axios from 'axios';
import './common/Input.css';

const TreatmentInput = () => {

  const [loginOption, setLoginOption] = useState("");
  const [jumin, setJumin] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [telecomGubun, setTelecomGubun] = useState("");

  const handleLoginOptionChange = (e) => {
    setLoginOption(e.target.value);
  };

  const handleJuminChange = (e) => {
    setJumin(e.target.value);
  }

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleTelecomGubunChange = (e) => {
    setTelecomGubun(e.target.value);
  }

  const handleClick = () => {
    if(loginOption==="" || jumin==="" || userName==="" || phoneNumber==="" || telecomGubun===""){
      return alert("모든 요소를 선택해주세요");
    }
    axios.post('http://localhost:8000/treatment', {
        loginOption:loginOption,
        jumin:jumin,
        userName:userName,
        phoneNumber:phoneNumber,
        telecomGubun:telecomGubun
    })
    .then(response => {
        window.location.href = '/treatment/certification';
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }

  return (
    <div>
      <AppTitle title={"Input for Treatment Hist"}></AppTitle>
      <div className='InputBackgroundDib'>
        <table>
          <tr>
            <td>
              Login Option
            </td>
            <td>
              <select value={loginOption} className="InputElement" onChange={handleLoginOptionChange}>
                <option value={""}>선택하세요</option>
                <option value={"0"}>카카오톡</option>
                <option value={"1"}>삼성패스</option>
                <option value={"2"}>페이코</option>
                <option value={"3"}>통신사</option>
                <option value={"4"}>KB모바일인증서</option>
                <option value={"5"}>네이버인증서</option>
                <option value={"6"}>신한인증서</option>
                <option value={"7"}>토스인증서</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              Jumin
            </td>
            <td>
              <input type='number' className="InputElement" placeholder='ex) yyyymmdd' onChange={handleJuminChange}></input>
            </td>
          </tr>
          <tr>
            <td>
              User Name
            </td>
            <td>
              <input type='text' className="InputElement" placeholder='ex) 홍길동' onChange={handleUserNameChange}></input>
            </td>
          </tr>
          <tr>
            <td>
              Phone Number
            </td>
            <td>
              <input type='number' className="InputElement" placeholder='ex) 01012341234' onChange={handlePhoneNumberChange}></input>
            </td>
          </tr>
          <tr>
            <td>
            Telecom Gubun
            </td>
            <td>
              <select value={telecomGubun} className="InputElement" onChange={handleTelecomGubunChange}>
                <option value={""}>선택하세요</option>
                <option value={"1"}>SKT</option>
                <option value={"2"}>KT</option>
                <option value={"3"}>LGU+</option>
              </select>
            </td>
          </tr>
        </table>
        <div style={{textAlign:"center"}}>
          <button onClick = {handleClick} className="InputButtonElement">간편인증</button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentInput;