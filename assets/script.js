(function() {
  $(function() {
    var cards, fisherYates, getgame;
    cards = [['carta1', 'carta2', 'carta3', 'carta4', 'carta5', 'carta6', 'carta7', 'carta8'], ['cartaA', 'cartaB', 'cartaC', 'cartaD', 'cartaE', 'cartaF', 'cartaG', 'cartaH']];
    $('.start').on('click', function() {
      $(this).parent().fadeOut();
      $('.game').fadeIn();
      return getgame();
    });
    getgame = function() {
      var allCards, i, shuffleCards, _i, _ref;
      allCards = cards[0].concat(cards[1]);
      shuffleCards = fisherYates(allCards);
      for (i = _i = 0, _ref = shuffleCards.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        $('.cards .card' + i).html(shuffleCards[i]);
      }
      return console.log(shuffleCards);
    };
    return fisherYates = function(arr) {
      var i, j, _ref;
      i = arr.length;
      if (i === 0) {
        return false;
      }
      while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        _ref = [arr[j], arr[i]], arr[i] = _ref[0], arr[j] = _ref[1];
      }
      return arr;
    };
  });

}).call(this);
