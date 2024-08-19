import axios from "axios";

const getSignUpUsers = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL as string    

    try {
        const req = await axios(`${url}/api/users`)

        return req.data;
    }
    catch (e) {
        throw new Error('some thing went wrong !')
    }
};

export default getSignUpUsers;