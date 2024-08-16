import React from 'react';

function Food({ name }) {
  return (
  <h1>I like { name }</h1>
  );
}
const foodILike = [
  {
    name: 'kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  },
  {
    name: 'samgiopsal',
    image: 'http://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
  },
  {
    name: 'bibimbap',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  }
];



function App() {
  return (
    <div>
      {foodILike.map(dish=>(<Food name={dish.name} />))}
    </div>
  );
}

export default App;
