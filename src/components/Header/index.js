import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <a href="#" className='logo'>
        <img src="/imgs/pokeball.png" alt="pokeball-logo" className="logo" />
      </a>
      <button id="change-theme-button">
        <img src="/imgs/sun.png" alt="sun-button" className="img-button" />
      </button>
    </header>
  );
};

export default Header;
