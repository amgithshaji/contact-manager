import React from 'react'
import CardNav from './CardNav'
import logo from '/logo.png';
import { href } from 'react-router';

function Header() {

 const items = [
    {
      label: "About",
      bgColor: "#000000ff",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Connect", 
      bgColor: "#000000ff",
      textColor: "#fff",
      links: [
        { label: "Contact Generator", ariaLabel: "Contact Generator Page",href:"/Contact" },
        { label: "Contact View", ariaLabel: "Contact View Page ",href:"/Preview" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#000000ff", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us",href:"mailto:amgithshaji410@gmail.com" },
        { label: "Github", ariaLabel: "Github",href:"https://github.com/amgithshaji" },
        { label: "LinkedIn", ariaLabel: "LinkedIn",href:"https://www.linkedin.com/in/amgith-shaji-a47849323/" }
      ]
    }
  ];

  return (
      <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#bdbdbdff"
      menuColor="#000000ff"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  )
}

export default Header