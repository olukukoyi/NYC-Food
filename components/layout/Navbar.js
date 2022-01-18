import Link from "next/link";
import classes from ".//Navbar.module.css";

function Navbar() {
  return (
    <div className={classes.nav__container}>
      <Link href="/">
        <h1>NYC</h1>
      </Link>
      <div className={classes.nav__links__container}>
        <ul>
          <li>
            <Link href="/forum-page">Add a Location</Link>
          </li>
          <li>
            <Link href="/view-content">View Locations</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
