import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = props => {
    let listener = null
    const [scrollState, setScrollState] = useState("top");
  
    useEffect(() => {
      listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 500) {
          if (scrollState !== "fixed") {
            setScrollState("fixed")
          }
        } else {
          if (scrollState !== "top") {
            setScrollState("top")
          }
        }
      })
      if (scrollState === "top") {
        document.getElementById('navbar').classList.remove("fixed");
      }else {
        document.getElementById('navbar').classList.add("fixed");
      }
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [scrollState]);

    const { page } = props;

    return (
        <Navbar id="navbar" className={(page=='home') ? 'transparent':'white'}>
            <Navbar.Brand href="/">
                <img
                    src="img/logo.png"
                    width="112"
                    height="100"
                    className="d-inline-block align-top"
                    alt="Hafs logo"
                />
            </Navbar.Brand>
            <Nav>
                <Nav.Link className="nav__item" href="/">Home</Nav.Link>
                <Nav.Link className="nav__item" href="/articles" active={page=="articles"}>Articles</Nav.Link>
                <Nav.Link className="nav__item" href="/pricing" active={page=="pricing"}>Pricing</Nav.Link>
                <Nav.Link className="nav__item" href="/games" active={page=="games"}>Games</Nav.Link>
                <Nav.Link className="nav__item" href="/contact-us" active={page=="contact-us"}>Contact Us</Nav.Link>
            </Nav>
            <div className="navbar-action">
                <a className="btn btn--trans mr-3" href="">Login</a>
                <a className="btn btn--primary" href="">Sign Up</a>
            </div>
        </Navbar>
    )
}

export default Navigation;