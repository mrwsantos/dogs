import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(
    () => {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    },
    [comments]
  );

  return (
    <>
      {comments ? (
        <ul ref={commentsSection} className={styles.comments}>
          {comments.map((comment) => (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nao tem comentarios</p>
      )}

      {login ? (
        <PhotoCommentsForm id={props.id} setComments={setComments} />
      ) : (
        <p style={{padding: '10%', opacity: .5}}>To write a comment you must be logged in :)</p>
      )}
    </>
  );
};

export default PhotoComments;
