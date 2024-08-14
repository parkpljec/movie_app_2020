import React from 'react';



function Potato({fav}) {
  return (
  <h1>I like {fav}</h1>

  );
}
const foodILike = [
  {
    name: 'kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  },
  {
    name: 'samgiopsal',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  },
  {
    name: 'bibimbap',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
  }
];
function App() {
  return (
    <div>
      <h3>hello</h3>
    </div>
  );
}

export default App;
