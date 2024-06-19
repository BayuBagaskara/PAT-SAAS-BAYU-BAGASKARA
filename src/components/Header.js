import React from 'react';

const Header = () => {
  return (
    <header className="bg-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={require('./image/sman.png')} width='50px'></img>
        </div>
        <nav>
          <ul className="nav">
            <li className="nav-item"><a className="nav-link" href="#about">Beranda</a></li>
            <li className="nav-item"><a className="nav-link" href="#link2">Tentang Kami</a></li>
            <li className="nav-item"><a className="nav-link" href="#link3">Informasi</a></li>
            <li className="nav-item"><a className="nav-link" href="#link4">Kontak</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
