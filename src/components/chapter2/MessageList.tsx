import React from 'react';
import background from './키르아.jpeg';
import '../default.css';
import './messageList.css';

const MessageList = () => {
  return (
    <div>
      <ul className="user-list message-list">
        <li className="user-item message-item">
          <figure
            className="user-photo"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></figure>
          <p className="content">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </li>
        <li className="user-item message-item">
          <figure
            className="user-photo"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></figure>
          <p className="content">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </li>
        <li className="user-item message-item">
          <figure
            className="user-photo"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></figure>
          <p className="content">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MessageList;
