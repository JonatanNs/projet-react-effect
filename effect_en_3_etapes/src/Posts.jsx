import { useState } from 'react';
import Ex3Post from "./Post.jsx";

const Ex3Posts = (props) => {
    const [state, setState] = useState({
        currentPost : null,
    });

    function pickArticle(id)
    {
        setState({currentPost: id});
    }

    if(state.currentPost === null)
    {
        return (
            <ul className="posts">
                {
                    props.posts.map((post, i) =>
                        <li key={i}>
                            <article>
                                <h2>
                                    { post.title }
                                </h2>
                                <p>
                                    { post.title }
                                </p>
                                <button onClick={() => pickArticle(post.id)}>Lire l'article</button>
                            </article>
                        </li>
                    )
                }
            </ul>
        )
    }
    else
    {
        return(
            <>
                <Ex3Post postId={state.currentPost}/>
            </>
        )
    }
}

export default Ex3Posts