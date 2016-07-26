(function() {
  $(function() {
    var cards, fisherYates, i, l, score, _i, _results;
    cards = [['<img class="verso" src="assets/img/verso.png"><img src="assets/img/c1.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c2.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c3.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c4.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c5.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c6.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c7.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c8.png">'], ['<img class="verso" src="assets/img/verso.png"><img src="assets/img/c1.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c2.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c3.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c4.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c5.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c6.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c7.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c8.png">']];
    score = 0;

    /* Inicia o jogo */
    $('.start').on('click', function() {
      var allCards, i, shuffleCards, _i, _ref, _results;
      $(this).parent().fadeOut();
      $('.game').fadeIn();
      allCards = cards[0].concat(cards[1]);
      shuffleCards = fisherYates(allCards);
      _results = [];
      for (i = _i = 0, _ref = shuffleCards.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        _results.push($('.cards .card' + i).html(shuffleCards[i]));
      }
      return _results;
    });

    /* Algoritmo de ordenação Fisher Yates */
    fisherYates = function(arr) {
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
    _results = [];
    for (i = _i = 0; _i < 16; i = ++_i) {
      l = 0;
      _results.push($('.card' + i).on('click', function() {
        var k;
        l++;
        k = $(this).attr('class').split('card')[1];
        $('.card' + k + ' .verso').hide();
        $('.card' + k).addClass('escolha' + l);
        if (l > 0 && l < 3) {
          console.log(l);
          $('.cards').css('pointer-events', 'none');
          if ($('.escolha1') === $('.escolha2')) {
            score++;
          } else {
            $('.card' + k + ' .verso').show();
            $('.cards').css('pointer-events', 'auto');
          }
        }
        return console.log(score);
      }));
    }
    return _results;
  });

}).call(this);
