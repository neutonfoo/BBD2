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
        '34': {
                'name': 'Electric Bass',
                'slug': 'bass-electric',
                'samples': [
                        'C2', 'C3', 'C4', 'C5'
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
        '801': {
                'name': 'Pipa',
                'slug': 'pipa',
                'samples': [
                        'C2', 'C3', 'C4', 'C5', 'C6'
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

// Store instrument keys in array
const instrument_keys = Object.keys(instruments)

// Gets instrument if exists, else return piano
function get_instrument(instrument_key) {
        if (instrument_key in instruments) {
                return instruments[instrument_key]
        } else {
                // Defaults to Piano
                return instruments[0]
        }
}

// Returns random instrument
function random_instrument() {
        return instruments[instrument_keys[instrument_keys.length * Math.random() << 0]];
};

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








/*
// Piano
instruments.piano = new Tone.Sampler({
        'A0': 'A0.[mp3|ogg]',
        'A1': 'A1.[mp3|ogg]',
        'A2': 'A2.[mp3|ogg]',
        'A3': 'A3.[mp3|ogg]',
        'A4': 'A4.[mp3|ogg]',
        'A5': 'A5.[mp3|ogg]',
        'A6': 'A6.[mp3|ogg]',
        'A#0': 'As0.[mp3|ogg]',
        'A#1': 'As1.[mp3|ogg]',
        'A#2': 'As2.[mp3|ogg]',
        'A#3': 'As3.[mp3|ogg]',
        'A#4': 'As4.[mp3|ogg]',
        'A#5': 'As5.[mp3|ogg]',
        'A#6': 'As6.[mp3|ogg]',
        'B0': 'B0.[mp3|ogg]',
        'B1': 'B1.[mp3|ogg]',
        'B2': 'B2.[mp3|ogg]',
        'B3': 'B3.[mp3|ogg]',
        'B4': 'B4.[mp3|ogg]',
        'B5': 'B5.[mp3|ogg]',
        'B6': 'B6.[mp3|ogg]',
        'C0': 'C0.[mp3|ogg]',
        'C1': 'C1.[mp3|ogg]',
        'C2': 'C2.[mp3|ogg]',
        'C3': 'C3.[mp3|ogg]',
        'C4': 'C4.[mp3|ogg]',
        'C5': 'C5.[mp3|ogg]',
        'C6': 'C6.[mp3|ogg]',
        'C7': 'C7.[mp3|ogg]',
        'C#0': 'Cs0.[mp3|ogg]',
        'C#1': 'Cs1.[mp3|ogg]',
        'C#2': 'Cs2.[mp3|ogg]',
        'C#3': 'Cs3.[mp3|ogg]',
        'C#4': 'Cs4.[mp3|ogg]',
        'C#5': 'Cs5.[mp3|ogg]',
        'C#6': 'Cs6.[mp3|ogg]',
        'D0': 'D0.[mp3|ogg]',
        'D1': 'D1.[mp3|ogg]',
        'D2': 'D2.[mp3|ogg]',
        'D3': 'D3.[mp3|ogg]',
        'D4': 'D4.[mp3|ogg]',
        'D5': 'D5.[mp3|ogg]',
        'D6': 'D6.[mp3|ogg]',
        'D#0': 'Ds0.[mp3|ogg]',
        'D#1': 'Ds1.[mp3|ogg]',
        'D#2': 'Ds2.[mp3|ogg]',
        'D#3': 'Ds3.[mp3|ogg]',
        'D#4': 'Ds4.[mp3|ogg]',
        'D#5': 'Ds5.[mp3|ogg]',
        'D#6': 'Ds6.[mp3|ogg]',
        'E0': 'E0.[mp3|ogg]',
        'E1': 'E1.[mp3|ogg]',
        'E2': 'E2.[mp3|ogg]',
        'E3': 'E3.[mp3|ogg]',
        'E4': 'E4.[mp3|ogg]',
        'E5': 'E5.[mp3|ogg]',
        'E6': 'E6.[mp3|ogg]',
        'F0': 'F0.[mp3|ogg]',
        'F1': 'F1.[mp3|ogg]',
        'F2': 'F2.[mp3|ogg]',
        'F3': 'F3.[mp3|ogg]',
        'F4': 'F4.[mp3|ogg]',
        'F5': 'F5.[mp3|ogg]',
        'F6': 'F6.[mp3|ogg]',
        'F#0': 'Fs0.[mp3|ogg]',
        'F#1': 'Fs1.[mp3|ogg]',
        'F#2': 'Fs2.[mp3|ogg]',
        'F#3': 'Fs3.[mp3|ogg]',
        'F#4': 'Fs4.[mp3|ogg]',
        'F#5': 'Fs5.[mp3|ogg]',
        'F#6': 'Fs6.[mp3|ogg]',
        'G0': 'G0.[mp3|ogg]',
        'G1': 'G1.[mp3|ogg]',
        'G2': 'G2.[mp3|ogg]',
        'G3': 'G3.[mp3|ogg]',
        'G4': 'G4.[mp3|ogg]',
        'G5': 'G5.[mp3|ogg]',
        'G6': 'G6.[mp3|ogg]',
        'G#0': 'Gs0.[mp3|ogg]',
        'G#1': 'Gs1.[mp3|ogg]',
        'G#2': 'Gs2.[mp3|ogg]',
        'G#3': 'Gs3.[mp3|ogg]',
        'G#4': 'Gs4.[mp3|ogg]',
        'G#5': 'Gs5.[mp3|ogg]',
        'G#6': 'Gs6.[mp3|ogg]'
}, {
        // attack: 0,
        // release: 0.1,
        // onload: Tone.noOp,
        baseUrl: samples_dir + '/piano/'
        // curve: exponential
})
*/