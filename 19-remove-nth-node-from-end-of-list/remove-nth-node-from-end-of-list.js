/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const newList = new ListNode(-1)
    newList.next = head

    let x = findFromEnd(newList, n + 1)
    x.next = x.next.next

    return newList.next
};

var findFromEnd = function(head, k){
    let p1 = head
    for(let i = 0; i < k; i++)
        p1 = p1.next

    let p2 = head

    while(p1 != null){
        p2 = p2.next
        p1 = p1.next
    }

    return p2
}