$ ->
	cards = [
				[
					'carta1', 'carta2', 'carta3', 'carta4', 'carta5', 'carta6', 'carta7', 'carta8'
				],
				[
					'cartaA', 'cartaB', 'cartaC', 'cartaD', 'cartaE', 'cartaF', 'cartaG', 'cartaH'
				]
			]

	$('.start').on 'click', ->
		$(this).parent().fadeOut()
		$('.game').fadeIn()
		getgame()

	getgame = ->
		allCards = cards[0].concat(cards[1])
		shuffleCards = fisherYates(allCards)

		for i in [0...shuffleCards.length]
			$('.cards .card' + i).html(shuffleCards[i])

		console.log(shuffleCards)

	# Algoritmo de 
	fisherYates = (arr) ->
		i = arr.length
		if i == 0 then return false

		while --i
			j = Math.floor(Math.random() * (i + 1))
			[arr[i], arr[j]] = [arr[j], arr[i]]
		return arr

