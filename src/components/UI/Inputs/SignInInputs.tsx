"use client"
import { AuthInputType } from '@/root/types'
import React from 'react'
import InputLabel from './InputLabel'
import styles from "./login.module.css"
import InputErr from './InputErr'
import { UseFormRegister } from 'react-hook-form'

interface LoginInputType extends AuthInputType {
    registerVal: "email" | "password",
}
interface SignUpInputType extends AuthInputType {
    registerVal: "email" | "password" | "name",
}

interface loginFormValues {
    email: string;
    password: string;
}
interface signUpFormValues {
    email: string;
    password: string;
    name: string
}
export interface ChildComponentProps {
    register: UseFormRegister<loginFormValues>;
    inputCreateData: LoginInputType,
    inpId?: string
}

const SignInInputs = ({ inputCreateData, register, inpId }: ChildComponentProps) => {
    return (
        <label className="form-control w-full" key={inputCreateData.key}>

            <InputLabel text={inputCreateData.key}>
                {inputCreateData.icon}
            </InputLabel>
            <input
                className={styles.inputStyle}
                type={inputCreateData.type}
                {...register(inputCreateData.registerVal)}
                id={inpId ?? "fake"}
            />
            {inputCreateData.err &&
                <InputErr err={inputCreateData.err} />
            }
        </label>

    )
}

export default SignInInputs