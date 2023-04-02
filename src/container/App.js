import React from 'react';
const SprinGPactice = React.lazy(() => import("../pages/PracticeSpring"));
const MotionPractice = React.lazy(() => import("../pages/MotionPractice"));
const StaggeredMotion = React.lazy(() => import("../pages/StarggeredMotionPractice"));

function App() {
  return (
    <div className="App">
      <StaggeredMotion/>
      <SprinGPactice/>
      <MotionPractice/>
    </div>
  );
}

export default App;
