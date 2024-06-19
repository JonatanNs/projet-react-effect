const DetailPost = (props) => {
  const { selectedPost } = props;

  if (!selectedPost) {
    return null; // Si aucun article n'est sélectionné, ne rien afficher
  } else if(selectedPost){
    let none = document.querySelector('.posts');
    none.style.display="none";
  }
  
  return (
    <article class='article'>
      <h2>
          {props.selectedPost.title} 
      </h2>
      <p>
          {props.selectedPost.body}
      </p>
      <p>
          {props.selectedPost.comments}
      </p>
      
      <button onClick={() => props.onClick(props)}>Retour</button>
    </article>
  );
};

export default DetailPost;

