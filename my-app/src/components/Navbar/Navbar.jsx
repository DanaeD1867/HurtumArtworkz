import { useState } from 'react'
import  styles from './Navbar.module.css';

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    return (
      <div className="App">
        <header className="App-header">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <a href='#home' className={`${styles.logo}`}>Dev. </a>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <a href='../pages/index.js' className={`${styles.navLink}`}>Home</a>
              </li>
              <li onClick={removeActive}>
                <a href='../pages/gallery.js' className={`${styles.navLink}`}>Art Gallery</a>
              </li>
              <li onClick={removeActive}>
                <a href='../pages/merch.js' className={`${styles.navLink}`}>Book a Party</a>
              </li>
              <li onClick={removeActive}>
                <a href='../pages/murals.js' className={`${styles.navLink}`}>Murals</a>
              </li>
              <li onClick={removeActive}>
                <a href='../pages/contact.js' className={`${styles.navLink}`}>Contact</a>
              </li>
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  export default Navbar;
  ;
