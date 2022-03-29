// This JSX:
<div id={if (condition) {'msg'}}>Hello World!</div>
// 오류

// Is transformed to this JS:
React.createElement("div", {id: if (condition) {'msg'}}, "Hello World!");
// 오류

ReactDOM.render(<div id={condition ? 'msg':null}>Hello World!</div>, mountNode)
// 동작 / 삼항 연산자 식을 사용 (식은 값으로 귀결)

// if문 을 object 의 값으로 넣을 수 없다.
const obj = {id: if(condition {'msg'})}
