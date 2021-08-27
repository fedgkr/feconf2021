import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaProps {}

const Meta: React.FC<MetaProps> = () => {
  return (
    <Helmet>
      <meta charSet="utf-8"/>
      <title>FEConf 2021</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <meta
        name="description"
        content="국내 최고의 프론트엔드 개발 컨퍼런스. 프론트엔드 개발의 소중한 경험을 공유합니다!"
      />
      <meta
        name="keywords"
        content="프론트엔드,프론트엔드개발자,프론트엔드개발자그룹,개발자,프로그래머,마크업,디자이너,컨퍼런스,이벤트,서울,FrontEnd,Developer,Programmer,Markup,Designer,Conference,Event,Seoul"
      />
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
    </Helmet>
  );
}

export default Meta;
