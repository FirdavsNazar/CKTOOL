import React from 'react';
import { FaFilePdf } from "react-icons/fa";
const MemberInfo = ({teamMember}) => {
    const {profilePic,name, catalogueLink,designation,bio,socials,address,phone,email,website} = teamMember;
    return (
        <div className="member-details-top">
            <div className="row">
                <div className="col-md-5">
                    <div className="member-pic mb-sm-35">
                        <img src={require('../../assets/img/' + profilePic)} alt={name}/>
                    </div>
                </div>

                <div className="col-md-7 ml-auto">
                    <div className="member-desc">
                         <h2>{name}</h2>
                       
                         {/* <a
                           href={catalogueLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{
                             display: 'inline-flex',
                             alignItems: 'center',
                             color: 'red',
                             fontWeight: 'bold',
                             fontSize: '14px',
                             marginTop: '8px',
                             textDecoration: 'none'
                           }}
                         >
                           <FaFilePdf style={{ marginRight: '6px' }} />
                           Catalogue
                         </a> */}
                    </div>
                       
                </div>
            </div>
        </div>
    );
};

export default MemberInfo;