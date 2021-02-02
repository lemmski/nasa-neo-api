import progressBar from "progress-bar";
const bar = progressBar.create(process.stdout, 60);
console.log("Starting to fetch data to save largest objects by month");
// Dye the bar green :) and pad percentage to a length of 3 with zeroes.
bar.format = "\x1b[32m$bar;\x1b[m $percentage,2:0;% loaded.";
bar.update(0.5);
bar.update(0.6);
console.log("");

const dataStorage = {};

fetchPage();
async function fetchPage(
  url = `http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=${
    process.env.NASA_API_KEY ?? "DEMO_KEY"
  }`
) {
  const response = await fetch(url).then((response) => response.json());
  console.log("success:", response);
}
