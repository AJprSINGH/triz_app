import React, { useState , useEffect} from "react";
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
      width: "50%",
      height: "100vh",
      background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",
      transform: "translateX(100%)",
      transition: "transform 0.5s ease-in-out",
      right:0,
    },
    activeSidenav: {
      position: "fixed",
      width: "50%",
      overflowY: "auto",
      height: "90vh",
      background: "linear-gradient(150deg, #b1bfd8 0%, #667eaa 74%)",  // Change background when menu is active
      transform: "translateX(0)",
      transition: "transform 0.5s ease-in-out",
      zIndex: 10000,  // Higher than the menu
      right: 0,
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
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px 20px",
      color: "#fff",
      cursor: "pointer",
      transition: "background 0.3s",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.1)",
      },
    },
    dropdownWrapper: {
      position: "relative",
    },
    label: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 20px",
      color: "#fff",
      cursor: "pointer",
      transition: "background 0.3s",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.1)",
      },
    },
    arrow: {
      width: "10px",
      height: "10px",
      borderTop: "2px solid #fff",
      borderRight: "2px solid #fff",
      transform: "rotate(45deg)",
      transition: "transform 0.3s",
    },
    arrowOpen: {
      transform: "rotate(135deg)",
    },
    dropdownContent: {
      background: "rgba(0, 0, 0, 0.7)",
      display: "none",
      padding: "10px 20px",
      maxHeight: "400px",
      height: "auto",
      transition:"all 0.5s ease-in-out",
      borderBottom: "1px solid rgb(33, 46, 65)",
      "& ul": {
        listStyle: "none",
        margin: 0,
        "& li": {
          padding: "10px 0",
          color: "#fff",
          cursor: "pointer",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
    },
    dropdownContentOpen: {
      display: "block",
    },
  }));

const data = [
  { name: "HOME", link: "/" },
  { name: "ABOUT US", link: "/aboutus" },
  { name: "COMPANY", link: "/events" },
];

const dropdownData = {
    PRODUCTS: [
      { label: "ERP", href: "/erpservice" },
      { label: "LMS", href: "/lmsservice" },
      { label: "Career Counselling", href: "/ccservice" },
      { label: "Education Ai", href: "/aiservice" },
      { label: "Communication", href: "/commservice" },
      { label: "Analytics", href: "/analyticservice" },
      { label: "Integration", href: "/integration" },
    ],
    SERVICES: [
      { label: "Integration", href: "/integration" },
      { label: "Services supports", href: "/supportservice" },
      { label: "Mobile app", href: "/mobileservices" },
      { label: "Quality improvement", href: "/pione" },
      { label: "Process improvement", href: "/pitwo" },
      { label: "Rolewise solutions", href: "/pithree" },
    ],
  };

const Index = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "unset";
  }, [active]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d81f651477a8ed310482ed81dfc64acfc3018cb20cf04e3989f524cbb10ffa51"
            alt="logo"
            className="object-contain shrink-0 w-28 max-w-full aspect-[2.67]"
          />
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
              <a href={item.link} className={classes.a}>
                {item.name}
              </a>
            </li>
          ))}
          {Object.entries(dropdownData).map(([key, items]) => (
            <li key={key} className={classes.dropdownWrapper}>
              <div
                onClick={() => toggleDropdown(key)}
                className={classes.label}
              >
                {key}
                <div
                  className={`${classes.arrow} ${
                    openDropdown === key ? classes.arrowOpen : ""
                  }`}
                />
              </div>
              <div
                className={`${classes.dropdownContent} ${
                  openDropdown === key ? classes.dropdownContentOpen : ""
                }`}
              >
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className={classes.dropdownLink}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;