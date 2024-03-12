"use client";
// Home.jsx
import React, { useState } from 'react';
import './styles.css';
import Footer from './components/Footer';

type Props = {};

export default function Home({}: Props) {
  const [modalActive, setModalActive] = useState(false);
  
  return (
    <div>
      <div className="backgroundImageSection firstSection">
        <div className="content">
          <h1 className="name">Thanonchai kantha</h1>
          <h1 className="mainTitle">About Me</h1>
          <h2 className="subTitle">Bright</h2>
          <a href="/about" className="linkButton">About</a>
        </div>
        <div className="iconContainer">
        <div style={{
        animation: 'bounce 2s infinite ease-in-out, blink 1.5s infinite ease-in-out',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="48" fill="none" viewBox="0 0 68 48" style={{ marginBottom: '20px' }}>
          <path stroke="#fff" strokeWidth="2" d="M34 46L66 2H2z" />
        </svg>
      </div>

      {/* Styles for animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
         
        </div>
      </div>
      <div className="backgroundImageSection secondSection image-focus image-container>" >
      <div>
        
      <div className={modalActive ? "modalActive" : "backgroundVideo"}>
        <iframe
          className="video"
          src="https://www.youtube.com/embed/ntb5bi5CURU?autoplay=1&loop=1&playlist=ntb5bi5CURU&mute=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {modalActive ? (
        <button onClick={() => setModalActive(false)} style={{position: 'fixed', zIndex: 1001, top: '20px', right: '20px'}}>Close</button>
      ) : (
        <button onClick={() => setModalActive(true)} style={{position: 'fixed', zIndex: 1001, top: '250px', right: '250px'}}>Open Video</button>
      )}
    </div>
        <div className="content">
          <h1 className="name">Thanonchai kantha</h1>
          <h1 className="mainTitle">Work</h1>
          <h2 className="subTitle">Bright</h2>
          <a href="/work" className="linkButton">Work</a>
        </div>
        <div className="iconContainer">
        <div style={{
        animation: 'bounce 2s infinite ease-in-out, blink 1.5s infinite ease-in-out',
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="48" fill="none" viewBox="0 0 68 48" style={{ marginBottom: '20px' }}>
          <path stroke="#fff" strokeWidth="2" d="M34 46L66 2H2z" />
        </svg>
      </div>

      {/* Styles for animations */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
   
        </div>
      </div>

      <div className="background">
      
        </div>
        <Footer />
    </div>
  );
}
