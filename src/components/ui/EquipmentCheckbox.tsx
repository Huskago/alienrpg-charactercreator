import React, { useEffect } from "react";
import { Checkbox } from "@material-tailwind/react";

interface EquipmentCheckboxProps {
    checkbox1: {
        label: string;
        value: string;
    };
    checkbox2: {
        label: string;
        value: string;
    };
    onEquipmentSelected: (selectedEquipments: string) => void;
    selectedEquipments: string[];
}

export const EquipmentCheckbox: React.FC<EquipmentCheckboxProps> = ({
                                                                        checkbox1,
                                                                        checkbox2,
                                                                        onEquipmentSelected,
                                                                        selectedEquipments,
                                                                    }) => {
    const isChecked1 = selectedEquipments.includes(checkbox1.value);
    const isChecked2 = selectedEquipments.includes(checkbox2.value);

    const handleCheckbox1Change = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isChecked2) {
            if (event.target.checked) {
                onEquipmentSelected(checkbox1.value);
            } else {
                onEquipmentSelected(checkbox1.value);
            }
        }
    };

    const handleCheckbox2Change = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!isChecked1) {
            if (event.target.checked) {
                onEquipmentSelected(checkbox2.value);
            } else {
                onEquipmentSelected(checkbox2.value);
            }
        }
    };

    useEffect(() => {
        if (isChecked1 && isChecked2) {
            if (selectedEquipments.includes(checkbox1.value)) {
                onEquipmentSelected(checkbox2.value);
            } else {
                onEquipmentSelected(checkbox1.value);
            }
        }
    }, [isChecked1, isChecked2, checkbox1.value, checkbox2.value, selectedEquipments, onEquipmentSelected]);

    return (
        <>
            <div className="flex flex-row items-center">
                <div className={"flex flex-row items-center w-[512px]"}>
                    <Checkbox
                        value={checkbox1.value}
                        checked={isChecked1}
                        onChange={handleCheckbox1Change}
                    />
                    <p>{checkbox1.label}</p>
                </div>
                <p className={"mx-2.5"}>OU</p>
                <div className={"flex flex-row items-center w-[512px]"}>
                    <Checkbox
                        value={checkbox2.value}
                        checked={isChecked2}
                        onChange={handleCheckbox2Change}
                    />
                    <p>{checkbox2.label}</p>
                </div>
            </div>
        </>
    );
};
