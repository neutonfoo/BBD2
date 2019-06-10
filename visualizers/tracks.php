<div id="visualizer-default" class="visualizer">
    <?php
    // Generate HTML
    foreach ($tracks as $track_index => $track) {
        ?>
        <div id="track_<?php echo $track_index; ?>" class="track">
            <strong>Track <?php echo $track_index; ?></strong>
            <?php
            foreach ($notes as $note) {
                ?>
                <span id="note_<?php echo clean_note($note); ?>" class="note"><?php echo $note; ?></span>
            <?php
        }
        ?>
        </div>
        <hr>
    <?php
}
?>
    <script type="text/javascript">
		function visualize(track_index, instrument_key, time, note) {
            Tone.Draw.schedule(function() {
                const $note = $('#track_' + track_index + ' #note_' + clean_note(note.name))

                $note.css('background-color', `hsl(${ Math.floor(Math.random() * 361) }, 100%, 50%)`);
                $note.css('opacity', 1).animate({
                    'opacity': 0
                }, note.duration * 1000)

            }, time)
        }
    </script>
</div>