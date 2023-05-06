//mk独自タグ<url>
//新規タブでひらくだけ
document.addEventListener('DOMContentLoaded', () => {
	$('url').each( function(index) {
		$(this).html(`<a href="`+$(this).text()+`" target="_blank">`+$(this).text()+`</a><br>`);
	});
});