
const surname ="white";

console.log(`kathryn ${surname} was here`);

let mylist =[{book_name : "LOTRs"},
{book_name : "The Van"} ,
{book_name : "Green Book"}, 
{book_name : "Vice"}  ];

console.table(mylist);

mylist.forEach((item)=>{

    console.log(`the name of the book is ${item.book_name}`);

});