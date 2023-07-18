import React from 'react';
import WebPageDescriptionElement from './WebPageDescriptionElement';
import { Link } from 'react-router-dom';
import AppTitle from './common/AppTitle';

const WebPageDescription = () => {

  const list = [
    {
      title: "진료 받은 내용",
      description: "2개월 전부터 14개월 전까지의 병원 내원과 약국 이용 정보를 조회 할 수 있습니다.",
      method: "간편인증",
      url: "treatment/input"
    },
    {
      title: "내가 먹는 약",
      description: "검색일로부터 1년동안의 투약내역 및 처방약 내역을 조회 할 수 있습니다.",
      method: "공인인증서",
      url: "drug/input"
    },
  ];

  return (
    <div>
      <AppTitle title={"Project for API integration"}></AppTitle>
      <div>
        {list.map(({ title, description, method, url }) => {
          return (
            <Link to={`${url}`} style={{ textDecoration: "none", color: "black" }}>
              <WebPageDescriptionElement
                title={title}
                description={description}
                method={method}
              />
            </Link>
            );
        })}
      </div>
    </div>
  );
};

export default WebPageDescription;