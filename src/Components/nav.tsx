import React from "react";

export default function Nav(props: {currentTheme: String, setCurrentTheme: Function }) {
    function switchTheme() {
        const range = document.querySelector(".nav--range") as HTMLInputElement;
        const theme = range.value;

        const themes = ["first", "second", "third"];
        props.setCurrentTheme(themes[parseInt(theme)]);
    }

    return (
        <nav className="flex justify-between">
            <div>
                <h1 className="nav--main_header     text-4xl">calc</h1>
            </div>

            <div className="flex items-end">
                <div>
                    <h2 className="uppercase text-white mr-4 mb-2">theme</h2>
                </div>

                <div>
                    <div className="flex justify-between px-3 text-white">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                    </div>

                    <input onChange={switchTheme} type="range" min="0" max="2" step="1" defaultValue="0" className="nav--range    w-20 h-7 px-2 rounded-full appearance-none cursor-pointer" />
                </div>
            </div>
        </nav>
    )
}