'use strict';





//Seattle

let seattle={
    workingHour : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minimumCustomer: 23,
    maximumCustomer: 65,
    cookiesAvgSales: 6.3,
    customerPerHour: [],
    cookiesAvgPurchased: [],
    total: 0,
    name: "seattle",



    
    

    calculateNumOfCustomer : function(){
        
        for (let i=0; i < seattle.workingHour.length; i++) {
              
            this.customerPerHour.push( randomNumCustomerPerHour(this.minimumCustomer, this.maximumCustomer));
           
    }

   
    },
    
    getNumOfCookies: function(){

        for( let i=0; i < this.customerPerHour.length; i++){
    
        let mult = this.customerPerHour[i]* this.cookiesAvgSales;
    
        mult = Math.floor(mult);
        this.cookiesAvgPurchased.push(`${mult} cookies`);
        this.total+=mult;
        }




}
}



    seattle.calculateNumOfCustomer()
console.log(seattle.customerPerHour);



function randomNumCustomerPerHour(min, max){

        

    return Math.floor(Math.random() * (max - min)) + min;
    
}

seattle.getNumOfCookies()
console.log(seattle.cookiesAvgPurchased);







let parent = document.getElementById("parent")
let h2Element = document.createElement("h2")
parent.appendChild(h2Element)
h2Element.textContent = seattle.name;

let ulElement = document.createElement("ul")

parent.appendChild(ulElement)
for(let i=0; i< seattle.workingHour.length; i++){

    let liElement = document.createElement("li")

    ulElement.appendChild(liElement)
    liElement.textContent=`${seattle.workingHour[i]}  : ${seattle.cookiesAvgPurchased[i]}`;
}

let totalElement=document.createElement("li");
ulElement.appendChild(totalElement);
totalElement.textContent= `total = ${seattle.total} cookies`;

let Tokyo={
    workingHour : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minimumCustomer: 3,
    maximumCustomer: 24,
    cookiesAvgSales: 1.2,
    customerPerHour: [],
    cookiesAvgPurchased: [],
    total: 0,
    name: "Tokyo",



    

    calculateNumOfCustomer : function(){
        
        for (let i=0; i < Tokyo.workingHour.length; i++) {
              
            this.customerPerHour.push( randomNumCustomerPerHour(this.minimumCustomer, this.maximumCustomer));
           
    }

   
    },
    
    getNumOfCookies: function(){

        for( let i=0; i < this.customerPerHour.length; i++){
    
        let mult = this.customerPerHour[i]* this.cookiesAvgSales;
    
        mult = Math.floor(mult);
        this.cookiesAvgPurchased.push(`${mult} cookies`);
        this.total+=mult;
        }




}
}



    Tokyo.calculateNumOfCustomer()
console.log(seattle.customerPerHour);



function randomNumCustomerPerHour(min, max){

        

    return Math.floor(Math.random() * (max - min)) + min;
    
}

Tokyo.getNumOfCookies()
console.log(Tokyo.cookiesAvgPurchased);

console.log(Tokyo.total)




let parent1 = document.getElementById("parent1")
let h3Element = document.createElement("h3")
parent1.appendChild(h3Element)
h3Element.textContent = Tokyo.name;

let ulElement1 = document.createElement("ul")

parent1.appendChild(ulElement1)

for(let i=0; i< seattle.workingHour.length; i++){

    let liElement1 = document.createElement("li")

    ulElement1.appendChild(liElement1)
    liElement1.textContent=`${seattle.workingHour[i]}  : ${seattle.cookiesAvgPurchased[i]}`;
}

let totalElement1=document.createElement("li");
ulElement1.appendChild(totalElement1);
totalElement1.textContent= `total = ${Tokyo.total} cookies`;

let Dubai={
    workingHour : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minimumCustomer: 11,
    maximumCustomer: 38,
    cookiesAvgSales: 3.7,
    customerPerHour: [],
    cookiesAvgPurchased: [],
    total: 0,
    name: "Dubai",



    

    calculateNumOfCustomer : function(){
        
        for (let i=0; i < Dubai.workingHour.length; i++) {
              
            this.customerPerHour.push( randomNumCustomerPerHour(this.minimumCustomer, this.maximumCustomer));
           
    }

   
    },
    
    getNumOfCookies: function(){

        for( let i=0; i < this.customerPerHour.length; i++){
    
        let mult = this.customerPerHour[i]* this.cookiesAvgSales;
    
        mult = Math.floor(mult);
        this.cookiesAvgPurchased.push(`${mult} cookies`);
        this.total+=mult;
        }




}
}



Dubai.calculateNumOfCustomer()
console.log(seattle.customerPerHour);



