import React, { useEffect, useState } from 'react';
import './SplitLayout.css';
import Editor from '../../components/Editor';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { useParams } from 'react-router-dom';
import { SubmitButton } from '../../components/SubmitButton';
import BrandExample from '../../components/Navbar';


const Project = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedLang, setselectedLang] = useState('python');
  let [code, setCode] = useState("");
  let [projectName, setProjectName] = useState("project")
  
  // id of the selected project passed via URL
  const { projectID } = useParams();





  useEffect(() => {
     
    const fetchProject = async (projectID) => {
        
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/project-detail/${projectID}`);
        const data = await response.json(); 
        setCode(data.projectContent);
        setProjectName(data.projName);

      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    if (projectID) {
      fetchProject(projectID);
    }
  }, []);

    
  async function handleRun() {
    console.log('Running the code');
    console.log(selectedLang);
    console.log(inputText);
    console.log(code);
    
    let dataToSend = JSON.stringify(
      {
        "language": selectedLang,
        "input": inputText,
        "code": code,
      });
    
     const response = await fetch("http://127.0.0.1:8000/api/exe", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: dataToSend});
          
        if (response.ok) {
            let ans = await response.json();
            console.log(ans);
        }
        else {
          console.log("error");
        }
    
    
    
  }


  function handleDownload() {
    console.log('Downloading file');
  }

   async function saveProject() {
     if (typeof projectID === 'undefined') {
        console.log("Saving new project"); 
    
        // new project
        let dataToSend = JSON.stringify({
          "projName": projectName,
          "projectContent": code,
          "username": localStorage.getItem("username")
        });
        const response = await fetch("http://127.0.0.1:8000/api/register-project", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: dataToSend});
          
        if (response.ok) {
            let ans = await response.json();
            console.log(ans);
        }
        else {
          console.log("error");
        }
     }
     else {
       // save edit
       console.log("Editing project"); 
    
        // new project
       let dataToSend = JSON.stringify({
          "id": projectID,
          "projectContent": code,
        });
        const response = await fetch(`http://127.0.0.1:8000/api/update-project/${projectID}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: dataToSend});
          
        if (response.ok) {
            let ans = await response.json();
            console.log(ans);
        }
        else {
          console.log("error");
        }
     }

     
  };

  function handleDebug() {
        console.log('Debugging the code');        
    }

 
     const handleInputChange = (event) => {
       setInputText(event.target.value);
        
  };
  
   const handleProjectNameChange = (event) => {
        setProjectName(event.target.value);
        
    };

  return (
    
    <>
    <BrandExample/>
    

   <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <div className="box" style={{ marginBottom: '20px' }}>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter your input here"
            style={{ width: '100%', height: '150px',marginTop:"8px" }}
          />
        </div>

        <div className="box" style={{ marginBottom: '20px' }}>
          <textarea
            placeholder="Output will appear here"
            readOnly
            style={{ width: '100%', height: '150px' }}
          />
        </div>
      </div>
           
      <div style={{ flex: 1, padding: '20px', position: 'relative' }}>
        <Editor
          selectedLang={selectedLang}
          setselectedLang={setselectedLang}
          code={code}
          setCode={setCode}
          height="470px"
           width="100%" />
         
        <div style={{ position: 'absolute', top: '25px', left: '221px' }}>
          <SubmitButton
            name="Save"
            plural="Saving"
             items={{ "Run": handleRun, "Debug": handleDebug, "Download": handleDownload }}
             method={saveProject}/>
         </div>

          <div className="box" style={{position: 'absolute', top: '30px', right: '27px' }}>
          <textarea
            value={projectName}
             placeholder="Project Name"
             onChange={handleProjectNameChange}
          
          style={{ width: '170px', height: '30px' }}
          />
          </div>
        </div>
      </div>
      </>

  );
};

export default Project;
