/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const toArr = list => {
        const arr = [];
        while(list){
            arr.push(list.val);
            list = list.next;
        }
        return arr;
    }

    const arr1 = toArr(l1);
    const arr2 = toArr(l2);
    
    let temp = new ListNode();
    let carry = 0;
    let sum = 0;
    while(arr1.length || arr2.length){
        
        if(arr1.length) sum += arr1.pop();
        if(arr2.length) sum += arr2.pop();
        
        temp.val = sum % 10;
        carry = Math.floor(sum / 10);
        const head = new ListNode(carry);
        head.next = temp;
        temp = head;
        sum = carry;
    }

    return carry === 0 ? temp.next: temp;
};