function fade() {
	var fade = function (change) {
		var level = 1;
		var step = function () {
			var hex = level.toString(16);
			change.style.backgroundColor = '#FFFF' + hex + hex;
			if (level < 15) (
					level += 1;
					setTimeout(step, 100);
			)

		};
		setTimeout(step, 100);
	};
	fade(document.body)
});