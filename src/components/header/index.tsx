import AppLogo from "../../assets/app-logo.png";
import SearchField from "../../features/search-field";

const Header = () => {
  return (
    <header className='sm:flex-row gap-y-4 py-2 px-4 bg-red-500/80 justify-between items-center flex-col flex'>
      <span className='flex items-center gap-4'>
        <img width='56' height='56' src={AppLogo} alt='pokeball' />
        <h1 className='text-4xl text-white font-bold tracking-wider'>
          Pokedex
        </h1>
      </span>
      <SearchField />
    </header>
  );
};

export default Header;
