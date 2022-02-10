import React from "react";
import AppContext from "../context";
import { Link } from "react-router-dom";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-content flex-column flex">
      <img className="mb-10" src={image} alt="Empty" />
      <h3 className="m-5">{title}</h3>
      <p className="opacity-6 m-5">{description}</p>
      <Link to="/">
        <button className="greenButton" onClick={() => setCartOpened(false)}>
          <img src="/img/arrow.svg" alt="arrow" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default Info;
