<?php
    $visualizer = $_POST['visualizer'];
    $bbd_song = json_decode($_POST['bbd_song'], true);
    $tracks = $bbd_song['tracks'];

    // echo '<pre>';
    // print_r($bbd_song);
    // echo '</pre>';

    if($visualizer == 'default') {
        require('visualizers/default.php');
    }