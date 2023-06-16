import React, { useEffect, useState } from "react";
import { Title } from "./ui/Title.tsx";
import { EquipmentsItem, getEquipments } from "./utils/EquipmentsList.tsx";
import { EquipmentCheckbox } from "./ui/EquipmentCheckbox.tsx";
import { Card } from "@material-tailwind/react";

interface EquipmentsProps {
    onEquipmentsSelected: (selectedEquipments: string) => void;
    career: string;
    careerSelected: boolean;
}

export const Equipments: React.FC<EquipmentsProps> = ({
                                                          onEquipmentsSelected,
                                                          career,
                                                          careerSelected,
                                                      }) => {
    const [selectedEquipments, setSelectedEquipments] = useState<string[]>([]);
    const [data, setData] = useState<EquipmentsItem[] | undefined>(undefined);

    useEffect(() => {
        if (careerSelected && career) {
            const equipmentsData = getEquipments(career);
            if (equipmentsData) {
                setData(equipmentsData);
            }
        }
    }, [career, careerSelected]);

    const handleEquipmentsChange = (selected: string) => {
        if (selected) {
            if (
                selectedEquipments.length < 2 &&
                !selectedEquipments.includes(selected)
            ) {
                setSelectedEquipments((prevSelectedEquipments) => [
                    ...prevSelectedEquipments,
                    selected,
                ]);
            } else {
                removeEquipment(selected);
            }
        }
    };

    const removeEquipment = (selected: string) => {
        setSelectedEquipments((prevSelectedEquipments) =>
            prevSelectedEquipments.filter((equipment) => equipment !== selected)
        );
    };

    useEffect(() => {
        onEquipmentsSelected(selectedEquipments.join(", "));
    }, [selectedEquipments, onEquipmentsSelected]);

    return (
        <>
            {careerSelected && career ? (
                <div>
                    <Title text="Equipements" />
                    <div>
                        {data &&
                            data.map(({ checkbox1, checkbox2 }) => (
                                <Card className={"mt-5 w-[624px]"}>
                                    <EquipmentCheckbox
                                        checkbox1={checkbox1}
                                        checkbox2={checkbox2}
                                        onEquipmentSelected={handleEquipmentsChange}
                                        selectedEquipments={selectedEquipments}
                                    />
                                </Card>
                            ))}
                    </div>
                </div>
            ) : (
                <p>Choisissez une carrière</p>
            )}
        </>
    );
};
