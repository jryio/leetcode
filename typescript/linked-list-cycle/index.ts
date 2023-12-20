class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const SEEN_VALUE = 10 ** 6

function hasCycle(head: ListNode | null): boolean {
  let node = head
  let cycle = false
  while (node != null) {
    //. there is a loop
    if (node.val === SEEN_VALUE) {
      cycle = true
      break
    }
    node.val = SEEN_VALUE
    node = node.next
  }
  return cycle
};
