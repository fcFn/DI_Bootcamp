/*
Instructions: You will create a currencies converter:

In this application we're going receive data from two asynchronous sources. You
will use :
* This documentation
* Create your own API key by signing up - you will be able to make more requests
  :)

Note:
1. The program should take the currency which the user currently has and the
   currency in which they would like to receive, as well as the amount of money.
   Afterwards, the program will output the correct exchange rate based on the
   data from the APIs.
2. First, you need to fetch all the supported currencies, in order to add the
   currencies options (ie FROM - To) in the currency converter. Check out this
   page on Supported Codes Endpoint from the ExchangeRate API documentation.
3. To convert from a currency, to another one, you need to fetch conversion rate
   from the Pair Conversion API endpoint. Check out this page on Pair conversion
   requests from the ExchangeRate API documentation. Hint: You could also supply
   an optional AMOUNT variable in the query of the request.
4. Bonus: Add this "switch" button on the page, when clicked on it will switch
   the currencies and display the new amount converted. Example : if the
   conversion was from EUR to GBP, as soon as the button is clicked on, the
   conversion should be from GBP to EUR.
*/

const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your actual API key
const BASE_URL = "https://v6.exchangerate-api.com/v6";

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amount = document.getElementById("amount");
const convertBtn = document.getElementById("convert");
const switchBtn = document.getElementById("switch-currencies");
const result = document.getElementById("result");

// Fetch supported currencies and populate select elements
async function fetchCurrencies() {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/codes`);
    const data = await response.json();

    if (data.result === "success") {
      const currencies = data.supported_codes;
      currencies.forEach(([code, name]) => {
        const option = document.createElement("option");
        option.value = code;
        option.textContent = `${code} - ${name}`;
        fromCurrency.appendChild(option.cloneNode(true));
        toCurrency.appendChild(option);
      });
    } else {
      throw new Error("Failed to fetch currencies");
    }
  } catch (error) {
    console.error("Error fetching currencies:", error);
    result.style.display = "block";
    result.textContent = "Error fetching currencies. Please try again later.";
  }
}

// Convert currency
async function convertCurrency() {
  const fromCode = fromCurrency.value;
  const toCode = toCurrency.value;
  const amountValue = amount.value;

  if (!fromCode || !toCode || !amountValue) {
    result.textContent = "Please fill in all fields";
    return;
  }

  try {
    const response = await fetch(
      `${BASE_URL}/${API_KEY}/pair/${fromCode}/${toCode}/${amountValue}`
    );
    const data = await response.json();

    if (data.result === "success") {
      const convertedAmount = data.conversion_result.toFixed(2);
      const rate = data.conversion_rate.toFixed(4);
      result.style.display = "block";
      result.textContent = `${amountValue} ${fromCode} = ${convertedAmount} ${toCode} (Rate: 1 ${fromCode} = ${rate} ${toCode})`;
    } else {
      throw new Error("Conversion failed");
    }
  } catch (error) {
    console.error("Error converting currency:", error);
    result.textContent = "Error converting currency. Please try again later.";
  }
}

// Switch currencies
function switchCurrencies() {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  convertCurrency();
}

// Event listeners
convertBtn.addEventListener("click", convertCurrency);
switchBtn.addEventListener("click", switchCurrencies);

// Initialize
fetchCurrencies();
