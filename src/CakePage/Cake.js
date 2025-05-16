import React from 'react'
import lower from "./lowerpiece.png";
import middle from "./middlepiece.png";
import upper from "./upperpiece.png";
import "./Cake.css";
import {useRef} from 'react';
import banner from "./banner (2).png";
import { useNavigate } from 'react-router-dom';

const Cake = () => {

    const c = useRef();
    
    //make the fire elements hidden
    const blow = () => {
        const flames = c.current.querySelectorAll('.fire');
        flames.forEach((flame) => {
            flame.classList.add('fade-out');
        });
        setTimeout(dispbanner, 1000);
        setTimeout(dispbutton, 1200);
    };

    //display the next page button
    const dispbutton = () => {
        const button = c.current.querySelector('.page-nav-2');
        button.classList.add('fade-in');
        button.style.visibility = `visible`;
    };

    //display the banner
    const dispbanner = () => {
        const b = c.current.querySelector('.banner');
        b.classList.add('fade-in');
        b.style.visibility = `visible`;
    };

    const navigate = useNavigate();

    return(
    <div>
        <div className="container" ref={c}>
            <img className="banner" src={banner} />
                <div className="cake">
                    <div className="flames">
                        <div className="fire">f</div>
                        <div className="fire">f</div>
                        <div className="fire">f</div>
                        <div className="fire">f</div>
                        </div>
                    <div className="candles">
                        <div className="candle">c</div>
                        <div className="candle">c</div>
                        <div className="candle">c</div>
                        <div className="candle">c</div>
                    </div>
                    <div className="main-cake">
                        <div className="upper-piece"><img src={upper}/></div>
                        <div className="middle-piece"><img src={middle}/></div>
                        <div className="lower-piece"><img src={lower}/></div>
                    </div>
                </div>
            <button className="blow-candle" onClick={blow}>BLOW THE CANDLES</button>
            <button className="page-nav-2" onClick={() => navigate('/msg')}>NEXT PAGE</button>
        </ div>
    </div>
  )
}

export default Cake