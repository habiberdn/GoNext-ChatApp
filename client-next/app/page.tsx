'use client'

import { Header } from "./component/header";

export default function Home() {

    return (
        <main className="flex bg-[#1f2125] flex-col justify-center min-h-screen w-full">
            <section className="flex">
                <section className="flex flex-col w-[30%] border border-[#464b50] ">
                    <Header />
                    <section className=" flex flex-col gap-[5px] pt-[2px]">
                        <input placeholder="Add Contact" className="w-full px-2 h-[2rem] rounded-lg text-black " />
                        <section className="h-[4rem] border rounded-xl flex pl-[20px] gap-[25px] items-center w-full">
                            <section className="">f</section>
                            Nama
                        </section>
                    </section>
                </section>
                <section className="min-h-screen flex justify-end flex-col items-center pb-[3px] w-[70%]" >
                    <div className="flex w-full gap-[10px] pr-[20px] pb-[5px]">
                        <input
                            style={{ backgroundColor: "#F0F0F0" }}
                            className="text-black  rounded-lg w-full px-3 h-[2rem] mt-[0.8rem]  flex justify-center items-center"
                            placeholder="Type Something..."
                        />
                        <button>Send</button>
                    </div>
                </section>
            </section>
        </main>
    );
}
