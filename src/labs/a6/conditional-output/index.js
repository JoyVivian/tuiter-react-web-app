import React from "react";
import {useState} from "react";
import ConditionalOutputIfElse from "./conditional-output-if-else";
import ConditionalOutputInline from "./conditional-output-inline";


const ConditionalOutput = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <ConditionalOutputIfElse/>
            <ConditionalOutputInline/>
        </>
    );
}

export default ConditionalOutput;