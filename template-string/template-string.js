// template String
const numbers = [10, 30, 40, 60]
const student = {
    name: "jibon",
    age : 28,
    learn:['html', 'react']
}

const about = `
My name is ${student.name}
age of ${student.age}
and also learn ${student.learn[1]}
`
console.log(about)