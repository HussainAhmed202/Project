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

function Editor() {

    const [selectedTheme, setSelectedTheme] = useState(dracula);
    const [selectedLang, setselectedLang] = useState('python');
    const [isLoading, setLoading] = useState(false);

     useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

        
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
                    <Dropdown.Item onClick={()=>setselectedLang('javascript')}>JavaScript</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setselectedLang('java')}>JAVA</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setselectedLang('c')}>C</Dropdown.Item>
                </DropdownButton>
            </div>

            <CodeMirror
               // value={code}
                height="500px"
                theme={selectedTheme}
                extensions={[loadLanguage(selectedLang)]}     
                onChange={(value, viewUpdate) => {
                    console.log('value:', value);
                }}
            />
    
             <Button
      variant="outline-light"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Submitting' : 'Submit'}
    </Button>


        
        
        
        </>

       
  );
}
export default Editor;