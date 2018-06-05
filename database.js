const loadDatabase = (localStorageKey) => {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)
    
    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}
console.log('getter')
loadDatabase('localKey')

const database = loadDatabase('localKey');
// Iterate over every data set in the database and create a <section> component.

for (let x in database) {
    const databaseSection = document.createElement('section');
    const myStuff = document.querySelector('#myStuff');
    myStuff.appendChild(databaseSection);
    console.log(database[x])
    for (let i=0; i<database[x].length; i++) {
        console.log(database[x][i])
        for (let y in database[x][i]) {  
        const databaseP = document.createElement('p');
        databaseSection.appendChild(databaseP);
        databaseP.textContent = database[x][i][y]
        }
    }
}

// That component itself should contain three <p> components. One for the name, location, and description.

// Attach the p components as children of the section.

// Attach the section as a child of the article.S