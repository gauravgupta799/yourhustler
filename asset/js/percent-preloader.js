// window.onload = function () {
// 	var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
// 	var factor = Math.round((loadTime + 1000) / 100);
// }

var loader = document.getElementById("loader-indication");

if (loader !== null) {
	var counting = setInterval(function () {
		var currval = parseInt(loader.innerHTML)
		loader.innerHTML = ++currval;
		if (currval > 89) {
			loader.innerHTML = 90;
			if (window.jQuery) {
				//console.log('jquery loaded');
				loader.innerHTML = 95;
				if (document.readyState === "interactive") {
					loader.innerHTML = 99;
				}
				if (document.readyState === "complete") {
					//console.log('fully loaded!');
					clearInterval(counting);
					loader.innerHTML = 100;
				}
			}
		}
	}, 20);
}