import React from "react";
import ReactDOM from "react-dom/client";
import { MessageComponent } from "./example";

const textMessage = 'Hello! I am first React Component';
const messageList = [
    { author: "Robot", text: "Hello!" },
    { author: "I", text: "Hi!" }
];

const Parent = () => {
    return (
        <div>
            <MessageComponent textMessage={textMessage} messageList={messageList} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Parent />
    </React.StrictMode>
);
