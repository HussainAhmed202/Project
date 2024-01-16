import React, { useEffect, useState } from 'react';


const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    else {
        console.log('No cookie');
    }
    return cookieValue;
}



const CSRFToken = () => {

    let [csrftoken, setcsrftoken] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/csrf');
                if (response.ok) {
                    console.log(response.headers.get('Set-Cookie'));
                    setcsrftoken(getCookie('csrftoken'));
                    console.log(csrftoken);
 
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
 }, [])




    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};
export default CSRFToken;