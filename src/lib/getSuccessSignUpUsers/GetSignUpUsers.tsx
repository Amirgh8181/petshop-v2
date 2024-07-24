import axios from "axios";

const getSignUpUsers = async () => {
    try {
        const req = await axios(`http://localhost:5000/api/users`)
        console.log(req);

        return req.data;
    }
    catch (e) {
        console.log('some thing went wrong !')
    }
};

export default getSignUpUsers;