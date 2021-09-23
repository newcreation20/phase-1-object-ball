function gameObject(){
  return {
    home: {
      teamName:"Brooklyn Nets",
      colors:["black","white"],
      players: {

        "Alan Anderson": {
          number: 0,
          shoe: 16,
          Points: 22,
          Rebounds: 12,
          Assists: 12,
          Steals:3,
          Blocks: 1,
          SlamDunks:1,
        },
        "Reggie Evans": {
          number:30,
          shoe:14,
          Points:12,
          Rebounds:12,
          Assists:12,
          Steals:12,
          Blocks:12,
          SlamDunks:7
        },
        "Brook Lopez": {
          number: 11,
          shoe:17,
          Points:17,
          Rebounds:19,
          Assists:10,
          Steals:3,
          Blocks:1,
          SlamDunks:15
        },
        "Mason Plumlee": {
          number:1,
          shoe:19,
          Points:26,
          Rebounds:12,
          Assists:6,
          Steals:3,
          Blocks:8,
          SlamDunks:5
        },
        "Jason Terry": {
          number:31,
          shoe:15,
          Points:19,
          Rebounds:2,
          Assists:2,
          Steals:4,
          Blocks:11,
          SlamDunks:1
        }
      }

    },
    away: {
      teamName:"Charlotte Hornets",
      colors:["turquoise", "purple"],
      players: {
        
        "Jeff Adrien": {
          Number:4,
          Shoe:18,
          Points:10,
          Rebounds:1,
          Assists:1,
          Steals:2,
          Blocks:7,
          SlamDunks:2
        },
        "Bismak Biyombo": {
          Number:0,
          Shoe:16,
          Points:12,
          Rebounds:4,
          Assists:7,
          Steals:7,
          Blocks:15,
          SlamDunks:10
        },
        "DeSagna Diop": {
          Number:2,
          Shoe:14,
          Points:24,
          Rebounds:12,
          Assists:12,
          Steals:4,
          Blocks:5,
          SlamDunks:5
        },
        "Ben Gordon": {
          Number:8,
          Shoe:15,
          Points:33,
          Rebounds:3,
          Assists:2,
          Steals:1,
          Blocks:1,
          SlamDunks:0
        },
        "Brendan Haywood": {
          Number:33,
          Shoe:15,
          Points:6,
          Rebounds:12,
          Assists:12,
          Steals:22,
          Blocks:5,
          SlamDunks:12
        }

      }
    }
  }
}
console.log(gameObject());

function numPointsScored() {

  return "22"
}
const result = numPointsScored()
console.log(numPointsScored);