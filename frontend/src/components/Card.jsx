//import React from 'react';
import CustomCard from './CustomCard'; 
//import data from '../data/carddate.json'; 
import { useEffect, useState } from 'react';

function YourMainComponent() {

  let [questions, setQuestions] = useState([]);

    // get data from the data base and store in an array data
  // data = Array [Object { title: "card", body: "xtz" },...]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/questions');
        if (response.ok) {
          const data = await response.json();  // Await the Promise
          //console.log(data);
          setQuestions(data);
          
        } else {
          console.error('Failed to fetch questions:', response.statusText);
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      {questions.map((item, index) => (
        <CustomCard key={index} questionID={item.id} title={item.title} body={item.statement}/>
      ))}
    </div>
  );
}

export default YourMainComponent;