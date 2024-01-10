/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
    firstName: 'chinonso',
    lastName: 'morba',
    experienceTeachingC: 10
}

console.log('C++')
cpp.setTeacher = {
    firstName: 'cTeacher',
    lastName: 'cTeacher'
};
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())


console.log('Java')
java.setTeacher = {
    firstName: 'cTeacher',
    lastName: 'cTeacher'
};
console.log(java.getRequirements())
console.log(java.getAvailableTeacher())


console.log('React')
react.setTeacher = {
    firstName: 'cTeacher',
    lastName: 'cTeacher'
};
console.log(react.getRequirements())
console.log(react.getAvailableTeacher())
