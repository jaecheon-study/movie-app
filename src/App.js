import React from 'react';
// 속성 값의 타입 지정 라이브러리
import PropTypes from 'prop-types'
// 네트워크 관련 라이브러리. (웹 플레폼에서 많이 사용되는 라이브러리)
import axios from "axios";
import Movie from './Movie'

// 클래스 컴포넌트
export default class App extends React.Component {
    // render가 실행전 상태 값, 상태 선언, 함수등이 들어감. (코드)
    // 상태 값은 state로 지정 되어야 한다. 다름 네이밍이면 에러
    state = { // 상태 선언 (초기 값)
        movies: [],
        isLoading: true
    };

    getMovies = async () => {
        // get 방식으로 해당 url 불러옴
        // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading: false});
    };

    // react LifeCycle
    // 페이지가 시작 될 때
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({isLoading: false});
        // }, 6000)
        this.getMovies();
        console.log(this.getMovies());
    }

    // 렌더링 부분
    render() {
        // 상수 선언 부분 또는 변수 return을 만나기전

        const {movies, isLoading} = this.state;

        // return은 화면에 뿌려주는 역할
        return (
            <div>
            { isLoading ? "Loading..."
                    : movies.map( movie => (
                        <Movie
                            key={movie.id}
                            id = {movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.small_cover_image}
                        />
                    ))
                }
            </div>
        );
    }
}
