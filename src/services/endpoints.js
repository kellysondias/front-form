export async function getCountries() {
    const url = await fetch("https://amazon-api.sellead.com/country");
    const json = await url.json();
    return json;
  }
  
export async function getCities() {
    const url = await fetch("https://amazon-api.sellead.com/city");
    const json = await url.json();
    const filteredJson = json.filter((city) => city.name_ptbr !== null );
    return filteredJson;
  }