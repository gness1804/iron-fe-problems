//#1: given the following array of presidents, write an algorithm that returns a random Republican as a string

// function random(min, max) {
//   let min = min;
//   let max = max;
//   return Math.floor(Math.random() * (max - min) + min);
// }

const presidents = [
  {
    name: 'Richard Nixon',
    party: 'Republican',
    terms: 1.5,
    outOfOffice: '1974',
  },
  {
    name: 'Bill Clinton',
    party: 'Democrat',
    terms: 2,
    outOfOffice: '2001',
  },
  {
    name: 'Ronald Reagan',
    party: 'Republican',
    terms: 2,
    outOfOffice: '1989',
  },
  {
    name: 'George H.W. Bush',
    party: 'Republican',
    terms: 1,
    outOfOffice: '1993',
  },
  {
    name: 'Barack Obama',
    party: 'Democrat',
    terms: 2,
    outOfOffice: '2017',
  },
  {
    name: 'George W. Bush',
    party: 'Republican',
    terms: 2,
    outOfOffice: '2009',
  },
]

const getPresident = (presidents) => {

}

//#2: Now write an algorithm that a string with all the presidents and their party affiliation, ranked from most recent to least recent

const rankedPresidents = (presidents) => {

}

Object.assign(exports, {
  presidents,
  getPresident,
  rankedPresidents,
})
