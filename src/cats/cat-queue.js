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
    {
      imageURL: 'https://cdn.pixabay.com/photo/2015/10/12/15/01/cat-984097__340.jpg',
      imageDesc: 'cat wearing glasses',
      name: 'Dorktimus Prime',
      sex: 'M',
      age: 1,
      breed: 'Nerd Cat',
      story: 'Insufferably quotes Star Trek, BSG, and LOTR. Adopt at your own risk.',
    },
    {
      imageURL: 'https://cdn.pixabay.com/photo/2019/10/23/18/58/malai-4572548__340.jpg',
      imageDesc: 'black cat',
      name: 'Topaz',
      sex: 'F',
      age: 12,
      breed: 'black cat',
      story: 'Topaz maxed out her stealth skill tree. As such, Topaz needs a well illuminated home. Her last owner kept losing Topaz in the shadows.',
    },
    {
      imageURL: 'https://cdn.pixabay.com/photo/2019/07/27/09/05/red-panda-4366264__340.jpg',
      imageDesc: 'Cat?',
      name: 'Blue',
      sex: 'M',
      age: 9,
      breed: 'Cat?',
      story: 'We think Blue is a cat? We are not really sure. We do know he like to cuddle, though.',
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
    this.cQ.enqueue(cat);
    return cat;
  },
};

module.exports = catQ;
