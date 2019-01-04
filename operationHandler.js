let slideIndex = 0;

const showSlides = function() {
	let index;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	for (index = 0; index < slides.length; index++) {
		slides[index].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	for (index = 0; index < dots.length; index++) {
		dots[index].className = dots[index].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 1000);
};

const show = function(value) {
	let id = document.getElementById(value);
	id.style.display = "block";
	id.innerHTML = "worked";
};

const hide = function(value) {
	let id = document.getElementById(value);
	id.style.display = "none";
};

const createList = function(element) {
	let listItem =
		"<li onmouseover='show(" +
		'"' +
		element +
		'"' +
		")' onmouseout='hide(" +
		'"' +
		element +
		'"' +
		"')>" +
		element +
		"</li>";
	return listItem;
};

const list = [
	"popular",
	"science",
	"art",
	"religion",
	"biography",
	"technology"
];

const createDivs = function(value) {
	let div =
		"<div class='books' id='" + value + "' style='display: none'></div>";
	return div;
};

const createListDivs = function() {
	let id = document.getElementById("menu_divs");
	id.innerHTML = list.map(createDivs).join("");
};

const generateList = function() {
	let id = document.getElementById("menu");
	id.innerHTML = list.map(createList).join("");
};

const links = {
	popular: ["", "", ""],
	science: ["", "", ""],
	art: ["", "", ""],
	religion: ["", "", ""],
	biography: ["", "", ""],
	technology: ["", "", ""]
};

const addLinks = function() {};

const insertLinks = function(value) {
	let id = document.getElementById(value);
	id.innerHTML = links[value].map(addLinks);
};
