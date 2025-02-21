import React from "react";

export default function result(props: {firstNumber: number | undefined, secondNumber: number | undefined, operation: string}) {
    return (
        <section className="results--box    w-full h-12 rounded-lg flex justify-end items-center px-4 py-8 mt-6">
            <p className="text-white text-3xl overflow-auto whitespace-nowrap">{props.firstNumber} {props.operation} {props.secondNumber} </p>
        </section>
    )
}