/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    
    let p1 = head
    if(!p1.next) return p1
    let p2 = p1.next

    while(p2 && p2.next){
        p1 = p1.next
        p2 = p2.next.next
    }

    return p2 ? p1.next : p1
};