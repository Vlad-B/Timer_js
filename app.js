const durationInput = document.querySelector('#duration');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, start, pause, {
	onStart(totalDuration) {
		if (isNaN(parseFloat(durationInput.value))) {
			alert("This isn't a number");
			durationInput.value = 0;
		}
		console.log('Timer has started');
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	},
	onComplete() {
		console.log('Timer is completed');
		durationInput.select();
	}
});
