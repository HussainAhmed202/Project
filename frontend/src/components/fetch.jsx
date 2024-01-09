import { useEffect, useState } from "react";

export default function Users() {

    let [model, setModel] = useState("user")    
    let [responseData,setResponseData] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/${model}/`)
            .then(response => response.json())
            //.then(data => console.log(data))
            .then(data => setResponseData(data))
    }, [model]);


    return (
        <>
            <h1>List {model} Database Models</h1>
            <button onClick={() => { setModel("user") }}>User</button>
            <button onClick={() => { setModel("project") }}>Project</button>
            {responseData.map(item => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>
            }                
            )};
        </>
    );

}