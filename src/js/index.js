
$('.third-block__input').keyup(function () {
	this.value = this.value.replace(/[^0-9\.]/g, '');
});

jQuery.validator.addMethod("checkMask", function (value, element) {
	return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
});

$('.third-block__form').validate({
	rules: {
		ph: {
			checkMask: true,

		}
	},
	messages: {
		ph: {
			checkMask: "Введите полный номер телефона"
		}
	}
});
$('.third-block__input').mask("+38(099)999-9999", { autoclear: false });

var current_fs, next_fs; 
var left, opacity, scale; 
var animating; 
$(".next").click(function () {
	if (animating) return false;
	animating = true;

	current_fs = $(this).parent().parent();
	next_fs = $(this).parent().parent().next();
	console.log(next_fs);
	next_fs.show();
	current_fs.animate({ opacity: 0 }, {
		step: function (now, mx) {
			scale = 1 - (1 - now) * 0.2;
			left = (now * 50) + "%";
			opacity = 1 - now;
			current_fs.css({
				'transform': 'scale(' + scale + ')',
				'position': 'absolute'
			});
			next_fs.css({ 'left': left, 'opacity': opacity });
		},
		duration: 800,
		complete: function () {
			current_fs.hide();
			animating = false;
		}
	});
});

(function ($) {

	var $body;

	$(document).ready(function () {
		$body = $('body');

		$body
			.find('.third-block__input').each(function () {
				$(this).mask("+38 (999) 999-99-99", { autoсlear: false });
			});

		$body.on('keyup', '.third-block__input', function () {
			var phone = $(this),
				phoneVal = phone.val(),
				form = $(this).parents('.third-block__form');

			if ((phoneVal.indexOf("_") != -1) || phoneVal == '' || phoneVal.length < 9) {
				form.find('.first-block__button').attr('disabled', false);
			} else {
				$('.first-block__button').prop('disabled', false);
				$(".first-block__button").click(function () {
					alert('Спасибо!');
				});

			}
		});

	});
})(jQuery);
const projectType = {
	landing: 1000,
	card: 500,
	corporate: 1500,
	promo: 2000,
	shop: 2500,
	app: 3000,
}
function radio(radioItem){
	let selectedProjectType = radioItem.value;
	document.querySelector('.first-block__price').innerHTML =  projectType[selectedProjectType];
}