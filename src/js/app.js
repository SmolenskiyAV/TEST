/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
import {Team, errorRepository} from './basic';

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
let john2 = { name: "John2" };
// eslint-disable-next-line no-unused-vars
let pete2 = { name: "Pete2" };
let mary2 = { name: "Mary2" };

const m = new Team();

m.add(john);
m.add(john2);
m.addAll(john, john2, pete, mary2);

const a = m.toArray();

console.log('toArray = ', a);

m.add(john2);
//=================================================================

console.log(errorRepository.translate('100'));

//=================================================================


console.log();
console.log('end of execution!');