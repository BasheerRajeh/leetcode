/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let newList1 = new ListNode()
    let newList2 = new ListNode()
    let p = head, p1 = newList1, p2 = newList2

    while(p !== null) {
        if(p.val < x) {
            p1.next = p
            p1 = p1.next
        }else{
            p2.next = p
            p2 = p2.next
        }
        p = p.next
    }
    p2.next = null
    p1.next = newList2.next

    return newList1.next
};