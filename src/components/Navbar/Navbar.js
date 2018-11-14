import React from "react";

const styles = {
  navbar: {
    backgroundColor: "#655931",
    minHeight: "8vh",
    fontsize: "16px"   
  }

}
const Navbar = props =>(
  <nav className="navbar navbar-expand-lg  text-light" style={styles.navbar}>
     <div className="col-6 "><h4>Test Your Memory</h4></div>
     <div className="col-4"><h4>{props.rightWrong}</h4></div>
     <div className="col-2"><h4>Score: {props.score}</h4></div>
    
  </nav>
 
);
export default Navbar;


