import React, { FC, useState, useEffect, ChangeEvent } from "react";
import { SignUpModalProps, FormEvent, DataSignUp } from '../interfaces/interface'

export default function SignUpModal(props: SignUpModalProps) {
    const [status, setStatus] = useState<boolean>(props.open);
    const [data, setData] = useState<DataSignUp>({
        email: "",
        password: "",
        passwordConfirm: ""
    })

    const changeStatus = () => {
        setStatus(false)
        props.toggleSignUp();
    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    console.log(data)

    return (
        <div className={`fixed bg-[#1f2125] w-[35rem] h-auto top-[20%] p-5 gap-[10px] flex flex-col items-center justify-center rounded-[20px]`}>
            <div className="">
                <h1 className="text-[1.5rem] text-white">{props.title}</h1>
            </div>
            <div className="flex flex-col justify-center text-black gap-[10px]">
                <div className="flex flex-col justify-center text-black gap-[10px]">
                    <input placeholder="Email" type="email" name="email" onChange={handleChangeInput} className="border p-2 rounded-[10px]" required />
                    <input placeholder="password" type="password" name="password" onChange={handleChangeInput} className="border p-2 rounded-[10px]" required />
                    <input placeholder="password confirm" name="passwordConfirm" type="password" onChange={handleChangeInput} className="border p-2 rounded-[10px]" required />
                </div>
            </div>
            <div className="flex gap-[10px] mt-[20px]">
                <button type="button" className="border text-white rounded-xl p-2" onClick={props.onClose}>Close</button>
                <button type="button" className="border text-white rounded-xl p-2"  >Sign Up</button>
            </div>
            <div className="mt-[0.5rem]">
                <button className="text-white hover:text-[#d5d1db]" onClick={changeStatus}>Already have an account?</button>
            </div>
        </div>
    );
}
