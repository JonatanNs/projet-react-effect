import { useState, useEffect } from 'react';
import Ex1Posts from "./Posts.jsx";
import './App.css'
import Ex2Posts from "./Posts.jsx";
import Ex3Posts from "./Posts.jsx";

function App() {
  const [state, setState] = useState({
      posts : [],
  });

  // Array.slice : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              let posts = data.slice(0, 5);

              setState({
                  posts: posts
              });
          });
  }, {});
  
  return (
    <>
        <Ex2Posts posts={state.posts}/>
    </>
  )
}

export default App
