function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center cu-p">
        <img width={40} height={40} alt="img" src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} alt="img" src="/img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li className="cu-p">
          <img width={18} height={18} alt="img" src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
