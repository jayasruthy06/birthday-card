import React, { useRef, useState } from 'react';
import './Slider.css';
import img1 from "./pic1.jpg";
import img2 from "./pic2.jpg";
import img3 from "./pic3.jpg";
import img4 from "./pic4.jpg";
import { useNavigate} from 'react-router-dom';


const Slider = () => {

  const slider = useRef();
  const [index, setIndex] = useState(0);

  //move the slider elements to the right
  const slideForward = () => {
    const totalSlides = slider.current.children.length;
    const newIndex = (index + 1) % totalSlides;
    setIndex(newIndex);

    const width = slider.current.clientWidth;
    slider.current.style.transform = `translateX(-${newIndex * width}px)`;
  };

  const navigate = useNavigate();

  return (
    <div className="slider-box">
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="content">
              <div className="main-content">
                <img src={img4} className="picture1" />
                <p>You started as a tiny baby, full of curiosity and wonder. Everything was new — your smile lit up the room, and your giggles made people stop and smile. You were the apple of everyone's eye!</p>
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <div className="main-content">
                <img src={img1} className="picture1" />
                <p>You learned to walk, talk, and make a mess everywhere you went. You asked endless questions, held tight to the people you loved, and looked at the world like it was one big playground!</p>
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <div className="main-content">
                <img src={img3} className="picture1" />
                <p>You grew taller, thought deeper, and started to figure out who you were. You faced changes, made mistakes, had dreams — and learned more with every step!</p>
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <div className="main-content">
                <img src={img2} className="picture1" />
                <p>Now you’re 21 — entering actual adulthood! More responsible, More independent. You’re not done growing, but you’re on your way — and you’re doing great.</p>
                <button className="page-nav" onClick={() => navigate('/cake')}>NEXT PAGE</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button className="slide-button" onClick={slideForward}>NEXT</button>
    </div>
  );
};

export default Slider;
