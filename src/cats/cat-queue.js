const Queue = require('../queue/Queue');
const qHelp = require('../queue/queueHelpers');

const catQ = {
  cArr: [
    {
      imageURL: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
      imageDesc: 'cat in nature',
      name: 'Lincoln',
      sex: 'M',
      age: 3,
      breed: 'Cat',
      story: 'Arrested for public catnip consumption',
    },
    {
      imageURL: 'https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888__340.jpg',
      imageDesc: 'big kitty in water',
      name: 'Princess Buttercup',
      sex: 'F',
      age: 12,
      breed: 'Tabby, probably',
      story: 'We found Princess Buttercup outside our shelter and she immediately made herself at home. She is quite large, please plan accordingly.',
    },
    {
      imageURL: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720__340.jpg',
      imageDesc: 'Pudge sitting around',
      name: 'Pudge',
      sex: 'M',
      age: 99,
      breed: 'Pudge',
      story: 'Pudge is sorry for what he did. Pudge wants to find ahome willing to forgive him',
    },
    {
      imageURL: 'https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164__340.jpg',
      imageDesc: 'cat on her back',
      name: 'Luna',
      sex: 'F',
      age: 3,
      breed: 'Cat',
      story: 'Got kicked out after eating all her roommate\'s peanut butter. Looking for a home willing to share some PB.',
    },
  ],

  cQ: new Queue(),

  populateQueue() {
    this.cArr.forEach((cat) => this.cQ.enqueue(cat));
    return this.cQ;
  },

  viewTopCat() {
    return qHelp.peek(this.cQ);
  },

  catAdopted() {
    const cat = this.cQ.dequeue();
    this.adoptedCats.enqueue(cat);
    return cat;
  },

  adoptedCats: new Queue(),

  addCattoAdopted(cat) {
    this.adoptedCats.enqueue(cat);
  },

  returnRecentCats() {
    let i = 0;
    const recentCats = [];
    while (!qHelp.isEmpty(this.adoptedCats) && i < 3) {
      const cat = this.adoptedCats.dequeue();
      recentCats.push(cat);
      this.cQ.enqueue(cat);
      i += 1;
    }
    return recentCats;
  },
};

module.exports = catQ;
