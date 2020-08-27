# 서버사이드 렌더링(server side rendering)

서버에서 리액트 코드를 실행해서 렌더링하는 것

`서버사이드 렌더링이 필요한 이유`

1. 검색 엔진 최적화를 하기위해
2. 빠른 첫 페이지 렌더링이 중요하기 때문에

<br/>

# 서버사이드 렌더링 함수

`renderToStaticMarkup, renderToStaticNodeStream 함수`

정적 페이지를 렌더링 할 때 사용

`renderToString 또는 renderToNodeStream 함수`

최초 렌더링 이후에도 계속해서 상태 변화에 따라 화면을 갱신해야 하는 경우

<br/>

### `renderToString 함수`

모든 렌더링 과정이 끝나야 문자열로 된 결괏값을 반환.

### `renderToNodeStream 함수`

호출 즉시 노드의 스트림 객체를 반환. <br/>
이 함수를 이용하면 렌더링하려면 페이지가 아무리 복잡하더라고 첫 번째 청크가 준비되면 바로 전송을 
시작할 수 있기 때문에, 렌더링 데이터를 빠르게 전달할 수 있다.

<br/>
<hr/>

### `개선사항`

https://github.com/landvibe/book-react/blob/master/corrections.md#%EC%9C%84%EC%B9%98-p376-%EC%BD%94%EB%93%9C-8-4-%EA%B7%B8%EB%A6%AC%EA%B3%A0-p389-%EC%BD%94%EB%93%9C-8-20
