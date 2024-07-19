import axios from 'axios'

const getProducts =async () => {
    const url = process.env.BACKEND_SOURCE_URL as string
    try {
        console.log(`${url}/api/products`);
        
        const req = await axios.get(`${url}/api/products`)
        console.log(req);
        
        return req.data
    } catch (e) {
        throw new Error("please first run api and reload page")
    }
}

export default getProducts