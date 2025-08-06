// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import navbarData from "../../../data/Navbar/navbar";
// import { useTranslation } from 'react-i18next';  // Import useTranslation from react-i18next

// function NavbarItem(props) {
//     const [isMobile, setIsMobile] = useState(false);
//     const { i18n } = useTranslation();  // Destructure i18n to access changeLanguage function

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };

//         handleResize(); // Set the initial state
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <>
//             {navbarData.map(item => (
//                 <li key={item.id} className={item.subMenu || item.megaMenu ? 'has-submenu' : ''}>
//                     <Link to={`${process.env.PUBLIC_URL + item.link}`}>{item.title}</Link>
//                     {(() => {
//                         if (item.subMenu) {
//                             return (
//                                 <ul className="submenu-nav">
//                                     {item.subMenu.map((subItem, index) => (
//                                         <li key={index}><Link to={`${process.env.PUBLIC_URL + subItem.link}`}>{subItem.title}</Link></li>
//                                     ))}
//                                 </ul>
//                             );
//                         }

//                         if (item.megaMenu) {
//                             return (
//                                 <ul className="submenu-nav submenu-nav-mega">
//                                     {item.megaMenu.map((megaItem, indx) => (
//                                         <li key={indx} className="mega-menu-item">
//                                             <Link to={megaItem.link}>{megaItem.title}</Link>
//                                             <ul>
//                                                 {megaItem.lists.map((listItem, idx) => (
//                                                     <li key={idx}><Link to={`${process.env.PUBLIC_URL + listItem.link}`}>{listItem.title}</Link></li>
//                                                 ))}
//                                             </ul>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             );
//                         }
//                     })()}

//                 </li>
//             ))}

//             {/* Conditionally render "Catalogue" item for mobile only with an external link */}
//             {isMobile && (
//                 <li key="catalogue">
//                     <a
//                         href="https://drive.google.com/file/d/1wS3HxZgPc20GI8zT32Nt9Li0zWpW_0yw/view?usp=drive_link"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="tel-no"
//                     >
//                         Catalogue
//                     </a>
//                 </li>
//             )}
//         </>
//     );
// }

// export default NavbarItem;


import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import navbarData from "../../../data/Navbar/navbar";
import { useTranslation } from 'react-i18next';  // Import useTranslation from react-i18next

function NavbarItem(props) {
    const [isMobile, setIsMobile] = useState(false);
    const { t } = useTranslation();  // Destructure t from useTranslation to access translation function

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Set the initial state
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {navbarData.map(item => (
                <li key={item.id} className={item.subMenu || item.megaMenu ? 'has-submenu' : ''}>
                    <Link to={`${process.env.PUBLIC_URL + item.link}`}>
                        {t(`${item.title.toLowerCase()}`)}  {/* Translate the item title */}
                    </Link>
                    {(() => {
                        if (item.subMenu) {
                            return (
                                <ul className="submenu-nav">
                                    {item.subMenu.map((subItem, index) => (
                                        <li key={index}>
                                            <Link to={`${process.env.PUBLIC_URL + subItem.link}`}>
                                                {t(`${subItem.title.toLowerCase()}`)}  {/* Translate submenu item */}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            );
                        }

                        if (item.megaMenu) {
                            return (
                                <ul className="submenu-nav submenu-nav-mega">
                                    {item.megaMenu.map((megaItem, indx) => (
                                        <li key={indx} className="mega-menu-item">
                                            <Link to={megaItem.link}>
                                                {t(`${megaItem.title.toLowerCase()}`)}  {/* Translate mega menu item */}
                                            </Link>
                                            <ul>
                                                {megaItem.lists.map((listItem, idx) => (
                                                    <li key={idx}>
                                                        <Link to={`${process.env.PUBLIC_URL + listItem.link}`}>
                                                            {t(`${listItem.title.toLowerCase()}`)}  {/* Translate list item */}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            );
                        }
                    })()}

                </li>
            ))}

            {/* Conditionally render "Catalogue" item for mobile only with an external link */}
            {isMobile && (
                <li key="Catalogue">
                    <a
                        href="https://cktool.co.kr/OKE%20catalogue.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tel-no"
                    >
                        {t('catalogue')}  {/* Translate the 'Catalogue' text */}
                    </a>
                </li>
            )}
        </>
    );
}

export default NavbarItem;
