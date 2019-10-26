import React from 'react';
// 만들어진 컴포넌트 불러옴
import Potato from "./Potato";

// 파라미터가 있는 컴포넌트
// 파라미터가 없는 컴포넌트는 같은 내용만 재사용 가능.
// 파라미터가 있는 컴포넌트는 다른 내용으로도 재사용 가능.
function Food({favourite}) {
    return <h1>I like {favourite}</h1>
}

function App() {
  //  retrun은 html이 들어가야함.
  return (
    <div className="App">
        <h1>Test</h1>
        <Potato />
        <Food favourite = "juice"/>
        <Food favourite = "coffee" />
    </div>
  );
}

export default App;
