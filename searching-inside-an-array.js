const names = ['Johnssen', 'Jorst', 'Morais', 'Alves', 'Martinez'];
const grades = [8.5, 6.3, 3.1, 9, 7.4]

const studentNamesAndGrades = [names, grades];

function searchStudentName(studentNameHere) {
    const names = studentNamesAndGrades[0];
    
    if (names.includes(studentNameHere)){
        index = names.indexOf(studentNameHere);
        console.log(studentNamesAndGrades[0][index])
    } else {
        console.log("This student does not makes part of this class.")
    }
}

nameHere('Johanssen');