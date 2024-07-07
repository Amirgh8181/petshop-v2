'use server';

import { signIn } from "next-auth/react";
import { LoginDataType } from "../types/AuthInput";



const signInAction = async (e: LoginDataType) => {
    try {
        const req = await signIn('credentials', {
            email: e.email,
            password: e.password,
            redirect: false,
        })        console.log(req);
        
        return req; 
    }catch(e){
        throw new Error("unsucces login")
    }
}

export default signInAction