import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2>This is a header</h2>

      <div className="header__left">
        <img src="" alt="" />

        <div className="header__search">
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <p>Right</p>
      </div>
    </div>
  );
};

export default Header;
