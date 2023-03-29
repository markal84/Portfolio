import { navLinks } from '../db/globals';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul className="NavList">
        {navLinks.map((link, i) => {
          const { name, href } = link;
          return (
            <li className="NavList--link" key={i}>
              <Link to={href}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
