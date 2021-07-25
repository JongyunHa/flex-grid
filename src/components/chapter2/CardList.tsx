import React from 'react';
import '../default.css';
import './cardList.css';
import background from './키르아.jpeg';

const CardList = () => {
  return (
    <div className="card-list-con">
      <ul className="card-list">
        <li className="card-item">
          {/* 카드 리스트의 이미지는 일반적으로 db에 있는 이미지를 불러오기 때문에 인라인css로 넣는 것이 합리적입니다. */}
          <figure className="card-image" style={{ backgroundImage: `url(${background})` }}>
            <img src={background} alt="키르아" />
          </figure>
          <div className="card-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </li>
        <li className="card-item">
          <figure className="card-image" style={{ backgroundImage: `url(${background})` }}>
            <img src={background} alt="키르아" />
          </figure>
          <div className="card-desc">dolore magna aliquyam erat, sed diam voluptua.</div>
        </li>
        <li className="card-item">
          <figure className="card-image" style={{ backgroundImage: `url(${background})` }}>
            <img src={background} alt="키르아" />
          </figure>
          <div className="card-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          </div>
        </li>
        <li className="card-item">
          <figure className="card-image" style={{ backgroundImage: `url(${background})` }}>
            <img src={background} alt="키르아" />
          </figure>
          <div className="card-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </li>
        <li className="card-item">
          <figure className="card-image" style={{ backgroundImage: `url(${background})` }}>
            <img src={background} alt="키르아" />
          </figure>
          <div className="card-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </li>
        <li className="card-item">
          <figure className="card-image" style={{ backgroundImage: `url(${background})` }}>
            <img src={background} alt="키르아" />
          </figure>
          <div className="card-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </li>
        <li className="card-item">
          <figure className="card-image" style={{ backgroundImage: `url(${background})` }}>
            <img src={background} alt="키르아" />
          </figure>
          <div className="card-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </li>
        <li className="card-item">
          <figure className="card-image" style={{ backgroundImage: `url(${background})` }}>
            <img src={background} alt="키르아" />
          </figure>
          <div className="card-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </li>
        <li className="card-item">
          <figure className="card-image" style={{ backgroundImage: `url(${background})` }}>
            <img src={background} alt="키르아" />
          </figure>
          <div className="card-desc">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardList;
