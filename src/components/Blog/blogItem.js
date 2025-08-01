import React from 'react';
import { Link } from 'react-router-dom';

function BlogItem(props) {
    const blogURL = `/blog/${props.title.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
    
    return (
        <div className={props.cols ? props.cols : 'col-md-6 col-lg-4'}>
            <div className="blog-item">
                {
                    props.thumb ? (
                        <figure className="blog-thumb">
                            <Link to={`${process.env.PUBLIC_URL + blogURL}`}>
                                <img src={require('../../assets/img/' + props.thumb)} alt={props.title} />
                            </Link>
                        </figure>
                    ) : null
                }
                <div className="blog-content">
                    <h2 className="h5"><Link to={`${process.env.PUBLIC_URL + blogURL}`}>{props.title}</Link></h2>
                    <p>{props.excerpt}</p>

                    {/* Blog Meta Section */}
                    <div className="blog-meta">
                        <Link to={`${process.env.PUBLIC_URL + blogURL}`}>{props.postBy}</Link>
                        <Link to={`${process.env.PUBLIC_URL + blogURL}`}>{props.date}</Link>
                    </div>

                    {/* Link to Catalogue using ProPic */}
                    {props.catalogueLink && props.author && (
                        <div style={{ marginTop: '10px' }}>
                            {/* Clickable ProPic Image */}
                            <a href={props.catalogueLink} target="_blank" rel="noopener noreferrer">
                                {/* Ensure the image path is correct */}
                                <img
                                    src={require('../../assets/img/' + props.author.proPic)}
                                    alt="Author Profile"
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                    }}
                                />
                            </a>
                            <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                                Click the image to view the catalogue.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogItem;
