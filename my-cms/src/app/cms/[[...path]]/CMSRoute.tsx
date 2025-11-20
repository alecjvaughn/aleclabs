"use client";

import { useEffect, useState } from "react";
import { FireCMSApp as App } from "../FireCMSApp";
import { BrowserRouter } from "react-router-dom";

export function CMSRoute(){
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return null;

    return <BrowserRouter basename={"/cms"}>
        <App/>
    </BrowserRouter>;
}
