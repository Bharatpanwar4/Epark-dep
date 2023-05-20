import bcript from 'bcryptjs'
const users = [
    {
        name:'Bharat',
        email:'bharat@example.com',
        password: bcript.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Panwar',
        email:'panwar@example.com',
        password: bcript.hashSync('123456',10),
    },
    {
        name:'choudhary',
        email:'choudhary@example.com',
        password: bcript.hashSync('123456',10),
    }
]

export default users;