"use client"

interface Title {
    title: string
    href: string

}

import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import MinuteRemaining from "./minuteRemaning";

export default function SubHeader({ title, href }: Title,) {


    return (
        <>
            <section className="w-full h-fit p-2 border-b bg-gray-200 dark:bg-black">
                <div className="w-full text-blue-600 h-14 flex justify-start items-center font-medium text-2xl ">
                    <h1 className="ml-6">{title}</h1>
                    <div className="absolute right-4 p-2 flex flex-col justify-end items-end gap-4">
                        <MinuteRemaining />

                        {!href == false ?
                            <Button
                                className="p-4 mb-2 h-6 w-fit bg-blue-600 font-bold text-white  hover:bg-blue-700"
                                onClick={() => redirect(href)}>
                                + Cadastrar
                            </Button> : ""}


                    </div>

                </div>




            </section>
        </>
    )
}