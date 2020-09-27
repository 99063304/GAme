alert ('Welkom bij de Pokemon center');
alert ('Kies je Pokemon');
var welke = prompt ('charmander , bulbasaur , squirtle , mystery');
    if (welke == 'charmander') {
    alert ('Dus jij hebt gekozen voor de vuur Pokemon charmander');
    alert ('Om te kijken of de joune het sterkst train je Pokemon en wordt het de beste');
    var evolutie = prompt('type in getallen van 1 tot 1000 hier hoe sterk jou charmander moet zijn?');

    if (evolutie >= '1000'){
      var vorm = prompt ('wat voor evolutie wil je 1, 2, 3,') ;
      var tegen = prompt ('tegen welke van de begin Pokemon wil je vechten?');

    }
      }
  else if (welke == 'squirtle') {
    alert ('Dus jij hebt gekozen voor de water Pokemon squirtle');
    alert ('Om te kijken of de joune het sterkst train je Pokemon en wordt het de beste');
    var evolutie1 = prompt('type in getallen van 1 tot 1100 hier hoe sterk jou squirtle moet zijn?');
    if (evolutie1 >= '1100'){
      var vorm = prompt ('wat voor evolutie wil je 1, 2, 3,') ;
      var tegen = prompt ('tegen welke van de begin Pokemon wil je vechten?');
    }
      }
  else if (welke == 'mystery') {
    alert ('Dus jij hebt gekozen voor de mystery Pokemon Mystery');
    alert ('Om te kijken of de joune het sterkst train je Pokemon en wordt het de beste');
    var evolutie2 = prompt('type in getallen van 1 tot 1000000 hier hoe sterk jou mystery moet zijn?');
    if (evolutie2 >= '1000000'){
      var vorm = prompt ('wat voor evolutie wil je 1, 2, 3,') ;
      var tegen = prompt ('tegen welke van de begin Pokemon wil je vechten?');
    }
      }
  else if (welke == 'bulbasaur') {
    alert ('Dus jij hebt gekozen voor de grass Pokemon bulbasaur');
    alert ('Om te kijken of de joune het sterkst train je Pokemon en wordt het de beste');
    var evolutie3 = prompt('type in getallen van 1 tot 980 hier hoe sterk jou charmander moet zijn?');
    if (evolutie3 >= '980'){
      var vorm = prompt ('wat voor evolutie wil je 1, 2, 3,') ;
      var tegen = prompt ('tegen welke van de begin Pokemon wil je vechten?');
    }
      }
      alert ('jij hebt gekozen voor ' + welke);
      alert ('en vecht tegen ' + tegen);

      alert ('je hebt je Pokemon deels getrained, dit wordt je eerste gevecht laten we kijken naar het resultaat');

      if (welke != tegen) {
        document.write ('Pokemon ' + welke);
        document.write ('Kracht vs ' +  evolutie);
        document.write ('Evolutie ' + vorm );

          if (tegen == 'mystery') {
          var mystery =
            document.write ('Pokemon ' + 'mystery');
            document.write ('Kracht vs ' +  '500000');
            document.write ('Evolutie ' + '1' );
            if (evolutie >= '500000') {
              document.write('You win');
            }
            if (evolutie <= '500000') {
              document.write('You lose');

            }
        }
        else if (tegen == 'bulbasaur') {
          var bulbasaur =
          document.write ('Pokemon ' + 'bulbasaur');
          document.write ('Kracht vs ' +  '750');
          document.write ('Evolutie ' + '1' );
          if (evolutie >= '750') {
            document.write('You win');
          }
          if (evolutie <= '750') {
            document.write('You lose');
            }

        }
        else if (tegen == 'squirtle') {
          var squirtle =
          document.write ('Pokemon ' + 'squirtle');
          document.write ('Kracht vs ' +  '860');
          document.write ('Evolutie ' + '1' );
          if (evolutie >= '860') {
            document.write('You win');
           }
          if (evolutie <= '860') {
            document.write('You lose');
            }

        }
        else if (tegen == 'charmander') {
          var charmander =
          document.write ('Pokemon ' + 'charmander');
          document.write ('Kracht vs ' +  '500');
          document.write ('Evolutie ' + '1' );
          if (evolutie <= '500') {
            document.write('You win');
            }
          if (evolutie = '500') {
            document.write('You lose');
            }
          }
      }
