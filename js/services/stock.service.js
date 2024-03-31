'use strict'

var gCache = loadFromStorage('stocksCache') || {}

function getQuotes(onSuccess, symbol) {
    
    if(gCache[symbol] && Date.now() - gCache[symbol].ts < 10_000) {
        console.log('From Cache')
        onSuccess(gCache[symbol].data)
        return
    }
    const url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/2023-01-09/2023-02-09?adjusted=true&sort=asc&limit=120&apiKey=30o6WIqkke5zq1mfL0S6YF05n10DJe4o`

    $.get(url, rawData => {
        const data = rawData.results.map(res => {
            return {
                date: new Date(res.t).toISOString().slice(0, 10),
                price: res.c,
            }
        })
        gCache[symbol] = { data, ts: Date.now() }

        saveToStorage('stocksCache', gCache)
        console.log('From Network')
        onSuccess(data)
    })
}