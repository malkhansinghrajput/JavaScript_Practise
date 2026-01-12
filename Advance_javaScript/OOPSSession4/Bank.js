class Bank {
    customer=""
    accno=0
    balance=0.0
    static savingInterestRate=3.2
    time=0
    si=0
    static noOfCustomer=0

    constructor(customer,accno,balance,time){
        this.customer=customer
        this.accno=accno
        this.balance=balance
        this.time=time
        Bank.noOfCustomer+=1
    }

    calSI(){
        this.si=(this.balance*Bank.savingInterestRate*this.time)/100
    } 

    display(){
        console.log("Customer:",this.customer)
        console.log("AccNO:",this.accno)
        console.log("Balance in Rs:",this.balance)
        console.log("Saving Interest Rate :",Bank.savingInterestRate,"%")
        console.log("Saving Interest Amount is Rs:",this.si,"in",this.time,"years")
        console.log("======================")
    }

    static bankInfo(){
        console.log("Branch:Vijay Nagar Indore 452003")
        console.log("Number of Customer:",Bank.noOfCustomer)
    }
}
Bank.savingInterestRate = 4.2
var b1 = new Bank("Rahul Sharma",121,23456.23,2)
b1.calSI()
b1.display()
var b2 = new Bank("Neha Sharma",232,534564.12,2)
b2.calSI()
b2.display()
Bank.bankInfo()

/*
1. Create class Book with variable
title, price.
- Add static variable discountRate.
- Add static variable count.
Increment count variable by one parameterized constructor.
- Add method to display
discountRate and count variable.
- Add method to calculateDiscount
on Book price
- enter 4 Book details
and print sum of all Book prices and sum
of total discount on all 4 books
======
2. Create class Voter with variables
name,age,address.
- Add static variable votingAge.
- Add method isVoter()->Bool which
returns true if age is greater or equal
than votingAge.
- Add a method to print value of
votingAge
- Store information of 5 person in
an array and call isVoter() method on
all 5 person and print result of
isVoter().
*/