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
    

    // id of the selected project passed via URL
    const { projectID } = useParams();
    //let [userProjectID, setUserProjectID] = useState(projectID);



 useEffect(() => {
    const fetchProject = async (projectID) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/project-detail/${projectID}`);
            const data = await response.json(); // server return the project object
            setCode(data.ProjectContent);

        } catch (error) {
            console.error('Error fetching project:', error);
      }
    };

    fetchProject(projectID);
  }, []);


 
   
  

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
