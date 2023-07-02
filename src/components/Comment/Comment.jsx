import css from "./Comment.module.css";

const Comment = ({ image, name, time, text, comments, isAnswer }) => {
    return (
        <>
            <article>
                <figure>
                    <img src={image} alt={`${name}`}></img>
                </figure>
                <div>
                    <header>
                        <h2>{name}</h2>
                        <time>{time}</time>
                    </header>
                    <p className={css.CommentText}>{text}</p>
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
