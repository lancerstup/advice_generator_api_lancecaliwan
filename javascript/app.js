
const advBtn = document.querySelector(".advice__button")
const advTxt = document.querySelector(".advice__text");
const advId = document.querySelector(".advice__id");


const fetchQuote = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random', config)
    const parsedRes = await res.json()
    console.log(parsedRes) 
    const flyQuotes = `"${parsedRes.message}"`
    return flyQuotes
}

const addQuote = async() => {
    const quoteText = await fetchQuote();
    console.log(quoteText)
    advTxt.append(quoteText)
 
    
}



advBtn.addEventListener('click', () => {
        advTxt.textContent = ' '
        addQuote()
})

