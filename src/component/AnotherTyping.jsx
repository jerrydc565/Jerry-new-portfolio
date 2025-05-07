import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
function AnotherTyping() {
  return (
    <div>
      <span>
        <Typewriter
          words={[
            "Web Developer",
            "Programmer And Designer",
            "UI/UX Designser And Graphic Designer",
          ]}
          loop={1000}
          cursor
          cursorStyle="|"
          typeSpeed={30}
          deleteSpeed={20}
          delaySpeed={1500}
        />
      </span>
    </div>
  );
}

export default AnotherTyping
