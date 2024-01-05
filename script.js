function addStudent() {
    var name = document.getElementById ('name').value
    var rollNumber = document.getElementById ('rollNumber').value
    var courses = document.getElementById ('courses').value

    var table = document.getElementById ('studentTable').getElementsByTagName('tbody') [0]

    // new row insert
    // insertRow building method
    var newRow = table.insertRow (0);

    // new cell insert
    // insertCell building method
    var cell1 = newRow.insertCell (0);
    var cell2 = newRow.insertCell (1);
    var cell3 = newRow.insertCell (2);

    // showing the below in the table 
    cell1.innerHTML = name;
    cell2.innerHTML = rollNumber;
    cell3.innerHTML = courses;
}