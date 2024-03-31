'use strict'

function onGetQuotes() {
    getQuotes(renderQuotes)
}

function renderQuotes(data) {
    console.log(data)
    // saveToStorage('quotes', data)
}