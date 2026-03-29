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
      <h2>{output ? JSON.stringify(output) : "Loading .."}</h2>
    </div>
  );
}



export default Portfolio;