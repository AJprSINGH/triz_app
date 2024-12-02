import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(315deg, #b1bfd8 0%, #667eaa 74%)",
    zIndex: 1,
  },
  wrapper: {
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: "40px",
  },
  hamburber: {
    width: "30px",
    height: "3px",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgb(255, 101, 47, 0.2)",
    transition: "all 0.5s ease-in-out",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(-10px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(10px)",
    },
  },
  activeHamburger: {
    width: "30px",
    height: "3px",
    borderRadius: "5px",
    transform: "translateX(-50px)",
    background: "transparent",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(45deg) translate(35px, -35px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(-45deg) translate(35px, 35px)",
    },
  },
  sidenav: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
    transform: "translateX(100%)",
    transition: "transform 0.5s ease-in-out",
    zIndex: 9999,  // Ensure it's above all other content
  },
  activeSidenav: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",  // Change background when menu is active
    transform: "translateX(0)",
    transition: "transform 0.5s ease-in-out",
    zIndex: 10000,  // Higher than the menu
  },
  ul: {
    listStyleType: "none",
    paddingTop: "100px",
    textAlign: "center",  // Center menu items in the sidebar
    "& li": {
      padding: "20px 0",
    },
  },
  a: {
    margin: "20px 0",
    color: "white",
    fontSize: "18px",
    textDecoration: "none", // Remove underline
  },
}));

const data = [
  { name: "Home", Link: "/" },
  { name: "Problems", Link: "/problems" },
  { name: "Team", Link: "/team" },
  { name: "Events", Link: "/events" },
];

const Index = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d81f651477a8ed310482ed81dfc64acfc3018cb20cf04e3989f524cbb10ffa51?placeholderIfAbsent=true&apiKey=170cbe9c02a2485986a6dc949bdc8ad3" alt="logo" className="object-contain shrink-0 w-28 max-w-full aspect-[2.67]" />
          <div onClick={() => setActive(!active)}>
            <div
              className={active ? classes.activeHamburger : classes.hamburber}
            />
          </div>
        </div>
      </div>
      <div className={active ? classes.activeSidenav : classes.sidenav}>
        <ul className={classes.ul}>
          {data.map((item, i) => (
            <li key={i}>
              <a href={item.Link} className={classes.a}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
