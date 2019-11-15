const scroll = window.requestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback,1000/60)
	}

const elementsToShow = document.querySelectorAll('.show-on-scroll');

const isElementInViewport = el => {
	const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll
	
	const viewport = {
		top: scroll,
		bottom: scroll + window.innerHeight,
	}
	
    const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	}
	
	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}


const loop = () => {
	elementsToShow.forEach(
		(element) => { 
			if (isElementInViewport(element)) {
				element.classList.add('is-visible');
			}else{
				element.classList.remove('is-visible');
			}

		}
	)
	scroll(loop)
}

loop()