export async function getProjectTable() {
    const URL = "http://127.0.0.1:8000/api/project";

    const project = await fetch(URL);
    const response = await project.json();
    return response;
}


export async function updateProjectTable(updatedData) {

    //exg: if we are updating record with id 4 then goto api/project/4/
    const URL = `http://127.0.0.1:8000/api/project/${updatedData.id}/`;

    const putResponse = await fetch(URL, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });

    // Check the response from the PUT request
    if (putResponse.ok) {
        console.log(`Data for project ${updatedData.id} updated successfully.`);
    } else {
        console.error(`Failed to update data for project ${updatedData.id}.`);
    }
}
