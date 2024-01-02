let noun1 = prompt('Enter a noun:');
let noun2 = prompt('Enter a noun:');
let noun3 = prompt('Enter a noun:');
let noun4 = prompt('Enter a noun:');
let noun5 = prompt('Enter a noun:');
let noun6 = prompt('Enter a noun:');
let noun7 = prompt('Enter a noun:');
let noun8 = prompt('Enter a noun:');
let noun9 = prompt('Enter a noun:');
let verb1 = prompt('Enter a verb:');
let animal = prompt('Enter an animal:');
let holiday = prompt('Enter a holiday');
let place = prompt('Enter a place:');
let adjective1 = prompt('Enter an adjective:');
let adjective2 = prompt('Enter an adjective:');
let adjective3 = prompt('Enter an adjective:');
let adjective4 = prompt('Enter an adjective:');
let adjective5 = prompt('Enter an adjective:');
let adjective6 = prompt('Enter an adjective:');
let adjective7 = prompt('Enter an adjective:');
let adjective8 = prompt('Enter an adjective:');
let celebrityChef = prompt('Enter a celebrity chef:');
let weather = prompt('Enter a type of weather:');
let furniture = prompt('Enter a type of furniture');
let color = prompt('Enter a color:');
let culinarySubstance1 = prompt('Enter a culinary substance');
let culinarySubstance2 = prompt('Enter another culinary substance');

let food2 = prompt('Enter another food');
let shape = prompt('Enter a shape');
let transportation = prompt('Enter a type of transportation');

let story = `Twas the night before ${holiday}, and all through the ${place}, Not a ${noun1} was stirring, not even a ${animal} with a ${adjective1} face. The ${adjective2} stockings were hung by the ${noun2} with care, In hopes that ${celebrityChef} soon would be there.

When out on the ${weather}, there arose such a ${adjective3} clatter, I sprang from my ${furniture} to see what was the ${adjective4} matter.

Away to the ${transportation} I flew like a ${noun3}, Tore open the ${noun4} and threw up the ${noun5}.

And then, in a twinkling, I heard on the roof, The ${adjective5} prancing and pawing of each little ${animal}.

As I drew in my breath, and was turning around, Down the chimney ${celebrityChef} came with a ${adjective6} bound.

He was dressed all in ${color}, from his head to his toe, And his clothes were all tarnished with ${culinarySubstance1} and ${culinarySubstance2}.

His ${noun6} was drawn up like a ${shape}, and the beard on his face was ${color}, The stump of a ${noun7} he held tight in his hand, And the smoke, it encircled his body like a wreath.

He had a ${adjective7} face and a little round ${noun8}, That shook when he ${verb1}, like a bowl full of jelly.

He was ${adjective8} and plump, a right jolly old ${noun9}, And I laughed when I saw him, in spite of myself.`;

let madLibOutputDiv = document.querySelector('#madLibOutput');

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
