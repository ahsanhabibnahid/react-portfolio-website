import React, { Component, Fragment } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

class TopNavigation extends Component {
    constructor(){
        super()
        this.state = {
            navBarTitle : 'navTitle',
            navBarBackground : 'navBackground',
            navBarItem : 'navItem'
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({navBarTitle : 'navTitleScroll', navBarBackground : 'navBackgroundScroll', navBarItem : 'navItemScroll'})
        }
        else if(window.scrollY < 100){
            this.setState({navBarTitle : 'navTitle', navBarBackground : 'navBackground', navBarItem : 'navItem'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBarBackground} fixed='top' collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand className={this.state.navBarTitle}>Portfolio Web</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            
                        </Nav>
                        <Nav>
                            <Nav.Link className={this.state.navBarItem} href="#deets">Home</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">Services</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">Courses</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">Portfolio</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">Contact</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">About</Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;