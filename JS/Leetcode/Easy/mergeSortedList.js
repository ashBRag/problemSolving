//https://leetcode.com/problems/merge-two-sorted-lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// recursive approach

var mergeTwoLists = function(list1, list2) {

    function mergeHeads(h1,h2){
        if(h1==null)
        return h2
        if(h2==null)
        return h1
        if(h1.val < h2.val){
            h1.next = mergeHeads(h1.next, h2)
            return h1
        }
        else {
            h2.next = mergeHeads(h1, h2.next)
            return h2
        }
    }

    return mergeHeads(list1, list2)

    
};

// iterative approach
// https://www.geeksforgeeks.org/javascript-program-to-merge-two-sorted-lists-in-place/