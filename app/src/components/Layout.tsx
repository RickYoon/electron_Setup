import React from "react";
import {Outlet} from "react-router-dom"

export const Layout: React.FC = () => {
  return (<div>
    <p>THIS IS OUT LAYOUT</p>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
        <a href="/work">work</a>
        </li>
      </ul>
    <Outlet/>
  </div>
  )
}
