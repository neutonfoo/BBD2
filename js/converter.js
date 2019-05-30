$(document).ready(function() {
    //==============================================================================
    // Global Variables
    //==============================================================================
    var $midiDropZone = $('#midi-dropzone');
    // var $adjustedJson = $('#adjustedJson');
    
    $midiDropZone.on('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // $(this).addClass('midiDropZoneDragging');
        
        return false;
    })
    .on('dragleave', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // $(this).removeClass('midiDropZoneDragging');
        
        return false;
    })
    .on('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        if(e.originalEvent.dataTransfer){
            if(e.originalEvent.dataTransfer.files.length == 1) {
                e.preventDefault();
                e.stopPropagation();
                
                var uploadedFile = e.originalEvent.dataTransfer.files[0];
                if(uploadedFile.type == 'audio/midi') {
                    console.log('asdas')
                    // convertMidi(uploadedFile);
                }
            }
        }
        // $(this).removeClass('midiDropZoneDragging');
        
        return false;
    });
});


// $(document).ready(function() {
//     if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
//         document.querySelector("#midi-dropzone #midi-dropzone-text").textContent = "Reading files not supported by this browser";
//     } else {

//         const fileDrop = document.querySelector("#midi-dropzone")

//         fileDrop.addEventListener("dragenter", () => fileDrop.classList.add("Hover"))

//         fileDrop.addEventListener("dragleave", () => fileDrop.classList.remove("Hover"))

//         fileDrop.addEventListener("drop", () => fileDrop.classList.remove("Hover"))

//         document.querySelector("#FileDrop input").addEventListener("change", e => {
//             //get the files
//             const files = e.target.files
//             if (files.length > 0){
//                 const file = files[0]
//                 document.querySelector("#FileDrop #Text").textContent = file.name
//                 parseFile(file)
//             }
//         })
//     }

//     let currentMidi = null

//     function parseFile(file){
//         //read the file
//         const reader = new FileReader()
//         reader.onload = function(e){
//             const midi = new Midi(e.target.result)
//             document.querySelector("#ResultsText").value = JSON.stringify(midi, undefined, 2)
//             document.querySelector('tone-play-toggle').removeAttribute('disabled')
//             currentMidi = midi
//         }
//         reader.readAsArrayBuffer(file)
//     }
// })