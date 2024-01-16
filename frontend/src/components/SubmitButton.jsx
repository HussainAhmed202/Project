import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Dropdown from 'react-bootstrap/Dropdown';

export function SubmitButton({name,plural,items,method}) {
  const [isLoading, setLoading] = useState(false);
  let entries = Object.entries(items);
  
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


    async function handleClick() {
    // sends the code to the backend
      setLoading(true);
      method();

    // try {
    //   const response = await fetch('http://127.0.0.1:8000/execute/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ code: codeContent }),
    //   });

    //   if (response.ok) {
    //     console.log('Data added successfully!');
  
    //   } else {
    //     console.error('Error adding data:');
    //   }
    // } catch (error) {
    //   console.error('Network error:', error.message);
    // }
  };







    return (
        <>
          <Dropdown as={ButtonGroup} style = {{marginTop:"5px"}}>
          <Button style={{ backgroundColor: "rgb(141, 3, 141)" }}
      variant="outline-dark"
      disabled={isLoading}
            onClick={!isLoading ? handleClick : null}>
      {isLoading ? plural : name}
    </Button>

      <Dropdown.Toggle split variant="outline-dark"  style={{backgroundColor:"rgb(141, 3, 141)"}}  id="dropdown-split-basic" />
          <Dropdown.Menu>        
           {entries.map(([key, value], index) => (
    <Dropdown.Item key={index} onClick={value} href="#">
      {key}
    </Dropdown.Item>
  ))}
      </Dropdown.Menu>
    </Dropdown>

        </>
    )
}