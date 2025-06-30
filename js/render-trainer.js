const urlParams = new URLSearchParams(window.location.search)
const trainerId = urlParams.get('id')
const trainer = trainers[trainerId]

if (trainer) {
	document.querySelector('.consequential__information-img img').src =
		trainer.image
	document.querySelector('.consequential__title').textContent = trainer.name

	const hashtagsContainer = document.querySelector('.hashtags')
	hashtagsContainer.innerHTML = ''
	trainer.hashtags.forEach(tag => {
		const p = document.createElement('p')
		p.classList.add('consequential__hashtags')
		p.textContent = tag
		hashtagsContainer.appendChild(p)
	})

	const textBox = document.querySelector('.consequential__text-box')
	textBox.innerHTML = `
		<p class="consequential__text">${trainer.position}</p>
		<p class="consequential__text">${trainer.experience}</p>
		<p class="consequential__text">
			Телефон:
			<a href="tel:${trainer.phoneRaw}" class="consequential__text-link">${trainer.phone}</a>
		</p>
		<p class="consequential__text">Instagram: <a href="#">${trainer.instagram}</a></p>
	`

	document
		.querySelectorAll('.consequential__box-wrapper')[0]
		.querySelector('p').textContent = trainer.specialization
	document
		.querySelectorAll('.consequential__box-wrapper')[1]
		.querySelector('p').textContent = trainer.education
	document
		.querySelectorAll('.consequential__box-wrapper')[2]
		.querySelector('p').textContent = trainer.achievements
	document.querySelector('.consequential__individual-text').textContent =
		trainer.individual
} else {
	document.querySelector('.consequential__inner').innerHTML =
		'<p>Тренер не найден</p>'
}
