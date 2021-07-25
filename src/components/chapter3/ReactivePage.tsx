import React from 'react';
import '../default.css';
import './ui-page.css';
import SearchBar from '../chapter2/SearchBar';
import Menu from '../chapter2/Menu';
import BulletList from '../chapter2/BelletList';
import UserList from '../chapter2/UserList';
import MessageList from '../chapter2/MessageList';
import CardList from '../chapter2/CardList';

const ReactivePage = () => {
  return (
    <div>
      {/*header*/}
      <header className="header">
        <h1 className="website-title">Jongyun</h1>
        <SearchBar />
      </header>
      {/*menu*/}
      <Menu />

      {/*primary*/}
      <section className="primary">
        <CardList />
      </section>
      {/*secondary-a*/}
      <aside className="secondary secondary-a">
        <BulletList />
        <UserList />
      </aside>
      {/*secondary-b*/}
      <aside className="secondary secondary-b">
        <MessageList />
      </aside>
      {/*footer*/}
      <footer className="footer"></footer>
    </div>
  );
};

export default ReactivePage;
