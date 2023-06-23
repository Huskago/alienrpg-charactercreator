import React, { useState } from "react";
import { Title } from "./ui/Title.tsx";
import { Option, Select } from "@material-tailwind/react";
import { Career, careers, getCareer } from "../objets/Career.tsx";

interface SelectCareerProps {
    onCareerSelected: (selectedCareer: Career) => void;
}

export const SelectCareer: React.FC<SelectCareerProps> = ({ onCareerSelected }) => {
    const [career, setCareer] = useState<Career>()

    const handleCareerChange = (selectedCareer: string | undefined) => {
        if (selectedCareer) {
            setCareer(getCareer(selectedCareer));
            onCareerSelected(getCareer(selectedCareer));
        }
    };

    return (
        <div className={"flex flex-col gap-6"}>
            <Title text={"Carrière"} />
            <div className={"w-[20%]"}>
                <Select
                    value={career?.getName()}
                    color="gray"
                    variant="outlined"
                    label="Choisissez votre carrière"
                    onChange={(event) => handleCareerChange(event)}
                >
                    {careers.map((career) => (
                        <Option value={career.getName()}>
                            {career.getName()}
                        </Option>
                    ))}
                </Select>
            </div>
        </div>
    )
}