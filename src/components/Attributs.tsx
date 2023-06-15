import React, { useEffect, useState } from "react";
import { Title } from "./ui/Title.tsx"
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { CSSTransition } from "react-transition-group";

interface AttributsProps {
    onAttributsChange: (attributs: {
        force: number;
        agilite: number;
        esprit: number;
        empathie: number;
    }) => void;
    career: string,
    careerSelected: boolean,
}

export const Attributs: React.FC<AttributsProps> = ({
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
        setMaxValuesByCareer(career);
    }, [career]);

    useEffect(() => {
        if (careerSelected && career) {
            setForce(2);
            setAgilite(2);
            setEsprit(2);
            setEmpathie(2);
            setRemainingPoints(6);
        }
    }, [career, careerSelected]);

    const setMaxValuesByCareer = (career: string) => {
        switch (career) {
            case "Agent de la compagnie":
                setMaxForce(4);
                setMaxAgilite(4);
                setMaxEsprit(5);
                setMaxEmpathie(4);
                break;
            case "Gamin":
                setMaxForce(4);
                setMaxAgilite(5);
                setMaxEsprit(4);
                setMaxEmpathie(4);
                break;
            case "Marine colonial":
                setMaxForce(5);
                setMaxAgilite(4);
                setMaxEsprit(4);
                setMaxEmpathie(4);
                break;
            case "Marshal colonial":
                setMaxForce(4);
                setMaxAgilite(4);
                setMaxEsprit(5);
                setMaxEmpathie(4);
                break;
            case "Médecin":
                setMaxForce(4);
                setMaxAgilite(4);
                setMaxEsprit(4);
                setMaxEmpathie(5);
                break;
            case "Officier":
                setMaxForce(4);
                setMaxAgilite(4);
                setMaxEsprit(4);
                setMaxEmpathie(5);
                break;
            case "Pilote":
                setMaxForce(4);
                setMaxAgilite(5);
                setMaxEsprit(4);
                setMaxEmpathie(4);
                break;
            case "Prolo":
                setMaxForce(5);
                setMaxAgilite(4);
                setMaxEsprit(4);
                setMaxEmpathie(4);
                break;
            case "Scientifique":
                setMaxForce(4);
                setMaxAgilite(4);
                setMaxEsprit(5);
                setMaxEmpathie(4);
                break;
            default:
                break;
        }
    };

    const handleIncrement = (attribut: string) => {
        if (remainingPoints > 0) {
            switch (attribut) {
                case "force":
                    if (force < maxForce) {
                        setForce(force + 1);
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
                case "agilite":
                    if (agilite < maxAgilite) {
                        setAgilite(agilite + 1);
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
                case "esprit":
                    if (esprit < maxEsprit) {
                        setEsprit(esprit + 1);
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
                case "empathie":
                    if (empathie < maxEmpathie) {
                        setEmpathie(empathie + 1);
                        setRemainingPoints(remainingPoints - 1);
                    }
                    break;
                default:
                    break;
            }

            onAttributsChange({ force, agilite, esprit, empathie })
        }
    }

    const handleDecrement = (attribut: string) => {
        switch (attribut) {
            case "force":
                if (force > 2) {
                    setForce(force - 1);
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            case "agilite":
                if (agilite > 2) {
                    setAgilite(agilite - 1);
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            case "esprit":
                if (esprit > 2) {
                    setEsprit(esprit - 1);
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            case "empathie":
                if (empathie > 2) {
                    setEmpathie(empathie - 1);
                    setRemainingPoints(remainingPoints + 1);
                }
                break;
            default:
                break;
        }

        onAttributsChange({force, agilite, esprit, empathie})
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
                                    onClick={() => handleIncrement("force")}
                                    disabled={force >= maxForce || remainingPoints <= 0}
                                    className={`text-white ${force >= maxForce || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("force")}
                                    disabled={force <= 2}
                                    className={`text-white ${force <= 2 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton
                                    onClick={() => handleIncrement("agilite")}
                                    disabled={agilite >= maxAgilite || remainingPoints <= 0}
                                    className={`text-white ${agilite >= maxAgilite || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("agilite")}
                                    disabled={agilite <= 2}
                                    className={`text-white ${agilite <= 2 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton
                                    onClick={() => handleIncrement("esprit")}
                                    disabled={esprit >= maxEsprit || remainingPoints <= 0}
                                    className={`text-white ${esprit >= maxEsprit || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("esprit")}
                                    disabled={esprit <= 2}
                                    className={`text-white ${esprit <= 2 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton
                                    onClick={() => handleIncrement("empathie")}
                                    disabled={empathie >= maxEmpathie || remainingPoints <= 0}
                                    className={`text-white ${empathie >= maxEmpathie || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("empathie")}
                                    disabled={empathie <= 2}
                                    className={`text-white ${empathie <= 2 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                        </div>
                        <div>
                            <p className={"text-white"}>Points restants : {remainingPoints}</p>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}