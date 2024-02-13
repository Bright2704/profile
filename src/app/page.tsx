"use client";
import React from 'react';



type Props = {};

export default function Home({}: Props) {
    return (
      
      <div>
      <div style={{
        background: 'url("https://4.bp.blogspot.com/-U_cA_ieS9EA/V9luo62UmLI/AAAAAAAAMNQ/NLtCABaivg0mjUa1wC0XKVFebLwhcqyPgCLcB/s1600/kimi-no-na-wa-13.jpg") no-repeat center center/cover',
        margin: 0,
        padding: 0,
        zIndex: 1,
        width: '100vw',
        height: '85vh', 
        boxSizing: 'border-box',
        display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'flex-end', 
          alignItems: 'flex-start', 
         
      }}>

        <div style={{ color: 'white',
                      padding: '110px', 
                      paddingLeft: '80px', 
                      justifyContent: 'flex-end',
                     }}> 
          <h1 style={{ color: 'white', fontSize: '17px', marginBottom: '0.01em'}}>Thanonchai kantha</h1>
          <h1 style={{ color: 'red', fontSize: '50px', marginBottom: '0.01em' }}>About Me</h1>
          <h2 style={{ color: 'white',fontSize: '25px', marginBottom: '0.2em'}}>Bright</h2>
          
          <a href="/about" style={{
          display: 'inline-block',
          padding: '8px 40px' ,
          fontSize: '16px',
          backgroundColor: 'transparent',
          color: 'white',
          border: '1px solid white',
          textDecoration: 'none',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = 'black';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'white';
        }}
        >
         About
        </a>
        </div>
        
        <div style={{
      position: 'relative',
      width: '100%',
      // height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      overflow: 'hidden',

      
    }}>

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
      

      {/* Second background image section */}
      <div style={{
        background: 'url("https://4.bp.blogspot.com/-U_cA_ieS9EA/V9luo62UmLI/AAAAAAAAMNQ/NLtCABaivg0mjUa1wC0XKVFebLwhcqyPgCLcB/s1600/kimi-no-na-wa-13.jpg") no-repeat center center/cover',
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh', 
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
        alignItems: 'flex-start', 
      }}>
        <div style={{
      position: 'relative', 
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    }}>
      {/* Video container */}
      <div style={{
        position: 'absolute', // Positioned absolutely relative to its parent
        top: '50%', // Center vertically
        right: 0, // Align right
        transform: 'translateY(-50%)', // This centers the video element vertically
        maxWidth: '100%', // Optional: for responsive width
        maxHeight: '100vh', // Optional: for responsive height
      }}>
        <video 
          width="100%" // Adjust the width as required
          height="auto" // Adjust the height as required
          controls
        >
          <source src="your_video_path.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div style={{ color: 'white',
                      padding: '50px', 
                      paddingLeft: '80px', 
                      justifyContent: 'flex-end',
                     }}> 
          <h1 style={{ color: 'white', fontSize: '17px', marginBottom: '0.01em'}}>Thanonchai kantha</h1>
          <h1 style={{ color: 'red', fontSize: '50px', marginBottom: '0.01em' }}>Work</h1>
          <h2 style={{ color: 'white',fontSize: '25px', marginBottom: '0.2em'}}>Bright</h2>
          <a href="/work" style={{
          display: 'inline-block',
          padding: '8px 40px' ,
          fontSize: '16px',
          backgroundColor: 'transparent',
          color: 'white',
          border: '1px solid white',
          textDecoration: 'none',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = 'black';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'white';
        }}
        >
         Work
        </a>
        </div>
        <div style={{
      position: 'relative',
      width: '100%',
      height: '41vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
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

      <div style={{
        background: 'url("https://4.bp.blogspot.com/-U_cA_ieS9EA/V9luo62UmLI/AAAAAAAAMNQ/NLtCABaivg0mjUa1wC0XKVFebLwhcqyPgCLcB/s1600/kimi-no-na-wa-13.jpg") no-repeat center center/cover',
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh', // Adjust the height as needed
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',

      }}>
         <div style={{ color: 'white',
                      padding: '10%', 
                      paddingLeft: '100px', 
                      justifyContent: 'flex-end',
                     }}> 
          <h1 style={{ color: 'white', fontSize: '17px', marginBottom: '0.01em'}}>Thanonchai kantha</h1>
          <h1 style={{ color: 'red', fontSize: '50px', marginBottom: '0.01em' }}>About Me</h1>
          <h2 style={{ color: 'white',fontSize: '25px', marginBottom: '0.2em'}}>Bright</h2>
          
          <a href="/about" style={{
          display: 'inline-block',
          padding: '8px 40px' ,
          fontSize: '16px',
          backgroundColor: 'transparent',
          color: 'white',
          border: '1px solid white',
          textDecoration: 'none',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = 'black';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'white';
        }}
        >
         About
        </a>
        </div>
        
        <div style={{
      position: 'relative',
      width: '100%',
      height: '41vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
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
      
    </div>
    
  





    );
}





