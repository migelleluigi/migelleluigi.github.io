$(document).ready(function(){$('.logo').hide();for (var i = 0; i < 7; i++) {var path = document.querySelector('#i'+i);var length = path.getTotalLength();path.style.transition = path.style.WebkitTransition = 'none'; path.style.strokeDasharray = length + ' ' + length; path.style.strokeDashoffset = length; path.getBoundingClientRect(); path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 3s cubic-bezier(.10, .10, .25, .90)'; path.style.strokeDashoffset = '0'; }; setTimeout(function(){ $('.logo').fadeIn()},3000);});
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 	$('#as').attr('href', 'mobilelink.html');
 }