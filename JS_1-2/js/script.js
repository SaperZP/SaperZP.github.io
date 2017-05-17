/*(function () {
    "use strict";
    var number = prompt('enter the number'),
        power = prompt('enter the math power');


    function pow(givenNumber, givenPower) {
        var result = givenNumber;

        for (var i = 1; i < givenPower; i++) {
            result *= givenNumber;
        }
        return result;
    }

    console.log(pow(number, power));
})();*/


(function () {
    "use strict";
    var namesArr = [1, 2, 3, 4, 5];
    for (var i = 0; i < 5; i++) {
        namesArr[i] = prompt('set the name N: ' + (i + 1) + 'out of 5');

    }

    var user_name = prompt('enter your name');
    var result = 'user not in the list';

    for (i = 0; i < namesArr.length; i++) {
        if (namesArr[i] === user_name) {
            result = 'user is on the list!';
            break;
        }
    }
    alert(result);

})();