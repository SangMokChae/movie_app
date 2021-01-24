import React from 'react';

function Food({ name, picture }) { // 나중에 이해가 안되면 props 다시 알기
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  )
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg"
  },
  {
    name: "Pizza",
    image: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2020-03/PizzaHutDelivery.jpg?itok=zx4HB4fD"
  },
  {
    name: "Hamburger",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg"
  },
  {
    name: "galbi",
    image: "https://www.koreanbapsang.com/wp-content/uploads/2013/08/DSC_1834-1-e1562125117513.jpg"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} /> 
      //dish = Object {Kimchi.object, Pizza.object.. // object.name? object.image}
    ))}
      {/* <Food fav="kimchi"/> */}  {/*<- props /// JSX look like html */}
      {/*foodILike = text, {foodILike} = javascript */}
    </div>
  )
}

export default App;
