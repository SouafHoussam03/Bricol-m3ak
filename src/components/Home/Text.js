/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import { Link } from 'react-router-dom';

function Text() {
    return (
        <section>
            <div className='text_background'>
                <div className='zone_text'>
                    <p className='text'>
                    <span style={{color:'gold',fontSize:20, fontWeight:700}}>BRICOL M3AK</span> , your online destination to solveall the problems related to your home or business, and on this site we offer many services.
                    </p>
                </div>
                <Link className="btn button" to="/Bricole" role="button">Get Start</Link>
            </div>
        </section>
    );
};

export default Text;