// Samples Directory
const samples_dir = 'samples'

// Instruments Object
const instruments = new Object()

// Piano
instruments.piano = new Tone.Sampler({
	'C3': 'C3.mp3',
	'D#3': 'Ds3.mp3',
	'F#3': 'Fs3.mp3',
	'A3': 'A3.mp3'
}, {
	// attack: 0,
	// release: 0.1,
	// onload: Tone.noOp,
	baseUrl: samples_dir + '/piano/'
	// curve: exponential
})