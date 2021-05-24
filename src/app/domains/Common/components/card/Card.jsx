import logo from "../../../../../assests/images/logo.png";

import "./card.css";

const Card = ({ children }) => {
  return (
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <img src={logo} alt="logo" height={100} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
