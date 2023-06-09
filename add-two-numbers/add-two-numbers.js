var addTwoNumbers = function(l1, l2) {
    let list = new ListNode();
    let cur = list;
    
    let carried = 0;
    while (l1 || l2) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let temp = val1 + val2 + carried;
        let value = temp % 10;
        carried = Math.floor(temp / 10);
        
        cur.next = new ListNode(value);
        cur = cur.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carried !== 0) {
        cur.next = new ListNode(carried);
    }

    return list.next;
};
