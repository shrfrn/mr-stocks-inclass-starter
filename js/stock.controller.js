'use strict'

function onGetQuotes(ev) {
	const symbol = ev.target.value
	getQuotes(renderQuotes, symbol)
}

function renderQuotes(data) {
	console.log(data)
	const elList = document.querySelector('.quote-list')
	const strHtml = data
		.map(
			quote => `
        <li>
            <span class="quote-date">${quote.date}</span>
            <span class="quote-price">${quote.price}</span>
        </li>`
		)
		.join('')

	elList.innerHTML = strHtml
	rederChart(data)
}

function rederChart(data) {
	const ctx = document.querySelector('canvas')

	new Chart(ctx, {
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
