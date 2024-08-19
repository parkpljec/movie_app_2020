import React from 'react';
import PropTypes from 'prop-types';
//import DraggableComponent from './drag';
//import ArrowKeyMover from './click';
//import MiniGame from './minigame';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like { name }</h2>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={name} />  
    </div>

  );
}
const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'samgiopsal',
    image: 'http://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'bibimbap',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  }
];


function App() {
  return (
    <div>
      {foodILike.map(dish=>(<Food key={dish.id} name ={dish.name} picture={dish.image} rating={dish.rating}/>))} 
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
  };

export default App;
