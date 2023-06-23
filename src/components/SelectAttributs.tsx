import React, { useEffect, useState } from "react";
import { Title } from "./ui/Title.tsx"
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { Career } from "../objets/Career.tsx";
import { Attribute, Attributes, AttributesList } from "../objets/Attributes.tsx";

interface SelectAttributsProps {
    careerSelected: boolean;
    career: Career | undefined;
    onAttributsChange: (attributs: AttributesList) => void;
}

export const SelectAttributs: React.FC<SelectAttributsProps> = ({
        onAttributsChange,
        career,
        careerSelected,
    }) => {
    const [force] = useState<Attribute>(new Attribute(Attributes.Srength, 2));
    const [agilite] = useState<Attribute>(new Attribute(Attributes.Agility, 2));
    const [esprit] = useState<Attribute>(new Attribute(Attributes.Wits, 2));
    const [empathy] = useState<Attribute>(new Attribute(Attributes.Empathy, 2));

    const [maxForce, setMaxForce] = useState(4);
    const [maxAgilite, setMaxAgilite] = useState(4);
    const [maxEsprit, setMaxEsprit] = useState(4);
    const [maxEmpathy, setMaxEmpathy] = useState(4);

    const [remainingPoints, setRemainingPoints] = useState(6);

    useEffect(() => {
        if (career) setMaxValuesByCareer(career);
    }, [career]);

    useEffect(() => {
        if (careerSelected && career) {
            resetAttributs();
        }
    }, [career, careerSelected]);

    const resetAttributs = () => {
        force.resetValue();
        agilite.resetValue();
        esprit.resetValue();
        empathy.resetValue();
        setRemainingPoints(6);
    }

    const setMaxValuesByCareer = (career: Career) => {
        setMaxForce(4);
        setMaxAgilite(4);
        setMaxEsprit(4);
        setMaxEmpathy(4);
        switch (career.getKeyAttribute()) {
            case Attributes.Srength:
                setMaxForce(5);
                break;
            case Attributes.Agility:
                setMaxAgilite(5);
                break;
            case Attributes.Wits:
                setMaxEsprit(5);
                break;
            case Attributes.Empathy:
                setMaxEmpathy(5);
        }
    };

    useEffect(() => {
        onAttributsChange(new AttributesList(force, agilite, esprit, empathy));
    }, [force.getValue(), agilite.getValue(), esprit.getValue(), empathy.getValue()]);

    const handleIncrement = (attribut: Attributes) => {
        if (remainingPoints > 0) {
            switch (attribut) {
                case Attributes.Srength:
                    if (force.getValue() < maxForce) {
                        force.incrementValue();
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
                case Attributes.Agility:
                    if (agilite.getValue() < maxAgilite) {
                        agilite.incrementValue();
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
                case Attributes.Wits:
                    if (esprit.getValue() < maxEsprit) {
                        esprit.incrementValue();
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
                case Attributes.Empathy:
                    if (empathy.getValue() < maxEmpathy) {
                        empathy.incrementValue();
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
            }
        }
    }

    const handleDecrement = (attribut: Attributes) => {
        switch (attribut) {
            case Attributes.Srength:
                if (force.getValue() > 2) {
                    force.decrementValue();
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            case Attributes.Agility:
                if (agilite.getValue() > 2) {
                    agilite.decrementValue();
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            case Attributes.Wits:
                if (esprit.getValue() > 2) {
                    esprit.decrementValue();
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            case Attributes.Empathy:
                if (empathy.getValue() > 2) {
                    empathy.decrementValue();
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
        }
    };

    return (
        <>
            {careerSelected && career ? (
                <div className={"flex flex-col gap-6"}>
                    <Title text={"Attributs"} />
                    <div className={"flex flex-row gap-4"}>
                        <div className={"flex flex-col gap-4"}>
                            <p><span className={`mr-3 ${force.getValue() === 5 ? "text-amber-300" : "text-white"}`}>{force.getValue()}</span>
                                <span className={`text-lg ${maxForce === 5 ? "text-amber-300 underline" : "text-white"}`}>FORCE</span></p>
                            <p><span className={`mr-3 ${agilite.getValue() === 5 ? "text-amber-300" : "text-white"}`}>{agilite.getValue()}</span>
                                <span className={`text-lg ${maxAgilite === 5 ? "text-amber-300 underline" : "text-white"}`}>AGILITÉ</span></p>
                            <p><span className={`mr-3 ${esprit.getValue() === 5 ? "text-amber-300" : "text-white"}`}>{esprit.getValue()}</span>
                                <span className={`text-lg ${maxEsprit === 5 ? "text-amber-300 underline" : "text-white"}`}>ESPRIT</span></p>
                            <p><span className={`mr-3 ${empathy.getValue() === 5 ? "text-amber-300" : "text-white"}`}>{empathy.getValue()}</span>
                                <span className={`text-lg ${maxEmpathy === 5 ? "text-amber-300 underline" : "text-white"}`}>EMPATHIE</span></p>
                        </div>
                        <div className={"flex flex-col -mt-2 gap-1"}>
                            <div>
                                <IconButton
                                    onClick={() => handleIncrement(Attributes.Srength)}
                                    disabled={force.getValue() >= maxForce || remainingPoints <= 0}
                                    className={`text-white ${force.getValue() >= maxForce || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Attributes.Srength)}
                                    disabled={force.getValue() <= 2}
                                    className={`text-white ${force.getValue() <= 2 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton
                                    onClick={() => handleIncrement(Attributes.Agility)}
                                    disabled={agilite.getValue() >= maxAgilite || remainingPoints <= 0}
                                    className={`text-white ${agilite.getValue() >= maxAgilite || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Attributes.Agility)}
                                    disabled={agilite.getValue() <= 2}
                                    className={`text-white ${agilite.getValue() <= 2 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton
                                    onClick={() => handleIncrement(Attributes.Wits)}
                                    disabled={esprit.getValue() >= maxEsprit || remainingPoints <= 0}
                                    className={`text-white ${esprit.getValue() >= maxEsprit || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Attributes.Wits)}
                                    disabled={esprit.getValue() <= 2}
                                    className={`text-white ${esprit.getValue() <= 2 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton
                                    onClick={() => handleIncrement(Attributes.Empathy)}
                                    disabled={empathy.getValue() >= maxEmpathy || remainingPoints <= 0}
                                    className={`text-white ${empathy.getValue() >= maxEmpathy || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Attributes.Empathy)}
                                    disabled={empathy.getValue() <= 2}
                                    className={`text-white ${empathy.getValue() <= 2 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                        </div>
                        <div>
                            <p className={"text-base text-white"}>Points restants : {remainingPoints}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )
            }
        </>
    )
}