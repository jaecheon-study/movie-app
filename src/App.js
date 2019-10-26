import React from 'react';
// 속성 값의 타입 지정 라이브러리
import PropTypes from 'prop-types'

function Food({name, img, rating}) {
    return (
        <div>
            <h2>I like {name}</h2>
            <img src = {img} alt= {name} />
            <h2>rating {rating}/ 5.0</h2>
        </div>
    );
}

// Food의 속성 타입 추가
// 속성 지정 할떄는 소문자로 시작
// import PropTypes
Food.propTypes = {
   name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number
};

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image:
            "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
        rating: 2.1
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image:
            "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 3.1
    },
    {
        id: 3,
        name: "Bibimbap",
        image:
            "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 1.1
    },
    {
        id: 4,
        name: "Doncasu",
        image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: 2.5
    },
    {
        id: 5,
        name: "Kimbap",
        image:
            "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
        rating: 2.9
    }
];

function App() {
  //  retrun은 html이 들어가야함.
  return (
    <div className="App">
        {foodILike.map( dish => (
           <Food key={dish.id} name={dish.name} img={dish.image} rating={dish.rating}/>
        ))}
    </div>
  );
}

export default App;
