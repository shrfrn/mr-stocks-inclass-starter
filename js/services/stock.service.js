'use strict'

function getQuotes(onSuccess) {
    const rawData = loadFromStorage('quotes')
    return onSuccess(rawData)
    
    const url = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-02-09?adjusted=true&sort=asc&limit=120&apiKey=30o6WIqkke5zq1mfL0S6YF05n10DJe4o`
    $.get(url, onSuccess)
}