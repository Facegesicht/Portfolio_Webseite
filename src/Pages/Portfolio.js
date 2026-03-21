import '../App.css';
import React, { useEffect } from "react";

function Portfolio() {
      // Function to run once
  const runOnce = () => {
    console.log("This runs only once when the component opens!");
    // Add any logic you need here
  };

  // useEffect with empty dependency array runs once
  useEffect(() => {
    runOnce();
  }, []); // empty array ensures it runs only once
  return (
    <div className="App-main">
      <h1>Diese Seite ist über CMS implementiert prototype mmh cool spaß ich habe spaß</h1>
      {poop()}
    </div>
  );
}

function poop(){
    console.log("hallo")
}

async function getData() {
  const url = "GET https://sheets.googleapis.com/v4/spreadsheets/1AjYoPZ7dm-40oHbyzfXHGjReDri6MtdTEAP22NJRKs0/values/Sheet1?key=AIzaSyAcR8Q7zW2-40lOEChZipZ-xHr-U2u-RKc";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

export default Portfolio;