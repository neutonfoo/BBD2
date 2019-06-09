// MIDI Instrument Mapping
// http://fmslogo.sourceforge.net/manual/midi-instrument.html

// Samples Directory
const samples_dir = 'samples'

// Instruments List
const instruments_list = {
	'0': {
		'name': 'Piano',
		'slug': 'piano',
		'samples': [
			'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1', 'A1', 'A#1', 'B1', 'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5', 'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6', 'C7'
		]
	},
	'25': {
		'name': 'Acoustic Guitar',
		'slug': 'acoustic-guitar',
		'samples': [
			'C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6'
		]
	},
	'34': {
		'name': 'Electric Bass',
		'slug': 'bass-electric',
		'samples': [
			'C2', 'C3', 'C4', 'C5'
		]
	},
	'41': {
		'name': 'Violin',
		'slug': 'violin',
		'samples': [
			'C3', 'C4', 'C5', 'C6', 'C7'
		]
	},
	'57': {
		'name': 'Trumpet',
		'slug': 'trumpet',
		'samples': [
			'C2', 'C3', 'C4', 'C5', 'C6'
		]
	},
	// These are custom added instruments
	'800': {
		'name': 'Pipa',
		'slug': 'pipa',
		'samples': [
			'C2', 'C3', 'C4', 'C5', 'C6'
		]
	},
	'801': {
		'name': 'Ken Murakami (Voice) [plz ken i need more voice samples]',
		'slug': 'ken',
		'samples': [
			'C3', 'C4', 'G4'
		]
	},
	'1000': {
		'name': 'SoCal Drums',
		'slug': 'socal-drums',
		'samples': [
			'A1', 'A#1', 'B1', 'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3'
		]
	},

	// 'Piano': 'piano',
	// 'Electric Bass': 'bass'
}

// Instruments Object
const instruments = new Object()

// Loop through and add instruments
$.each(instruments_list, function (instrument_key, instrument) {
	let sample_file_mapping = new Object()
	$.each(instrument.samples, function (note_sample_index, note_sample_name) {
		sample_file_mapping[note_sample_name] = clean_note(note_sample_name) + '.[mp3|ogg]'
	})

	instruments[instrument_key] = new Tone.Sampler(sample_file_mapping, {
		baseUrl: samples_dir + '/' + instrument.slug + '/',
		release: 0.5
	})
})

function get_assigned_instrument_key(instrument_key) {
	if (instrument_key in instruments) {
		return instrument_key
	}

	switch (instrument_key) {
		case 44:
			return 34

		case 26:
			return 34
	}

	return 0
}
// Gets instrument if exists, else return piano
function get_instrument(instrument_key) {
	if (instrument_key in instruments) {
		return instruments[instrument_key]
	} else {
		// Defaults to Piano
		return instruments[0]
		// return instruments[800]
	}
}

// // Store instrument keys in array
// const instrument_keys = Object.keys(instruments)

// // Returns random instrument
// function random_instrument() {
// 	return instruments[instrument_keys[instrument_keys.length * Math.random() << 0]];
// };

// Returns HTML for the instrument selector select box
function build_instrument_select(track_index, track_instrument_key) {
	let select_html = `
        <span class="instrument-selector-container">
            <select class="instrument-select" data-track="${ track_index }">`

	$.each(instruments_list, function (instrument_key, instrument) {
		if (instrument_key == track_instrument_key) {
			select_html += `<option value="${ instrument_key }" selected>T${ track_index } - ${ instrument.name }</option>`

		} else {
			select_html += `<option value="${ instrument_key }">T${ track_index } - ${ instrument.name }</option>`
		}
	})

	select_html += `
            </select>
        </span>`

	return select_html
}