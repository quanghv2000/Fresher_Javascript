import fetch from "node-fetch";

async function fetchApi() {
  const url = new URL(
    "https://hola-boarding-house.up.railway.app/api/typeOfRental"
  );
  const response = await fetch(url);
  // waits until the request completes...
  console.log(response);
}

fetchApi();