//#1: given the following array of presidents, write an algorithm that returns a random Republican

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

//#2: Now write an algorithm that returns two arrays, one for the Democrats and one for the Republicans, ranked from most recent to least recent

const rankedPresidents = (presidents) => {

}

Object.assign(exports, {
  presidents,
  getPresident,
  rankedPresidents,
})
