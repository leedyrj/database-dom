//load database from working with data exercise
const loadDatabase = (localStorageKey) => {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)
    
    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
console.log('getter')

//assign database to variable
const database = loadDatabase('localKey');

//create variables to store #mystuff
const myStuff = document.querySelector('#myStuff');

//for...in loop to enter database object
// for (let x in database) {
//     //for loop to enter array in object
//     for (let i=0; i<database[x].length; i++) {
//         //append section for each element in object
//     myStuff.appendChild(databaseSection);
//         //for...in loop to enter object items in array in object
//         for (let y in database[x][i]) {  
//         //create p elements for each item in object and append to section created above
//         const databaseP = document.createElement('p');
//         databaseSection.appendChild(databaseP);
//         //assign text of database properties to p elements created above
//         databaseP.textContent = `${y}: ${database[x][i][y]}`
//         }
//     }
// }

// Write a function that performs the operation of creating your DOM components
// Define an argument to the function that will filter the data to one of the data sets. For example, if I pass a string value of "crafts" to the function, only items in the crafts table in the database should appear.


//create document fragment
const homeInventoryFragment = document.createDocumentFragment()

//redefine code above into function.  allows you to put a dataset into the function and print only that dataset to the dom
const createDom = (dataSet) => {
    const invTable = database[dataSet]
    invTable.forEach(item => {
        const databaseSection = document.createElement('section');
        for (let y in item) {  
            //create p elements for each item in object and append to section created above
            const databaseP = document.createElement('p');
            databaseSection.appendChild(databaseP);
            //assign text of database properties to p elements created above
            databaseP.textContent = `${y}: ${item[y]}`
            }
            homeInventoryFragment.appendChild(databaseSection)
    });
}

createDom('furniture')

myStuff.appendChild(homeInventoryFragment)

// const homeInventoryFragment = document.createDocumentFragment()

// // for (let table in HomeInventoryDatabase) {

// //   const invTable = HomeInventoryDatabase[table]
// const populateDomForDataSet = (dataSet) => {
//   const invTable = HomeInventoryDatabase[dataSet]
//   invTable.forEach(item => {
//     const sectionElement = document.createElement("section")
//     for (let key in item) {
//       const paragraphElement = document.createElement("p")
//       paragraphElement.textContent = `${key}: ${item[key]}`
//       sectionElement.appendChild(paragraphElement)
//     }
//     homeInventoryFragment.appendChild(sectionElement)
//   })
// // }  
// }

// populateDomForDataSet("furniture")



// myStuffArticle.appendChild(homeInventoryFragment)