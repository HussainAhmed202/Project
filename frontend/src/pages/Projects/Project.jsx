import React, { useEffect, useState } from 'react';
import './SplitLayout.css';
import Editor from '../../components/Editor copy';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { useParams } from 'react-router-dom';


const Project = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [selectedLang, setselectedLang] = useState('python');
    let [code, setCode] = useState("");
    const { projectID } = useParams();



    useEffect(() => {
    setCode(projectID)
     },[])
   


 
   
  

     const handleInputChange = (event) => {
        setInputText(event.target.value);
        
    };

    return (
        <>
            <h2>Project Details for ID: {projectID}</h2>
            <Editor 
                selectedLang={selectedLang}
                setselectedLang={setselectedLang}
                code={code}
                setCode={setCode}
                height="400px"/>
            <div className="box">
                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Enter your input here"
                />
            </div>

            <div className="box">
                <textarea
                    placeholder="Output will appear here"
                    readOnly
                />
            </div>

            <div className="box">
                <textarea
                    value={code}
                    placeholder="get code text"
                    readOnly
                />
            </div>
           
            
            <div className="box">
                <textarea
                    value={selectedLang}
                    placeholder="get selected language"
                    readOnly
                />
            </div>
                
     
        </>
      
  );
};

export default Project;
