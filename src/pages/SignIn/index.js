import "./signIn.css";
import React, { useState } from 'react';
import { spring, Motion } from 'react-motion';

const SignIn = () => {

  return (
    <div>
      <div className="signin-contianer">
        <Motion defaultStyle={{
          opacity: 0,
          marginLeft: -2000,
          padding: 0
        }} style={{
          opacity: spring(1),
          marginLeft: spring(100, { stiffness: 90, damping: 20 }),
        }}>
          {value =>
            <div style={{
              transform: `translateX(${value.marginLeft}px)`,
            }}
              className="div-container">
              <div style={{
                backgroundColor: "aqua",
              }} >
                A
              </div>
              <div style={{
                backgroundColor: "aqua"
              }} >
                B
              </div>
              <div style={{
                backgroundColor: "aqua"
              }} >
                C
              </div>
              <div style={{
                backgroundColor: "aqua"
              }} >
                D
              </div>
            </div>
          }
        </Motion>
      </div>
    </div>
  )
}

export default SignIn;