/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const pass = new Set()
    let pa = headA, pb = headB
    
    while(pa){
        pass.add(pa)
        pa = pa.next
    }

    while(pb) {
        if(pass.has(pb))
            return pb
        pb = pb.next
    }

    return null

};