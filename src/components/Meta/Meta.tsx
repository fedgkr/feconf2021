import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '~/images/favicon.png';
import og from '~/images/og.png';

interface MetaProps {}

const Meta: React.FC<MetaProps> = () => {
  return (
    <Helmet>
      <meta charSet="utf-8"/>
      <title>FEConf 2021</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"/>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
      <meta
        name="description"
        content="국내 최고의 프론트엔드 개발 컨퍼런스. 프론트엔드 개발의 소중한 경험을 공유합니다!"
      />
      <meta
        name="keywords"
        content="프론트엔드,프론트엔드개발자,프론트엔드개발자그룹,개발자,프로그래머,마크업,디자이너,컨퍼런스,이벤트,서울,FrontEnd,Developer,Programmer,Markup,Designer,Conference,Event,Seoul"
      />
      <meta property="og:url" content="https://2021.feconf.kr/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="FEConf2021" />
      <meta
        property="og:description"
        content="국내 최고의 프론트엔드 개발 컨퍼런스. 프론트엔드 개발의 소중한 경험을 공유합니다!"
      />
      <meta property="og:image" content={og} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="FEConf2021" />
      <meta
        name="twitter:description"
        content="국내 최고의 프론트엔드 개발 컨퍼런스. 프론트엔드 개발의 소중한 경험을 공유합니다!"
      />
      <meta name="twitter:creator" content="@FeConf" />
      <link rel="icon" type="image/png" href={favicon}/>
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
    </Helmet>
  );
}

export default Meta;
