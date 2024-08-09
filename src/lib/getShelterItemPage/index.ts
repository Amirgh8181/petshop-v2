import axios from 'axios'

const getShelterItemPage =async (id:string) => {
    const url = process.env.NEXT_PUBLIC_API_URL as string
    const req = await axios.get(`${url}/api/shelters/${id}`,)
    if (!req.data) {
        throw new Error("somthin went wrong")
    }
    return req.data
}

export default getShelterItemPage