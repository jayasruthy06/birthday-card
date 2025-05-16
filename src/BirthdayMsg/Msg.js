import React from 'react'
import "./Msg.css";
import envelope from "./envelope.png";
import {useRef} from 'react';
import { FaHeart,FaArrowAltCircleUp } from "react-icons/fa";

const Msg = () => {

    const m = useRef();
    
    //display message box
    const dispmsg = () => {
        const t = m.current.querySelector('.wish');
        t.classList.add('fade-in');
        t.style.visibility = `visible`;
    };

  return (
    <div className="msg-box" ref={m}>
        <div className="wish">
            <div className="text">
                <span>HAPPY BIRTHDAY VINAY!</span>
                <br />
                This year, I wish you all the happiness, success, and good health life can offer.
                I know the path hasn’t been smooth — storms in your sky, struggles in your soul —
                but I truly believe these will get better soon.

                May every wound find healing, and every worry turn to peace,
                May your restless nights give way to dreams where doubts and fears all cease.
                Through every challenge, you've stood strong, and still your heart beats kind.
                You’ve got a spark, a fire, a light the world is lucky to find.

                There’s no one like you — not now, not any day.
                There’s nothing you can’t conquer, no dream beyond your reach,
                You are a lesson in courage, even life itself can’t teach.

                Never let the world, or even your own thoughts, dim your flame,
                For you were born with brilliance — never ordinary, never the same.
                You’re the best thing to ever happen in the lives you touch each day,
                And one day the world will see it too — in the most extraordinary way.

                So rise, shine, and walk boldly into your next chapter,
                With your head held high and your heart beating with laughter.

                I believe in you, always.
                <p>With Love,</p>
                <p className="name">Jayasruthy<FaHeart className="heart-icon"/></p>
            </div>
        </div>
        <div className="envelope">
            <img className="picture" src={envelope} onClick={dispmsg}/>
            <p className="label">CLICK THE ENVELOPE FOR A SURPRISE<FaArrowAltCircleUp /></p>
        </div>
    </div>
  )
}

export default Msg