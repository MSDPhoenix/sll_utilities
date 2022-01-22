class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val){
        let new_node = new Node(val);
        if(!this.head){
            this.head=new_node;
            return this;
        }
        new_node.next=this.head;
        this.head=new_node;
        return this;
    }
    front() {
        if (this.head == null){
            return null;
        } else {
            return this.head.data
        }
    }
    removeFront() {
        if(!this.head){
            return null;
        }
        this.head = this.head.next;
        console.log("just removed the head")
        return this.head;
    }
    findSum() {
        let runner = this.head;
        let sum = 0;
        while (runner !== null) {
            sum += runner.data;
            runner = runner.next;
        }
        return sum;
    }
    contains(value) {
        let runner = this.head;
        let sum = 0;
        console.log(`Does list contain ${value}?`);
        if (this.head) {
            while (runner != null ) {
                if (runner.data == value) {
                    return true;
                }
                runner = runner.next;
            }
        }
        return false;
    }
    length() {
        let runner = this.head;
        let sum = 0;
        while (runner !== null) {
            sum += 1;
            runner = runner.next;
        }
        return sum;
    }
    display() {
        let runner = this.head;
        let this_list = new String();
        this_list += "[";
        while (runner !== null) {
            this_list += runner.data + ",";
            runner = runner.next;
        }
        if (this_list.length > 1) {this_list = this_list.slice(0,this_list.length-1)}
        this_list += "]";
        return this_list;
    }
}

function move_min(x) {
    if (x.head) {
        let runner = x.head;
        let min = x.head;
        while (runner !== null) {
            if (runner.data < min.data) {
                min = runner;
            }
            runner = runner.next;
        }
        const new_head = new Node(min.data);
        new_head.next = x.head;
        min.data = min.next.data;
        min.next = min.next.next;
        x.head = new_head;
        return x;
    }
    return null;
}
function move_max(x) {
    if (x.head){
        let runner = x.head;
        let max = x.head;
        while (runner !== null) {
            if (runner.data > max.data) {
                max = runner;
            }
                var last = runner;
                runner = runner.next;
        }
        const new_tail = new Node(max.data);
        last.next = new_tail;
        max.data = max.next.data;
        max.next = max.next.next;
    }
    return false
}


const banana = new LinkedList();
console.log("head: ",banana.front());
banana.addFront(5).addFront(2).addFront(3).addFront(8).addFront(7);
console.log(banana.head.data);
console.log(banana.head.next.data);
console.log(banana.head.next.next.data);
console.log(banana.head.next.next.next.data);
console.log(banana.head.next.next.next.next.data);
console.log("head: ",banana.front());

console.log(banana.findSum());

console.log("   ***** .front, .removeFront");

console.log("head: ",banana.front());
banana.removeFront();
console.log(banana.head.data);
console.log(banana.head.next.data);
console.log(banana.head.next.next.data);
console.log(banana.head.next.next.next.data);
console.log("head: ",banana.front());



console.log("   ***** .front, .removeFront, .findSum with empty list*****");

const cat = new LinkedList();
console.log(cat.removeFront());
console.log(cat.front());
console.log(cat.findSum());

console.log("   ***** .contain *****");

console.log("banana",banana.contains(5));
console.log("banana",banana.contains(6));
console.log("cat",cat.contains(5));

console.log("   ***** .length *****");

console.log("banana",banana.length());
console.log("cat",cat.length());

console.log("   ***** .display *****");

console.log("banana",banana.display());
console.log("cat",cat.display());

console.log("   ***** .move_min *****");

banana.addFront(5).addFront(5).addFront(3).addFront(8).addFront(7);
console.log("banana",banana.display());
move_min(banana);
console.log("banana",banana.display());

console.log("cat",cat.display());
move_min(cat);
console.log("cat",cat.display());

console.log("   ***** .move_max *****");

banana.addFront(5).addFront(9).addFront(8).addFront(9).addFront(7);
console.log("banana",banana.display());
move_max(banana);
console.log("banana",banana.display());

console.log("cat",cat.display());
move_max(cat);
console.log("cat",cat.display());
