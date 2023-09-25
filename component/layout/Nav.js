//1. Import area 

import React from 'react'

//2. Defination area

const Nav = () => {
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            We are Hiring
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Investor Relations
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Advertise
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Free Listing
          </a>
        </li>
      </ul>
    </>
  );
}

//3. Export area
//3.1 Export default
export default Nav
