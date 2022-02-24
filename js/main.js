// students have, at a minimum, a firstName, lastName, and location (US, UK, Canada), modeling the students in the bootcamp
const form = document.querySelector('#student-app');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
  event.preventDefault();

  let studentData = new FormData(form);
  iteratewithentriesDestruct(studentData);
}


function iteratewithentriesDestruct(studentData){
  //access table
  let table = document.querySelector('#myTable');
  //access row on table
  let row = table.insertRow();
  // we dont use the <key> in our loop, so leave blank BUT use a , to indicate we are still looping through [key,value] pairs
  for (let [,value] of studentData.entries()){
    //create new html element cell
    let td = document.createElement('td');
    // create text node of studentdata value
    let text = document.createTextNode(value);
    //add value to cell
    td.appendChild(text);
    // add cell to row
    row.appendChild(td);
  }

}

//export {};