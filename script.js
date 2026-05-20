console.log('Base code loaded')
let paragraph = document.getElementById('outputt'); // Simple logic to interact with a corresponding HTML file
document.addEventListener('DOMContentLoaded', function () {
	const app = document.getElementById('app')
	if (app) {
		app.textContent = 'App initialized'
	}

	const btn = document.getElementById('btn')
	if (btn) {
		btn.addEventListener('click', function () {
			const output = document.getElementById('output')
			const now = new Date().toLocaleTimeString()
			if (output) output.textContent = 'Button clicked at ' + now
		})
	}

	const submitBtn = document.getElementById('submitBtn')
	const userInput = document.getElementById('userInput')
	if (submitBtn && userInput) {
		submitBtn.addEventListener('click', function () {
			const inputValue = userInput.value
			if (inputValue.trim() === '') {
				alert('Please enter something')
			} else {
				console.log('User input:', inputValue)
				paragraph.textContent = 'You entered: ' + inputValue;
				userInput.value = ''
			}
		})
	}
})
function clearOutput() {
	paragraph.textContent = '';
}