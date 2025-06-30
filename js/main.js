const selectors = {
	burgerMenu: '.header__burger-menu',
	sidebar: '.sidebar',
	overlay: '.overlay',
	stockSwiper: '.swiper-stock',
	newsSwiper: '.swiper-news',
	desktopSlider: '.desktop-slider',
	mobileSlider: '.mobile-slider',
	fitnessTabImg: '.fitness__tab-img',
	effectiveSlider: '.effective__box-slider',
	stockButtons: '.stock__box-btn .stock-btn',
	stockNav: '.stock__swiper-prev, .stock__swiper-next',
	tabs: '.tab__button-btn-text',
	tabSelect: '#tabSelect',
	popup: '.fitness__popup',
	popupOverlay: '.fitness__overlay',
	popupForm: '.popup__form',
	openPopup: '.open__fitness-popup',
	closePopup: '.form__close-icon',
	accordion: '.accordeon__triger',
	photogalleryBtn: '.photogallery-button',
	photogalleryExtra: '.extra-gallery',
	photogalleryInner: '.inner__photogallery',
	map: '#map',
	reviewsSwiper: '.reviews__slider .swiper',
	informationSwiper: '.information__slider .swiper',
	informationTabs: '.information-tab .tablinks',
	informationTabContents: '.information__wrapper',
	gallerySlider: '.gallery-slider',
	otherSlider: '.other-slider', // Добавляем новый селектор
	// gallerySlider: '.gallery-slider',
}

const toggleClass = (elements, className) =>
	elements.forEach(el => el.classList.toggle(className))

const initBurgerMenu = () => {
	const burger = document.querySelector(selectors.burgerMenu)
	const sidebar = document.querySelector(selectors.sidebar)
	const overlay = document.querySelector(selectors.overlay)

	burger.addEventListener('click', () =>
		toggleClass([burger, sidebar, overlay], 'active')
	)
}

