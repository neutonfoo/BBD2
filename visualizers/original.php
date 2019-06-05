<div id="visualizer_original">
    <?php
    // Generate HTML
    foreach ($tracks as $track_index => $track) {
        ?>
        <div id="track_<?php echo $track_index; ?>">
            <?php
            foreach ($notes as $note) {
                ?>
                <span class="note note_<?php echo clean_note($note); ?>"><?php echo $note; ?></span>
            <?php
        }
        ?>
        </div>
        <hr>
    <?php
}
?>
    <script type="text/javascript">
        function visualize(track_index, time, note) {
            Tone.Draw.schedule(function() {
                const $note = $('#track_' + track_index + ' .note_' + clean_note(note.name))

                $note.css('background-color', 'hsl(200, 100%, 50%)');
                $note.css('opacity', 1).animate({
                    'opacity': 0
                }, note.duration * 1000);
            }, time);
        }
    </script>
</div>