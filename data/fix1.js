$(function() {
$(window).scroll(function(){
if ($(this).scrollTop() > 45)
$('#siteNav').css('top','0').next().css('padding-top','0px');
else 
$('#siteNav').css('top','90px').next().css('padding-top','90px');
});
});