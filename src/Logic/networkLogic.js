import apiKey from '../api-key.json';

const API_KEY = apiKey["apisheets"];
const SPREADSHEET_ID = "1AjYoPZ7dm-40oHbyzfXHGjReDri6MtdTEAP22NJRKs0";
const RANGE = "Portfolio!A2:C10";
const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;

async function getSheet() {
  var fetchedJson = await fetchData(URL);
  var cleanJson = await parseSheetJson(fetchedJson);
  return cleanJson;
}

async function fetchData(url){
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

async function parseSheetJson(json){
    //this function just get the array out the json from the sheet api, without all
    // the other shit and checks for empty fields

    var cleanJsonArray = [];
    for (const element of json["values"]) {
        if (element !== "")        
        {
            cleanJsonArray.push(element);
        }
    }
    return cleanJsonArray;
}

export default getSheet;