const initSwipers = () => {
	const swiperConfigs = [
		{
			selector: selectors.stockSwiper,
			options: {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				pagination: { el: '.stock__swiper-pagination', clickable: true },
				navigation: {
					nextEl: '.stock__swiper-next',
					prevEl: '.stock__swiper-prev',
				},
				breakpoints: {
					1078: { slidesPerView: 3, spaceBetween: 30 },
					768: { slidesPerView: 2, spaceBetween: 20 },
					0: { slidesPerView: 1, spaceBetween: 30 },
				},
			},
			instance: null,
		},
		{
			selector: selectors.newsSwiper,
			options: {
				slidesPerView: 4,
				spaceBetween: 30,
				loop: true,
				pagination: { el: '.news__swiper-pagination', clickable: true },
				navigation: {
					nextEl: '.news__swiper-next',
					prevEl: '.news__swiper-prev',
				},
				breakpoints: {
					1078: { slidesPerView: 4, spaceBetween: 30 },
					768: { slidesPerView: 3, spaceBetween: 20 },
					0: { slidesPerView: 1, spaceBetween: 30 },
				},
			},
		},
		{
			selector: '.desktop-slider.multi-slide',
			options: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 30,
				pagination: {
					el: '.desktop_swiper-pagination',
					clickable: true,
					type: 'bullets',
				},
				loop: false,
				navigation: {
					nextEl: '.desktop-slider .swiper-button-next',
					prevEl: '.desktop-slider .swiper-button-prev',
				},
				on: {
					init: function () {
						console.log('Multi-slide slider initialized', this)
						console.log('Slides count:', this.slides.length)
					},
				},
			},
		},
		{
			selector: '.desktop-slider.single-slide',
			options: {
				slidesPerView: 4,
				spaceBetween: 30,
				speed: 1800,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				},
				loop: true,
				pagination: {
					el: '.desktop_swiper-pagination',
					clickable: true,
				},
				breakpoints: {
					768: { slidesPerView: 4 },
					480: { slidesPerView: 1 },
				},
			},
		},
		{
			selector: selectors.mobileSlider,
			options: {
				slidesPerView: 1,
				loop: true,
				pagination: { el: '.mobile_swiper-pagination', clickable: true },
			},
		},
		{
			selector: selectors.reviewsSwiper,
			options: {
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				pagination: {
					el: '.reviews__slider .swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				},
			},
		},
		// Новая конфигурация для галереи
		{
			selector: selectors.gallerySlider,
			options: {
				slidesPerView: 3,
				spaceBetween: 20,
				loop: true,
				pagination: {
					el: '.gallery-slider .swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.gallery-slider .swiper-button-next',
					prevEl: '.gallery-slider .swiper-button-prev',
				},
				breakpoints: {
					1024: { slidesPerView: 3, spaceBetween: 20 },
					768: { slidesPerView: 2, spaceBetween: 15 },
					0: { slidesPerView: 1, spaceBetween: 10 },
				},
				on: {
					init: function () {
						console.log('Gallery slider initialized')
						// Повторная инициализация Fancybox после создания слайдера
						Fancybox.bind('[data-fancybox="gallery-slider"]', {
							loop: true,
							thumbs: {
								autoStart: true,
							},
						})
					},
					slideChange: function () {
						// Повторная инициализация Fancybox при смене слайда (на случай проблем)
						Fancybox.bind('[data-fancybox="gallery-slider"]', {
							loop: true,
							thumbs: {
								autoStart: true,
							},
						})
					},
				},
			},
		},
		{
			selector: selectors.otherSlider,
			options: {
				slidesPerView: 'auto', // Вместо фиксированного числа
				centeredSlides: false, // Отключаем центрирование
				slidesOffsetBefore: 0, // Убираем начальный отступ
				slidesOffsetAfter: 0, // Убираем конечный отступ
				spaceBetween: 30,
				navigation: {
					nextEl: '.other-next',
					prevEl: '.other-prev',
				},
				breakpoints: {
					1024: {
						slidesPerView: 'auto',
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 'auto',
						spaceBetween: 10,
					},
				},
			},
		},
	]

	swiperConfigs.forEach(config => {
		const element = document.querySelector(config.selector)
		if (element) {
			const swiper = new Swiper(element, config.options)
			if (config.selector === selectors.stockSwiper) {
				config.instance = swiper
			}
		}
	})

	document.querySelectorAll(selectors.fitnessTabImg).forEach(tabImg => {
		const mainSwiperEl = tabImg.querySelector('.fitness-sviper')
		const thumbsSwiperEl = tabImg.querySelector('.fitness-thumbs')
		if (!mainSwiperEl || !thumbsSwiperEl) return

		const thumbsSwiper = new Swiper(thumbsSwiperEl, {
			slidesPerView: 4,
			spaceBetween: 10,
			watchSlidesProgress: true,
			slideToClickedSlide: true,
		})

		new Swiper(mainSwiperEl, {
			loop: mainSwiperEl.querySelectorAll('.swiper-slide').length >= 3,
			navigation: {
				nextEl: tabImg.querySelector('.pagination-button-next'),
				prevEl: tabImg.querySelector('.pagination-button-prev'),
			},
			thumbs: { swiper: thumbsSwiper },
		})
	})

	document.querySelectorAll(selectors.effectiveSlider).forEach(sliderBox => {
		new Swiper(sliderBox.querySelector('.effective-viper'), {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			navigation: {
				nextEl: sliderBox.querySelector('.effective__box-next'),
				prevEl: sliderBox.querySelector('.effective__box-prev'),
			},
			pagination: {
				el: sliderBox.querySelector('.effective-pagination'),
				clickable: true,
			},
		})
	})

	return swiperConfigs.find(config => config.selector === selectors.stockSwiper)
		?.instance
}

const initInformationSliders = () => {
	const sliders = {}

	document.querySelectorAll(selectors.informationTabContents).forEach(tab => {
		const sliderEl = tab.querySelector(selectors.informationSwiper)
		if (!sliderEl) return

		const tabId = tab.id
		sliders[tabId] = new Swiper(sliderEl, {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			pagination: {
				el: sliderEl.querySelector('.swiper-pagination'),
				clickable: true,
			},
			navigation: {
				nextEl: sliderEl
					.closest('.information__slider')
					.querySelector('.information-next'),
				prevEl: sliderEl
					.closest('.information__slider')
					.querySelector('.information-prev'),
			},
			breakpoints: {
				768: { slidesPerView: 1, spaceBetween: 30 },
				1024: { slidesPerView: 1, spaceBetween: 40 },
			},
		})
	})

	return sliders
}

