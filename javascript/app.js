
const advBtn = document.querySelector(".advice__button")
const advTxt = document.querySelector(".advice__text");
const advId = document.querySelector(".advice__id");


const fetchQuote = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await fetch('https://api.adviceslip.com/advice', config)
    const parsedRes = await res.json()
    console.log(parsedRes.slip.id) 
  
    advId.textContent = ' '
    advId.append(`Advice #${parsedRes.slip.id}`)

    const flyQuotes = `"${parsedRes.slip.advice}"`
    return flyQuotes
}

const addQuote = async() => {
    advTxt.classList.add('fade-out')
    const quoteText = await fetchQuote();

    advTxt.append(quoteText)
    advTxt.textContent = `${quoteText}`
    
    advTxt.classList.remove('fade-out')
 
    
}


advBtn.addEventListener('click', addQuote)


