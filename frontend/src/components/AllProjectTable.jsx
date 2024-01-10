import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Trash, CloudDownload, Archive } from 'react-bootstrap-icons';
import {getProjectTable,updateProjectTable} from '../js/database'


async function handleTrashClick(dataRow, projectList, setProjectList) {
    //dataRow is the selected project
    // projectList is the state variable which is array of non-trash projects
    // setProjectList is the updator method of projectList

    console.log(`Previous object\n ${JSON.stringify(dataRow)}`);

    // user trashes project
    dataRow.IsTrash = true;
    console.log(`Updated object\n ${JSON.stringify(dataRow)}`);

    await updateProjectTable(dataRow);

    //remove the trashed record from display
    const list = projectList.filter(item => item.id !== dataRow.id);
    setProjectList(list);

}


async function handleArchiveClick(dataRow, projectList, setProjectList) {
    //dataRow is the selected project
    // projectList is the state variable which is array of all non-archived projects
    // setProjectList is the updator method of projectList

    console.log(`Previous object\n ${JSON.stringify(dataRow)}`);

    // user archives project
    dataRow.IsArchived = true;
    console.log(`Updated object\n ${JSON.stringify(dataRow)}`);

    await updateProjectTable(dataRow);

    //remove the archived record from display
    const list = projectList.filter(item => item.id !== dataRow.id);
    setProjectList(list);

}


async function handleDownloadClick(dataRow,workingProjectList,setWorkingProjectList) {
  // //dataRow is the selected project which the user wants to restore 
  // // workingProjectList is the state variable which is array of all trashed allProjectsList
  // // setWorkingProjectList is the updator method of workingProjectList

  // console.log(`Previous object\n ${JSON.stringify(dataRow)}`);
    
  // // user restores the trashed project
  // dataRow.IsTrash = true; 
  // console.log(`Updated object\n ${JSON.stringify(dataRow)}`);

  // await updateProjectTable(dataRow);
   
  // //remove the untrashed record from display
  // const list = workingProjectList.filter(item => item.id !== dataRow.idNon);
  // setWorkingProjectList(list);

}

export default function AllProjectTable() {
  
  const [allProjectsList, setAllProjectList] = useState([]);
 const [workingProjectList, setWorkingProjectList] = useState([]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedProjects = await getProjectTable();
        setAllProjectList(fetchedProjects);
      } catch (error) {
        console.error("Error in fetching allProjectsList:", error);
      }
    };

    fetchData();
  }, []); 


  
  useEffect(() => {
    // executes when allProjectsList state changes 

    console.log(`allProjectsList ${allProjectsList}`);

    if (allProjectsList.length > 0) {
      // allProjectsList fetched completely
      const filteredProjects = allProjectsList.filter((item) => !item.IsArchived && !item.IsTrash);
      setWorkingProjectList(filteredProjects);     
    }
  }, [allProjectsList]);


  useEffect(() => {
    // Executes when workingProjectList is updated
    console.log(`workingProjectList ${workingProjectList}`);

    if (workingProjectList.length === 0) {
      // fetch not complete
      console.log("Waiting for data...");
    }
  }, [workingProjectList]);

  
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Title</td>
            <td>Date Modified</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {workingProjectList.map((row) => (
            <tr key={row.id}>
              <td><a href="#">{row.ProjName}</a></td>
              <td>{row.DateModified}</td>
              <td>
                  
                <Archive
                   onClick={() => handleArchiveClick(row,workingProjectList,setWorkingProjectList)}
                    className="text-warning"
                    style={{ cursor: 'pointer' }}
                />  
                 <Trash
                 onClick={() => handleTrashClick(row,workingProjectList,setWorkingProjectList)}
                  className="text-danger"
                  style={{ cursor: 'pointer' }}
                />
                 <CloudDownload
                 // onClick={() => handleIconClick("download")}
                  className="text-primary"
                  style={{ cursor: 'pointer', marginRight: '5px' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};




