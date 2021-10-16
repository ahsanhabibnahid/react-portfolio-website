import React, { Component, Fragment } from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class CoursesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title='Courses Page'></TopNavigation>
                <PageTop pageTitle='All Courses'></PageTop>
                <AllCourses></AllCourses>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default CoursesPage;