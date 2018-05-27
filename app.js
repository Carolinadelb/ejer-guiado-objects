let student = {
    track: "Front-end Developer"

}

var name = prompt("¿Cual es tu nombre?");
var age = parseInt(prompt("¿Cual es tu edad?"));

student.name = name;
student.age = age;

student.track = "UX Designer";
console.log(student);