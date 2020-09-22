# Next.js

넥스트와 create-react-app은 리액트를 기반으로 개발 환경을 구축한다는 점에서 비슷하지만, <br />
create-react-app은 클라이언트 렌더링만 하는 반면, 넥스트는 서버 사이드 렌더링에 특화된 프레임워크이다.
<br /> 
- 넥스트에서 모든 페이지 컴포넌트는 pages 폴더 밑에 만들어야 한다.
- 넥스트는 리액트 모듈을 자동으로 포함시켜 준다. (파일 상단에 import 키워드 X)
- 넥스트는 create-react-app 과 달리 웹팩 설정을 변경할 수 있다.
- 모든 페이지에서 공통으로 필요한 기능은 pages/_app.js 파일에서 구현할 수 있다.
<br />

### `getInitialProps 함수`
=> 서버에서 생성된 데이터를 전달하기 <br />
넥스트에서는 getInitialProps 함수를 이용해서 페이지 컴포넌트로 속성 값을 전달한다.

### Note

---
powershell 에서는 rm -rf .next 가 안된다. <br />
=> Remove-Item -Recurse -Force .next
=> $env:NODE_ENV="production"
<br/>
<br/>


### Server Side

---
next js가 React 프로젝트의 SSR을 가능하게 한다. 
<br/>
최초에 넥스트 서버로 요청이 들어왔을 때, 넥스트 서버에서는 요청이 들어온 페이지의 데이터를
fetch하고 html을 구성하여 클라이언트로 보내준다.

- _app과 _document는 최초로 실행된다.
- 이 두 파일은 server only file이기 때문에 window/DOM 로직을 사용하면 안된다.
- _document에 어플리케이션 로직을 넣지 말 것!
- Next 9.3 버전에서는 getInitialProps 를 대신에 getStaticProps, getStaticPaths, getServerSideProps 를 사용하게 된다.
- 각각 용법은 다르지만 페이지의 연산을 미리 한다는 점은 동일하다.
- 공통된 Data Fetching이 필요하다면 _app.js에 getInitialProps를 붙이면 된다.
- 페이지마다 다른 Data가 필요하다면 페이지마다 getInitialProps를 붙이면 된다.