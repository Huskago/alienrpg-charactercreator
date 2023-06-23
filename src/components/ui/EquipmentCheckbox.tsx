import React from "react";
import { Checkbox } from "@material-tailwind/react";
import { Equipment } from "../../objets/Equipments.tsx";

interface EquipmentCheckboxProps {
    checkbox1: Equipment;
    checkbox2: Equipment;
    onEquipmentSelected: (selectedEquipments: Equipment[]) => void;
    equipments: Equipment[];
}

export const EquipmentCheckbox: React.FC<EquipmentCheckboxProps> = ({
    checkbox1,
    checkbox2,
    onEquipmentSelected,
    equipments,
}) => {
    const isChecked1 = equipments.some((equipment) => equipment.name === checkbox1.name);
    const isChecked2 = equipments.some((equipment) => equipment.name === checkbox2.name);

    const handleCheckbox1Change = () => {
        if (!isChecked2) {
            if (isChecked1) {
                onEquipmentSelected(equipments.filter((item) => item.name !== checkbox1.name));
            } else {
                if (equipments.length < 2) {
                    onEquipmentSelected([...equipments, checkbox1]);
                }
            }
        }
    };

    const handleCheckbox2Change = () => {
            if (!isChecked1) {
                if (isChecked2 ) {
                    onEquipmentSelected(equipments.filter((item) => item.name !== checkbox2.name));
                } else {
                    if (equipments.length < 2) {
                        onEquipmentSelected([...equipments, checkbox2]);
                    }
                }
            }
    };

    return (
        <>
            <div className="flex flex-row items-center">
                <div className={"flex flex-row items-center w-[512px]"}>
                    <Checkbox
                        value={checkbox1.name}
                        checked={isChecked1}
                        onChange={handleCheckbox1Change}
                    />
                    <p>{checkbox1.name}</p>
                </div>
                <p className={"mx-2.5"}>OU</p>
                <div className={"flex flex-row items-center w-[512px]"}>
                    <Checkbox
                        value={checkbox2.name}
                        checked={isChecked2}
                        onChange={handleCheckbox2Change}
                    />
                    <p>{checkbox2.name}</p>
                </div>
            </div>
        </>
    );
};
