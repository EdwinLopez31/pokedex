import React from "react";
import AppLogo from "../../assets/app-logo.png";
import SearchField from "../../features/search-field";

const Header = () => {
  return (
    <header>
      <img src={AppLogo} alt='pokeball' />
      <h1>Pokedex</h1>
      <SearchField />
    </header>
  );
};

export default Header;
