//login user
import axios from 'axios';
import url from '../utils/URL'


const loginUser = async ({email, password}) => {

    return await axios.post(`${url}/auth/local`, {
        identifier:email,
        password
    }).catch(error => console.log(error.message));

}

export default loginUser;