'use strict'

function getQuotes(onSuccess, symbol) {
    const url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/day/2023-01-09/2023-02-09?adjusted=true&sort=asc&limit=120&apiKey=30o6WIqkke5zq1mfL0S6YF05n10DJe4o`

    $.get(url, rawData => {
        const data = rawData.results.map(res => {
            return {
                date: new Date(res.t).toISOString().slice(0, 10),
                price: res.c,
            }
        })
        onSuccess(data)
    })
    // const rawData = loadFromStorage('quotes')
    // return onSuccess(data)
}