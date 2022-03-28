import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { useScrollRestoration } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import headerStrings from "./Header.string"
import whiteLogo from "../../assets/logo-white.svg"
import blackLogo from "../../assets/logo-black.svg"
const Header = () => {
  const ulScrollRestoration = useScrollRestoration(`page-component-ul-list`)

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)
  const [homeRoute, sethomeRoute] = useState("")
  //logo scroll when active
  const [navbarLogo, setNavbarLogo] = useState(whiteLogo)
  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 30) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  //logo scroll function
  const changeLogo = () => {
    if (window.scrollY >= 30) {
      setNavbarLogo(blackLogo)
    } else {
      setNavbarLogo(whiteLogo)
    }
  }

  useEffect(() => {
    changeLogo()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo)
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/") {
        sethomeRoute(true)
      } else {
        sethomeRoute(false)
      }
    }
  }, [typeof window !== "undefined" ? window.location.pathname : ""])

  // console.log("Route", homeRoute)

  return (
    <div className="header">
      <Navbar
        fixed="top"
        expand="lg"
        className={
          homeRoute && !navbar
            ? "home-active "
            : navbar
            ? "navbar active "
            : "navbar"
        }
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={homeRoute ? blackLogo : navbarLogo} alt="WorkHall Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span
              className={homeRoute ? "homeham icon-bar" : "icon-bar"}
            ></span>
            <span
              className={homeRoute ? "homeham icon-bar" : "icon-bar"}
            ></span>
            <span
              className={homeRoute ? "homeham icon-bar" : "icon-bar"}
            ></span>
            {/* <img src={hamwhite}></img>  {homeRoute ? "homeham":"icon-bar"} */}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="/">
              <img
                className="collapse-logo"
                src={blackLogo}
                alt="WorkHall Logo"
              />
            </Navbar.Brand>
            <Nav className="ms-auto" {...ulScrollRestoration}>
              <Link
                to="/platform-overview"
                className="nav-link"
                activeStyle={{borderBottom: "4px solid #24AAC4", opacity: "1", cursor: "context-menu"}}
              >
                {headerStrings.NAV_ITEM_ONE}
              </Link>
              <Link to="/why-workhall" className="nav-link" activeStyle={{borderBottom: "4px solid #24AAC4", opacity: "1", cursor: "context-menu"}}>
                {headerStrings.NAV_ITEM_TWO}
              </Link>
              <Link to="/about-us/" className="nav-link" activeStyle={{borderBottom: "4px solid #24AAC4", opacity: "1", cursor: "context-menu"}}>
                {headerStrings.NAV_ITEM_THREE}
              </Link>
              <Link to="/help" className="nav-link" activeStyle={{borderBottom: "4px solid #24AAC4", opacity: "1", cursor: "context-menu"}}>
                {headerStrings.NAV_ITEM_FOUR}
              </Link>
              <Link to="/contact" className="nav-link" activeStyle={{borderBottom: "4px solid #24AAC4", opacity: "1", cursor: "context-menu"}}>
                {headerStrings.NAV_ITEM_FIVE}
              </Link>
              {/* <Link to="/signin" className="nav-link signin-link">{headerStrings.NAV_ITEM_SIX}</Link> */}
              <Link
                to="https://workhall.io/signin"
                target="_blank"
                className="nav-link signup-btn"
              >
                {headerStrings.NAV_ITEM_SIX}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
