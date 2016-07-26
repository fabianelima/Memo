###

	  MEMO 1.0
	------------
	Fabiane Lima

###

$ ->
	cards = [
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c1.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c2.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c3.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c4.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c5.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c6.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c7.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c8.png">',

				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c1.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c2.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c3.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c4.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c5.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c6.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c7.png">',
				'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c8.png">'
			]

	score = 0
	attempts = 0

	### Inicia o jogo ###
	$('.start,.again').on 'click', ->
		score = 0
		attempts = 0
		$(this).parent().fadeOut()
		$('.game').fadeIn()

		shuffleCards = fisherYates(cards)

		for i in [0...shuffleCards.length]
			$('.cards .card' + i).html(shuffleCards[i])

	### Algoritmo de ordenação Fisher Yates ###
	fisherYates = (arr) ->
		i = arr.length
		if i == 0 then return false

		while --i
			j = Math.floor(Math.random() * (i + 1))
			[arr[i], arr[j]] = [arr[j], arr[i]]

		return arr

	### Clique na carta ###
	for i in [0...(cards[0].length + cards[1].length)]
		l = 0
		$('.card' + i).on 'click', ->
			l++
			k = $(this).attr('class').split('card')[1]
			$('.card' + k + ' .verso').hide()
			$('.card' + k).addClass('escolha' + l)
			$(this).css('pointer-events','none')

			if l == 2
				l = 0
				attempts++
				$('.cards *').css('pointer-events','none')
				
				if $('.escolha1').html() == $('.escolha2').html()
					score++
					$('.cards *').css('pointer-events','auto')
					$('.cards *').removeClass('escolha1')
					$('.cards *').removeClass('escolha2')
				else
					setTimeout ->
						$('.escolha1 .verso, .escolha2 .verso').show()
						$('.cards *').css('pointer-events','auto')
						$('.cards *').removeClass('escolha1')
						$('.cards *').removeClass('escolha2')
					, 1000

			if score == 8
				setTimeout ->
					$('.game').fadeOut()
					$('.end-game').fadeIn()
					$('.end-game span').html(attempts)
				, 1000