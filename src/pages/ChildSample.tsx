import "../App.css";
import {Outlet} from "react-router-dom";

function ChildSample() {
  return (
      <div className="Sample">
        <h1>child</h1>
        <Outlet />
      </div>
  );
}

export default ChildSample;