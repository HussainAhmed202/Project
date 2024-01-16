import React, { useEffect, useState } from 'react';
import './SplitLayout.css';
import Editor from '../../components/Editor';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { useParams } from 'react-router-dom';
import { SubmitButton } from '../../components/SubmitButton';


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
            setCode(data.projectContent);

        } catch (error) {
            console.error('Error fetching project:', error);
      }
    };

    fetchProject(projectID);
  }, []);

    
    function handleRun() {
        console.log('Running the code');        
    }


    function handleDownload() {
        console.log('Downloading file');        
    }


    function handleDebug() {
        console.log('Debugging the code');        
    }

 
     const handleInputChange = (event) => {
        setInputText(event.target.value);
        
    };

    return (
        <>
            <Editor 
                selectedLang={selectedLang}
                setselectedLang={setselectedLang}
                code={code}
                setCode={setCode}
                height="400px" />
        
            <SubmitButton name="Save" plural="Saving" items={{"Run":handleRun, "Debug":handleDebug, "Download":handleDownload}} />
     


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
