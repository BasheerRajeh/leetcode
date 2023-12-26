/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head, fast = head
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }

    if(fast !== null) slow = slow.next

    const reverse = (head) => {
        let [pre, cur] = [null, head];
        while (cur !== null) {
            let next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    }

    let start = head

    slow = reverse(slow)
    while(slow){
        if(slow.val !== start.val) return false
        start = start.next
        slow = slow.next
    }

    return true
};