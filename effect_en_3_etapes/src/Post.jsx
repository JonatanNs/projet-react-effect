import { useState, useEffect } from 'react';
import Comments from "./Comments.jsx";

const Ex3Post = (props) => {
    const [state, setState] = useState({});
    const { postId, onReturn } = props; 

    useEffect(() => {
        if (postId) {
            fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
                .then((response) => response.json())
                .then((dataPost) => {
                    fetch('https://jsonplaceholder.typicode.com/posts/' + postId + "/comments")
                        .then((response) => response.json())
                        .then((dataComments) => {
                            dataPost.comments = dataComments;
                            setState(dataPost);
                        });
                });
        }
    }, [postId]); 

    return (
        <article> 
            <h1>{state.title}</h1>
            <p>{state.body}</p>
            <p>Auteur : {state.userId}</p>
            {state.comments && <Comments comments={state.comments} />}
        </article>
    );
};

export default Ex3Post;
