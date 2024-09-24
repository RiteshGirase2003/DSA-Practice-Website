// Sample JSON data
const dsaQuestions = [
    {
        "title": "Two Sum",
        "location": [
            "https://leetcode.com/problems/two-sum/",
            "Leetcode-1"
        ],
        "category": [
            "Array",
            "HashMap"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Reverse a Linked List",
        "location": [
            "https://www.geeksforgeeks.org/reverse-a-linked-list/",
            "GFG-ReverseLinkedList"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Valid Parentheses",
        "location": [
            "https://leetcode.com/problems/valid-parentheses/",
            "Leetcode-20"
        ],
        "category": [
            "Stack",
            "String"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Merge Two Sorted Lists",
        "location": [
            "https://leetcode.com/problems/merge-two-sorted-lists/",
            "Leetcode-21"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Best Time to Buy and Sell Stock",
        "location": [
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "Leetcode-121"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Maximum Subarray",
        "location": [
            "https://leetcode.com/problems/maximum-subarray/",
            "Leetcode-53"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Palindrome Linked List",
        "location": [
            "https://leetcode.com/problems/palindrome-linked-list/",
            "Leetcode-234"
        ],
        "category": [
            "Linked List",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Remove Duplicates from Sorted Array",
        "location": [
            "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            "Leetcode-26"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Climbing Stairs",
        "location": [
            "https://leetcode.com/problems/climbing-stairs/",
            "Leetcode-70"
        ],
        "category": [
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Symmetric Tree",
        "location": [
            "https://leetcode.com/problems/symmetric-tree/",
            "Leetcode-101"
        ],
        "category": [
            "Tree",
            "Depth-First Search",
            "Breadth-First Search"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Two Sum",
        "location": [
            "https://leetcode.com/problems/two-sum/",
            "Leetcode-1"
        ],
        "category": [
            "Array",
            "HashMap"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Reverse a Linked List",
        "location": [
            "https://www.geeksforgeeks.org/reverse-a-linked-list/",
            "GFG-ReverseLinkedList"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Valid Parentheses",
        "location": [
            "https://leetcode.com/problems/valid-parentheses/",
            "Leetcode-20"
        ],
        "category": [
            "Stack",
            "String"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Merge Two Sorted Lists",
        "location": [
            "https://leetcode.com/problems/merge-two-sorted-lists/",
            "Leetcode-21"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Best Time to Buy and Sell Stock",
        "location": [
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "Leetcode-121"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Maximum Subarray",
        "location": [
            "https://leetcode.com/problems/maximum-subarray/",
            "Leetcode-53"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Palindrome Linked List",
        "location": [
            "https://leetcode.com/problems/palindrome-linked-list/",
            "Leetcode-234"
        ],
        "category": [
            "Linked List",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Remove Duplicates from Sorted Array",
        "location": [
            "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            "Leetcode-26"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Climbing Stairs",
        "location": [
            "https://leetcode.com/problems/climbing-stairs/",
            "Leetcode-70"
        ],
        "category": [
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Symmetric Tree",
        "location": [
            "https://leetcode.com/problems/symmetric-tree/",
            "Leetcode-101"
        ],
        "category": [
            "Tree",
            "Depth-First Search",
            "Breadth-First Search"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Two Sum",
        "location": [
            "https://leetcode.com/problems/two-sum/",
            "Leetcode-1"
        ],
        "category": [
            "Array",
            "HashMap"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Reverse a Linked List",
        "location": [
            "https://www.geeksforgeeks.org/reverse-a-linked-list/",
            "GFG-ReverseLinkedList"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Valid Parentheses",
        "location": [
            "https://leetcode.com/problems/valid-parentheses/",
            "Leetcode-20"
        ],
        "category": [
            "Stack",
            "String"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Merge Two Sorted Lists",
        "location": [
            "https://leetcode.com/problems/merge-two-sorted-lists/",
            "Leetcode-21"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Best Time to Buy and Sell Stock",
        "location": [
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "Leetcode-121"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Maximum Subarray",
        "location": [
            "https://leetcode.com/problems/maximum-subarray/",
            "Leetcode-53"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Palindrome Linked List",
        "location": [
            "https://leetcode.com/problems/palindrome-linked-list/",
            "Leetcode-234"
        ],
        "category": [
            "Linked List",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Remove Duplicates from Sorted Array",
        "location": [
            "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            "Leetcode-26"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Climbing Stairs",
        "location": [
            "https://leetcode.com/problems/climbing-stairs/",
            "Leetcode-70"
        ],
        "category": [
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Symmetric Tree",
        "location": [
            "https://leetcode.com/problems/symmetric-tree/",
            "Leetcode-101"
        ],
        "category": [
            "Tree",
            "Depth-First Search",
            "Breadth-First Search"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Two Sum",
        "location": [
            "https://leetcode.com/problems/two-sum/",
            "Leetcode-1"
        ],
        "category": [
            "Array",
            "HashMap"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Reverse a Linked List",
        "location": [
            "https://www.geeksforgeeks.org/reverse-a-linked-list/",
            "GFG-ReverseLinkedList"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Valid Parentheses",
        "location": [
            "https://leetcode.com/problems/valid-parentheses/",
            "Leetcode-20"
        ],
        "category": [
            "Stack",
            "String"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Merge Two Sorted Lists",
        "location": [
            "https://leetcode.com/problems/merge-two-sorted-lists/",
            "Leetcode-21"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Best Time to Buy and Sell Stock",
        "location": [
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "Leetcode-121"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Maximum Subarray",
        "location": [
            "https://leetcode.com/problems/maximum-subarray/",
            "Leetcode-53"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Palindrome Linked List",
        "location": [
            "https://leetcode.com/problems/palindrome-linked-list/",
            "Leetcode-234"
        ],
        "category": [
            "Linked List",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Remove Duplicates from Sorted Array",
        "location": [
            "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            "Leetcode-26"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Climbing Stairs",
        "location": [
            "https://leetcode.com/problems/climbing-stairs/",
            "Leetcode-70"
        ],
        "category": [
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Symmetric Tree",
        "location": [
            "https://leetcode.com/problems/symmetric-tree/",
            "Leetcode-101"
        ],
        "category": [
            "Tree",
            "Depth-First Search",
            "Breadth-First Search"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Two Sum",
        "location": [
            "https://leetcode.com/problems/two-sum/",
            "Leetcode-1"
        ],
        "category": [
            "Array",
            "HashMap"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Reverse a Linked List",
        "location": [
            "https://www.geeksforgeeks.org/reverse-a-linked-list/",
            "GFG-ReverseLinkedList"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Valid Parentheses",
        "location": [
            "https://leetcode.com/problems/valid-parentheses/",
            "Leetcode-20"
        ],
        "category": [
            "Stack",
            "String"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Merge Two Sorted Lists",
        "location": [
            "https://leetcode.com/problems/merge-two-sorted-lists/",
            "Leetcode-21"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Best Time to Buy and Sell Stock",
        "location": [
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "Leetcode-121"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Maximum Subarray",
        "location": [
            "https://leetcode.com/problems/maximum-subarray/",
            "Leetcode-53"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Palindrome Linked List",
        "location": [
            "https://leetcode.com/problems/palindrome-linked-list/",
            "Leetcode-234"
        ],
        "category": [
            "Linked List",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Remove Duplicates from Sorted Array",
        "location": [
            "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            "Leetcode-26"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Climbing Stairs",
        "location": [
            "https://leetcode.com/problems/climbing-stairs/",
            "Leetcode-70"
        ],
        "category": [
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Symmetric Tree",
        "location": [
            "https://leetcode.com/problems/symmetric-tree/",
            "Leetcode-101"
        ],
        "category": [
            "Tree",
            "Depth-First Search",
            "Breadth-First Search"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Two Sum",
        "location": [
            "https://leetcode.com/problems/two-sum/",
            "Leetcode-1"
        ],
        "category": [
            "Array",
            "HashMap"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Reverse a Linked List",
        "location": [
            "https://www.geeksforgeeks.org/reverse-a-linked-list/",
            "GFG-ReverseLinkedList"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Valid Parentheses",
        "location": [
            "https://leetcode.com/problems/valid-parentheses/",
            "Leetcode-20"
        ],
        "category": [
            "Stack",
            "String"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Merge Two Sorted Lists",
        "location": [
            "https://leetcode.com/problems/merge-two-sorted-lists/",
            "Leetcode-21"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Best Time to Buy and Sell Stock",
        "location": [
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "Leetcode-121"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Maximum Subarray",
        "location": [
            "https://leetcode.com/problems/maximum-subarray/",
            "Leetcode-53"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Palindrome Linked List",
        "location": [
            "https://leetcode.com/problems/palindrome-linked-list/",
            "Leetcode-234"
        ],
        "category": [
            "Linked List",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Remove Duplicates from Sorted Array",
        "location": [
            "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            "Leetcode-26"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Climbing Stairs",
        "location": [
            "https://leetcode.com/problems/climbing-stairs/",
            "Leetcode-70"
        ],
        "category": [
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Symmetric Tree",
        "location": [
            "https://leetcode.com/problems/symmetric-tree/",
            "Leetcode-101"
        ],
        "category": [
            "Tree",
            "Depth-First Search",
            "Breadth-First Search"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Two Sum",
        "location": [
            "https://leetcode.com/problems/two-sum/",
            "Leetcode-1"
        ],
        "category": [
            "Array",
            "HashMap"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Reverse a Linked List",
        "location": [
            "https://www.geeksforgeeks.org/reverse-a-linked-list/",
            "GFG-ReverseLinkedList"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Valid Parentheses",
        "location": [
            "https://leetcode.com/problems/valid-parentheses/",
            "Leetcode-20"
        ],
        "category": [
            "Stack",
            "String"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Merge Two Sorted Lists",
        "location": [
            "https://leetcode.com/problems/merge-two-sorted-lists/",
            "Leetcode-21"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Best Time to Buy and Sell Stock",
        "location": [
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "Leetcode-121"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Maximum Subarray",
        "location": [
            "https://leetcode.com/problems/maximum-subarray/",
            "Leetcode-53"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Palindrome Linked List",
        "location": [
            "https://leetcode.com/problems/palindrome-linked-list/",
            "Leetcode-234"
        ],
        "category": [
            "Linked List",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Remove Duplicates from Sorted Array",
        "location": [
            "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            "Leetcode-26"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Climbing Stairs",
        "location": [
            "https://leetcode.com/problems/climbing-stairs/",
            "Leetcode-70"
        ],
        "category": [
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Symmetric Tree",
        "location": [
            "https://leetcode.com/problems/symmetric-tree/",
            "Leetcode-101"
        ],
        "category": [
            "Tree",
            "Depth-First Search",
            "Breadth-First Search"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Two Sum",
        "location": [
            "https://leetcode.com/problems/two-sum/",
            "Leetcode-1"
        ],
        "category": [
            "Array",
            "HashMap"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Reverse a Linked List",
        "location": [
            "https://www.geeksforgeeks.org/reverse-a-linked-list/",
            "GFG-ReverseLinkedList"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Valid Parentheses",
        "location": [
            "https://leetcode.com/problems/valid-parentheses/",
            "Leetcode-20"
        ],
        "category": [
            "Stack",
            "String"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Merge Two Sorted Lists",
        "location": [
            "https://leetcode.com/problems/merge-two-sorted-lists/",
            "Leetcode-21"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Best Time to Buy and Sell Stock",
        "location": [
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "Leetcode-121"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Maximum Subarray",
        "location": [
            "https://leetcode.com/problems/maximum-subarray/",
            "Leetcode-53"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Palindrome Linked List",
        "location": [
            "https://leetcode.com/problems/palindrome-linked-list/",
            "Leetcode-234"
        ],
        "category": [
            "Linked List",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Remove Duplicates from Sorted Array",
        "location": [
            "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            "Leetcode-26"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Climbing Stairs",
        "location": [
            "https://leetcode.com/problems/climbing-stairs/",
            "Leetcode-70"
        ],
        "category": [
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Symmetric Tree",
        "location": [
            "https://leetcode.com/problems/symmetric-tree/",
            "Leetcode-101"
        ],
        "category": [
            "Tree",
            "Depth-First Search",
            "Breadth-First Search"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Two Sum",
        "location": [
            "https://leetcode.com/problems/two-sum/",
            "Leetcode-1"
        ],
        "category": [
            "Array",
            "HashMap"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Reverse a Linked List",
        "location": [
            "https://www.geeksforgeeks.org/reverse-a-linked-list/",
            "GFG-ReverseLinkedList"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Valid Parentheses",
        "location": [
            "https://leetcode.com/problems/valid-parentheses/",
            "Leetcode-20"
        ],
        "category": [
            "Stack",
            "String"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Merge Two Sorted Lists",
        "location": [
            "https://leetcode.com/problems/merge-two-sorted-lists/",
            "Leetcode-21"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Best Time to Buy and Sell Stock",
        "location": [
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "Leetcode-121"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Maximum Subarray",
        "location": [
            "https://leetcode.com/problems/maximum-subarray/",
            "Leetcode-53"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Palindrome Linked List",
        "location": [
            "https://leetcode.com/problems/palindrome-linked-list/",
            "Leetcode-234"
        ],
        "category": [
            "Linked List",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Remove Duplicates from Sorted Array",
        "location": [
            "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            "Leetcode-26"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Climbing Stairs",
        "location": [
            "https://leetcode.com/problems/climbing-stairs/",
            "Leetcode-70"
        ],
        "category": [
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Symmetric Tree",
        "location": [
            "https://leetcode.com/problems/symmetric-tree/",
            "Leetcode-101"
        ],
        "category": [
            "Tree",
            "Depth-First Search",
            "Breadth-First Search"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Two Sum",
        "location": [
            "https://leetcode.com/problems/two-sum/",
            "Leetcode-1"
        ],
        "category": [
            "Array",
            "HashMap"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Reverse a Linked List",
        "location": [
            "https://www.geeksforgeeks.org/reverse-a-linked-list/",
            "GFG-ReverseLinkedList"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Valid Parentheses",
        "location": [
            "https://leetcode.com/problems/valid-parentheses/",
            "Leetcode-20"
        ],
        "category": [
            "Stack",
            "String"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Merge Two Sorted Lists",
        "location": [
            "https://leetcode.com/problems/merge-two-sorted-lists/",
            "Leetcode-21"
        ],
        "category": [
            "Linked List"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Best Time to Buy and Sell Stock",
        "location": [
            "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            "Leetcode-121"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Maximum Subarray",
        "location": [
            "https://leetcode.com/problems/maximum-subarray/",
            "Leetcode-53"
        ],
        "category": [
            "Array",
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Palindrome Linked List",
        "location": [
            "https://leetcode.com/problems/palindrome-linked-list/",
            "Leetcode-234"
        ],
        "category": [
            "Linked List",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Remove Duplicates from Sorted Array",
        "location": [
            "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            "Leetcode-26"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Climbing Stairs",
        "location": [
            "https://leetcode.com/problems/climbing-stairs/",
            "Leetcode-70"
        ],
        "category": [
            "Dynamic Programming"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Symmetric Tree",
        "location": [
            "https://leetcode.com/problems/symmetric-tree/",
            "Leetcode-101"
        ],
        "category": [
            "Tree",
            "Depth-First Search",
            "Breadth-First Search"
        ],
        "difficulty": "Easy"
    },
    {
        "title": "Longest Substring Without Repeating Characters",
        "location": [
            "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "Leetcode-3"
        ],
        "category": [
            "String",
            "Sliding Window"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Kth Smallest Element in a BST",
        "location": [
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "Leetcode-230"
        ],
        "category": [
            "Tree",
            "Binary Search Tree",
            "Inorder Traversal"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "3Sum",
        "location": [
            "https://leetcode.com/problems/3sum/",
            "Leetcode-15"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Group Anagrams",
        "location": [
            "https://leetcode.com/problems/group-anagrams/",
            "Leetcode-49"
        ],
        "category": [
            "Hash Table",
            "String"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Word Search",
        "location": [
            "https://leetcode.com/problems/word-search/",
            "Leetcode-79"
        ],
        "category": [
            "Array",
            "Backtracking"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Add Two Numbers",
        "location": [
            "https://leetcode.com/problems/add-two-numbers/",
            "Leetcode-2"
        ],
        "category": [
            "Linked List",
            "Math"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Palindromic Substring",
        "location": [
            "https://leetcode.com/problems/longest-palindromic-substring/",
            "Leetcode-5"
        ],
        "category": [
            "String",
            "Dynamic Programming"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Rotate Image",
        "location": [
            "https://leetcode.com/problems/rotate-image/",
            "Leetcode-48"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Set Matrix Zeroes",
        "location": [
            "https://leetcode.com/problems/set-matrix-zeroes/",
            "Leetcode-73"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Jump Game",
        "location": [
            "https://leetcode.com/problems/jump-game/",
            "Leetcode-55"
        ],
        "category": [
            "Array",
            "Greedy"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Substring Without Repeating Characters",
        "location": [
            "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "Leetcode-3"
        ],
        "category": [
            "String",
            "Sliding Window"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Kth Smallest Element in a BST",
        "location": [
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "Leetcode-230"
        ],
        "category": [
            "Tree",
            "Binary Search Tree",
            "Inorder Traversal"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "3Sum",
        "location": [
            "https://leetcode.com/problems/3sum/",
            "Leetcode-15"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Group Anagrams",
        "location": [
            "https://leetcode.com/problems/group-anagrams/",
            "Leetcode-49"
        ],
        "category": [
            "Hash Table",
            "String"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Word Search",
        "location": [
            "https://leetcode.com/problems/word-search/",
            "Leetcode-79"
        ],
        "category": [
            "Array",
            "Backtracking"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Add Two Numbers",
        "location": [
            "https://leetcode.com/problems/add-two-numbers/",
            "Leetcode-2"
        ],
        "category": [
            "Linked List",
            "Math"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Palindromic Substring",
        "location": [
            "https://leetcode.com/problems/longest-palindromic-substring/",
            "Leetcode-5"
        ],
        "category": [
            "String",
            "Dynamic Programming"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Rotate Image",
        "location": [
            "https://leetcode.com/problems/rotate-image/",
            "Leetcode-48"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Set Matrix Zeroes",
        "location": [
            "https://leetcode.com/problems/set-matrix-zeroes/",
            "Leetcode-73"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Jump Game",
        "location": [
            "https://leetcode.com/problems/jump-game/",
            "Leetcode-55"
        ],
        "category": [
            "Array",
            "Greedy"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Substring Without Repeating Characters",
        "location": [
            "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "Leetcode-3"
        ],
        "category": [
            "String",
            "Sliding Window"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Kth Smallest Element in a BST",
        "location": [
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "Leetcode-230"
        ],
        "category": [
            "Tree",
            "Binary Search Tree",
            "Inorder Traversal"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "3Sum",
        "location": [
            "https://leetcode.com/problems/3sum/",
            "Leetcode-15"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Group Anagrams",
        "location": [
            "https://leetcode.com/problems/group-anagrams/",
            "Leetcode-49"
        ],
        "category": [
            "Hash Table",
            "String"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Word Search",
        "location": [
            "https://leetcode.com/problems/word-search/",
            "Leetcode-79"
        ],
        "category": [
            "Array",
            "Backtracking"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Add Two Numbers",
        "location": [
            "https://leetcode.com/problems/add-two-numbers/",
            "Leetcode-2"
        ],
        "category": [
            "Linked List",
            "Math"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Palindromic Substring",
        "location": [
            "https://leetcode.com/problems/longest-palindromic-substring/",
            "Leetcode-5"
        ],
        "category": [
            "String",
            "Dynamic Programming"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Rotate Image",
        "location": [
            "https://leetcode.com/problems/rotate-image/",
            "Leetcode-48"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Set Matrix Zeroes",
        "location": [
            "https://leetcode.com/problems/set-matrix-zeroes/",
            "Leetcode-73"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Jump Game",
        "location": [
            "https://leetcode.com/problems/jump-game/",
            "Leetcode-55"
        ],
        "category": [
            "Array",
            "Greedy"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Substring Without Repeating Characters",
        "location": [
            "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "Leetcode-3"
        ],
        "category": [
            "String",
            "Sliding Window"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Kth Smallest Element in a BST",
        "location": [
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "Leetcode-230"
        ],
        "category": [
            "Tree",
            "Binary Search Tree",
            "Inorder Traversal"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "3Sum",
        "location": [
            "https://leetcode.com/problems/3sum/",
            "Leetcode-15"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Group Anagrams",
        "location": [
            "https://leetcode.com/problems/group-anagrams/",
            "Leetcode-49"
        ],
        "category": [
            "Hash Table",
            "String"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Word Search",
        "location": [
            "https://leetcode.com/problems/word-search/",
            "Leetcode-79"
        ],
        "category": [
            "Array",
            "Backtracking"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Add Two Numbers",
        "location": [
            "https://leetcode.com/problems/add-two-numbers/",
            "Leetcode-2"
        ],
        "category": [
            "Linked List",
            "Math"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Palindromic Substring",
        "location": [
            "https://leetcode.com/problems/longest-palindromic-substring/",
            "Leetcode-5"
        ],
        "category": [
            "String",
            "Dynamic Programming"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Rotate Image",
        "location": [
            "https://leetcode.com/problems/rotate-image/",
            "Leetcode-48"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Set Matrix Zeroes",
        "location": [
            "https://leetcode.com/problems/set-matrix-zeroes/",
            "Leetcode-73"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Jump Game",
        "location": [
            "https://leetcode.com/problems/jump-game/",
            "Leetcode-55"
        ],
        "category": [
            "Array",
            "Greedy"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Substring Without Repeating Characters",
        "location": [
            "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "Leetcode-3"
        ],
        "category": [
            "String",
            "Sliding Window"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Kth Smallest Element in a BST",
        "location": [
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "Leetcode-230"
        ],
        "category": [
            "Tree",
            "Binary Search Tree",
            "Inorder Traversal"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "3Sum",
        "location": [
            "https://leetcode.com/problems/3sum/",
            "Leetcode-15"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Group Anagrams",
        "location": [
            "https://leetcode.com/problems/group-anagrams/",
            "Leetcode-49"
        ],
        "category": [
            "Hash Table",
            "String"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Word Search",
        "location": [
            "https://leetcode.com/problems/word-search/",
            "Leetcode-79"
        ],
        "category": [
            "Array",
            "Backtracking"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Add Two Numbers",
        "location": [
            "https://leetcode.com/problems/add-two-numbers/",
            "Leetcode-2"
        ],
        "category": [
            "Linked List",
            "Math"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Palindromic Substring",
        "location": [
            "https://leetcode.com/problems/longest-palindromic-substring/",
            "Leetcode-5"
        ],
        "category": [
            "String",
            "Dynamic Programming"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Rotate Image",
        "location": [
            "https://leetcode.com/problems/rotate-image/",
            "Leetcode-48"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Set Matrix Zeroes",
        "location": [
            "https://leetcode.com/problems/set-matrix-zeroes/",
            "Leetcode-73"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Jump Game",
        "location": [
            "https://leetcode.com/problems/jump-game/",
            "Leetcode-55"
        ],
        "category": [
            "Array",
            "Greedy"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Substring Without Repeating Characters",
        "location": [
            "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "Leetcode-3"
        ],
        "category": [
            "String",
            "Sliding Window"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Kth Smallest Element in a BST",
        "location": [
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "Leetcode-230"
        ],
        "category": [
            "Tree",
            "Binary Search Tree",
            "Inorder Traversal"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "3Sum",
        "location": [
            "https://leetcode.com/problems/3sum/",
            "Leetcode-15"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Group Anagrams",
        "location": [
            "https://leetcode.com/problems/group-anagrams/",
            "Leetcode-49"
        ],
        "category": [
            "Hash Table",
            "String"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Word Search",
        "location": [
            "https://leetcode.com/problems/word-search/",
            "Leetcode-79"
        ],
        "category": [
            "Array",
            "Backtracking"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Add Two Numbers",
        "location": [
            "https://leetcode.com/problems/add-two-numbers/",
            "Leetcode-2"
        ],
        "category": [
            "Linked List",
            "Math"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Palindromic Substring",
        "location": [
            "https://leetcode.com/problems/longest-palindromic-substring/",
            "Leetcode-5"
        ],
        "category": [
            "String",
            "Dynamic Programming"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Rotate Image",
        "location": [
            "https://leetcode.com/problems/rotate-image/",
            "Leetcode-48"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Set Matrix Zeroes",
        "location": [
            "https://leetcode.com/problems/set-matrix-zeroes/",
            "Leetcode-73"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Jump Game",
        "location": [
            "https://leetcode.com/problems/jump-game/",
            "Leetcode-55"
        ],
        "category": [
            "Array",
            "Greedy"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Substring Without Repeating Characters",
        "location": [
            "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "Leetcode-3"
        ],
        "category": [
            "String",
            "Sliding Window"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Kth Smallest Element in a BST",
        "location": [
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "Leetcode-230"
        ],
        "category": [
            "Tree",
            "Binary Search Tree",
            "Inorder Traversal"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "3Sum",
        "location": [
            "https://leetcode.com/problems/3sum/",
            "Leetcode-15"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Group Anagrams",
        "location": [
            "https://leetcode.com/problems/group-anagrams/",
            "Leetcode-49"
        ],
        "category": [
            "Hash Table",
            "String"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Word Search",
        "location": [
            "https://leetcode.com/problems/word-search/",
            "Leetcode-79"
        ],
        "category": [
            "Array",
            "Backtracking"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Add Two Numbers",
        "location": [
            "https://leetcode.com/problems/add-two-numbers/",
            "Leetcode-2"
        ],
        "category": [
            "Linked List",
            "Math"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Palindromic Substring",
        "location": [
            "https://leetcode.com/problems/longest-palindromic-substring/",
            "Leetcode-5"
        ],
        "category": [
            "String",
            "Dynamic Programming"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Rotate Image",
        "location": [
            "https://leetcode.com/problems/rotate-image/",
            "Leetcode-48"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Set Matrix Zeroes",
        "location": [
            "https://leetcode.com/problems/set-matrix-zeroes/",
            "Leetcode-73"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Jump Game",
        "location": [
            "https://leetcode.com/problems/jump-game/",
            "Leetcode-55"
        ],
        "category": [
            "Array",
            "Greedy"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Substring Without Repeating Characters",
        "location": [
            "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "Leetcode-3"
        ],
        "category": [
            "String",
            "Sliding Window"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Kth Smallest Element in a BST",
        "location": [
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "Leetcode-230"
        ],
        "category": [
            "Tree",
            "Binary Search Tree",
            "Inorder Traversal"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "3Sum",
        "location": [
            "https://leetcode.com/problems/3sum/",
            "Leetcode-15"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Group Anagrams",
        "location": [
            "https://leetcode.com/problems/group-anagrams/",
            "Leetcode-49"
        ],
        "category": [
            "Hash Table",
            "String"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Word Search",
        "location": [
            "https://leetcode.com/problems/word-search/",
            "Leetcode-79"
        ],
        "category": [
            "Array",
            "Backtracking"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Add Two Numbers",
        "location": [
            "https://leetcode.com/problems/add-two-numbers/",
            "Leetcode-2"
        ],
        "category": [
            "Linked List",
            "Math"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Palindromic Substring",
        "location": [
            "https://leetcode.com/problems/longest-palindromic-substring/",
            "Leetcode-5"
        ],
        "category": [
            "String",
            "Dynamic Programming"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Rotate Image",
        "location": [
            "https://leetcode.com/problems/rotate-image/",
            "Leetcode-48"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Set Matrix Zeroes",
        "location": [
            "https://leetcode.com/problems/set-matrix-zeroes/",
            "Leetcode-73"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Jump Game",
        "location": [
            "https://leetcode.com/problems/jump-game/",
            "Leetcode-55"
        ],
        "category": [
            "Array",
            "Greedy"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Substring Without Repeating Characters",
        "location": [
            "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "Leetcode-3"
        ],
        "category": [
            "String",
            "Sliding Window"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Kth Smallest Element in a BST",
        "location": [
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "Leetcode-230"
        ],
        "category": [
            "Tree",
            "Binary Search Tree",
            "Inorder Traversal"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "3Sum",
        "location": [
            "https://leetcode.com/problems/3sum/",
            "Leetcode-15"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Group Anagrams",
        "location": [
            "https://leetcode.com/problems/group-anagrams/",
            "Leetcode-49"
        ],
        "category": [
            "Hash Table",
            "String"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Word Search",
        "location": [
            "https://leetcode.com/problems/word-search/",
            "Leetcode-79"
        ],
        "category": [
            "Array",
            "Backtracking"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Add Two Numbers",
        "location": [
            "https://leetcode.com/problems/add-two-numbers/",
            "Leetcode-2"
        ],
        "category": [
            "Linked List",
            "Math"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Palindromic Substring",
        "location": [
            "https://leetcode.com/problems/longest-palindromic-substring/",
            "Leetcode-5"
        ],
        "category": [
            "String",
            "Dynamic Programming"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Rotate Image",
        "location": [
            "https://leetcode.com/problems/rotate-image/",
            "Leetcode-48"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Set Matrix Zeroes",
        "location": [
            "https://leetcode.com/problems/set-matrix-zeroes/",
            "Leetcode-73"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Jump Game",
        "location": [
            "https://leetcode.com/problems/jump-game/",
            "Leetcode-55"
        ],
        "category": [
            "Array",
            "Greedy"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Substring Without Repeating Characters",
        "location": [
            "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            "Leetcode-3"
        ],
        "category": [
            "String",
            "Sliding Window"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Kth Smallest Element in a BST",
        "location": [
            "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            "Leetcode-230"
        ],
        "category": [
            "Tree",
            "Binary Search Tree",
            "Inorder Traversal"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "3Sum",
        "location": [
            "https://leetcode.com/problems/3sum/",
            "Leetcode-15"
        ],
        "category": [
            "Array",
            "Two Pointers"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Group Anagrams",
        "location": [
            "https://leetcode.com/problems/group-anagrams/",
            "Leetcode-49"
        ],
        "category": [
            "Hash Table",
            "String"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Word Search",
        "location": [
            "https://leetcode.com/problems/word-search/",
            "Leetcode-79"
        ],
        "category": [
            "Array",
            "Backtracking"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Add Two Numbers",
        "location": [
            "https://leetcode.com/problems/add-two-numbers/",
            "Leetcode-2"
        ],
        "category": [
            "Linked List",
            "Math"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Longest Palindromic Substring",
        "location": [
            "https://leetcode.com/problems/longest-palindromic-substring/",
            "Leetcode-5"
        ],
        "category": [
            "String",
            "Dynamic Programming"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Rotate Image",
        "location": [
            "https://leetcode.com/problems/rotate-image/",
            "Leetcode-48"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Set Matrix Zeroes",
        "location": [
            "https://leetcode.com/problems/set-matrix-zeroes/",
            "Leetcode-73"
        ],
        "category": [
            "Array",
            "Matrix"
        ],
        "difficulty": "Medium"
    },
    {
        "title": "Jump Game",
        "location": [
            "https://leetcode.com/problems/jump-game/",
            "Leetcode-55"
        ],
        "category": [
            "Array",
            "Greedy"
        ],
        "difficulty": "Medium"
    }
];

// Function to render the table
function renderTable() {
    const container = document.getElementById('tableContainer');
    const table = document.createElement('table');
    table.style.width = '100%';
    table.setAttribute('border', '1');

    // Create table header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    const headers = ['Sr No', 'Title', 'Link', 'Category', 'Difficulty'];
    headers.forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });

    // Create table body
    const body = table.createTBody();
    dsaQuestions.forEach((question, index) => {
        const row = body.insertRow();
        const srNoCell = row.insertCell(0);
        const titleCell = row.insertCell(1);
        const linkCell = row.insertCell(2);
        const categoryCell = row.insertCell(3);
        const difficultyCell = row.insertCell(4);

        srNoCell.textContent = index + 1; // Sr No
        titleCell.textContent = question.title; // Title
        linkCell.innerHTML = `<a href="${question.location[0]}" target="_blank"> link </a>`; // Hyperlink
        categoryCell.innerHTML = question.category.map(cat => `<span class="chip">${cat}</span>`).join(' '); // Chips for categories
        difficultyCell.textContent = question.difficulty; // Difficulty
    });

    container.appendChild(table);
}

// Call the function to render the table
renderTable();
