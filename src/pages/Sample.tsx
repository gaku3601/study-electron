import "../App.css";
import {Outlet} from "react-router-dom";

function Sample() {
  return (
      <div className="Sample">
        <h1>sample1</h1>
        <Outlet />
      </div>
  );
}

export default Sample;