// reset_player()
// -- Resets Player and Tone.JS
function reset_player() {
    Tone.Transport.pause();
    Tone.Draw.cancel(0);
    Tone.Transport.cancel(0);
    Tone.Transport.seconds = 0;
}

// clean_note()
// -- Returns clean filename-safe name of a note
function clean_note(note) {
    return note.replace('#', 's')
}

// is_url()
function is_url(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }