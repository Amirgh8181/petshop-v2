import axios from "axios";

const getSignUpUsers = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL as string    

    try {
        const req = await axios(`${url}/api/users`)
        console.log(req);

        return req.data;
    }
    catch (e) {
        console.log('some thing went wrong !')
    }
};

export default getSignUpUsers;