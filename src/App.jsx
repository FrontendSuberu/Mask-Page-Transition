import './App.css'
import React, { useRef, useEffect, useState } from "react";
import Modal from './components/Modal/Modal';
import Header from './components/header/Header';
import { document } from 'postcss';

function App() {

  const text = "Smooth Interactions for better Experiences";

  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  // used for the text animation
  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [text]);

  return (
    <>
      <Header />


      <section className='smooth-hero'>
        <h1 className='smooth-h1' style={{ "--text-width": `${textWidth}px` }}>
          <span ref={textRef}>{text}.</span>
          <span>{text}.</span>
        </h1>
      </section>
    </>
  );
}


export default App

