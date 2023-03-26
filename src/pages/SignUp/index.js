import React, {useState, useEffect} from 'react';
import range from 'lodash/range';
import { StaggeredMotion, spring, presets } from 'react-motion';
import img1 from "./0.jpg";
import img2 from "./1.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import "./singUp.css";


const SignUp = () => {
  const list1 = ["1","2","3","4","5","6"]
  const [list2, setList2] = useState(list1.slice(0,3));
  const [xyAxis, setXyAxis] = useState({x: 250, y: 300});
  const Images = [img1, img2, img3, img4, img5];

  useEffect(()=>{
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseLeave);
  },[]);

  const handleMouseMove = ({pageX: x, pageY: y}) => {
    setXyAxis({x, y});
  };

  const handleMouseLeave = ({touches}) => {
    handleMouseMove(touches[0]);
  };

  const restList = ()=>{
    setList2(list1)
  };

  const getPrevStyle = (prevStyles) => {
    const endValue = prevStyles.map((_, i)=>{
      return i === 0 ?
      xyAxis :
      {
        y: spring(prevStyles[i - 1].y, presets.wobbly),
        x: spring(prevStyles[i - 1].x, presets.wobbly)
      }
    });
    return endValue;
  };

  return (
    <div>
      <div>
        {
          list2.map((elem)=>
          <div>
            {elem}
          </div>
          )
        }
      </div>
      <h5 onClick={()=>{
        restList("more")
      }}>SHOW MORE</h5>
    <StaggeredMotion
      defaultStyles={range(5).map(() => ({x: 0, y: 0}))}
      styles={getPrevStyle}>
      {balls =>
        <div className="demo1">
          {balls.map(({x, y}, i) =>
            <div
              key={i}
              className="chats-heads"
              style={{
                WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
                transform: `translate3d(${x}px, ${y}px, 0)`,
                zIndex: balls.length - i,
                backgroundImage: `url(${Images[i]})`
              }} />
          )}
          <h1
          className="name-in-header"
          style={{
            transform: `translate3d(${100}px, ${100}px, 0)`
          }}
          >Rohit</h1>
        </div>
      }
    </StaggeredMotion>
    </div>
  );
};

export default SignUp;
