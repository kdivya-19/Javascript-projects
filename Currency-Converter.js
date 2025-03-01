const BASE_URL="https://v6.exchangerate-api.com/v6/eb813488ef5ad54153b9d331/latest/USD";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");
let fromcon=document.querySelector(".from select");
let tocon=document.querySelector(".To select");

// console.log(btn)
// console.log(dropdowns);
for(let options of dropdowns){
    for(currencycode in countryList){
        // console.log(currencycode, countryList[currencycode]);
        let newoption=document.createElement("option")
        newoption.innerText=currencycode;
        newoption.value=currencycode;
        if(options.name === "fr" && currencycode === "USD"){
            newoption.selected="selected";
        }
        else if(options.name === "to" && currencycode === "INR") 
        {
            newoption.selected="selected";
        }
        options.append(newoption);
    }
    options.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })
}

const updateflag=(element)=>{
    let currcode=element.value;
    console.log(currcode);
    let countrycode=countryList[currcode]
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`
    let img=element.parentElement.querySelector("img")
    img.src = newsrc;
}


btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    console.log("btn clicked")
    // Call the function to get the exchange rate for the specific currency
    getSingleCurrencyExchangeRate();

});

// Replace with your actual API key
// The currency code you want (e.g., EUR, GBP, JPY, etc.)

// Construct the URL

// Function to fetch exchange rate for a single currency
function getSingleCurrencyExchangeRate() {
    let amount= document.querySelector(".amount input")
    let amtVal= parseFloat(amount.value);;
    // console.log(amount)
    // console.log(amtVal)
    if(isNaN(amtVal) || amtVal<0){
        amtVal=1
        amount.value="1"
    }
    console.log(fromcon.value)
    console.log(tocon.value)
    let newurl=  `https://v6.exchangerate-api.com/v6/eb813488ef5ad54153b9d331/latest/${fromcon.value}`;
    let finalvalue = document.querySelector(".result input")
    fetch(newurl)
    .then(response => {
        // Check if the response is successful
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Check if the result is 'success'
        if (data.result === 'success') {
        // Fetch the exchange rate for the target currency (e.g., EUR)
            const exchangeRate = data.conversion_rates[tocon.value];
            
            if (exchangeRate) {
                r = exchangeRate * amtVal; 
                finalvalue.value = `${amtVal} ${fromcon.value} = ${r.toFixed(2)} ${tocon.value}`;
            } else {
                console.error(`Error: Conversion rate for ${targetCurrency} not found`);
            }
        } else {
        console.error('Error:', data.error-type || 'Unknown error');
        }
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
}


