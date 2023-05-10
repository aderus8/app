import React, { useEffect, useState } from 'react';
import "./FlagMain.css"


const FlagMain = ({language}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    return (
        <div className='div1'>
            <div className='div2' style={{backgroundImage: `url(${language.image})`}}  >

            </div>
            <div>
                <div className='div3'></div>
                <div className="div4">
                    <div className="div5">
                        <div className='div6 '>
                            <img className="imageFlag"  src={language.image}/>
                            <h1 className='h1-div6'> {language.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlagMain;
