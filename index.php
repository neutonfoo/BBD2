<html>

<head>
    <title>BBD Player 2</title>
    <meta charset="UTF-8">
    <!-- jQuery -->
    <script src="js/jquery-3.4.1.min.js"></script>
    <!-- jQuery Selectric -->
    <script src="js/jquery.selectric.min.js"></script>
    <link href="css/selectric.css" rel="stylesheet">
    <!-- jQuery Modal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
    <!-- Tone.js -->
    <script src="js/StartAudioContext.js"></script>
    <script src="js/Tone.js"></script>
    <!-- Midi Converter -->
    <script type="text/javascript" src="https://unpkg.com/@tonejs/midi"></script>
    <script type="text/javascript" src="js/converter.js"></script>
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/5dc4a3cb6b.js"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Unica+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <!-- Custom Player JS -->
    <script src="js/samplerLoader.js"></script>
    <script src="js/player.js"></script>
    <!-- Custom CSS -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <header>
        <span class="page-title">BBD2</span>
        <button id="initialize-button">click</button>
    </header>
    <main>
        <div id="player"></div>
    </main>
    <footer>
        <i class="fas fa-play fa-2x"></i>
        <a href="#converter-modal" rel="modal:open"><i class="fas fa-dna fa-2x"></i></a>
        <input type="range" style="vertical-align:sub;" min="0" max="100" value="0" step="1">
        <span id="visualizer-selector-container">
            <select>
                <option value="default">Default</option>
                <option value="original">Original</option>
            </select>
        </span>

    </footer>

    <!-- Modals -->
    <div id="converter-modal" class="modal">
        <div class="modal-heading modal-section">Converter</div>
        <div id="midi-dropzone" class="modal-section">
            <div id="midi-dropzone-text">Drop a midi file here.</div>
        </div>
        <div class="modal-section">
            JSON
            <textarea id="midi-converted-json" cols="30" rows="10"></textarea>
        </div>
        <div class="modal-section">
            <input type="button" id="converter-load-song" value="Load Song">
        </div>
    </div>
</body>

</html>