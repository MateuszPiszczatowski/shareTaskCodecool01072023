import { Component } from "react";
import Comment from "../Comment/Comment";
import css from "./CommentSection.module.css";

class CommentSection extends Component {
    state = {
        comments: [
            {
                name: "John Smith",
                text: "This is an awesome page. Lorem ipsum dolor sit amet, consectetur    adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
                image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
                time: "Oct 02, 2019",
                comments: [
                    {
                        name: "John Smith",
                        text: "This is an awesome page. Lorem ipsum dolor sit amet, consectetur    adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
                        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
                        time: "Oct 02, 2019",
                    },
                    {
                        name: "John Smith",
                        text: "This is an awesome page. Lorem ipsum dolor sit amet, consectetur    adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
                        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
                        time: "Oct 02, 2019",
                    },
                    {
                        name: "John Smith",
                        text: "This is an awesome page. Lorem ipsum dolor sit amet, consectetur    adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
                        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
                        time: "Oct 02, 2019",
                    },
                ],
            },
            {
                name: "John Smith",
                text: "This is an awesome page. Lorem ipsum dolor sit amet, consectetur    adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
                image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
                time: "Oct 02, 2019",
                comments: [],
            },
            {
                name: "John Smith",
                text: "This is an awesome page. Lorem ipsum dolor sit amet, consectetur    adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
                image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
                time: "Oct 02, 2019",
                comments: [],
            },
            {
                name: "John Smith",
                text: "This is an awesome page. Lorem ipsum dolor sit amet, consectetur    adipiscing elit. Aenean scelerisque, purus ac feugiat eleifend, ex.",
                image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
                time: "Oct 02, 2019",
                comments: [],
            },
        ],
    };
    render() {
        return (
            <section className={css.CommentSection}>
                <h1>Comments</h1>
                <ul>
                    {this.state.comments.map((comment, index) => (
                        <li key={index}>
                            <Comment
                                name={comment.name}
                                text={comment.text}
                                image={comment.image}
                                time={comment.time}
                                comments={comment.comments}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default CommentSection;
