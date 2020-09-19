# next에서 redux 사용하기

- 기본적으로 redux, redux와 react를 연결하는데 많은 도움을 주는 react-redux라이브러리를 설치.
<br/>
`npm install redux react-redux`
<br/> <br/>
- 그리고 next에서 react를 연결하기 위해서는 next-redux-wrapper가 필요함.
<br/>
`npm install next-redux-wrapper`
<br/> <br/>
- _app에서 wrapper로 감싸준다.
<br/>

### next-redux-wrapper 5버전 vs 6버전 + next9.3
6버전부터는 Provider로 감사지 않아도 된다. <br/>
next-redux-wrapper가 알아서 store를 실은 후 자동으로 감싸주기 때문이다.
<br/>
