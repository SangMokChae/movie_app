import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Pizza",
    image: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2020-03/PizzaHutDelivery.jpg?itok=zx4HB4fD",
    rating: 4.9
  },
  {
    id: 3,
    name: "Hamburger",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "galbi",
    image: "https://www.koreanbapsang.com/wp-content/uploads/2013/08/DSC_1834-1-e1562125117513.jpg",
    rating: 4.7
  }
];

function Food({ name, picture, rating }) { // 나중에 이해가 안되면 props 다시 알기
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

//npm install을 설치 해줘야 propTypes를 사용가능 하다.
//이름은 무조건 PropTypes로 지어야 한다.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image}
          rating={dish.rating}
        /> 
      //dish = Object {Kimchi.object, Pizza.object.. // object.name? object.image}
    ))}
      {/* <Food fav="kimchi"/> */}  {/*<- props /// JSX look like html */}
      {/*foodILike = text, {foodILike} = javascript */}
    </div>
  )
}

export default App;
