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
<<<<<<< HEAD
        console.log(req.data);
        
=======
>>>>>>> f1a60312b8a95f8d771f747d00353e7231015bfb
        return req.data
    }
    catch (e) {
        throw new Error("cant recive products")
    }
};

export default getShopItems;