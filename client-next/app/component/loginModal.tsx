import { useState, ChangeEvent } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import SignUpModal from './signupModal';
import { LoginModalProps, DataLogin } from "../interfaces/interface";

export default function Modal(props: LoginModalProps) {
    const { push } = useRouter();

    const [isSignup, setSignup] = useState<boolean>(false);
    const [data, setData] = useState<DataLogin>({
        email: "",
        password: "",
    });
    const handleSignUp = () => {
        setSignup(!isSignup);
    };

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleLoginAction = async () => {
        try {
            const res = await signIn('credentials', {
                email: data.email,
                password: data.password,
                callbackUrl: "/",
            });
            console.log(res);
            if (!res?.error) {
                push("/");
              }
        } catch (err) {
            console.error('Login failed:', err);
        }
    };
    const handleCloseButton = (e: ChangeEvent<HTMLInputElement>)=>{
        props.onClose();
        
    }

    return (
        <div className={`fixed flex justify-center top-0 left-0 w-full h-full bg-[#00000099] ${props.open ? "block" : "hidden"}`}>
            {isSignup ? (
                <SignUpModal open={isSignup} toggleSignUp={handleSignUp} onClose={props.onClose} title='Sign Up' />
            ) : (
                <div className="fixed bg-[#1f2125] w-[35rem] h-auto top-[20%] p-5 gap-[10px] flex flex-col items-center justify-center rounded-[20px]">
                    <div>
                        <h1 className="text-[1.5rem] text-white">{props.title}</h1>
                    </div>
                    <div className="flex flex-col justify-center text-black gap-[10px]">
                        <input onChange={handleChangeInput} name="email" type="email" placeholder="Email" className="border p-2 rounded-[10px]" required />
                        <input onChange={handleChangeInput} name="password" type="password" placeholder="******" className="border p-2 rounded-[10px]" required />
                    </div>
                    <div className="flex gap-[10px] mt-[20px]">
                        <button type="button" className="border text-white rounded-xl p-2" onClick={props.onClose}>Close</button>
                        <button type="button" className="border text-white rounded-xl p-2" onClick={()=>handleLoginAction()}>Login</button>
                    </div>
                    <div className="mt-[0.5rem]">
                        <button className="text-white hover:text-[#d5d1db]" onClick={handleSignUp}>Don't have an account?</button>
                    </div>
                </div>
            )}
        </div>
    );
}
