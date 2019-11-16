const Queue = require('../queue/Queue');
const qHelp = require('../queue/queueHelpers');

const peepQ = {
  pArr: [
    {
      name: 'Bilbo',
      wants: 'cat',
      auto: true,
    },
    {
      name: 'Gandalf',
      wants: 'dog',
      auto: true,
    },
    {
      name: 'Luke',
      wants: 'both',
      auto: true,
    },
    {
      name: 'Jim Dan',
      wants: 'dog',
      auto: true,
    },
    {
      name: 'Poppy Patel',
      wants: 'both',
      auto: true,
    },
    {
      name: 'Tegan Perry',
      wants: 'cat',
      auto: true,
    },
    {
      name: 'Battlegabriella',
      wants: 'dog',
      auto: true,
    },
    {
      name: 'Nathaniel Knight',
      wants: 'cat',
      auto: true,
    },
  ],
  pQ: new Queue(),

  populateQueue() {
    this.pArr.forEach((person) => this.pQ.enqueue(person));
  },

  viewNextPerson() {
    return qHelp.peek(this.pQ);
  },
  personAdopted() {
    const person = this.pQ.dequeue();
    if (person.wants) {
      this.pQ.enqueue(person);
    }
    return person;
  },

  addPersonToQ(person) {
    this.pQ.enqueue(person);
    return person;
  },

  getQueue() {
    const waitingPeeps = [];
    let currNode = this.pQ.first;
    while (currNode) {
      waitingPeeps.push(currNode.data);
      currNode = currNode.next;
    }
    return waitingPeeps;
  },
};

module.exports = peepQ;
