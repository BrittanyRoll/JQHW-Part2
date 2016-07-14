$(document).ready(function(){
	alert('This is ready');
});


$('h1').click(function(){
	$('h1').css({color: "lightgreen"});
});

$('li').click(function(){
	$('li').css({color: "lightgreen"});
});

$('img').fadeOut(5000);
$('img').fadeIn(10000);

$('p').click(function(){
	$('p').slideUp(15000)
	$('p').slideDown(2000)
});