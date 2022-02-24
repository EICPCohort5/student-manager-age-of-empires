// students have, at a minimum, a firstName, lastName, and location (US, UK, Canada), modeling the students in the bootcamp
const form = document.querySelector('#student-app');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
  event.preventDefault();

  let studentData = new FormData(form);
  iteratewithentriesDestruct(studentData);
}


function iteratewithentriesDestruct(studentData){
  for (let [key,value] of studentData.entries()){
    console.log(`${key}: ${value}`);
  }
}





//export {};