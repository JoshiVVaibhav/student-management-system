let form = document.getElementById("studentForm");

let students = [];


form.addEventListener("submit", function(event) {

    event.preventDefault();

    addStudent();

});


function addStudent() {

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let age = document.getElementById("age").value;

    let course = document.getElementById("course").value.trim();

    let message = document.getElementById("message");


    // Check all fields
    if (name === "" || email === "" || age === "" || course === "") {

        message.textContent = "All fields need to be filled";

        return;
    }


    // Check age separately
    if (Number(age) < 18) {

        message.textContent = "Age should be 18 or above";

        return;
    }


    // Create student object
    let student = {

        name: name,

        email: email,

        age: age,

        course: course

    };


    // Add student to array
    students.push(student);


    // Display students
    displayStudents();


    // Clear form
    form.reset();


    // Success message
    message.textContent = "Form Submitted Successfully!";

}


function displayStudents() {

    let table = document.getElementById("studentTable");


    // Keep table headings
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Course</th>
        </tr>
    `;


    // Display all students
    for (let i = 0; i < students.length; i++) {

        let row = `
            <tr>
                <td>${students[i].name}</td>
                <td>${students[i].email}</td>
                <td>${students[i].age}</td>
                <td>${students[i].course}</td>
            </tr>
        `;

        table.innerHTML += row;

    }

}