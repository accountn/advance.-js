const students = [
    {id: 21, name: 'rakib'},
    {id: 31, name: 'shafiq'},
    {id: 41, name: 'khayer'},
    {id: 51, name: 'hanif'}
];

// const output = [];
// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     const result = element.name;
//     output.push(result);
// }
// console.log(output);

const result = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
console.log(bigger);