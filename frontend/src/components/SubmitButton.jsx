import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export function SubmitButton() {
    return (
        <>
            <Dropdown as={ButtonGroup} style = {{marginTop:"5px"}}>
          <Button style={{ backgroundColor: "rgb(141, 3, 141)" }}
      variant="outline-light"
      disabled={isLoading}
            onClick={!isLoading ? handleClick : null}>
      {isLoading ? 'Submitting' : 'Submit'}
    </Button>

      <Dropdown.Toggle split variant="outline-light"  style={{backgroundColor:"rgb(141, 3, 141)"}}  id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-2">Run Code</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Run Test Cases</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        </>
    )
}