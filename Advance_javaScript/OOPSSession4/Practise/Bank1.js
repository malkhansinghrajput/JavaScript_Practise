class Bank {
     customer = ""
     accno = 0
     balance = 0.0
     static savingInterestRate = 3.2
     time = 0
     si = 0
     static noOfCustomer = 0

     constructor(customer,accno,balance,time){
          this.customer=customer
          this.accno=accno
          this.balance=balance
          this.time=time
          Bank.noOfCustomer += 1
     }
     
     CalSI(){
          this.si=parseFloat(this.balance*Bank.savingInterestRate*this.time)/100
     }

     display() {
          console.log("Customer:",this.customer)
          console.log("AccNo:",this.accno)
          console.log("Balance in Rs:",this.balance)
          console.log("Saving Interest Rate:",Bank.savingInterestRate,"%")
          console.log("Saving Interest Amount is Rs:",this.si,"in",this.time,"year")
          console.log("=========================")
     }

     static bankInfo() {
          console.log("Branch : Vijay Nagar Indore 452003")
          console.log("Number of Customer",Bank.noOfCustomer)
          console.log("=================================")
     }
}
Bank.savingInterestRate=4.4

var b1 = new Bank("Hariom Dhakad",5442010007879,4843984.33,3)
b1.CalSI()
b1.display()
var b2 = new Bank("Ankit Sharma",4713894738,478234.92,5)
b2.CalSI()
b2.display()
Bank.bankInfo()

/*
1. Create class Book with variable title, price.
- Add static variable discountRate.
- Add static variable count.
Increment count variable by one parameterized constructor.
- Add method to display discountRate and count variable.
- Add method to calculateDiscount
on Book price
- enter 4 Book details and print sum of all Book prices and sum
of total discount on all 4 books
*/

class Book {
     title =""
     price = 0.0
     static discountrate = 5
     static count = 0
     SellPrice=0.0
   static allBooks = []
     constructor(title, price,) {
          this.title=title
          this.price=price
         Book.count += 1;
          Book.allBooks.push(this)
     }

     calculatediscount(){
         return (this.price * Book.discountrate)/100
         
     }

     display() {
          let SellingPrice = this.price - this.calculatediscount()
          console.log("Book Name is :",this.title)
          console.log("Book Price is :", this.price)
          console.log("Discount :",Book.discountrate,"%")
          console.log("Book Count is :",Book.count)
          console.log("Fianal Selling Price :",SellingPrice)
          console.log("*******************")


     }

   static AllBook() {
          let totalprice = 0
          let totalDiscount = 0 

          for(let book of Book.allBooks){
               totalprice += book.price;
               totalDiscount += book.calculatediscount()
   }
   let finalprice = totalprice - totalDiscount
          console.log("Total Book's :",Book.count)
          console.log("Discount Rate : ",Book.discountrate,"%")
          console.log("Total Price of All book :",totalprice)
          console.log("Toatal discount on All Books :",totalDiscount)
          console.log("Final Selling price is :",finalprice)
          console.log("===========================")
}
     
}

var b1 = new Book("Atomic Habits", 400);
b1.display()
var b2 = new Book("Rich Dad Poor Dad", 350);
b2.display()
var b3 = new Book("Think and Grow Rich", 500);
b3.display()
var b4 = new Book("The Alchemist", 450)
b4.display()
Book.AllBook()


/*
2. Create class Voter with variables name,age,address.
- Add static variable votingAge.
- Add method isVoter()->Bool which returns true if age is greater or equal than votingAge.
- Add a method to print value of votingAge
- Store information of 5 person in an array and call isVoter() method on all 5 person and print result of  isVoter().
*/

class Voter {
     name = ""
     age = 0
     address=""
     static votingage = 18;
     static person = 0
     constructor(name,age,address){
          this.name=name
          this.age=age
          this.address=address
     }
     isVoter() {
          if(this.age >= Voter.votingage){
            Voter.person += 1;
            console.log("Eligible for Voting and Age is :",this.age)
          }else {
               console.log("Not Eligible for Voting and Age is :",this.age)
          }
     }

     display() {
          console.log("Name is :", this.name)
          console.log("Age is :", this.age)
          console.log("Address is :",this.address)
          this.isVoter()
          console.log("*********************")
     }

     static Totalvoter(){
           console.log("Total Voter Is :",Voter.person)
     }
}

var m1 = new Voter("Malkahn Singh Dewda",21,"Ujjain M.p")
m1.display()
var m2 = new Voter("Ankit sharma",24,"Dewas M.p")
m2.display()
var m3 = new Voter("Hariom Sgitra",17,"Indore M.p")
m3.display()
var m4 = new Voter("Balveer",12,"Unhel M.p")
m4.display()
var m5 = new Voter("Sumit",11,"Dhar M.p")
m5.display()

Voter.Totalvoter()
