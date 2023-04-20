import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
// import {faPlus } from '@fortawesome/free-regular-svg-icons'
const arrowsLeftRight = <FontAwesomeIcon style={{color:"black"}} icon={faArrowRight} />
const Fiture = () => {
    return (
        <div>
            <div className="fiture">

                <div className="buttons" >
                    <div style={{display:"flex",flexDirection:"column",alignItems:"self-start",flexShrink:"0"}}>
                        <a className="button big-btn">
                            <span>MEN's clothing</span>
                            <i>{arrowsLeftRight}</i>
                        </a>
                        <a className="button big-btn">
                            <span>Jewelery</span>
                            <i>{arrowsLeftRight}</i>
                        </a>
                        <a className="button big-btn">
                            <span>WOMEN's clothing</span>
                            <i>{arrowsLeftRight}</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fiture;