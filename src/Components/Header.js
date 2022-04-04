import React from "react";
import title from "./images/title.png";
import "./Header.css";
import {
  Link,
  useLocation,
} from "react-router-dom";

const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Liên hệ",
    to: "/contact",
    exact: true,
  },
];

// var showMenu = (temps, params) => {
//   return temps.map((value, key) => {
//     return (
//       <li key={key}>
//         <Link to={value.to}>{value.name}</Link>
//         {params === value.to && (
//           <i className="fas fa-circle dot-circle-active"></i>
//         )}
//       </li>
//     );
//   });
// };

var MenuLink = ({ lable, to, activeOnlyWhenExact, location }) => {
  const match = location.pathname === to;
  return (
    <li>
      <Link to={to} className={match?"active":""}>{lable}</Link>
    </li>
  );
};

var showMenu = (temps, location) => {
  var result = null;
  result = temps.map((value, key) => {
    return (
      <MenuLink
        key={key}
        lable={value.name}
        to={value.to}
        activeOnlyWhenExact={value.exact}
        list={value.list}
        location={location}
      ></MenuLink>
    );
  });
  return result;
};
export default function Header() {
  const location = useLocation();
  return (
    <div>
      {console.log(location)}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1>
              <img style={{ width: "100%" }} alt="Inixtas" src={title}></img>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              {/* <li>
                <a className="nav-link scrollto active" href="#hero">
                  Trang chủ
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Liên hệ
                </a>
              </li> */}
              {showMenu(menus, location)}
              <li>
                <a className="getstarted scrollto" href="#about">
                  <i
                    style={{ paddingRight: "10px" }}
                    className="fa-thin fa-user"
                  ></i>
                  Tài khoản
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </div>
  );
}
