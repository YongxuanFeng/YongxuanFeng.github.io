/**
 * 
 * @authors hy
 * @date    2020-04-20 14:33:52
 * @version 1.0
 */
$(init);

function init() {
	$(backgroundchange);
	$(clic);
}

function backgroundchange() {
	let i = 0;
	let color = ['#f3a683', '#f7d794', '#ffcccc', '#e77f67', '#cf6a87', '#f19066', '#f5cd79', '#ffb8b8', '#e15f41', '#c44569'];
	$(".box").each(function() {
		$(this).css("background-color", color[i]);
		i = i + 1;
	});
}

function clic() {
	$(".box").click(function() {
		let bgcolor = $(this).css('background-color');
		$(".box").not(this).addClass('disable');	
		$(".current").css('background-color',bgcolor);
		$(".current").fadeIn(1000);
	});
	$(".current").click(function() {
		$(this).fadeOut(1000);
		$(".box").not(this).removeClass('disable');
	})
}



