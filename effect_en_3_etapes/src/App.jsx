import { useState, useEffect } from 'react';
import ListePost from "./ListePost.jsx";
import './App.css';
import DetailPost from "./DetailPost.jsx";

function App() {
  const [state, setState] = useState({
    posts: [],
    selectedPost: null, // Ajout d'une propriété pour l'article actuellement sélectionné
    showDetail: false // Ajout d'un état pour contrôler la visibilité du détail
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        let posts = data.slice(0, 5); // Prendre les 5 premiers articles

        setState({
          posts: posts,
          selectedPost: null, // Initialiser l'article sélectionné à null
          showDetail: false // Initialiser la visibilité du détail à false
        });
      });
  }, []); // Le tableau vide [] signifie que l'effet se déclenche une seule fois après le montage

  const handleArticle = (article) => {
    setState({
      ...state, // Créer une copie de l'objet state actuel
      selectedPost: article, // Mettre à jour l'article actuellement sélectionné
      showDetail: true // Afficher le détail
    });
  };

  const handleRetour = () => {
    setState({
      ...state, // Créer une copie de l'objet state actuel
      selectedPost: null, // Réinitialiser l'article sélectionné
      showDetail: false // Masquer le détail
    });
  };

  return (
    <>
      {!state.showDetail && <ListePost posts={state.posts} onClick={handleArticle} />}
      {state.showDetail && <DetailPost selectedPost={state.selectedPost} onClick={handleRetour} />}
    </>
  );
}

export default App;
