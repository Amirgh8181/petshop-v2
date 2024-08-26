import axios from 'axios'

const getClinicItemPage =async (id:string) => {
    const url = process.env.NEXT_PUBLIC_API_URL as string    
    const req = await axios.get(`${url}/api/clinics/${id}`,)
    if (!req.data) {
        throw new Error("somthin went wrong")
    }
    return req.data
}

export default getClinicItemPage