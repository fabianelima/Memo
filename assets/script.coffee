$ ->
	cards = [
				[
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c1.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c2.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c3.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c4.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c5.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c6.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c7.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c8.png">'
				],
				[
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c1.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c2.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c3.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c4.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c5.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c6.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c7.png">',
					'<img class="verso" src="assets/img/verso.png"><img src="assets/img/c8.png">'
				]
			]

	score = 0

	### Inicia o jogo ###
	$('.start').on 'click', ->
		$(this).parent().fadeOut()
		$('.game').fadeIn()

		allCards = cards[0].concat(cards[1])
		shuffleCards = fisherYates(allCards)

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

	for i in [0...16]
		l = 0
		$('.card' + i).on 'click', ->
			l++
			k = $(this).attr('class').split('card')[1]
			$('.card' + k + ' .verso').hide()
			$('.card' + k).addClass('escolha' + l)

			if l > 0 and l < 3			# daqui pra baixo nada deu certo
				console.log(l)
				$('.cards').css('pointer-events','none')
				if $('.escolha1') == $('.escolha2')
					score++
				else
					$('.card' + k + ' .verso').show()
					$('.cards').css('pointer-events','auto')
			# else l = 0
			console.log(score)
