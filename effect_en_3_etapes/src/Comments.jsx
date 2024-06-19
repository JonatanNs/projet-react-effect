
const Comments = (props) => {
    return(
      <ul className="comments">
          {
              props.comments.map((comment, i) =>

                  <li key={i}>
                      <section>
                          <p>
                              { comment.email }
                          </p>
                          <h3>
                              { comment.name }
                          </h3>
                          <p>
                              { comment.body }
                          </p>
                      </section>
                  </li>

              )
          }
      </ul>
    );
}

export default Comments