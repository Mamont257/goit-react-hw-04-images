import React from "react";
import { Dna } from "./Loader.styled";

export const Loader = () => {
    return (
        <div>
            <Dna
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
            />
        </div>
    )
}
