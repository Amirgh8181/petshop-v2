
const getSignUpUsers = async () => {
    const url = process.env.BACKEND_SOURCE_URL as string
    try {
        const req = await fetch(`${url}/api/users`)
            .then(res => res.json()); 
            console.log(req);
                       
        return req;
    }
    catch (e) {
        console.log('some thing went wrong !')
    }
};

export default getSignUpUsers;