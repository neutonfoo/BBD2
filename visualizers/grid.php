<div id="visualizer-grid" class="visualizer">
	<?php

	$number_of_cells_per_track = 180;
	$cell_count = $number_of_cells_per_track * count($tracks);

	for ($i = 0; $i < $cell_count; $i++) {
		?>
		<div id="cell_<?php echo $i; ?>" class="cell"></div>
	<?php
}
?>
	<script type="text/javascript">
		function visualize(track_index, instrument_key, time, note) {
			Tone.Draw.schedule(function() {

				const grid_number = Math.floor(Math.random() * <?php echo $cell_count; ?>);

				const $note = $('#cell_' + grid_number)

				var randomHue = Math.random() * 360;
				var hslaFullColor = 'hsla(' + randomHue + ', 100%, 50%, 1)';

				$note.css('background-color', hslaFullColor);
				// $note.css('border-color', hslaFullColor);

			}, time)
		}
	</script>
</div>