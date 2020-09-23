// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * 
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */
//code-along with ryan in class
// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //return an object that has the argument ids as values to keys matching their names
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
        
    }
} 

//complete this section on your own
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];//holding the contact list
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //addcontact function
        addContact: function(contact) {
        //add contact object into contacts array created above using push method    
        contacts.push(contact);
        },
        //find contact function
        findContact: function(fullName){
            //loop through contacts array
        for (var i = 0; i < contacts.length; i++){
            //check if fullname matches any of the contact in the contact list
            //if it does match, return the contact object  
            if(`${contacts[i].nameFirst} ${contacts[i].nameLast}` === fullName){
            return contacts[i];
            //if it does not match, return undefined
            } else {return undefined}
        }
        },
        //remove contact from array
        removeContact: function(contact){
            contacts.pop(contact);
        },
        
        //print all contact names
        printAllContactNames: function(){
            //create new array
            var arr = [];
            //use similar call frim findContact to get first and last names
            //.push the values into the new array
            for(var i = 0; i < contacts.length; i++){
                arr.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`);
            }
            //return the new array where strings are joined with a line break
            return arr.join('\n');
        }
        
        
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
