<html>

<head>
	<title>BBD Player 2</title>
	<meta charset="UTF-8">
	<!-- Favicon -->
	<link rel="icon" href="/favicon.ico">
	<!-- Google Analytics -->
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132697667-5"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'UA-132697667-5');
	</script>
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
	<script type="text/javascript" src="js/MidiConvert.js"></script>
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
		<a href="#" id="replay-button"><i class="fas fa-redo fa-2x"></i></a>
		<a href="#" id="instrument-button"><i class="fas fa-guitar fa-2x"></i></a>
		<a href="#" id="brightness-button"><i class="fas fa-adjust fa-2x"></i></a>
		<a href="#converter-modal" rel="modal:open"><i class="fas fa-dna fa-2x"></i></a>
		<!-- <a href="#info-modal" rel="modal:open"><i class=" fas fa-info fa-2x"></i></a> -->
		<a href="https://github.com/neutonfoo/BBD2" target="_blank"><i class="fas fa-code fa-2x"></i></i></a>

		<input id="song-progress-slider" type="range" min="0" max="1" value="0" step="0.01">

		<span id="visualizer-selector-container">
			<select>
				<option value="original" selected>Original</option>
				<option value="tracks">Tracks List</option>
				<option value="lights">Lights</option>
				<option value="graffiti">Graffiti</option>
				<option value="grid">Grid</option>
				<option value="grid-small">Grid (Small)</option>
				<option value="bongo-cat">Bongo Cat</option>
			</select>
		</span>

		<span id="song-selector-container">
			<select>
				<option value="alan-walker--faded">Alan Walker - Faded</option>
				<option value="the-beatles--in-my-life">Beatles - In My Life</option>
				<option value="beethoven--moonlight1">Beethoven - Sonate No. 14, "Moonlight" 1st Movement</option>
				<option value="beethoven--moonlight3">Beethoven - Sonate No. 14, "Moonlight" 3rd Movement</option>
				<option value="blackpink--ddu-du-ddu-du">BLACKPINK - DDU-DU-DDU-DU</option>
				<option value="blackpink--dont-know-what-to-do">BLACKPINK - Don't Know What To Do</option>
				<option value="blackpink--how-you-like-that">BLACKPINK - How You Like That</option>
				<option value="blackpink--stay">BLACKPINK - Stay</option>
				<option value="bts--blood-sweat-tears">BTS - Blood, Sweat, Tears</option>
				<option value="bts--fake-love">BTS - Fake Love</option>
				<option value="bts--run">BTS - Run</option>
				<option value="bts--spring-day">BTS - Spring Day</option>
				<option value="coldplay--the-scientist">Coldplay - The Scientist</option>
				<option value="fleetwood-mac--landslide">Fleetwood Mac - Landslide</option>
				<option value="hans-zimmer--pirates-of-the-carribean-medley">Hans Zimmer - Pirates of The Caribbean Medley</option>
				<option value="joe-hisaishi--one-summers-day">Joe Hisaishi - One Summer's Day</option>
				<option value="joe-hisaishi-merry-go-round-of-life">Joe Hisaishi - Merry-Go-Round of Life</option>
				<option value="ludovico-einoudi--nuvole-bianche">Ludovico Einaudi - Nuvole Bianche</option>
				<option value="nct-127--limitless">NCT 127 - Limitless</option>
				<option value="nct-u--without-you">NCT U - WITHOUT YOU</option>
				<option value="sekai-no-owari--sazanka">SEKAI NO OWARI - Sazanka</option>
				<option value="shawn-mendes--in-my-blood">Shawn Mendes - In My Blood</option>
				<option value="shinee--hello">SHINee - Hello</option>
				<option value="shinee--replay">SHINee - Replay</option>
				<option value="snsd--gee">SNSD - Gee</option>
				<option value="twice--dance-the-night-away">TWICE - Dance The Night Away</option>
				<option value="twice--feel-special">TWICE - Feel Special</option>
				<option value="twice--likey">TWICE - Likey</option>
				<option value="yiruma--river-flows-in-you" selected>Yiruma - River Flows In You</option>
			</select>
		</span>
	</footer>

	<?php

	$start_song = 'yiruma--river-flows-in-you';

	if (isset($_GET['n'])) {
		$start_song = 'yiruma--river-flows-in-you-n';
	}
	?>
	<script type="text/javascript">
		const start_song = '<?php echo $start_song; ?>';
	</script>

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

	<div id="info-modal" class="modal">
		<div class="modal-heading modal-section">About</div>
		<div class="modal-section">
			<p>Hello</p>
		</div>
	</div>


	<!-- Custom Player JS -->
	<script type="text/javascript" src="js/player.js"></script>
</body>

</html>