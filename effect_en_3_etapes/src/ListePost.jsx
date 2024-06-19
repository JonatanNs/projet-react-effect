import React from 'react';

const ListePost = (props) => {

    return (
        <ul className="posts">
            {
                props.posts.map((post, i) =>
                    <li key={i}>
                        <article >
                            <h2>
                                {post.title}
                            </h2>
                            <p>
                                {post.body}
                            </p>
                            <button onClick={() => props.onClick(post)}>Lire l'article</button>
                        </article>
                    </li>
                )
            }
        </ul>
    );
};

export default ListePost;

