'use strict'

var gChart = null 

function onGetQuotes(ev) {
    
    adjustDisplay('loading')    

    const symbol = ev.target.value.toUpperCase()
	getQuotes(renderQuotes, symbol)
}

function renderQuotes(data) {
    if(!data) {
        adjustDisplay('no-data')    
        return
    }
	const elList = document.querySelector('.quote-list')
	const strHtml = data.map(quote => `
        <li>
            <span class="quote-date">${quote.date}</span>
            <span class="quote-price">${quote.price}</span>
        </li>`).join('')

	elList.innerHTML = strHtml
	rederChart(data)

    adjustDisplay('data')    
}

function rederChart(data) {
	const ctx = document.querySelector('canvas')

    if(gChart) gChart.destroy()

	gChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: data.map(quote => quote.date),
			datasets: [
				{
					label: '# of Votes',
					data: data.map(quote => quote.price),
					borderWidth: 1,
				},
			],
		},
		options: {
            maintainAspectRatio: false,
			scales: {
				y: {
					beginAtZero: false,
				},
			},
		},
	})
}

function adjustDisplay(status) {

    document.querySelector('.stock-data').classList.add('hidden')
    document.querySelector('.msg').classList.add('hidden')
    document.querySelector('.loader').classList.add('hidden')

    switch (status) {
        case 'loading':
            document.querySelector('.loader').classList.remove('hidden')
            break;
        case 'no-data':
            document.querySelector('.msg').classList.remove('hidden')
            break;
        case 'data':
            document.querySelector('.stock-data').classList.remove('hidden')
            break;
    }
}