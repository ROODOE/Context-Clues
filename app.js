$('document').ready(function() {

    // var container = $("<main></main>").appendTo($('body'));
    var friendName = ['Garrett', 'Jake', 'Josh', 'Garrett Again', 'Jake Again']
    var location = ['Red Room', 'Green Room', 'Blue Room', 'Bathroom', 'Bedroom', 'Attic', 'Garage', 'Pool House', 'Basement', 'Hallway'];
    var weapon = ["pair of sock'em boppers", "axe", "chia pet", "sword", "nife..no, a nive..no, a..Knife!", "..John Wick VHS Tape!??..who made this?", "water balloon", "single piece of Lindor chocolate", "mace", "speed boat", "crossbow", "gun", "boomerang", "bomb", "cheek implant that belongs to Kim Kardashian", "stapler", "really old tootsie roll", "shuriken", "dart", "credit card"];
    

    for(i = 0; i <= 100; i++) {
        createHeader(i);
    }
    
    function createHeader(i) {
        var h3 = $(`<h3 id="${i}"><span>Acc</span>usation ${i} </h3>`);
        $('main').append(h3);
        h3.click(function() {

            var sentence = `I accuse ${friendName[i % friendName.length]}, with the ${weapon[i % weapon.length]} in the ${location[i % location.length]}!`;

            $('p').text(sentence);
            // alert(sentence);
            // console.log(sentence);

        })
        
    }
    
})