var server = require('../server.js');

//this contains and modifies the vote session obj
module.exports = {
  // Initializations: view, rating counts, total votes, total votes tracked, and final result
  stateView: 1,

  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,

  totalVotes: 3, // Default initial number of voters
  allVotesIn: false, // Flag for all votes received
  result: null, // Result of voting

  voteOne: function () {
    this.one++;
    this.checkResult();
  },

  voteTwo: function () {
    this.two++;
    this.checkResult();
  },

  voteThree: function () {
    this.three++;
    this.checkResult();
  },

  voteFour: function () {
    this.four++;
    this.checkResult();
  },

  voteFive: function () {
    this.five++;
    this.checkResult();
  },

  //check result
  checkResult: function () {
    // //see if all votes are in
    // if (this.yes + this.no === this.totalVotes) {
    //   //all votes are in!
    //   this.allVotesIn = true;
    //   //check for a winner
    //   if (this.yes > this.no) {
    //     //set result - yes
    //     this.result = 'yes';
    //   } else if (this.yes < this.no) {
    //     //set result - no
    //     this.result = 'no';
    //   } else {
    //     //set result - tie
    //     this.result = 'tie';
    //   }
    //   //change to state 3 and emit stateViewChange to all clients
    //   this.changeStateView(3);
    // }
    var voteCount = this.one + this.two + this.three + this.four + this.five;
    var voteSum = (this.one * 1) + (this.two * 2) + (this.three * 3) + (this.four * 4) + (this.five * 5);

    if (voteCount === this.totalVotes) {
      console.log('all %s votes in!', voteCount);
      console.log('this.one: ', this.one);
      console.log('this.two: ', this.two);
      console.log('this.three: ', this.three);
      console.log('this.four: ', this.four);
      console.log('this.five: ', this.five);
      console.log('sum: ', voteSum);
      console.log('result: ', (voteSum/voteCount).toFixed(2));
      this.allVotesIn = true;
      this.result = (voteSum/voteCount).toFixed(2);
      // this.changeStateView(3);
    }

  },

  setTotalVotes: function (num) {
    //set votes total
    this.totalVotes = num || 3;
    //set state to 2 using our method below to do so and emit stateViewChange to all clients
    this.changeStateView(2);
  },

  //reset the vote session
  voteReset: function () {

    this.stateView = 1;

    this.one = 0;
    this.two = 0;
    this.three = 0;
    this.four = 0;
    this.five = 0;

    //total votes expected
    this.totalVotes = 3;

    //tracks when all votes are in
    this.allVotesIn = false;

    //result of voting session: strings 'yes','no',or 'tie'
    this.result = null;
  },

  // change the stateView and emit it for the client to act upon
  changeStateView: function(viewnum) {
    // actually change the stateView on the object
    this.stateView = viewnum;
    // emit a socket event that the client is listening for, and send it the entire data object here
    server.io.emit('stateViewChange', this);
  }
};