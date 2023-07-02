const Comment = ({ image, name, date, text, comments, isAnswer }) => {
  return (
    <>
      <article>
        <img src={image} alt={`${name}`}></img>
        <div>
          <header>
            <h2>{name}</h2>
            <time>{date}</time>
          </header>
          <p>{text}</p>
          {!isAnswer && (
            <footer>
              <button>Reply</button>
            </footer>
          )}
        </div>
      </article>

      <ul>
        {comments?.map((comment, index) => (
          <li key={index}>
            <Comment
              name={comment.name}
              text={comment.text}
              image={comment.image}
              time={comment.time}
              isAnswer={true}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Comment;
