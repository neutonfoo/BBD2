<?php
foreach ($tracks as $track) {

    ?>
    <pre>

    <?php echo json_encode($track['notes']); ?>
    </pre>
    <script type="text/javascript">
        var part = new Tone.Part(function(time, value) {
            //the value is an object which contains both the note and the velocity
            instruments.piano.triggerAttackRelease(value.name, value.duration, time, value.velocity);
        }, <?php echo json_encode($track['notes']); ?>).start(0);
    </script>
    <?php
}
?>

<script type="text/javascript">
        Tone.Transport.start('+1', 0)
    </script>
