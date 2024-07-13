// 🌟 Exercise 1 : Giphy API
// Instructions:
// With your newly accumulated knowledge of the Fetch API lets write some cool code!
// * You will work with this part of the documentation
// * You will use this Gif URL: `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
// Explanation of the Gif URL and the queries:
// * q Request Parameter: Search query term or phrase. Above, the URL is searching for "hilarious" gifs
// * rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation
// * api_key Request Parameter : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// 1. Create a program to retrieve the data from the API URL provided above. Use the `fetch()` method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive. Make sure to check the status of the Response and to catch any occurring errors.

const apiUrl =
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// 🌟 Exercise 2 : Giphy API
// Instructions:
// 1. Read carefully the documentation to understand all the possible queries that the URL accept.
// 2. Use the Fetch API to retrieve 10 gifs about the "sun". The starting position of the results should be 2. Make sure to check the status of the Response and to catch any occurring errors.
// 3. Console.log the Javascript Object that you receive.

const sunApiUrl =
  "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(sunApiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// 🌟 Exercise 3 : Async Function
// Instructions:
// Improve the program below:
//
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
//
// 1. Create an `async` function, that will `await` for the above GET request. The program shouldn't contain any `then()` method.
// 2. Make sure to check the status of the Response and to catch any occurring errors.

async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

getStarship();

// 🌟 Exercise 4: Analyze
// Instructions:
// Analyse the code provided below - what will be the outcome?
//
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }
//
// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }
//
// asyncCall();

// Analysis:
// The outcome of this code will be:
// 1. "calling" will be logged to the console immediately.
// 2. After a 2-second delay:
//    - "resolved" will be logged to the console.
//
// Explanation:
// - The `asyncCall` function is called immediately.
// - It logs "calling" to the console.
// - Then it awaits the result of `resolveAfter2Seconds()`.
// - `resolveAfter2Seconds()` returns a Promise that resolves after 2 seconds with the value 'resolved'.
// - After 2 seconds, the Promise resolves, and the await completes.
// - Finally, "resolved" is logged to the console.
