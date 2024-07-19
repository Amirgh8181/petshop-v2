import axios from 'axios'

const getClinics =async () => {
    const url = process.env.BACKEND_SOURCE_URL as string
    const req = await axios.get(`${url}/api/clinics`,)
    if (!req.data) {
        throw new Error("somthin went wrong")
    }
    return req.data
}

export default getClinics