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

        if (projectID) {
            fetchProject(projectID);
        }
  }, []);

    
    function handleRun() {
        console.log('Running the code');        
    }


    function handleDownload() {
        console.log('Downloading file');        
    }

  function saveProject() {
    console.log("Saving the project");
    
    // two cases: new project or exist project
    // get the project id

      
    }

    function handleDebug() {
        console.log('Debugging the code');        
    }

 
     const handleInputChange = (event) => {
        setInputText(event.target.value);
        
    };

   return (
   <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <div className="box" style={{ marginBottom: '20px' }}>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter your input here"
            style={{ width: '100%', height: '150px' }}
          />
        </div>

        <div className="box" style={{ marginBottom: '20px' }}>
          <textarea
            placeholder="Output will appear here"
            readOnly
            style={{ width: '100%', height: '150px' }}
          />
        </div>

        <div className="box" style={{ marginBottom: '20px' }}>
          <textarea
            value={code}
            placeholder="get code text"
            readOnly
            style={{ width: '100%', height: '300px' }}
          />
        </div>

        <div className="box" style={{ marginBottom: '20px' }}>
          <textarea
            value={selectedLang}
            placeholder="get selected language"
            readOnly
            style={{ width: '100%', height: '50px' }}
          />
        </div>
      </div>
           
      <div style={{ flex: 1, padding: '20px', position: 'relative' }}>
        <Editor
          selectedLang={selectedLang}
          setselectedLang={setselectedLang}
          code={code}
          setCode={setCode}
          height="500px"
          width="100%"
        />
        <div style={{ position: 'absolute', top: '25px', left: '221px' }}>
          <SubmitButton
            name="Save"
            plural="Saving"
             items={{ "Run": handleRun, "Debug": handleDebug, "Download": handleDownload }}
             method={saveProject}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
