"use client"
import { AuthInputType } from '@/root/types'
import React from 'react'
import InputLabel from './InputLabel'
import styles from "./login.module.css"
import InputErr from './InputErr'
import { UseFormRegister } from 'react-hook-form'


interface SignUpInputType extends AuthInputType {
    registerVal: "email" | "password" | "name",
}

interface signUpFormValues {
    email: string;
    password: string;
    name: string
}
export interface ChildComponentProps {
    register: UseFormRegister<signUpFormValues>;
    inputCreateData: SignUpInputType
}

const SignUpInputs = ({ inputCreateData, register }: ChildComponentProps) => {
    return (
        <label className="form-control w-full" key={inputCreateData.key}>

            <InputLabel text={inputCreateData.key}>
                {inputCreateData.icon}
            </InputLabel>
            <input
                className={styles.inputStyle}
                type={inputCreateData.type}
                {...register(inputCreateData.registerVal)}
            />
            {inputCreateData.err &&
                <InputErr err={inputCreateData.err} />
            }
        </label>

    )
}

export default SignUpInputs