import CodeMirror from '@uiw/react-codemirror';

import { loadLanguage } from '@uiw/codemirror-extensions-langs';


import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { eclipse } from '@uiw/codemirror-theme-eclipse';
import { monokai } from '@uiw/codemirror-theme-monokai';
import { quietlight } from '@uiw/codemirror-theme-quietlight';
import { useEffect, useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function Editor({ selectedLang, setselectedLang, code, setCode ,height}) {
  

  const [selectedTheme, setSelectedTheme] = useState(dracula);

  //    try {
  //     const response = await fetch('http://127.0.0.1:8000/execute/', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ code: codeContent }),
  //     });

  //     if (response.ok) {
  //       console.log('Data added successfully!');
  
  //     } else {
  //       console.error('Error adding data:');
  //     }
  //   } catch (error) {
  //     console.error('Network error:', error.message);
  //   }
  // };


  return (
    <>
      <div style={{ display: "flex" }}>
          <DropdownButton id="dropdown-button-dark-example2" variant="dark" className="mt-2" data-bs-theme="dark" title="Theme">
              <Dropdown.Item onClick={() => setSelectedTheme(vscodeDark)}>VSCodeDark</Dropdown.Item>
              <Dropdown.Item onClick={()=>setSelectedTheme(sublime)}>Sublime</Dropdown.Item>
              <Dropdown.Item onClick={()=>setSelectedTheme(dracula)}>Dracula</Dropdown.Item>
              <Dropdown.Item onClick={()=>setSelectedTheme(eclipse)}>Eclipse</Dropdown.Item>
              <Dropdown.Item onClick={()=>setSelectedTheme(monokai)}>Monokai</Dropdown.Item>
              <Dropdown.Item onClick={()=>setSelectedTheme(quietlight)}>Quietlight</Dropdown.Item>   
          </DropdownButton>

          <DropdownButton id="dropdown-button-dark-example2" variant="dark" className="mt-2" data-bs-theme="dark" title={selectedLang}>
              <Dropdown.Item onClick={()=>setselectedLang('python')}>Python</Dropdown.Item>
              <Dropdown.Item onClick={()=>setselectedLang('cpp')}>C++</Dropdown.Item>
              <Dropdown.Item onClick={()=>setselectedLang('java')}>Java</Dropdown.Item>
              <Dropdown.Item onClick={()=>setselectedLang('c')}>C</Dropdown.Item>
          </DropdownButton>
      </div>

            <CodeMirror
               value={code}
                height={height}
                theme={selectedTheme}
                extensions={[loadLanguage(selectedLang)]}     
          onChange={(value, viewUpdate) => {
            console.log('value:', value);
            setCode(value);
          }}
          options = {{
              mode: selectedLang,}
          }
            />

      
        </>

       
  );
}
export default Editor;



