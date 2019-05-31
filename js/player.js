$(document).ready(function() {
    $('select').selectric()
    // Instruments
    // http://fmslogo.sourceforge.net/manual/midi-instrument.html

    //==============================================================================
    // DOM Selectors
    //==============================================================================

    StartAudioContext(Tone.context, '#initialize-button').then(function(){
        initialize()
    })
    
    function initialize() {
        //create a synth and connect it to the master output (your speakers)
        const synth = new Tone.Synth().toMaster()
        
        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease('C4', '8n')        
    }

})