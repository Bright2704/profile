import React from 'react'

type Props = {}

export default function loadingwork({}: Props) {
  return (
    <div style={{
        textAlign: 'center',
        position: 'fixed',  // Fixed position to cover the whole screen
        top: 0,             // Start from the top of the screen
        left: 0,            // Start from the left of the screen
        width: '100vw',     // Full viewport width
        height: '100vh',    // Full viewport height
        display: 'flex',    // Use flexbox for centering
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically
        overflow: 'hidden',       // Hide the overflowed part
        background: `url("https://cdn.pixabay.com/animation/2023/07/03/09/57/09-57-33-900_512.gif") no-repeat center center`,
        backgroundSize: 'contain', // Contain the gif within the div without cropping
        }}>
      {/* <img src="https://cdn.pixabay.com/animation/2023/07/03/09/57/09-57-33-900_512.gif" alt="Running Cat" /> */}
      <p style={{ position: 'absolute', bottom: '10%', width: '100%' }}>Loading...</p>
      </div>
  )
}