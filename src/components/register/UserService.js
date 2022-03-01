import axios from 'axios'


const CREATE_USER = "http://localhost:8080/users"


// class UserService{

//     createUser(user){
//         return axios.post(CREATE_USER, user)
//     }
// }

// export default new UserService();


export default function UserService() {

    CREATE_USER(user);
        
    return axios.post(CREATE_USER, user)
}

