import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Dropdown from 'react-bootstrap/Dropdown';

export function SubmitButton({name,plural,items}) {
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


    async function handleClick(codeContent) {
    // sends the code to the backend
      setLoading(true);
      console.log("handle click");
      

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
      variant="outline-light"
      disabled={isLoading}
            onClick={!isLoading ? handleClick : null}>
      {isLoading ? plural : name}
    </Button>

      <Dropdown.Toggle split variant="outline-light"  style={{backgroundColor:"rgb(141, 3, 141)"}}  id="dropdown-split-basic" />
          <Dropdown.Menu>        
           {items.map((item, index) => (
             <Dropdown.Item key={index} href="#">{item}</Dropdown.Item>
           ))}
      </Dropdown.Menu>
    </Dropdown>

        </>
    )
}