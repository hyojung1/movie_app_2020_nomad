import React from 'react';
import PropTypes from 'prop-types';

// Component는 대문자로 시작한다
// 첫번째 args로 property를 받을 수 있다
// 첫번째args를 {}사용해서 props.key로 꺼낼 수 있다
//function Food(props) {
  // console.log({props.fav});
function Food({name, image}) { //arg에서 key를 바로 꺼내는 방법
  return (
  // 인자를 가공하여 html을 리턴
  <div>
    <h2>i love {name}</h2>
    <img src={image} alt={name} />
  </div>
  )
}

// ex) DB데이터
const foodList = [
  {
      id:1,
      name : "김치",
      image : "1"
  },
  {
    id:2,
    name : "삼겹살",
    image : "2"
  },
  {
    id:3,
    name : "김밥",
    image : "3"
  },
  {
    id:4,
    name : "치킨",
    image : "4",
    rating: 4.9
  }
];

// property의 타입,필수여부 체크가능 //브라우저의 콘솔에서 에러확인가능
// https://ko.reactjs.org/docs/typechecking-with-proptypes.html
Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
  
}

// export 주체
function App() {
  return (
    <div className="App">
      <h1>hello!~~</h1>
      {foodList.map(current => (
        // 함수호출도 가능 : 
        // {foodList.map(current => (renderFood)}
        // <!--아래 function을 js에 위치시키면됨 -->
        // function renderFood(current) {
        //  <Food key={current.id} name={current.name} image={current.image} />    
        //} 

        // DB데이터를 Food라는 함수의 인자로 전달
        <Food key={current.id} name={current.name} image={current.image} />
        )
      )}
      
    </div>
  )
}

export default App;