function randomNumCustomerPerHour(min, max){

        

    return Math.floor(Math.random() * (max - min)) + min;
    
}

Dubai.getNumOfCookies()
console.log(Dubai.cookiesAvgPurchased);

console.log(Dubai.total)




let parent2 = document.getElementById("parent2")
let h4Element = document.createElement("h4")
parent2.appendChild(h4Element)
h4Element.textContent = Dubai.name;

let ulElement2 = document.createElement("ul")

parent2.appendChild(ulElement2)

for(let i=0; i< seattle.workingHour.length; i++){

    let liElement2 = document.createElement("li")

    ulElement2.appendChild(liElement2)
    liElement2.textContent=`${Dubai.workingHour[i]}  : ${Dubai.cookiesAvgPurchased[i]}`;
}

let totalElement2=document.createElement("li");
ulElement2.appendChild(totalElement2);
totalElement2.textContent= `total = ${Dubai.total} cookies`;


let Paris={
    workingHour : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minimumCustomer: 20,
    maximumCustomer: 38,
    cookiesAvgSales: 2.3,
    customerPerHour: [],
    cookiesAvgPurchased: [],
    total: 0,
    name: "Paris",



    

    calculateNumOfCustomer : function(){
        
        for (let i=0; i < Paris.workingHour.length; i++) {
              
            this.customerPerHour.push( randomNumCustomerPerHour(this.minimumCustomer, this.maximumCustomer));
           
    }

   
    },
    
    getNumOfCookies: function(){

        for( let i=0; i < this.customerPerHour.length; i++){
    
        let mult = this.customerPerHour[i]* this.cookiesAvgSales;
    
        mult = Math.floor(mult);
        this.cookiesAvgPurchased.push(`${mult} cookies`);
        this.total+=mult;
        }




}
}



Paris.calculateNumOfCustomer()
console.log(Paris.customerPerHour);



function randomNumCustomerPerHour(min, max){

        

    return Math.floor(Math.random() * (max - min)) + min;
    
}

Paris.getNumOfCookies()
console.log(Paris.cookiesAvgPurchased);

console.log(Paris.total)




let parent3 = document.getElementById("parent3")
let h5Element = document.createElement("h5")
parent3.appendChild(h5Element)
h5Element.textContent = Paris.name;

let ulElement3 = document.createElement("ul")

parent3.appendChild(ulElement3)

for(let i=0; i< seattle.workingHour.length; i++){

    let liElement3 = document.createElement("li")

    ulElement3.appendChild(liElement3)
    liElement3.textContent=`${Paris.workingHour[i]}  : ${Paris.cookiesAvgPurchased[i]}`;
}

let totalElement3=document.createElement("li");
ulElement3.appendChild(totalElement3);
totalElement3.textContent= `total = ${Paris.total} cookies`;




let Lima={
    workingHour : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minimumCustomer: 2,
    maximumCustomer: 16,
    cookiesAvgSales: 4.6,
    customerPerHour: [],
    cookiesAvgPurchased: [],
    total: 0,
    name: "Lima",



    

    calculateNumOfCustomer : function(){
        
        for (let i=0; i < Lima.workingHour.length; i++) {
              
            this.customerPerHour.push( randomNumCustomerPerHour(this.minimumCustomer, this.maximumCustomer));
           
    }

   
    },
    
    getNumOfCookies: function(){

        for( let i=0; i < this.customerPerHour.length; i++){
    
        let mult = this.customerPerHour[i]* this.cookiesAvgSales;
    
        mult = Math.floor(mult);
        this.cookiesAvgPurchased.push(`${mult} cookies`);
        this.total+=mult;
        }




}
}



Lima.calculateNumOfCustomer()
console.log(Lima.customerPerHour);



function randomNumCustomerPerHour(min, max){

        

    return Math.floor(Math.random() * (max - min)) + min;
    
}

Lima.getNumOfCookies()
console.log(Lima.cookiesAvgPurchased);

console.log(Lima.total)




let parent4= document.getElementById("parent4")
let h6Element = document.createElement("h6")
parent4.appendChild(h6Element)
h6Element.textContent = Lima.name;

let ulElement4 = document.createElement("ul")

parent4.appendChild(ulElement4)

for(let i=0; i< seattle.workingHour.length; i++){

    let liElement4 = document.createElement("li")

    ulElement4.appendChild(liElement4)
    liElement4.textContent=`${Lima.workingHour[i]}  : ${Lima.cookiesAvgPurchased[i]}`;
}

let totalElement4=document.createElement("li");
ulElement4.appendChild(totalElement4);
totalElement4.textContent= `total = ${Lima.total} cookies`;

