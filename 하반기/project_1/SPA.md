# Single Page Application

* 최근 웹 트랜드는 보여주는 웹에서 반응하는 웹으로
  * 사용자 행동에 반응하는 ui
  * 다양해진 접ㅈ속 장치 (데스크탑 + 모바일)
  * 사용자 수 증대, 기대 처리속도 빨라짐
  * server-heavy 에서 client-heavy로
* HTML + CSS 만으로 페이지를 만들던 시대의 종결
  * 동적 웹 페이지 구현을 위한 JS기술
  * 데이터(model)와 '보이는것(view)' 사이의 직관적 연결
  * 'Model Frontend Frameworks': Angularm Vue, React
* 백 엔드를 제공하는 서비스 사업 발생
  * 클라이언트 개발자 니즈 증가
  * 클라이언트 개발자가 백 엔드까지 처리
* Server-side rendering (SSR)
  * 웹 브라우저로 url 접근 시 해당하는 요청에 맞는 정보를 html에 전부 채워서(hydrate) 보내줌
  * 다른 페이지를 요청 할 때 마다 새로운 url요청을 보내고 새로운 html을 받아 새로고침
* Client-side rendering (CSR) ~= Single page application (SPA)
  * 웹 브라우저로 ulr 접근 시 빈 html파일을 보내고, html 파일의 script 태그에 달려있는 app.js파일을 다시 보낸다
  * 브라우저에서는 app.js 를 실행시켜 html에 내요을 채움
    * app.js 에는 AJAX 콜이 기록되어 있음
  * 이후 사용자의 동작에 따라 app.js의 api를 사용하므로 서버에 요청을 보낼 필요가 없음.
  * 클라이언트가 서버에 script를 요청
  * 실제로 서버에서 html파일을 새롭게 받아오지 않음

* single page application
  * 초기 구동속도가 느리다
    * index.html과 app.js를 두번 왕복하면서 받아온다
    * app.js를 실행하는 시간이 걸린다
    * 단, 한번 로드하고 나면 ssr보다 훨신 빠른 인터랙션 속도를 기대 할 수 있다.
  * Java Script 웹 표준 문제
    * 오래된 브라우저(IE8 이하)에서는 JS의 최신 버전을 실행할 수 없다.
    * 지원 X
  * 보안 취약점
    * SSR은 서버에서 세션을 관리하고, spa는 클라이언트에 쿠키를 저장하는데, 쿠키는 해킹의 위험이 있다.
    * SSR은 서버에서 클라이언트에 고유 번호를 지정하고 매번 확인을 함
    * SPA는 유저 정보가 쿠키의 형태로 클라이언트로 저장 되는데 쿠키 자체의 해킹 위험이 있음
    * 최근에는 토큰 형식으로 취약점을 보완하고 있음
    * 쿠키나 세션 스토리지의 관리가 필요
  * Search Engine Optimization(SEO)
    * 구글을 제외한 검색 엔진에 웹사이트의 내용이 걸리지 않는다.

* Vue, React, Angular....
  * html + vanila js 로만 코딩을 하면 웹 컴포넌트와 데이터 사이의 상관관계와 spa에서 필수인 즉각적인 상호작용을 구현하기 위해 JQuery를 대신하기 위한 spa 개발을 예쁘게 할 수 있는 js 라이브러리
  * Vue, React는 많은 사이트가 사용하지는 않지만 많은 트래픽이 몰리는 최신 웹사이트들이 사용

* Single File Component
  * Vue에서는 나의 파일에 하나의 컴포넌트를 만들 것을 권장한다.
    * 높은 재사용성과 쉬운 유지보수
    * 컴포텉느별로 기능을 관리할 수 있다.
    * 각 컴포넌트별로 상태(state ~= data)를 가진다.
    * React에서는 여러개의 컴포넌트를 지원
    * Vue에서도 여러개의 컴포넌트를 지원하지만 에로사항이 발생(비추)
* Vue는 양방향 바인딩 / React는 단방향 바인딩
* 데이터 반응성
  * 자체적인 데이터 반응성 (reactivity)
    * 컴포넌트의 상태가 변화하는 것을 알아서 감지해 준다.
    * 변화가 있을 때마다 거기에 맞춰 컴포넌트를 새롭게 렌더링한다.
    * Vue 는 데이터 반응성이 높으면서 속도가 빠른것이 특징
      - getter
      - setter
      - watcher
* Virtural Dom
  * Virtual Dom을 통한 랜더링 최적화
    * 가상의 dom을 따로 저장해서 상태 변화에 다라 변화시킨 후 브라우저에는 최종 결과만 렌더링
    * 속도를 빠르게 하고 선언적인(declarative) html 사용을 가능하게 한다.
* MVVM 구조
  * modelview-viewmodel
    * 시작적인 컴포넌트(view)와 그것이 담고있는 데이터(model)가 vue 오브젝트 안에서 바인딩 되어있는 형태 -> 컨트롤러가 따로 필요 없어진다.
* Vue.js를 사용 할 때 고려할 점
  * 학습 곡선이 낮다 - 스타트업에서 Vue를 많이 선택
    * 진입 장벽이 굉장히 낮다
    * 공식 문서도 쉽게 이해할 수 있게 되어있다
  * 자유도가 낮은 프레임 워크 - 큰 회사에서는 이 단점 때문에 React를 선택
    * Single file component가 아닌 stateless functional component를 만다는건 어렵다
    * Vue가 제공하는 directive를 사용해야 한다
  * 성능
    * 가볍고 빠르다 - 코어 라이브러리의 부피가 작음
    * 많은 모듈을 제공한다 (vue-router, Vuex, Weex,...)
* computed - 동적 데이터 생성
* watch - 동적 데이터 변화 대응 이벤트 핸들링