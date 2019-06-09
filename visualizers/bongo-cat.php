<div id="visualizer-bongo-cat" class="visualizer">
	<?php
	//==============================================================================
	// Bongo Cat Visualizer
	//==============================================================================

	// Generate HTML
	foreach ($tracks as $track_index => $track) {
		?>
		<img id="track_<?php echo $track_index; ?>" class="track" src="visualizers/bongo-cat-u.png" \>
	<?php
}
?>
	<script type="text/javascript">
		var hands_up_delay = 50; // In milliseconds
		var hands_up_timeouts = new Array(<?php echo $track_index + 1; ?>)

		// 1. BCs initialize with their hands up.
		// 2. When a note is played, the BC will wait 0.1s before putting
		// their hands down.
		// 3. At the end of the note, the BC will raise their hands.
		// 4. However, in order to make the visualizer more natural,
		// newer notes played during a current note will cause the BC to ignore
		// the previous note and play the newer note.
		// 5. The raising of the hands is controlled via setTimeout(), where the
		// delay is the duration of the note.
		// 6. These setTimeout()'s should be tracked and cleared whenenver a newer 
		// note is played so the previous note is ignored.

		// When a note is played, a BC will wait 0.1s, then put their hands down to simulate "playing" the note.
		// After the entire duration of the note, the BC will raise their hand back up.

		function visualize(track_index, time, note) {
			Tone.Draw.schedule(function() {
				const $track = $('#track_' + track_index)
				const image_down_index = 6 - Math.floor(note_list.indexOf(note.name) / 15);

				// Immediately set hands to up
				$track.attr('src', 'visualizers/bongo-cat-u.png')

				// Remove the previous hands up timeout
				clearTimeout(hands_up_timeouts[track_index])

				setTimeout(function() {
					// Put hands down after 0.1s
					$track.attr('src', `visualizers/bongo-cat-${image_down_index}.png`)

					// Store timeout
					hands_up_timeouts[track_index] = setTimeout(function() {
						// Set hands up at the end of the note
						$track.attr('src', 'visualizers/bongo-cat-u.png')

					}, Math.round(note.duration * 1000));

				}, hands_up_delay)

			}, time);
		}
	</script>
</div>