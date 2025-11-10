ar reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // 1️⃣ Move prev to node before 'left'
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // 2️⃣ Start reversing
    let curr = prev.next;
    let next = null;

    for (let i = 0; i < right - left; i++) {
        next = curr.next;
        curr.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    // 3️⃣ Return new head
    return dummy.next;
};