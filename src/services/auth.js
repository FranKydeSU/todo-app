import axios from 'axios'

//login
async function signin(user) {
    // API
    const response = await axios.post('https://saengthong-task-manager.herokuapp.com/users/login', user)
    //console.log('response', response)
    return response.data
}

async function signup(user) {
    const response = await axios.post('https://saengthong-task-manager.herokuapp.com/users', user)
    return response.data
}

export { signin, signup }