'use strict'

function getQuotes(onSuccess) {
    const rawData = loadFromStorage('quotes')
    const data = rawData.results.map(res => {
        return {
            date: new Date(res.t).toISOString().slice(0, 10),
            price: res.c,
        }
    })
    return onSuccess(data)
    
    const url = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-02-09?adjusted=true&sort=asc&limit=120&apiKey=30o6WIqkke5zq1mfL0S6YF05n10DJe4o`
    $.get(url, onSuccess)
}