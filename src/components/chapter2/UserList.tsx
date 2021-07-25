import React from 'react';
import background from './키르아.jpeg';
import '../default.css';
import './messageList.css';

const UserList = () => {
  return (
    <div>
      <ul className="user-list friend-list">
        <li className="user-item friend-item">
          <figure
            className="user-photo"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></figure>
          <p className="user-name">Full stack developer</p>
        </li>
        <li className="user-item friend-item">
          <figure
            className="user-photo"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></figure>
          <p className="user-name">하종윤</p>
        </li>
        <li className="user-item friend-item">
          <figure
            className="user-photo"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></figure>
          <p className="user-name">Jongyun Ha</p>
        </li>
      </ul>
    </div>
  );
};

export default UserList;
