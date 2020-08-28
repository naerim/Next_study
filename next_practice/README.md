# Next.js

넥스트와 create-react-app은 리액트를 기반으로 개발 환경을 구축한다는 점에서 비슷하지만, <br />
create-react-app은 클라이언트 렌더링만 하는 반면, 넥스트는 서버 사이드 렌더링에 특화된 프레임워크이다.
<br /> 
- 넥스트에서 모든 페이지 컴포넌트는 pages 폴더 밑에 만들어야 한다.
- 넥스트는 리액트 모듈을 자동으로 포함시켜 준다. (파일 상단에 import 키워드 X)
- 넥스트는 create-react-app 과 달리 웹팩 설정을 변경할 수 있다.
<br />

### `getInitialProps 함수`
=> 서버에서 생성된 데이터를 전달하기 <br />
넥스트에서는 getInitialProps 함수를 이용해서 페이지 컴포넌트로 속성 값을 전달한다.

Note
---
powershell 에서는 rm -rf .next 가 안된다. <br />
=> Remove-Item -Recurse -Force .next