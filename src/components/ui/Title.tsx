import React from "react";

interface TitleProps {
    text: string
}

export const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <>
            <h1 className={"text-2xl text-white -ml-2"}>{text}</h1>
        </>
    );
}