import '../App.css';
import React, { useEffect, useState } from "react";
import apiKey from '../api-key.json';

function Portfolio() {
  const [output, setOutput] = useState(null);
  // useEffect with empty dependency array runs once
  useEffect(() => {
    async function fetchData(){
      const data = await getData();
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

const API_KEY = apiKey["apisheets"];
const SPREADSHEET_ID = "1AjYoPZ7dm-40oHbyzfXHGjReDri6MtdTEAP22NJRKs0";
const RANGE = "Tabellenblatt1";

async function getData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
  return null;
}

export default Portfolio;