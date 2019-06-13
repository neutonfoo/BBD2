<?php
    $canvas_width = '700';
    $canvas_height = '500';

    $font_base_size = '60';
?>

<div id="visualizer-graffiti" class="visualizer">
    <canvas id="graffiti-canvas" width="<?php echo $canvas_width; ?>px" height="<?php echo $canvas_height; ?>px" style="border:1px solid #000000;">HTML5 Canvas not available.</canvas>

    <script type="text/javascript">
        var canvas = document.getElementById('graffiti-canvas');
        var ctx = canvas.getContext('2d');
        ctx.textAlign = 'start'; 
        ctx.textBaseline = 'top'; 

        function visualize(track_index, instrument_key, time, note) {
            Tone.Draw.schedule(function() {

                const font_size = <?php echo $font_base_size; ?> * note.velocity;
                ctx.font = font_size + 'px monospace';

                const random_x = Math.random() * (<?php echo $canvas_width; ?> - font_size);
                const random_y = Math.random() * (<?php echo $canvas_height?> - font_size);

                const randomHue = Math.random() * 360;
                const hslaFullColor = 'hsla(' + randomHue + ', 100%, 50%, 1)';

                ctx.fillStyle = hslaFullColor;

                ctx.fillText(note.name, random_x, random_y);

            }, time)
        }
    </script>
</div>