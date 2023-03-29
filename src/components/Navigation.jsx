import { navLinks } from '../db/globals';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        {navLinks.map((link, i) => {
          const { name, href } = link;
          return (
            <li className="nav-list--link" key={i}>
              <Link to={href}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
