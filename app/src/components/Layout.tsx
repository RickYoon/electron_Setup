import React from "react";
import {Link, Outlet} from "react-router-dom"

export const Layout: React.FC = () => {
  return (<div>
    <p>THIS IS OUT LAYOUT</p>
      <ul>
        <li>
          {/* <a href="/">home</a> */}
          <Link to="/">home</Link>
        </li>
        <li>
        <Link to="/work">work</Link>
        </li>
      </ul>
    <Outlet/>
  </div>
  )
}
