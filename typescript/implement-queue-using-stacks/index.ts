class MyQueue {
  enq: Array<number>
  deq: Array<number>
  constructor() {
    this.enq = []
    // Starts out empty
    this.deq = []
  }

  // ENQUEUE
  push(x: number): void {
    this.enq.push(x)
  }

  // DEQUEUE
  pop(): number {
    if (this.deq.length === 0) {
      while (this.enq.length > 0) {
        const t = this.enq.pop() || -1
        this.deq.push(t)
      }
    }
    return this.deq.pop() || -1

  }

  peek(): number {
    return this.deq.length > 0 ? this.deq[this.deq.length - 1] : this.enq[0]


  }

  empty(): boolean {
    return this.enq.length === 0 && this.deq.length == - 0
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
