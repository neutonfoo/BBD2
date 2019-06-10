<div id="visualizer-lights" class="visualizer">
    <?php
    $scaling_factor = 2;
    $scaled_notes = scaled_notes($scaling_factor);
    // Generate HTML
    foreach ($tracks as $track_index => $track) {
        ?>
        <div id="track_<?php echo $track_index; ?>" class="track">
            <?php
            foreach ($scaled_notes as $note_index => $note) {
                ?>
                <span id="note_<?php echo $note_index; ?>" class="note"></span>
            <?php
        }
        ?>
        </div>
    <?php
}
?>
    <script type="text/javascript">
		function visualize(track_index, instrument_key, time, note) {
            Tone.Draw.schedule(function() {
                const $note = $('#track_' + track_index + ' #note_' + (Math.floor(note_list.indexOf(note.name) / <?php echo $scaling_factor; ?>)))

                var randomHue = Math.random() * 360;
                var hslaFullColor = 'hsla(' + randomHue + ', 100%, 50%, 1)';
                var hslaNoColor = 'hsla(' + randomHue + ', 100%, 50%, 0)';

                $note.addClass('active');

                $note.css('background-color', hslaFullColor);
                $note.css('border-color', hslaFullColor);

                $note.animate({
                    backgroundColor: hslaNoColor
                }, note.duration * 1000);

            }, time)
        }
    </script>
</div>