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
    const stack = [];
    
    let current = head;
    while(current){
        stack.push(current.val);
        current = current.next;
    }

    current = head;
    while(stack.length >= 0 && current ){
        if(stack.pop() !== current.val) return false;
        current = current.next;
    }

    if(stack.length > 0 || current) return false;
    return true;

};