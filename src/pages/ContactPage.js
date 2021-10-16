import React, { Component, Fragment } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title='Contact Page'></TopNavigation>
                <PageTop pageTitle='Contact'></PageTop>
                <ContactSection></ContactSection>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default ContactPage;