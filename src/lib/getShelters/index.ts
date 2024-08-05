import axios from 'axios'

const getShelters = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL as string
    const req = await axios.get(`${url}/api/shelters`,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    if (!req.data) {
        throw new Error("somthin went wrong")
    }
    return req.data
}

export default getShelters