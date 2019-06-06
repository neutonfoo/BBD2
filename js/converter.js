$(document).ready(function () {
    //==============================================================================
    // DOM Selectors
    //==============================================================================
    const $midiDropZone = $('#midi-dropzone');
    const $midiConvertedJson = $('#midi-converted-json');

    $midiDropZone.on('dragover', function (e) {
            e.preventDefault();
            e.stopPropagation();

            $(this).addClass('midi-dropzone-dragging');

            return false;
        })
        .on('dragleave', function (e) {
            e.preventDefault();
            e.stopPropagation();

            $(this).removeClass('midi-dropzone-dragging');

            return false;
        })
        .on('drop', function (e) {
            e.preventDefault();
            e.stopPropagation();

            if (e.originalEvent.dataTransfer) {
                if (e.originalEvent.dataTransfer.files.length == 1) {
                    e.preventDefault();
                    e.stopPropagation();

                    const uploadedFile = e.originalEvent.dataTransfer.files[0];
                    if (uploadedFile.type == 'audio/midi') {
                        convert_midi(uploadedFile);
                    } else {
                        $midiConvertedJson.val('Not a valid .midi file.')
                    }
                }
            }
            $(this).removeClass('midi-dropzone-dragging');
            return false;
        });

    function convert_midi(file) {
        //read the file
        const reader = new FileReader()
        reader.onload = function (e) {
            const midiJson = MidiConvert.parse(e.target.result)
            parse_midi_json(midiJson)
        }
        reader.readAsArrayBuffer(file)
    }

    function parse_midi_json(midiJson) {
        console.log(midiJson)

        let bbd_song = {}

        // Add headers (meta)
        bbd_song.header = {
            'title': 'Test Song',
            'artist': 'Test Artist',
            'source': 'https://musescore.org',
            'bpm': midiJson.header.bpm,
            'duration': midiJson.duration
        }

        // Add tracks
        bbd_song.tracks = []
        $.each(midiJson.tracks, function (track_index, track) {
            let instrument_number = track.instrumentNumber;

            if(track.isPercussion) {
                instrument_number = 1000
            }

            const track_data = {
                'instrument_number': instrument_number,
                'notes': track.notes
            }

            bbd_song.tracks.push(track_data)
        })




        // Code below for latest version of MidiConvert (which is formatted differently)
        // However, bugged for percussion instruments
        /*
        // Add headers (meta)
        bbd_song.header = {
            'title': 'Test Song',
            'artist': 'Test Artist',
            'source': 'https://musescore.org',
            'bpm': midiJson.header.tempos[0].bpm,
            'duration': midiJson.duration
        }

        // Add tracks
        bbd_song.tracks = []
        $.each(midiJson.tracks, function (track_index, track) {
            console.log(track.instrumentFamily)
            const track_data = {
                'instrument_number': track.instrument.number,
                'notes': track.notes
            }

            bbd_song.tracks.push(track_data)
        })
        */

        $midiConvertedJson.val(JSON.stringify(bbd_song))
    }

    // Load Song Button in player.js
});