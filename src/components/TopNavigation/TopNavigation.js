import React, { Component, Fragment } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';

class TopNavigation extends Component {
    constructor(props) {
        super()
        this.state = {
            navBarTitle: 'navTitle',
            navBarBackground: 'navBackground',
            navBarItem: 'navItem',
            navVariant: 'dark',
            pageTitle: props.title
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navBarTitle: 'navTitleScroll',
                navBarBackground: 'navBackgroundScroll',
                navBarItem: 'navItemScroll',
                navVariant: 'light'
            })
        }
        else if (window.scrollY < 100) {
            this.setState({
                navBarTitle: 'navTitle',
                navBarBackground: 'navBackground',
                navBarItem: 'navItem',
                navVariant: 'dark'
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.props.pageTitle}</title>
                <Navbar className={this.state.navBarBackground} fixed='top' collapseOnSelect expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand className={this.state.navBarTitle}>Portfolio Web</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/service">Services</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/course">Courses</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/portfolio">Portfolio</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">Contact</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">About</NavLink></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;