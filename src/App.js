import "./App.css";
import { Route, Routes } from "react-router-dom";
import paths from "./utils/paths";
import { About, Contact, Home, Login, Public, Wedding } from "./container/public";

function App() {
  return (
    <div className="text-normal">
      <Routes>
        <Route path={paths.PUBLIC} element=<Public /> >
          <Route path={paths.HOMEPAGE} element=<Home />/>
          <Route path={paths.LOGIN} element=<Login /> />
          <Route path={paths.CONTACT} element=<Contact /> />
          <Route path={paths.ABOUT_US} element=<About /> />
          <Route path={paths.CREATE_WEDDING} element=<Wedding /> />
           
        </Route>
      </Routes>
    </div>
  );
}

export default App;
