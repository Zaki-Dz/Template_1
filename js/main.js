const nav = document.querySelector('nav ul')
const navBtn = document.querySelector('nav i')
let isOpen = false

function toggleNav() {
	if (!isOpen) {
		nav.style.display = 'flex'
		isOpen = !isOpen
	} else {
		nav.style.display = 'none'
		isOpen = !isOpen
	}
}

navBtn.addEventListener('click', toggleNav)
window.addEventListener('click', e => {
	if (e.target != navBtn) {
		nav.style.display = 'none'
		isOpen = !isOpen
	}
})

const header = document.querySelector('header')

window.addEventListener('scroll', () => {
	if (window.scrollY > window.innerHeight) {
		header.style.position = 'fixed'
	} else {
		header.style.position = 'absolute'
	}
})
