import React, { useEffect, useState } from "react";
import { Title } from "./ui/Title.tsx";
import { EquipmentCheckbox } from "./ui/EquipmentCheckbox.tsx";
import { Card } from "@material-tailwind/react";
import { Career } from "../objets/Career.tsx";
import { Equipment, getEquipment } from "../objets/Equipments.tsx";

interface SelectEquipmentsProps {
    careerSelected: boolean;
    career: Career | undefined;
    onEquipmentsSelected: (selectedEquipments: Equipment[]) => void;
}

export const SelectEquipments: React.FC<SelectEquipmentsProps> = ({
  careerSelected,
  career,
  onEquipmentsSelected,
}) => {
    const [equipmentsSelected, setEquipmentsSelected] = useState<Equipment[]>([]);
    const [prevCareer, setPrevCareer] = useState<Career>();

    useEffect(() => {
        if (careerSelected && career) {
            setPrevCareer(career)
        }
    }, [career, careerSelected]);

    useEffect(() => {
        if (career !== prevCareer) {
            resetEquipments();
            setPrevCareer(career);
        }
    }, [career, prevCareer]);

    const resetEquipments = () => {
        setEquipmentsSelected([]);
        onEquipmentsSelected([]);
    }

    const handleEquipmentsChange = (equipmentsSelected: Equipment[]) => {
        setEquipmentsSelected(equipmentsSelected);
        onEquipmentsSelected(equipmentsSelected);
    };

    return (
        <>
            {careerSelected && career ? (
                <div>
                    <Title text="Equipements" />
                    <div>
                        <Card className={"mt-5 w-[624px]"}>
                            {career.equipment.map((equipments) => (
                                        <EquipmentCheckbox
                                            checkbox1={getEquipment(equipments[0])}
                                            checkbox2={getEquipment(equipments[1])}
                                            onEquipmentSelected={handleEquipmentsChange}
                                            equipments={equipmentsSelected}
                                        />
                                ))}
                        </Card>
                    </div>
                </div>
            ) : (
                <p>Choisissez une carrière</p>
            )}
        </>
    );
};
