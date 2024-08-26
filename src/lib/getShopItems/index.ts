import axios from "axios";


const getShopItems = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL as string
    try {
        const req = await axios.get(`${url}/api/products`,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )        
        console.log(req.data);
        
        return req.data
    }
    catch (e) {
        throw new Error("cant recive products")
    }
};

export default getShopItems;