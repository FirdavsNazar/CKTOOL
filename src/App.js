import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';  // Import the I18nextProvider
import i18n from './i18n'; // Import your i18n configuration

// import './i18n'  // Remove this, since it's already imported above

/*
* @ All pages Import
*/
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';
import Service from './pages/Service';
import ServiceDetails from "./pages/ServiceDetails";
import BlogGridRightSidebar from './pages/BlogGridRightSidebar';
import BlogGridLeftSidebar from './pages/BlogGridLeftSidebar';
import BlogGridWithoutSidebar from './pages/BlogGridWithoutSidebar';
import BlogListLeftSidebar from './pages/BlogListLeftSidebar';
import BlogListRightSidebar from './pages/BlogListRightSidebar';
import BlogDetailsPage from "./pages/BlogDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";

// Ensure i18n is initialized
import './i18n';

const App = () => {
    return (
        // Wrap your entire app with the I18nextProvider to provide language functionality
        <I18nextProvider i18n={i18n}>
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL + '/services'}`} component={Service} />
                        <Route path={`${process.env.PUBLIC_URL + '/service/:serviceID'}`} component={ServiceDetails} />
                        <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-right-sidebar"}`} component={BlogGridRightSidebar} />
                        <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-left-sidebar"}`} component={BlogGridLeftSidebar} />
                        <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar"}`} component={BlogGridWithoutSidebar} />
                        <Route exact path={`${process.env.PUBLIC_URL + "/blog-list-left-sidebar"}`} component={BlogListLeftSidebar} />
                        <Route exact path={`${process.env.PUBLIC_URL + "/blog-list-right-sidebar"}`} component={BlogListRightSidebar} />
                        <Route path={`${process.env.PUBLIC_URL + "/blog/:blogID"}`} component={BlogDetailsPage} />
                        <Route exact path={`${process.env.PUBLIC_URL + "/team"}`} component={Team} />
                        <Route path={`${process.env.PUBLIC_URL + "/team-member/:teamID"}`} component={TeamDetails} />
                        <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
                        <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
                        <Route exact path={`${process.env.PUBLIC_URL + '/home-one'}`} component={HomeOne} />
                        <Route exact path={`${process.env.PUBLIC_URL + '/home-two'}`} component={HomeTwo} />
                        <Route exact path={`${process.env.PUBLIC_URL + '/'}`} component={HomeOne} />
                        <Route exact component={Error404} />
                    </Switch>
                </ScrollToTop>
            </Router>
        </I18nextProvider>
    );
};

export default App;


// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';

// /*
//  * @ All pages Import
//  */
// import HomeOne from './pages/HomeOne';
// import HomeTwo from './pages/HomeTwo';
// import Service from './pages/Service';
// import ServiceDetails from "./pages/ServiceDetails";
// import BlogGridRightSidebar from './pages/BlogGridRightSidebar';
// import BlogGridLeftSidebar from './pages/BlogGridLeftSidebar';
// import BlogGridWithoutSidebar from './pages/BlogGridWithoutSidebar';
// import BlogListLeftSidebar from './pages/BlogListLeftSidebar';
// import BlogListRightSidebar from './pages/BlogListRightSidebar';
// import BlogDetailsPage from "./pages/BlogDetails";
// import Team from "./pages/Team";
// import TeamDetails from "./pages/TeamDetails";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Error404 from "./pages/Error404";
// import ScrollToTop from "./helpers/ScrollToTop";

// // Component to initialize and reinitialize Weglot
// const WeglotReinitializer = () => {
//     const location = useLocation();

//     useEffect(() => {
//         if (window.Weglot) {
//             window.Weglot.initialize({
//                 api_key: 'wg_9aa007aca5ee2b9361aa62d53fd71a741',
//             });

//             // Ensure Weglot language switcher is visible on route change
//             window.Weglot.switchTo(window.Weglot.getCurrentLang());
//         } else {
//             console.error('Weglot script not loaded. Please check the script source.');
//         }
//     }, [location]);

//     return null; // This component doesn't render anything
// };

// const App = () => {
//     return (
//         <I18nextProvider i18n={i18n}>
//             <Router>
//                 <WeglotReinitializer /> {/* Reinitialize Weglot on route change */}
//                 <ScrollToTop>
//                     <Switch>
//                         <Route exact path={`${process.env.PUBLIC_URL + '/services'}`} component={Service} />
//                         <Route path={`${process.env.PUBLIC_URL + '/service/:serviceID'}`} component={ServiceDetails} />
//                         <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-right-sidebar"}`} component={BlogGridRightSidebar} />
//                         <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-left-sidebar"}`} component={BlogGridLeftSidebar} />
//                         <Route exact path={`${process.env.PUBLIC_URL + "/blog-grid-without-sidebar"}`} component={BlogGridWithoutSidebar} />
//                         <Route exact path={`${process.env.PUBLIC_URL + "/blog-list-left-sidebar"}`} component={BlogListLeftSidebar} />
//                         <Route exact path={`${process.env.PUBLIC_URL + "/blog-list-right-sidebar"}`} component={BlogListRightSidebar} />
//                         <Route path={`${process.env.PUBLIC_URL + "/blog/:blogID"}`} component={BlogDetailsPage} />
//                         <Route exact path={`${process.env.PUBLIC_URL + "/team"}`} component={Team} />
//                         <Route path={`${process.env.PUBLIC_URL + "/team-member/:teamID"}`} component={TeamDetails} />
//                         <Route exact path={`${process.env.PUBLIC_URL + "/about"}`} component={About} />
//                         <Route exact path={`${process.env.PUBLIC_URL + "/contact"}`} component={Contact} />
//                         <Route exact path={`${process.env.PUBLIC_URL + '/home-one'}`} component={HomeOne} />
//                         <Route exact path={`${process.env.PUBLIC_URL + '/home-two'}`} component={HomeTwo} />
//                         <Route exact path={`${process.env.PUBLIC_URL + '/'}`} component={HomeOne} />
//                         <Route exact component={Error404} />
//                     </Switch>
//                 </ScrollToTop>
//             </Router>
//         </I18nextProvider>
//     );
// };

// export default App;
