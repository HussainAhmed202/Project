export async function updateArchiveStatus(projectID) {
    try {
        const URL = `http://127.0.0.1:8000/api/update-archive/${projectID}`;
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectID),
        });

        // Check the response from the POST request
        if (response.ok) {
            console.log(`Data for project ${projectID} updated successfully.`);
        } else {
            console.error(`Failed to update data for project ${projectID}.`);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}


export async function updateTrashStatus(projectID) {
    try {
        const URL = `http://127.0.0.1:8000/api/update-trash/${projectID}`;
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectID),
        });

        // Check the response from the POST request
        if (response.ok) {
            console.log(`Data for project ${projectID} updated successfully.`);
        } else {
            console.error(`Failed to update data for project ${projectID}.`);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}