const initStockButtons = swiper => {
	document.querySelectorAll(selectors.stockButtons).forEach(button => {
		button.addEventListener('click', () => {
			const index = parseInt(button.dataset.index)
			swiper.slideToLoop(index)
			document
				.querySelectorAll(selectors.stockButtons)
				.forEach(btn => btn.classList.remove('active'))
			button.classList.add('active')
		})
	})

	document.querySelectorAll(selectors.stockNav).forEach(btn => {
		btn.addEventListener('mouseenter', () =>
			btn.querySelector('use').setAttribute('fill', 'red')
		)
		btn.addEventListener('mouseleave', () =>
			btn.querySelector('use').removeAttribute('fill')
		)
	})
}

const openTab3 = (evt, tabName, informationSwipers) => {
	// Скрываем все табы
	document.querySelectorAll(selectors.informationTabContents).forEach(tab => {
		tab.style.display = 'none'
	})

	// Удаляем активный класс у всех кнопок
	document.querySelectorAll(selectors.informationTabs).forEach(btn => {
		btn.classList.remove('tablinks-active')
	})

	// Показываем выбранный таб
	const tabContent = document.getElementById(tabName)
	tabContent.style.display = 'flex'

	// Обновляем слайдер при переключении таба
	if (informationSwipers && informationSwipers[tabName]) {
		informationSwipers[tabName].update()
		informationSwipers[tabName].navigation.update()
		informationSwipers[tabName].pagination.render()
		informationSwipers[tabName].pagination.update()
	}

	// Добавляем активный класс к нажатой кнопке
	if (evt) {
		evt.currentTarget.classList.add('tablinks-active')
	}
}
const initTabs = informationSwipers => {
	const infoTabs = document.querySelectorAll(selectors.informationTabs)
	const infoContents = document.querySelectorAll(
		selectors.informationTabContents
	)

	// Скрываем все табы
	infoContents.forEach(tab => {
		tab.style.display = 'none'
	})

	// Показываем первый таб и активируем первую кнопку
	if (infoContents.length > 0) {
		infoContents[0].style.display = 'flex'
		openTab3(null, infoContents[0].id, informationSwipers) // Инициализируем первый таб
	}

	// Вешаем обработчики
	infoTabs.forEach(button => {
		button.addEventListener('click', function (e) {
			const tabName = this.getAttribute('onclick').match(/'([^']+)'/)[1]
			openTab3(e, tabName, informationSwipers)
		})
	})
}

const openCity = (evt, cityName) => {
	document
		.querySelectorAll('.tab__content-box')
		.forEach(box => (box.style.display = 'none'))
	document
		.querySelectorAll('.tab__button')
		.forEach(btn => btn.classList.remove('active-btn'))
	document.getElementById(cityName).style.display = 'block'
	if (evt) evt.currentTarget.classList.add('active-btn')
}

const openTab2 = (evt, tabName) => {
	document
		.querySelectorAll('.fitness__tab')
		.forEach(tab => (tab.style.display = 'none'))
	document
		.querySelectorAll('.fitness__btn')
		.forEach(btn => btn.classList.remove('active-btn'))
	document.getElementById(tabName).style.display = 'flex'
	evt.currentTarget.classList.add('active-btn')
}

const initPopup = () => {
	const popup = document.querySelector(selectors.popup)
	const overlay = document.querySelector(selectors.popupOverlay)
	const form = document.querySelector(selectors.popupForm)
	const openButtons = document.querySelectorAll(selectors.openPopup)
	const closeButton = document.querySelector(selectors.closePopup)

	const openPopup = () => {
		popup.style.display = 'block'
		overlay.style.display = 'block'
		document.body.style.overflow = 'hidden'
	}

	const closePopup = () => {
		popup.style.display = 'none'
		overlay.style.display = 'none'
		document.body.style.overflow = ''
	}

	openButtons.forEach(btn => btn.addEventListener('click', openPopup))
	closeButton.addEventListener('click', closePopup)
	overlay.addEventListener('click', closePopup)
	form.addEventListener('click', e => e.target === form && closePopup())
	document.addEventListener(
		'keydown',
		e => e.key === 'Escape' && popup.style.display === 'block' && closePopup()
	)
}

