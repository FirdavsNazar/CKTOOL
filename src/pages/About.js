import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/home-two";
import Services from "../components/Services";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import Features from "../components/Features";
import Testimonial from "../components/Testimonials/home-two";
import Team from "../components/Team/home-two";
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

import ServiceThumb from '../assets/img/about.jpg'

const PageAbout = () => {
    const { t } = useTranslation(); // Initialize the translation function
    return (
        <Fragment>
            <Header/>
            <PageHeader
          bgImg={require('../assets/img/about/about_main_2.jpg')}
                //  bgVideo={require('../assets/img/about_video.mp4')}
                // title = <h1> About US </h1>
                // content= "Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly."
            /> <br></br>
            <About
                 title={t('ourTeam')}
                 heading={t('meetOurExperts')}
                 // thumb={ServiceThumb}
                 content={t('aboutContent')}
            />
            {/* <Services/> */}
            {/* <Features classes={'sm-top'}/> */}
            <Testimonial/>
            {/* <Team/> */}
            {/* <BrandLogo/> */}
            <Funfact classes="sp-top"/>
            {/* <CallToAction/> */}
            <br></br> <br></br> 
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageAbout;