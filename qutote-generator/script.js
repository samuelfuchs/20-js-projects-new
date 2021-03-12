let apiQuotes = []

//show new quote
function newQuote() {
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)
}

// get quotes from API
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiURL)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        //catch error here
    }
}

//on load
getQuotes()