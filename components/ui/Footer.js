import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.listContainer}>
        <ul className={classes.list}>
          <li className={classes.Listitem}>Terms Of Service</li>
          <li className={classes.Listitem}>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
