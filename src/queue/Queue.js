const QueueNode = require('./QueueNode');
// const queueHelpers = require('./queueHelpers');


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new QueueNode(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    // eslint-disable-next-line consistent-return
    return node.data;
  }
}

module.exports = Queue;
