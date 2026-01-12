/*
static variable:
It gets single memory allocation.
It is access using classname.
It gets memory at compile time.
All object of a class shared memory of a static variable.
*/

class Example{
    count=0
    static counter=0
    incrementCount(){
        this.count+=1
        Example.counter+=1
        // console.log("Count is:",this.count)
        console.log("Counter is:",Example.counter)
    }
}

new Example().incrementCount()  //1
new Example().incrementCount()  //1+1=2
new Example().incrementCount()  //2+1=3
new Example().incrementCount()
new Example().incrementCount()