const initAccordion = () => {
	document.querySelectorAll(selectors.accordion).forEach(trigger => {
		trigger.addEventListener('click', () => {
			const item = trigger.closest('.accordeon__item')
			const content = item.querySelector('.accordeon__content')
			const isActive = item.classList.contains('active')

			document.querySelectorAll('.accordeon__item').forEach(el => {
				el.classList.remove('active')
				el.querySelector('.accordeon__triger').classList.remove(
					'accordeon__triger--active'
				)
				el.querySelector('.accordeon__content').style.maxHeight = '0'
			})

			if (!isActive) {
				item.classList.add('active')
				trigger.classList.add('accordeon__triger--active')
				content.style.maxHeight = content.scrollHeight + 'px'
			}
		})
	})
}

const initPhotogallery = () => {
	const button = document.querySelector(selectors.photogalleryBtn)
	const extra = document.querySelector(selectors.photogalleryExtra)
	const parent = document.querySelector(selectors.photogalleryInner)

	if (!button || !extra || !parent) {
		console.warn('Photogallery elements not found. Check selectors:', {
			button: selectors.photogalleryBtn,
			extra: selectors.photogalleryExtra,
			parent: selectors.photogalleryInner,
		})
		return
	}

	button.addEventListener('click', () => {
		while (extra.firstChild) {
			parent.appendChild(extra.firstChild)
		}
		extra.remove()
		button.remove()
	})
}

const initMap = () => {
	const location = { lat: 55.606407, lng: 37.536226 }
	const map = new google.maps.Map(document.querySelector(selectors.map), {
		center: location,
		zoom: 17,
		disableDefaultUI: true,
		styles: [
			{
				featureType: 'poi',
				elementType: 'all',
				stylers: [{ visibility: 'off' }],
			},
			{
				featureType: 'transit',
				elementType: 'all',
				stylers: [{ visibility: 'off' }],
			},
		],
	})

	new google.maps.Marker({
		position: location,
		map,
		icon: {
			url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
				'<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="16" fill="red" stroke="white" stroke-width="4"/></svg>'
			)}`,
			scaledSize: new google.maps.Size(64, 64),
		},
	})
}

document.addEventListener('DOMContentLoaded', () => {
	const stockSwiper = initSwipers()
	const informationSwipers = initInformationSliders()
	initBurgerMenu()
	initStockButtons(stockSwiper)
	initTabs(informationSwipers)
	initPopup()
	initAccordion()
	initPhotogallery()
	initMap()
	initFancybox() // Добавьте этот вызов
})
// Экстренный фикс для попапа
document.addEventListener('click', function (e) {
	// 1. Открытие по кнопке
	if (e.target.closest('.open__fitness-popup')) {
		e.preventDefault()
		const popup = document.querySelector('.fitness__popup')
		const overlay = document.querySelector('.fitness__overlay')
		if (popup && overlay) {
			popup.style.display = 'block'
			overlay.style.display = 'block'
			document.body.style.overflow = 'hidden'
		}
	}

	// 2. Закрытие по крестику или оверлею
	if (e.target.closest('.form__close-icon, .fitness__overlay')) {
		e.preventDefault()
		const popup = document.querySelector('.fitness__popup')
		const overlay = document.querySelector('.fitness__overlay')
		if (popup && overlay) {
			popup.style.display = 'none'
			overlay.style.display = 'none'
			document.body.style.overflow = ''
		}
	}
})

// Закрытие по ESC
document.addEventListener('keydown', function (e) {
	if (
		e.key === 'Escape' &&
		document.querySelector('.fitness__popup')?.style.display === 'block'
	) {
		document.querySelector('.fitness__popup').style.display = 'none'
		document.querySelector('.fitness__overlay').style.display = 'none'
		document.body.style.overflow = ''
	}
})
