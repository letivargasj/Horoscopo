const CardDailyHoroscope = document.querySelector('#CardDailyHoroscopo').content
const contenedor = document.querySelector('.contenedor')
const fragment = document.createDocumentFragment()
let dailyHoroscope = []

document.addEventListener('DOMContentLoaded', () => {
    loadHoroscope()
})

const loadHoroscope = () => {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'adc945c8cfmshc079843a7036b3cp1f019ejsnb4f51094f00d',
		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
	    }
    };

    fetch('https://horoscope-astrology.p.rapidapi.com/horoscope?day=today&sunsign=libra', options)
        .then(response => response.json())
        .then(response => {
            dailyHoroscope = response
            console.log('horoscopo:', dailyHoroscope.sunsign)
            creaCardsHoros()
            console.log('horoscopo:', dailyHoroscope.sunsign)
        })
        .catch(err => console.error(err));
}


const creaCardsHoros = () => {
    dailyHoroscope.forEach( (areas) => {
        CardDailyHoroscope.querySelector('.principal-horoscopo').textContent = areas.sunsign
        const clone = CardDailyHoroscope.cloneNode(true)        
        fragment.appendChild(clone)
    })

    CardDailyHoroscope.appendChild(fragment)
}
