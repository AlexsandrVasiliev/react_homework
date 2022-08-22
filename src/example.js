import React from "react";

export const MessageComponent = ({ textMessage }) => {
    return (
        <div className="message">
            <h1>FunctionComponent</h1>
            <h2>message = {textMessage}</h2>
        </div>
    );
};