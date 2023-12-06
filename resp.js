burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navl=document.querySelector('.navl')
rightnav=document.querySelector('.rightnav')



burger.addEventListener('click',()=>{
	rightnav.classList.toggle('v-class-resp');
	navl.classList.toggle('v-class-resp');
	navbar.classList.toggle('h-nav-resp');

});