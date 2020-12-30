const image = document.querySelector('.image');

image.addEventListener('mousemove', (e) => {
	let width = image.offsetWidth;
	let height = image.offsetHeight;
	let mousex = e.offsetX;
	let mousey = e.offsetY;
	let bgposX = (mousex / width * 100);
	let bgposY = (mousey / height * 100);
	image.style.backgroundPosition = `${bgposX}% ${bgposY}%`;
});

image.addEventListener('mouseleave', (e) => {
	image.style.backgroundPosition = "center";
});
