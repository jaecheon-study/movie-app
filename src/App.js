import React from 'react';
// 속성 값의 타입 지정 라이브러리
import PropTypes from 'prop-types'

// 클래스 컴포넌트
export default class App extends React.Component {
    // render가 실행전 상태 값, 상태 선언, 함수등이 들어감. (코드)
    // 상태 값은 state로 지정 되어야 한다. 다름 네이밍이면 에러
    state = { // 상태 선언 (초기 값)
        count: 0
    };
    add = () => { // 함수
      console.log("add");
      // setState 다시 설정
      this.setState( current => ({
          count: current.count + 1
      }));
    };
    minus = () => { // 함수
      console.log("minus");
        this.setState( current => ({
            count: current.count - 1
        }));
      
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    // }

    // react LifeCycle
    // 페이지가 시작 될 때
    componentDidMount() {
        console.log("componentDidMount");
    }
    
    // 상태가 업데이트 될 때
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    
    // 화면이 종료 될 때 즉 페이지가 종료 될 때
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    
    // 에러 발생시
    componentDidCatch() {
        console.log("componentDidCatch");
    }

    render() {
        // 상수 선언 부분 또는 변수 return을 만나기전
        // return은 화면에 뿌려주는 역할
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        );
    }
}
