import * as React from "react"
import PropTypes from "prop-types"
import Header from "./header/Header"
import Footer from "./footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/GlobalClasses.scss"
import AOS from "aos"
import "aos/dist/aos.css"

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
