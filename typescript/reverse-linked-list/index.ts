class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// Best solution because it does not use a stack and is O(n)
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  while (head !== null) {
    const next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}


function reverseList2(head: ListNode | null): ListNode | null {
  if (head === null) { return head }
  const stack: Array<ListNode> = []
  while (head !== null) {
    const x = head
    stack.push(x)
    head = head.next
  }
  let newHead = stack.pop() || null
  if (!newHead) { return null }
  let curr = newHead
  while (stack.length > 0) {
    const x = stack.pop()
    if (x) {
      x.next = null
      curr.next = x
      curr = x
    }
  }
  return newHead
};
