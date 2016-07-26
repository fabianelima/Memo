(function() {
  $(function() {
    var attempts, cards, fisherYates, i, l, score, _i, _ref, _results;
    cards = ['<img class="verso" src="assets/img/verso.png"><img src="assets/img/c1.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c2.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c3.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c4.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c5.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c6.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c7.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c8.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c1.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c2.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c3.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c4.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c5.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c6.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c7.png">', '<img class="verso" src="assets/img/verso.png"><img src="assets/img/c8.png">'];
    score = 0;
    attempts = 0;

    /* Inicia o jogo */
    $('.start,.again').on('click', function() {
      var i, shuffleCards, _i, _ref, _results;
      score = 0;
      attempts = 0;
      $(this).parent().fadeOut();
      $('.game').fadeIn();
      shuffleCards = fisherYates(cards);
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

    /* Clique na carta */
    _results = [];
    for (i = _i = 0, _ref = cards[0].length + cards[1].length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      l = 0;
      _results.push($('.card' + i).on('click', function() {
        var k;
        l++;
        k = $(this).attr('class').split('card')[1];
        $('.card' + k + ' .verso').hide();
        $('.card' + k).addClass('escolha' + l);
        $(this).css('pointer-events', 'none');
        if (l === 2) {
          l = 0;
          attempts++;
          $('.cards *').css('pointer-events', 'none');
          if ($('.escolha1').html() === $('.escolha2').html()) {
            score++;
            $('.cards *').css('pointer-events', 'auto');
            $('.cards *').removeClass('escolha1');
            $('.cards *').removeClass('escolha2');
          } else {
            setTimeout(function() {
              $('.escolha1 .verso, .escolha2 .verso').show();
              $('.cards *').css('pointer-events', 'auto');
              $('.cards *').removeClass('escolha1');
              return $('.cards *').removeClass('escolha2');
            }, 1000);
          }
        }
        if (score === 8) {
          return setTimeout(function() {
            $('.game').fadeOut();
            $('.end-game').fadeIn();
            return $('.end-game span').html(attempts);
          }, 1000);
        }
      }));
    }
    return _results;
  });

}).call(this);
