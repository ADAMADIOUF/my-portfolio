$(document).ready(function() {
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_show");
	});
});





const typeWriter = function(textElement,words,wait = 3000) {
	this.textElement = textElement;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait,10);
	this.type();
	this.isDeleting = false;
}

typeWriter.prototype.type = function(){
	const current = this.wordIndex % this.words.length;
	const fullTxt = this.words[current];



	if(this.isDeleting){
		this.txt = fullTxt.substring(0, this.txt.length - 1);


	}else{

		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.textElement.innerHTML =`<span class="txt">${this.txt}</span>`;


	let typeSpeed = 300;

	if(this.isDeleting){
		typeSpeed /= 2;
	}

		if(!this.isDeleting && this.txt === fullTxt){
			typeSpeed = this.wait;

			this.isDeleting = true;
		}else if(this.isDeleting && this.txt === ""){
			this.isDeleting = false;
			this.wordIndex++;
			typeSpeed = 500;
		}
	
	
	setTimeout(()=> this.type(), typeSpeed)
}



document.addEventListener('DOMContentLoaded',init);


function init(){
	const textElement = document.querySelector(' .txt-type');
	const words = JSON.parse(textElement.getAttribute('data-words'));

	const wait = textElement.getAttribute('data-wait');


	new typeWriter(textElement,words,wait);
}






