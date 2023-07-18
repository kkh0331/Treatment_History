import React from 'react'
import AppTitle from './common/AppTitle';
import './common/Input.css';

const TreatmentCertification = () => {

  const handleClick = () => {
    window.location.href = '/treatment/result';
  };

  return (
    <div>
      <AppTitle title={"Certification for Treatment Hist"}></AppTitle>
      <div className='InputBackgroundDib'>
        <div>
          버튼을 클릭하기 전,<br/>
          선택하신 간편인증 방법으로 <br/>
          인증 먼저 진행해주세요!!
        </div>
        <div style={{textAlign:"center"}}>
          <button onClick = {handleClick} className="InputButtonElement" style={{marginTop:"20px"}}>결과확인</button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCertification;