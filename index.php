    <html>

    <head>
        <title>BBD Player 2</title>
        <meta charset="UTF-8">
        <!-- jQuery -->
        <script src="js/jquery-3.4.1.min.js"></script>
        <script src="js/jquery.color-2.1.2.min.js"></script>
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
        <link href="https://fonts.googleapis.com/css?family=Oleo+Script&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Unica+One&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <!-- utility.js -->
        <script src="js/utility.js"></script>
        <!-- instruments.js -->
        <script src="js/instruments.js"></script>
        <!-- BBD2 CSS -->
        <link href="css/style.css" rel="stylesheet">
        <link href="css/visualizers.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <body>
        <header>
            <div>
                <span id="page-title">BBD2</span>
                <span id="song-info">
                    <span id="song-artist"></span>
                    <span id="song-title"></span>
                    <span id="song-source"></span>
                </span>
                <!-- <button id="initialize-button">click</button> -->
            </div>
        </header>
        <main>
            <div id="instruments-selector-container"></div>
            <div id="player">
                <div id="loading">Loading...</div>
            </div>
        </main>
        <footer>
            <a href="#" id="play-button"><i class="fas fa-play fa-2x"></i></a>
            <a href="#" id="instrument-button"><i class="fas fa-guitar fa-2x"></i></a>
            <a href="#" id="brightness-button"><i class="fas fa-adjust fa-2x"></i></a>
            <a href="#converter-modal" rel="modal:open"><i class="fas fa-dna fa-2x"></i></a>
            <a href="#songs-modal" rel="modal:open"><i class="fas fa-music fa-2x"></i></a>
            <input id="progress-slider" type="range" min="0" max="100" value="0" step="1">
            <input id="song0" type="button" value="Beatles - In My Life">
            <input id="song1" type="button" value="Coldplay - The Scientist">
            <input id="song2" type="button" value="SEKAI NO OWARI - Sazanka">
            <input id="song3" type="button" value="TWICE - Likey">
            <input id="song4" type="button" value="SHINee - Replay">
            <span id="visualizer-selector-container">
                <select>
                    <option value="original" selected>Original</option>
                    <option value="tracks">Tracks</option>
                    <option value="lights">Lights</option>
                    <option value="bongo-cat">Bongo Cat</option>
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
        <!-- Custom Player JS -->
        <script type="text/javascript" src="js/player.js"></script>
    </body>

    </html>