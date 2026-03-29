import '../App.css';
import React, { useEffect, useState } from "react";
import getSheet from '../Logic/networkLogic';


function Portfolio() {
  const [output, setOutput] = useState(null);
  // useEffect with empty dependency array runs once
  useEffect(() => {
    async function fetchData(){
      const data = await getSheet();
      setOutput(data);
    }
    fetchData();
  }, []); // empty array ensures it runs only once
  return (
    <div className="App-main">
      <h1>Diese Seite ist über CMS implementiert prototype mmh cool spaß ich habe spaß</h1>
      {output ? (
      <ul>
        {output.map((item, index) => (
          <li key={index}>
            <h3>{item[0]}</h3>
            <p>{item[1]}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>Loading...</p>
    )}

    </div>
  );
}


export default Portfolio;