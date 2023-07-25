import React, {useState} from 'react';
import AppTitle from './common/AppTitle';
import axios from 'axios';
import './common/Input.css';

const DrugInput = () => {

  const [userName, setUserName] = useState("");
  const [identityNumberFront, setIdentitiyNumberFront] = useState("");
  const [identityNumberBack, setIdentitiyNumberBack] = useState("");

  const handleIdentityNumberFrontChange = (e) => {
    const value = e.target.value;
    setIdentitiyNumberFront(value);
  }

  const handleIdentityNumberBackChange = (e) => {
    const value = e.target.value;
    setIdentitiyNumberBack(value);
  }

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  }

  const handleClick = () => {
    if(identityNumberFront==="" || identityNumberBack==="" || userName===""){
      return alert("모든 요소를 선택해주세요");
    }
    axios.post('http://localhost:8000/drug', {
        IdentityNumber:identityNumberFront+identityNumberBack,
        UserName:userName
    })
    .then(response => {
        window.location.href = '/drug/result';
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }
  
  return (
    <div>
      <AppTitle title={"Input for Treatment Hist"}></AppTitle>
      <div className='InputBackgroundDib' style={{'width':'500px'}}>
        <table>
          <tr>
            <td>
              사용자 이름
            </td>
            <td>
              <input type='text' className="DrugInputElement" placeholder='ex) 홍길동' onChange={handleUserNameChange}></input>
            </td>
          </tr>
          <tr>
            <td>
              주민등록번호
            </td>
            <td>
              <input type='text' maxLength={'6'} className="DrugInputElement2"  placeholder='ex)990331' onChange={handleIdentityNumberFrontChange}></input>
              -
              <input type='password' maxLength={'7'} className="DrugInputElement2" placeholder='ex)1234234' onChange={handleIdentityNumberBackChange}></input>
            </td>
          </tr>
        </table>
        <div style={{textAlign:"center"}}> 
          <button onClick = {handleClick} className="InputButtonElement">결과확인</button>
        </div>
      </div>
    </div>
  );
};

export default DrugInput;