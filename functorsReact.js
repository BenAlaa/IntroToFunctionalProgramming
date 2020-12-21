import React from "react";
import ReactDOM from "react-dom";
import getAvatar from './get-avatar';

const getComments = () => [
    {
        name: 'Bartosz Milewski',
        avatar: getAvatar('bartosz'),
        body: 'I like functors.',
        comments: [
            {
                name: 'JS Cheerleader',
                avatar: getAvatar('jsCheerleader'),
                body: 'Functors are cool!'
            }
        ]
    }
];
const comment = ({ name, avatar, body, comments = []}) => (
    <div className="comment">
        <img src={avatar} />
        <span className="user-name">{ name}</span>
        <div className="comment-body">{body}</div>
        <div className="comments">{ comments.map(comment) }</div>
    </div>
);

function App() {
    return (
        <div className="App">
            <div>{getComments().map(comment)}</div>
        </div>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);