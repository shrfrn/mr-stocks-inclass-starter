'use strict'

function onGetQuotes() {
    getQuotes(renderQuotes)
}

function renderQuotes(data) {
    console.log(data)
    const elList = document.querySelector('.quote-list')
    const strHtml = data.map(quote => `
        <li>
            <span class="quote-date">${quote.date}</span>
            <span class="quote-price">${quote.price}</span>
        </li>`).join('')
    
    elList.innerHTML = strHtml
    // saveToStorage('quotes', data)
}