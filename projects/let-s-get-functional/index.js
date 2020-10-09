// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-sstores");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *    //Make sur eyou are cd inside github.io folder in the terminal
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //must use filter function to filter out the male customers
    //output must be a number
    return _.filter(array, function(customer){
        //return a condition that resolves to true or false based on the argument
        //test if customer prop has gender prop as male
        return customer.gender === "male";
    }).length
};

//use reduce function to find the number of female customers
//output will be a number

var femaleCount = function (array){
    //reduce parameter- arrow function 
    //grouped customers will be new object started with seed, customer is an obj where gender is held
    let output = array.reduce((groupedCustomers, customer) => { //arrow function
    //set object property equal to key
        const key = customer.gender;
        //create a new array for each gender value
        if(!groupedCustomers[key]) groupedCustomers[key] = [];
        //push objects into new array within new objects, per key value
        groupedCustomers[key].push(customer);
        //return the new array 
        return groupedCustomers;
}, {});//starting seed is an empty object
   //return groupedCustomers["female"].length;
    return output.female.length;
};


//Find the oldest customer’s name
var oldestCustomer = function(array){
    
    let oldest = _.reduce(array, function(accumulator, currentValue){
        if(currentValue.age < accumulator.age){
            return accumulator;
        }else if(currentValue.age > accumulator.age){
            return currentValue;
       } 
    })
    return oldest.name;
};

//Find the youngest customer’s name
var youngestCustomer = function(array){
        let youngest = _.reduce(array, function(accumulator, currentValue){
        if(currentValue.age > accumulator.age){
            return accumulator;
        }else if(currentValue.age < accumulator.age){
            return currentValue;
       } 
    })
    return youngest.name;
};


//Find the average balance of all customers
var averageBalance = function(array){ 
    let balances = _.pluck(array, "balance")
    
    let total = balances.reduce(function(acc, b){
        return acc + Number(b.slice(1).split(",").join(""));
    },0);
    return total/balances.length;
};
    

//Find how many customer’s names begin with a given letter
var firstLetterCount = function(array, letter){
        return _.filter(array, function(customer){//customer is object within array
        //return a condition that resolves to true or false based on the argument
        //test if customer name prop starts with letter
        return customer.name.toUpperCase().startsWith(letter.toUpperCase());    
            
        }).length//return lemgth of result array
};

//Find how many friends of a given customer have names that start with a given letter
var friendFirstLetterCount = function(array, customer, letter){
  
         let friend = [];
    _.each(array, function(e){
        if( e.name === customer){
            _.each(e.friends, function(b){
                if( b.name[0].toUpperCase() === letter.toUpperCase()){
                    friend.push(b);
                }
            }
        );
    }
    });
    return friend.length;
};


//Find the customers’ names that have a given customer’s name in their friends list
var friendsCount = function(array, customerName){
    let answer = [];//will be array of customers with customerName as friend
    
     _.each(array, function(value){ //will loop through an array or object and apply the function
        let friend = value.friends;//will pull friends object of every customer
        //pluck works with array of objects- parameters friend
        let friendsNames = _.pluck(friend, "name") //pluck pulls "name" from each friend object and creates an array
       
        _.each(friendsNames, function(v){ //loops through friendsNAmes array and applies function
            
            if(v === customerName){ //compares each friend in friendsNames array to customerName to 
               answer.push(value.name); //push that customer into the answer array
            }
        });
    });
    return answer; //return the answer array
};

//Find the three most common tags among all customers’ associated tags
var topThreeTags = function(array){
    //pluck all arrays of tags out of customer objects
    let tags = _.pluck(array, "tags");//will produce an array of arrays
    //reduce tags arrays from cutimer array into one array
    let allTags = _.reduce(tags, function(accumulator, currentValue, currentIndex){
        return accumulator.concat(currentValue);
    });
    
    //create an obect that will keep count of each tag occurances
    var tagCount = allTags.reduce(function(tagCountObj,currentTag){
        //check the object if the word exists as a key
        if(tagCountObj[currentTag]){
            //increment its count value
            tagCountObj[currentTag]++;
        }else { //if the obj does not contain the word as a key
        //create a new key/val pair with the wors as key and 1 as val
            tagCountObj[currentTag] = 1;
        }
        return tagCountObj;//return object of counted tags
    }, {});
   
   //make new array of tag count object entries and sort them in decending order
   let arrayTagCounts = Object.entries(tagCount).sort(function(a, b){
       return b[1] - a[1]; 
    });
   
   let top3arr = arrayTagCounts.slice(0, 3);//slice top 3 tags into a new array
   let finalArray = _.map(top3arr, function(e, i, a){ //consolidate array of array to get final 3 tags
       return e[0];
   });
   
   return finalArray;//return final array
};

//Create a summary of genders, the output should be an object:

// {
//     male: 3,
//     female: 4,
//     non-binary: 1
// }
var genderCount = function(array){
      //reduce parameter- arrow function 
    //grouped customers will be new object started with seed, customer is an obj where gender is held
    let output = array.reduce((groupedCustomers, customer) => { //arrow function
    //set object property equal to key
        const key = customer.gender;
        //create a new array for each gender value
        if(!groupedCustomers[key]){
          groupedCustomers[key] = 1;  
        } else if(groupedCustomers[key]){
            groupedCustomers[key]++;
        }
        return groupedCustomers;
}, {});//starting seed is an empty object
   
   return output;
    
};
  

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
