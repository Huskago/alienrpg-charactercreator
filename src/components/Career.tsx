import React, { useState } from "react";
import { Title } from "./ui/Title.tsx";
import { Option, Select } from "@material-tailwind/react";

interface CareerProps {
    onCareerSelected: (selectedCareer: string) => void;
}

export const Career: React.FC<CareerProps> = ({ onCareerSelected }) => {
    const [career, setCareer] = useState("")
    const [,setCareerSelected] = useState(false)

    const handleCareerChange = (selectedCareer: string | undefined) => {
        if (selectedCareer) {
            setCareer(selectedCareer);
            setCareerSelected(true);
            onCareerSelected(selectedCareer);
        }
    };

    return (
        <div className={"flex flex-col gap-6"}>
            <Title text={"Carrière"} />
            <div className={"w-[20%]"}>
                <Select
                    value={career}
                    color="gray"
                    variant="outlined"
                    label="Choisissez votre carrière"
                    onChange={(event) => handleCareerChange(event)}
                >
                    <Option value="Agent de la compagnie">
                        Agent de la compagnie
                    </Option>
                    <Option value="Gamin">
                        Gamin
                    </Option>
                    <Option value="Marine colonial">
                        Marine colonial
                    </Option>
                    <Option value="Marshal colonial">
                        Marshal colonial
                    </Option>
                    <Option value="Médecin">
                        Médecin
                    </Option>
                    <Option value="Officier">
                        Officier
                    </Option>
                    <Option value="Pilote">
                        Pilote
                    </Option>
                    <Option value="Prolo">
                        Prolo
                    </Option>
                    <Option value="Scientifique">
                        Scientifique
                    </Option>
                </Select>
            </div>
        </div>
    )
}