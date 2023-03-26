import React from 'react';
const SignUP = React.lazy(() => import("../pages/SignUp"));
const SignIn = React.lazy(() => import("../pages/SignIn"));
const SprintPactice = React.lazy(() => import("../pages/PracticeSpring"));

function App() {
  return (
    <div className="App">
      <SprintPactice/>
      {/* <SignUP />
      <SignIn /> */}
    </div>
  );
}

export default App;
