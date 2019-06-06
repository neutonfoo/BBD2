$(document).ready(function () {
    //==============================================================================
    // DOM Selectors
    //==============================================================================
    const $song_artist = $('#song-artist')
    const $song_title = $('#song-title')
    const $song_source = $('#song-source')

    const $instruments_selector_container = $('#instruments-selector-container')

    const $visualizer_select = $('#visualizer-selector-container > select')
    const $midi_converted_json = $('#midi-converted-json')
    const $converter_load_song = $('#converter-load-song')
    const $player = $('#player')

    // Styles the visualization select box
    $visualizer_select.selectric()

    //==============================================================================
    // Player Variables
    //==============================================================================

    // bbd_song is an object that contains information about the current song.
    let bbd_song = null

    // parts stores each track. Needed for instrument changing.
    let parts = []

    //==============================================================================
    // Initializers
    //==============================================================================

    // StartAudioContext(Tone.context, '#initialize-button').then(function () {
    //     Tone.context.resume();
    //     // initialize()
    // })

    //------------------------------------------------------------------------------
    // Tone.Buffer Onload
    //------------------------------------------------------------------------------
    // 
    // This function is called once all Samplers have finished loading.

    Tone.Buffer.on('load', function () {
        for (const instrument_key in instruments) {
            const instrument = instruments[instrument_key]

            // Add each instrument to the Master output
            instrument.toMaster()
        }

        initialize()
    })

    // initialize() is called after Tone.Buffer Onload
    function initialize() {
        load_song('the-beatles--in-my-life')
    }

    //==============================================================================
    // Debugging / Testing Functions
    //==============================================================================
    $('#song0').on('click', function() {
        load_song('the-beatles--in-my-life')
    })

    $('#song1').on('click', function() {
        load_song('coldplay--the-scientist')
    })

    $('#song2').on('click', function() {
        load_song('sekai-no-owari--sazanka')
    })

    $('#song3').on('click', function() {
        load_song('twice--likey')
    })

    $('#song4').on('click', function() {
        load_song('shinee--replay')
    })

    //==============================================================================
    // load_song()
    //==============================================================================
    // 
    // load_song() just loads the json_data into bbd_song via Ajax.
    function load_song(song = 'sekai-no-owari--sazanka') {
        $.ajax({
            dataType: 'json',
            url: `songs/${ song }.json`,
            success: function (song_data) {
                bbd_song = song_data
                song_change()
            }
        })
    }

    //==============================================================================
    // Visualizer Functions
    //==============================================================================

    //------------------------------------------------------------------------------
    // song_change()
    //------------------------------------------------------------------------------
    // 
    // song_change() is called whenever a new song is loaded.
    // The visualizer is rendered first to load the new visualize() function so that it is available when assigning notes.
    // The instrument select boxes are also re-rendered.

    function song_change() {
        parts = []

        // Reset Player
        reset_player()

        // Set Song Details
        $song_artist.html(bbd_song.header.artist)
        $song_title.html(bbd_song.header.title)

        if (is_url(bbd_song.header.source)) {
            $song_source.html(`(<a href="${ bbd_song.header.source }" target="_blank">${ bbd_song.header.source }</a>)`)
        } else {
            $song_source.html(`(${ bbd_song.header.source })`)
        }

        // Re-render visualizer
        render_visualizer()

        // Clear current instrument select boxes
        $instruments_selector_container.html('')

        // Loop through each track
        $.each(bbd_song.tracks, function (track_index, track) {
            // Append a new instrument select box for each instrument
            $instruments_selector_container.append(build_instrument_select(track_index, track.instrument_number))

            assign_notes(track_index, track.instrument_number)
        })

        // Style all rendered instrument select boxes (have to re-select newly created elements)
        const $instrument_select = $('.instrument-selector-container > select')
        $instrument_select.selectric()
    }

    //------------------------------------------------------------------------------
    // assign_notes()
    //------------------------------------------------------------------------------
    // 
    function assign_notes(track_index, instrument_key) {
        // Select the instrument from the instruments array
        const instrument = get_instrument(instrument_key)
        // const instrument = random_instrument()

        // Creates a Tone.Part for each track
        const part = new Tone.Part(function (time, note) {
            instrument.triggerAttackRelease(note.name, note.duration, time, note.velocity);

            // visualize() is a JS function that exists in all visualizers.
            // Is automatically scheduled to be called when the note is played, so it is possible to dynamically change the visualizer.
            visualize(track_index, time, note)
        }, bbd_song.tracks[track_index].notes).start(0)

        if (parts[track_index]) {
            parts[track_index] = part
        } else {
            parts.push(part)
        }

    }

    //------------------------------------------------------------------------------
    // render_visualizer()
    //------------------------------------------------------------------------------
    // 
    // song_change() is called whenever the user changes the visualizer.
    // render_visualizer() reloads the new visualizer into the player via AJAX.
    // This function does not reassign notes as it is not needed.
    // visualize() function in each visualizer is called whenever the note is played (the function call is not scheduled ahead of time).
    // So it is possible to dynamically change the visualizer.

    function render_visualizer() {
        // Get the selected visualizer
        const visualizer = $visualizer_select.val()

        $.ajax({
                method: 'POST',
                url: 'visualizer.php',
                data: {
                    visualizer: visualizer,
                    // Encode bbd_song to base64 so that it is faster
                    // !!!!! Can strip away notes. Not needed by visualizer
                    bbd_song: btoa(JSON.stringify(bbd_song))
                }
            })
            .done(function (result) {
                // Replace existing visualizer with new one
                $player.html(result)
            });
    }

    //------------------------------------------------------------------------------
    // render_visualizer()
    //------------------------------------------------------------------------------
    // 
    // song_change() is called whenever the user changes the visualizer.


    //==============================================================================
    // Event Listeners
    //==============================================================================

    //------------------------------------------------------------------------------
    // Instrument Change for Single Track
    //------------------------------------------------------------------------------

    $instruments_selector_container.on('change', 'select', function () {
        const track_index = $(this).data('track')
        const new_instrument_key = $(this).val()

        console.log('track_index : ' + track_index)
        console.log('new_instrument_key : ' + new_instrument_key)

        parts[track_index].removeAll();

        assign_notes(track_index, new_instrument_key)

    })

    //------------------------------------------------------------------------------
    // Visualizer Change
    //------------------------------------------------------------------------------

    $visualizer_select.on('change', function () {
        render_visualizer()
    })

    //------------------------------------------------------------------------------
    // Converter Load Song
    //------------------------------------------------------------------------------

    $converter_load_song.on('click', function () {
        bbd_song = JSON.parse($midi_converted_json.val())
        song_change()
    })

    //------------------------------------------------------------------------------
    // Play Button
    //------------------------------------------------------------------------------

    $('#play-button').on('click', function () {
        Tone.Transport.start('+1', 0)
    })

    //------------------------------------------------------------------------------
    // Instrument Selector Toggle
    //------------------------------------------------------------------------------
    $('#instrument-button').on('click', function () {
        $instruments_selector_container.slideToggle()
    })

    $('#brightness-button').on('click', function () {
        $('body').toggleClass('dark-mode')
      })
})