$(document).ready(function() {
    //==============================================================================
    // DOM Selectors
    //==============================================================================
    const $midiDropZone = $('#midi-dropzone');
    const $midiConvertedJson = $('#midi-converted-json');
    const $converterLoadSong = $('#converter-load-song');
    
    $midiDropZone.on('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        $(this).addClass('midi-dropzone-dragging');
        
        return false;
    })
    .on('dragleave', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        $(this).removeClass('midi-dropzone-dragging');
        
        return false;
    })
    .on('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        if(e.originalEvent.dataTransfer){
            if(e.originalEvent.dataTransfer.files.length == 1) {
                e.preventDefault();
                e.stopPropagation();
                
                const uploadedFile = e.originalEvent.dataTransfer.files[0];
                if(uploadedFile.type == 'audio/midi') {
                    convertMidi(uploadedFile);
                } else {
                    $midiConvertedJson.val('Not a valid .midi file.')
                }
            }
        }
        $(this).removeClass('midi-dropzone-dragging');
        return false;
    });
    
    function convertMidi(file){
        //read the file
        const reader = new FileReader()
        reader.onload = function(e){
            const midiJson = new Midi(e.target.result)
            parseMidiJson(midiJson)
        }
        reader.readAsArrayBuffer(file)
    }

    function parseMidiJson(midiJson) {
        const bbd_song = {}
        // console.log(midiJson)

        // Add headers (meta)
        bbd_song.header = {
            'title': 'Test Song',
            'artist': 'asdfasdf',
            'source': 'https://asdasdasdaasd'
        }

        // Add tracks
        bbd_song.tracks = []
        $.each(midiJson.tracks, function(track_index, track) {

            const track_data = {
                'instrument_number': track.instrument.number,
                'notes': track.notes
            }

            bbd_song.tracks.push(track_data)
        })

        $midiConvertedJson.val(JSON.stringify(bbd_song))
    }

    $converterLoadSong.on('click', function() {
        const bbd_song = JSON.parse($midiConvertedJson.val())
    })
});