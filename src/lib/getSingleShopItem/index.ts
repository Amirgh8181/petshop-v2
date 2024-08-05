import axios from 'axios'
const getSingleShopItem = async (id: string) => {
    const url = process.env.NEXT_PUBLIC_API_URL as string
    const req = await axios.get(`${url}/api/products/${id}`,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    if (!req.data) {
        throw new Error("somthing went wrong")
    }
    
    return req.data;
}
export default getSingleShopItem