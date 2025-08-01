import React,{Fragment} from 'react';
import Header from "../components/Header";
import Team from "../components/Team/home-two";
import TeamDetailsPage from "../templates/TeamDetails";
import BlogPage from "../templates/Blog";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import PageHeader from "../components/PageHeader"

const PageBlogGrid = () => {
    return (
        <Fragment>
            <Header/> 
             <PageHeader
               bgImg={require('../assets/img/tech_news/tech_main2.jpg')}
                title={
                    <span style={{ color: 'black' }}>
                      {/* DIRECTION */}
                    </span>
                  }
            /> <br/>
              <Team/> <br/><br/><br/>
            {/* <BlogPage blog_type={'grid'} sidebar={false} sidebar_position={'left'}/>  */}
            {/* <CallToAction/> */}
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageBlogGrid;