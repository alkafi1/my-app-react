import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className="frame">
    <div className="center">
      <div className="profile">
        <div className="img">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <img src="https://assets.codepen.io/6538307/internal/avatars/users/default.png" alt="" className="profile-img" />
        </div>
        <div className="name">Ranit Saha</div>
        <div className="job">Full-Stack Developer</div>
        <div className="action">
          <button className="btn">Message</button>
          <button className="btn">Follow</button>
        </div>
      </div>
      <div className="stats">
        <div className="blocks">
          <p className="num">523</p>
          <p className="blockName">Posts</p>
        </div>
        <div className="blocks">
          <p className="num">1387</p>
          <p className="blockName">Likes</p>
        </div>
        <div className="blocks">
          <p className="num">146</p>
          <p className="blockName">Followers</p>
        </div>
      </div>
    </div>
  </div>
);
