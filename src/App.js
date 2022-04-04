import logo from "./logo.svg";
import "./App.css";
import routes from "./Router/routes";
import configureStore from "./Redux/configureStore";

import { Provider } from "react-redux";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useLocation, Route, Routes } from "react-router-dom";

const store = configureStore();

const showContentMenus = (routes) => {
  var result = null;
  if (routes.length) {
    result = routes.map((value, key) => {
      let keyRan = key;
      return (
        <Route
          path={value.path}
          exact={value.exact}
          element={value.main}
          keyProp={key}
          key={keyRan}
        ></Route>
      );
    });
  }
  return <Routes>{result}</Routes>;
};

function App() {
  const location = useLocation();
  return (
    <Provider store={store}>
      {location.pathname === "/login" ? "" : <Header></Header>}
      {showContentMenus(routes)}
      <Footer></Footer>
    </Provider>
  );
}

export default App;
