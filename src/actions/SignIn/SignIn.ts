import axios from "axios";
const url = process.env.NEXT_PUBLIC_API_URL as string
console.log(url);
export async function SignIn({ email, password }: { email: string, password: string }) {
    const credentialDetail = { email, password }
    try {
        const request = await axios.post(`${url}/api/auth`, credentialDetail, {
            headers: { "Content-Type": "application/json" },
        })
        return request;
    }
    catch (e) {
        throw new Error("cant sign in")
    }
}