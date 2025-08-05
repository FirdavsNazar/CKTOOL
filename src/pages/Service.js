import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/direction/map_2.jpg'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
               bgImg={require('../assets/img/direction/direction_main2_2.jpg')}
                title={
                    <span style={{ color: 'black' }}>
                      {/* DIRECTION */}
                    </span>
                  }
            />
            {/* first real position */}

            {/* <PageAbout
                title={'DIRECTION'}
                heading="CK TOOL"
                thumb={ServiceThumb}
                content="<a> <strong>Address: </strong> </a>   
                               <LI> Megadong 1007-ho, SKN Technopark, Sagimakgol-ro 124,<br> Jungwon-gu, Seongnam-si, Gyeonggi-do, South Korea </LI>
                                <a> <strong>Email: </strong> </a>
                                <LI> cktoolcom@gmail.com </LI>
                                <a> <strong>Number: </strong></a>
                                <LI> (+82) 031-605-1115 </LI>
                                <a> <strong>Fax: </strong></a>
                                <LI> (+82) 070-8731-1114</LI>"

                                
            /> */}

                <PageAbout
                    title="1. DIRECTION"
                    heading="CK TOOL"
                    content={`<div>
                        <p><strong>Address</strong></p>
                        <p>Megadong 1007-ho, SKN Technopark, Sagimakgol-ro 124, Jungwon-gu, Seongnam-si, Gyeonggi-do, South Korea</p>
                        <p><strong>Email</strong></p>
                        <p>cktoolcom@gmail.com</p>
                        <p><strong>Tel</strong></p>
                        <p>+82-31-605-1115</p>
                        <p><strong>Fax</strong></p>
                        <p>+82-31-605-1114</p>
                    </div>`}
                    mapLink="https://www.google.com/maps?q=Megadong%201011-ho,%20SKN%20Technopark,%20Sagimakgol-ro%20124,%20Jungwon-gu,%20Seongnam-si,%20Gyeonggi-do,%20South%20Korea&output=embed"
                />
                
                <PageAbout
                    title="2. DIRECTION"
                    heading="CK TOOL Busan branch"
                    content={`<div>
                        <p><strong>Address</strong></p>
                        <p>112-ho, 1-dong, Busan Industrial Supplies Distribution Complex, Gweagam-ro 37, Sasang-gu, Busan, South Korea</p>
                        <p><strong>Email</strong></p>
                        <p>cktoolted@gmail.com</p>
                        <p><strong>Tel</strong></p>
                        <p>+82-051-319-0981</p>
                        <p><strong>Fax</strong></p>
                        <p>+82-051-319-0983</p>
                    </div>`}
                    mapLink="https://www.google.com/maps?q=Busan%20Industrial%20Supplies%20Distribution%20Complex,%20Gweagam-ro%2037,%20Sasang-gu,%20Busan,%20South%20Korea&output=embed"
                />
                
                <PageAbout
                    title="3. DIRECTION"
                    heading="OKE"
                    content={`<div>
                        <p><strong>Address</strong></p>
                        <p>No.588, Jinlong Area, Majiahe Rd, Tianyuan District, Zhuzhou, Hunan, China,412000</p>
                    </div>`}
                    mapLink="https://www.google.com/maps?q=No. 588%20Majiahe%20Road,%20Jinlong%20Community,%20Tianyuan%20District,%20Zhuzhou,%20Hunan,%20China&output=embed"
                />


{/* <PageAbout
    title="DIRECTION"
    heading="CK TOOL"
    content={`
        <a> <strong>Address: </strong> </a>   
        <LI> Megadong 1007-ho, SKN Technopark, Sagimakgol-ro 124,<br> Jungwon-gu, Seongnam-si, Gyeonggi-do, South Korea </LI>
        <a> <strong>Email: </strong> </a>
        <LI> cktoolcom@gmail.com </LI>
        <a> <strong>Number: </strong></a>
        <LI> (+82) 031-605-1115 </LI>
        <a> <strong>Fax: </strong></a>
        <LI> (+82) 070-8731-1114</LI>
        <br>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d974.4972859685041!2d127.17642316965238!3d37.43971296308299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca94f7b154109%3A0x9b684a3be39ac3b4!2z7LyA7J207IS46528KOyjvCksIEstQ0VSQSBJbmMu!5e1!3m2!1sen!2skr!4v1741333351910!5m2!1sen!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `}
/> */}

            

            {/* <Services classes="sm-top"/> */}
            {/* <PricingTable/> */}
            {/* <Testimonial/> */}
            {/* <BrandLogo/> */}
            {/* <Funfact classes="sp-top"/> */}
            {/* <CallToAction/> */}
            <br></br> <br></br> <br></br><br></br><br></br>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageService;