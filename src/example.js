import React from "react";

const MessageList = ({ messageList }) => {
    return (
        <div>
            {messageList.map((message) => {
                return (
                    <div>
                        <h3>{message.author}</h3>
                        <h3>{message.text}</h3>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export const MessageComponent = ({ textMessage, ...messageList }) => {
    return (
        <div className="message">
            <h1>FunctionComponent</h1>
            <h2>message = {textMessage}</h2>
            <MessageList {...messageList} />
        </div>
    );
};