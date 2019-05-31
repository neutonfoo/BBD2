const hello = "world!!!!!!!!"

$(document).ready(function() {
    // MIDI Instrument Mapping
    // http://fmslogo.sourceforge.net/manual/midi-instrument.html
    
    //==============================================================================
    // DOM Selectors
    //==============================================================================
    const $visualizerSelect = $('#visualizer-selector-container > select')
    const $midiConvertedJson = $('#midi-converted-json')
    const $converterLoadSong = $('#converter-load-song')
    const $player = $('#player')
    
    //==============================================================================
    // Player Variables
    //==============================================================================
    let bbd_song = {}
    let synth = null
    
    //==============================================================================
    // Initializers
    //==============================================================================
    $visualizerSelect.selectric()
    
    StartAudioContext(Tone.context, '#initialize-button').then(function(){
        initialize()
    })
    
    function initialize() {
        synth = new Tone.Synth().toMaster()
    }
    
    //==============================================================================
    // render_player()
    //==============================================================================
    
    // To modularize, use AJAX to return generated HTML and insert. 
    // Problem : Writing generalized inst change function. Depends on how visualizer is rerendered.
    // Solution (?): Move inst changing scripts to visualizer.php
    // But move inst array out of player.js
    function render_player() {
        const visualizer = $visualizerSelect.val()
        $.ajax({
            method: "POST",
            url: "visualizer.php",
            data: { 
                visualizer: visualizer, 
                bbd_song: bbd_song
            }
        })
        .done(function(result) {
            $player.html(result)
        });
    }
    
    $converterLoadSong.on('click', function() {
        // bbd_song = JSON.parse($midiConvertedJson.val())
        // synth.triggerAttackRelease('C4', '8n')
        render_player()
    })
})