import React, { useState } from 'react';
import './SplitLayout.css';
import DisplayChallenge from '../../components/DisplayChallenge';
import Editor from '../../components/Editor';

const ChallengePage = () => {

    const [selectedLang, setselectedLang] = useState('python');
    let [code, setCode] = useState("");



  const [leftWidth, setLeftWidth] = useState('50%');

  const handleResize = (e) => {
 // Calculate the new width based on mouse movement
    const newWidth = (e.clientX / window.innerWidth) * 100;

    // Set the width within certain bounds (adjust these values as needed)
    const minWidth = 40; // Minimum width for the left panel
    const maxWidth = 70; // Maximum width for the left panel

    // Calculate the center position
    const center = 50;

// Ensure the new width is within the bounds and stop when moving to the left at the center
  const clampedWidth = Math.max(Math.min(newWidth, center, maxWidth), minWidth);

    // Set the leftWidth
    setLeftWidth(`${clampedWidth}%`);
  };    
    
  const stopResize = () => {
    // Stop resizing by removing the event listener
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', stopResize);
  };

  const startResize = () => {
    // Start resizing by adding the event listener
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', stopResize);
  };

   
 
    const question =
        {
            id: "1",
            statement: "In this challenge, the user enters a string and a substring. You have to print the number of times that the substring occurs in the given string. String traversal will take place from left to right, not from right to left. ",
            Input_Format: "The first line of input contains the original string. The next line contains the substring.",
            Output_Format: "Output the integer number indicating the total number of occurrences of the substring in the original string.",
            Sample_Input: "ABCDCDC",
            Sample_Output: "2",
        } 


        
  return (
    <div className="split-layout">
      <div className="left-panel" style={{ width: leftWidth, color: "wheat" }}>
        <DisplayChallenge question={question} />
      </div>

      <div className="resize-bar" onMouseDown={startResize}></div>
      
      <div className="right-panel" style={{ color: "wheat", width: `calc(100% - ${leftWidth})` }}>
        <Editor 
                selectedLang={selectedLang}
                setselectedLang={setselectedLang}
                code={code}
                setCode={setCode}
                height="400px"/>
      </div>
    </div>
  );
};

export default ChallengePage;
