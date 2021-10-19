export const sessions: Session[] = [
  {
    title: '토스 현직 개발자에게 직접 듣는 솔직한 이야기! 과연 그들의 대답은?',
    type: 'SPECIAL',
    index: -1,
    description: '',
    speaker: {
      name: '후원사 특별세션',
      company: '비바리퍼블리카(토스)',
      imageUrl: '',
    },
    tags: [],
  },
  {
    title: '왜 나는 React를 사랑하는가',
    type: 'A',
    index: 4,
    description: '커리어의 대부분을 React와 함께했습니다. 사용자로써 느끼는 만족도는 날이 갈수록 더 높아지고 있는데요. React의 다양한 매력 포인트와 그 바탕이 되는 결정·방향성을 살펴보며 사랑에 빠진 이유를 스스로 돌아보았습니다. 이를 통해 얻은 교훈을 일상의 업무에 적용한 사례까지도 소개드리려 합니다.',
    speaker: {
      name: '안희종',
      company: '플렉스팀',
      imageUrl: '/images/speakers/1.png',
    },
    tags: ['react', '프로그래밍언어'],
  },
  {
    title: 'Webpack 5 Module Federation으로 Micro-Frontends 운영하기',
    type: 'A',
    index: 3,
    description: '모놀리식 아키텍처로 구현된 비즈넵 앱의 일부 서비스를 React로 마이그레이션을 진행하면서 Micro-Frontends 아키텍처를 도입하게 되었습니다. 이번 발표에서는 그 아키텍쳐를 구현하기 위해 선택한 Webpack 5 Module Federation 기술을 중심으로 심도 있게 알아봅니다. 그 과정에서 치열하게 고민했던 경험과 그로부터 얻은 인사이트를 여러분과 함께 공유하고 싶습니다.',
    speaker: {
      name: '임지훈',
      company: '비즈넵',
      imageUrl: '/images/speakers/2.png',
    },
    tags: ['마이크로프론트엔드', 'webpack', 'webpack5', '프로덕션', '설계'],
  },
  {
    title: '상태관리, 이제 Recoil 하세요.',
    type: 'B',
    index: 0,
    description: '조만간 기존 라이브러리들을 대체할지도 모르는 새로운 상태관리 라이브러리, 무려 페이스북이 만든 리코일의 개념과 활용법을 소개해드립니다. 아직은 부족한 부분이 있지만 여러 시행착오를 경험하면서 알게된 문제점들과 팁으로 여러분의 시간을 절약해드립니다.',
    speaker: {
      name: '김현태',
      company: 'MASS ADOPTION',
      imageUrl: '/images/speakers/3.png',
    },
    tags: ['recoil', '상태관리'],
  },
  {
    title: 'Do more, with less. - 디자인 시스템, 그다음은?',
    type: 'A',
    index: 0,
    description: '프론트엔드 개발자는 매일 수많은 UI를 만듭니다. 디자인 시스템은 디자이너와 개발자의 소통을 원활히 해주고 반복 작업을 크게 줄여주었지만, 디자이너가 디자인 툴로 배치한 컴포넌트를 개발자가 코드로 다시 배치해야하는 일은 여전히 존재합니다.\n 왜 우리는 같은 일을 당연한 듯 반복하고 있는 걸까요? 디자인 시스템 다음엔 무엇이 있을까요?',
    speaker: {
      name: '이병철',
      company: '비바리퍼블리카(토스)',
      imageUrl: '/images/speakers/4.png',
    },
    tags: ['UI', '디자인시스템'],
  },
  {
    title: '컴포넌트, 다시 생각하기',
    type: 'A',
    index: 2,
    description: '"컴포넌트를 어떻게 분리할까?" 프론트엔드 개발자라면 한 번쯤 해보는 고민입니다. 이 발표에서는 컴포넌트를 더 깊게 바라보려고 합니다. 컴포넌트가 가진 의존성들을 깊게 살펴보고, 어떠한 요소들이 컴포넌트 재사용을 방해하는지 파악합니다. 그리고 재사용하기 쉽도록 React 컴포넌트를 개선하는 방법과 더 사용하기 쉬운 React 컴포넌트를 위한 인터페이스 설계 방법을 제안합니다.',
    speaker: {
      name: '원지혁',
      company: '당근마켓',
      imageUrl: '/images/speakers/5.png',
    },
    tags: ['컴포넌트', '의존성', '설계', '재사용성', '리팩토링'],
  },
  {
    title: 'SaaS를 넘어 DaaS, 모니터링을 위한 대시보드',
    type: 'B',
    index: 1,
    description: '모니터링 서비스에서 대시보드 기능을 구현하기 위한 방법을 공유합니다. 대시보드 화면에서 발생 할 수 있는 이슈 사항을 중심으로, 대용량의 데이터를 효과적으로 관리하기 위해 적용한 개발 기술을 설명합니다.',
    speaker: {
      name: '이상우',
      company: '와탭랩스',
      imageUrl: '/images/speakers/6.png',
    },
    tags: ['모니터링', '대용량처리', '대시보드', '클라우드'],
  },
  {
    title: "딥러닝으로 확장하는 프론트엔드 현주소 (feat. tensorflow.js)",
    type: 'B',
    index: 5,
    description: "이번 세션에서는 tensorflow.js를 활용하여 서버 없이, 프론트엔드만으로 닮은 딥러닝 모델을 서빙하는 웹서비스 pokemon-ai.com 을 만든 과정을 공유하려고 합니다.\n 위 내용은 올해 초, 취미로 진행된 프로젝트였지만 이 과정에서 얻은 지식을 바탕으로 실제 의료AI 제품에 적용한 경험을 공유하고, 프론트엔드에서 딥러닝 모델을 서빙하는 방법의 장점과 단점, 그리고 한계에 대해 생각해보는 세션입니다.",
    speaker: {
      name: '김상근',
      company: '뷰노',
      imageUrl: '/images/speakers/12.png',
    },
    tags: ['머신러닝', 'tensorflow.js', '의료AI', '딥러닝'],
  },
  {
    title: '우리는 응집도에 대하여 이야기할 필요가 있다',
    type: 'B',
    index: 2,
    description: '개발에서 응집도는 굉장히 중요한 주제입니다. 하지만 프론트엔드에서는 응집도에 대해서 많이 언급되지 않는 것 같습니다. 본질적으로 복잡한 소프트웨어를 다루기 위해서는 응집도 있는 코드를 작성할 필요가 있고 이 것은 프론트엔드 개발에서도 마찬가지 입니다. 일상적인 대화속의 응집도부터 우리의 코드까지 응집도가 어떻게 영향을 미치는지 알아봅니다.',
    speaker: {
      name: '한윤석',
      company: '마켓컬리, 코드숨',
      imageUrl: '/images/speakers/11.png',
    },
    tags: ['응집도', '커뮤니케이션', '컴포넌트'],
  },
  {
    title: '모두를 위한 모바일웹: 접근성을 준수해서 스크린리더 UX 개선하기',
    type: 'A',
    index: 1,
    description: '접근성을 준수해서 개발하는 것이 중요하다는 이야기는 종종 듣지만, semantic tag, aria-*과 같은 것들이 실제로 우리의 서비스에 어떤 영향을 주는지에 대해선 잘 모르는 경우가 많습니다. \n스크린리더로 웹서비스를 사용해보면서, 유저가 어떤 안 좋은 경험을 하게 되는지, 어떻게 개선할 수 있는지에 대해서 이야기합니다.',
    speaker: {
      name: '김도환',
      company: '비바리퍼블리카(토스)',
      imageUrl: '/images/speakers/10.png',
    },
    tags: ['접근성', '스크린리더'],
  },
  {
    title: 'swc와 웹 개발의 미래',
    type: 'A',
    index: 5,
    description: '웹이 매우 중요해졌습니다. 그리고 웹이 중요해진만큼 복잡해졌죠. 그 복잡함을 해결하기 위한 아주 다양한 도구들이 나왔습니다. 그래서 복잡함은 어느 정도 해결이 되었지만 빌드가 오래 걸린다는 새로운 문제점이 생겼습니다. 그런데 툴들이 제공하는 편리함이 빌드 시간만큼의 가치가 있을까요? 이에 대해 얘기합니다.',
    speaker: {
      name: '강동윤',
      company: 'Vercel',
      imageUrl: '/images/speakers/9.png',
    },
    tags: ['오픈소스', 'swc', 'vercel', 'deno'],
  },
  {
    title: 'Can I use ... Vue 3?',
    type: 'B',
    index: 3,
    description: 'Vue.js를 배워야 하는데 Vue 3로 해야 할지 Vue 2로 해야 할지 고민이 되시나요? Vue 2로 회사 서비스를 만들고 있는데 Vue 3로 넘어가야 하는 건 아닌지 고민이 되시나요? 이런 고민없이 재밌게 Vue.js를 배우고 깊이 사용할 수 있는 팁을 공유합니다 😄',
    speaker: {
      name: '장기효',
      company: '네이버',
      imageUrl: '/images/speakers/8.png',
    },
    tags: ['vue', 'vue3', 'typescript', 'composition'],
  },
  {
    title: 'VSCode Inside',
    type: 'B',
    index: 4,
    description: 'VSCode는 MS에서 개발한 가장 보편적인 오픈소스 코드 에디터 중 하나입니다. VSCode의 코드 구조를 간단하게 살펴보고, 알아두면 유용할지도 모르는 몇가지 코드 설계를 소개합니다.',
    speaker: {
      name: '배선우',
      company: '네이버웹툰',
      imageUrl: '/images/speakers/7.png',
    },
    tags: ['vscode', '아키텍처', '오픈소스'],
  },
];
