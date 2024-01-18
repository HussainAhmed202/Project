import React, { useEffect, useState } from 'react';
import './SplitLayout.css';
import DisplayChallenge from '../../components/DisplayChallenge';
import Editor from '../../components/Editor copy';
import { useParams } from 'react-router-dom';
import { SubmitButton } from '../../components/SubmitButton';

const ChallengePage = () => {

    const [selectedLang, setselectedLang] = useState('python');
  let [code, setCode] = useState("");
  let [question, setQuestion] = useState("");

  // id of the selected question passed via URL
  const { questionID } = useParams();
  console.log(questionID);

  useEffect(() => {
     
    const fetchQuestion = async (questionID) => {
        
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/question/${questionID}`);
        const data = await response.json(); 
        console.log(data);
        setQuestion(data);

      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    if (questionID) {
      fetchQuestion(questionID);
    }
  }, []);





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

   
    function handleRun() {
        console.log('Running the code');        
    }

   
    function handleTestCases() {
        console.log('Running the test cases');        
  }
  
  function submitProject() {
    console.log("Submitting the project");
    
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
          height="500px" />
        <SubmitButton
            name="Submit"
            plural="Submitting"
          items={{ "Run": handleRun, "Run Test Cases": handleTestCases }}
          method={submitProject}
          />
         
      </div>
    </div>
  );
};

export default ChallengePage;
