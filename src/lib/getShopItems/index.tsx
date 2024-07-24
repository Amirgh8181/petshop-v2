import axios from "axios";


const getShopItems = async () => {
    const url = process.env.BACKEND_SOURCE_URL as string
    try {
        const req = await axios.get(`${url}/api/products`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )        
        return req.data
    }
    catch (e) {
        throw new Error("cant recive products")
    }
};

export default getShopItems;