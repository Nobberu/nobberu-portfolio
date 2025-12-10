import { navLink } from "../const";

const NavBar = () => {
  return (
    <header>
      <nav className="fixed flex w-screen justify-between my-14 px-14 text-2xl">
        <div className="flex space-x-10">
          <img src="" alt="logo" />
          <h2>nobberu.</h2>
        </div>
        <ul className="flex row space-x-10">
          {navLink.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
