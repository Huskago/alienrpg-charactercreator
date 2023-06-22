import React, {useEffect, useState} from "react";
import {Title} from "./ui/Title.tsx"
import {IconButton} from "@mui/material";
import {Add, Remove} from "@mui/icons-material";
import {CSSTransition} from "react-transition-group";
import {Career} from "../objets/Career.tsx";
import {Attributes} from "../objets/Attributes.tsx";

interface SelectAttributsProps {
    onAttributsChange: (attributs: {
        force: number;
        agilite: number;
        esprit: number;
        empathie: number;
    }) => void;
    career: Career | undefined,
    careerSelected: boolean,
}

export const SelectAttributs: React.FC<SelectAttributsProps> = ({
        onAttributsChange,
        career,
        careerSelected,
    }) => {
    const [force, setForce] = useState(2);
    const [agilite, setAgilite] = useState(2);
    const [esprit, setEsprit] = useState(2);
    const [empathie, setEmpathie] = useState(2);
    const [maxForce, setMaxForce] = useState(4);
    const [maxAgilite, setMaxAgilite] = useState(4);
    const [maxEsprit, setMaxEsprit] = useState(4);
    const [maxEmpathie, setMaxEmpathie] = useState(4);
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
        setForce(2);
        setAgilite(2);
        setEsprit(2);
        setEmpathie(2);
        setRemainingPoints(6);
    }

    const setMaxValuesByCareer = (career: Career) => {
        setMaxForce(4);
        setMaxAgilite(4);
        setMaxEsprit(4);
        setMaxEmpathie(4);
        switch (career.keyAttribute) {
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
                setMaxEmpathie(5);
        }
    };

    useEffect(() => {
        onAttributsChange({ force, agilite, esprit, empathie })
    }, [force, agilite, esprit, empathie]);

    const handleIncrement = (attribut: Attributes) => {
        if (remainingPoints > 0) {
            switch (attribut) {
                case Attributes.Srength:
                    if (force < maxForce) {
                        setForce(force + 1);
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
                case Attributes.Agility:
                    if (agilite < maxAgilite) {
                        setAgilite(agilite + 1);
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
                case Attributes.Wits:
                    if (esprit < maxEsprit) {
                        setEsprit(esprit + 1);
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
                case Attributes.Empathy:
                    if (empathie < maxEmpathie) {
                        setEmpathie(empathie + 1);
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
            }
        }
    }

    const handleDecrement = (attribut: Attributes) => {
        switch (attribut) {
            case Attributes.Srength:
                if (force > 2) {
                    setForce(force - 1);
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            case Attributes.Agility:
                if (agilite > 2) {
                    setAgilite(agilite - 1);
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            case Attributes.Wits:
                if (esprit > 2) {
                    setEsprit(esprit - 1);
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            case Attributes.Empathy:
                if (empathie > 2) {
                    setEmpathie(empathie - 1);
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
        }
    };

    return (
        <>
            <CSSTransition in={careerSelected} timeout={300} classNames="fade" unmountOnExit>
                <div className={"flex flex-col gap-6"}>
                    <Title text={"Attributs"} />
                    <div className={"flex flex-row gap-4"}>
                        <div className={"flex flex-col gap-4"}>
                            <p><span className={`mr-3 ${force === 5 ? "text-amber-300" : "text-white"}`}>{force}</span>
                                <span className={`text-lg ${maxForce === 5 ? "text-amber-300 underline" : "text-white"}`}>FORCE</span></p>
                            <p><span className={`mr-3 ${agilite === 5 ? "text-amber-300" : "text-white"}`}>{agilite}</span>
                                <span className={`text-lg ${maxAgilite === 5 ? "text-amber-300 underline" : "text-white"}`}>AGILITÉ</span></p>
                            <p><span className={`mr-3 ${esprit === 5 ? "text-amber-300" : "text-white"}`}>{esprit}</span>
                                <span className={`text-lg ${maxEsprit === 5 ? "text-amber-300 underline" : "text-white"}`}>ESPRIT</span></p>
                            <p><span className={`mr-3 ${empathie === 5 ? "text-amber-300" : "text-white"}`}>{empathie}</span>
                                <span className={`text-lg ${maxEmpathie === 5 ? "text-amber-300 underline" : "text-white"}`}>EMPATHIE</span></p>
                        </div>
                        <div className={"flex flex-col -mt-2 gap-1"}>
                            <div>
                                <IconButton
                                    onClick={() => handleIncrement(Attributes.Srength)}
                                    disabled={force >= maxForce || remainingPoints <= 0}
                                    className={`text-white ${force >= maxForce || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Attributes.Srength)}
                                    disabled={force <= 2}
                                    className={`text-white ${force <= 2 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton
                                    onClick={() => handleIncrement(Attributes.Agility)}
                                    disabled={agilite >= maxAgilite || remainingPoints <= 0}
                                    className={`text-white ${agilite >= maxAgilite || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Attributes.Agility)}
                                    disabled={agilite <= 2}
                                    className={`text-white ${agilite <= 2 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton
                                    onClick={() => handleIncrement(Attributes.Wits)}
                                    disabled={esprit >= maxEsprit || remainingPoints <= 0}
                                    className={`text-white ${esprit >= maxEsprit || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Attributes.Wits)}
                                    disabled={esprit <= 2}
                                    className={`text-white ${esprit <= 2 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton
                                    onClick={() => handleIncrement(Attributes.Empathy)}
                                    disabled={empathie >= maxEmpathie || remainingPoints <= 0}
                                    className={`text-white ${empathie >= maxEmpathie || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Attributes.Empathy)}
                                    disabled={empathie <= 2}
                                    className={`text-white ${empathie <= 2 ? "opacity-50" : ""}`}
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
            </CSSTransition>
        </>
    )
}