"use server"
import { SignUpDataType } from "@/src/types/AuthInput";
import axios from "axios";
const url = process.env.BACKEND_SOURCE_URL as string
console.log(url);

export async function signUpUser(userDetails: SignUpDataType) {
  try {
    const { data } = await axios.post(`${url}/api/users`, userDetails, {
      headers: {
        "Content-Type": "application/json"
      }
    }
    )
    return data;
  } catch (e) {
    throw new Error("cant signUp")
  }

}
