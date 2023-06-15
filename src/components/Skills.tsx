import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { CSSTransition } from 'react-transition-group'
import {Title} from "./ui/Title.tsx";

interface SkillsProps {
    onSkillsChange: (skills: {
        heavyMachinery: number,
        endurance: number,
        closeCombat: number,
        mobility: number,
        rangedCombat: number,
        piloting: number,
        observation: number,
        comtech: number,
        survival: number,
        command: number,
        manipulation: number,
        medicalAid: number,
    }) => void,
    career: string,
    careerSelected: boolean,
}

export const Skills: React.FC<SkillsProps> = ({
    onSkillsChange,
    career,
    careerSelected,
}) => {
    const [heavyMachinery, setHeavyMachinery] = React.useState(0)
    const [endurance, setEndurance] = React.useState(0)
    const [closeCombat, setCloseCombat] = React.useState(0)

    const [mobility, setMobility] = React.useState(0)
    const [rangedCombat, setRangedCombat] = React.useState(0)
    const [piloting, setPiloting] = React.useState(0)

    const [observation, setObservation] = React.useState(0)
    const [comtech, setComtech] = React.useState(0)
    const [survival, setSurvival] = React.useState(0)

    const [command, setCommand] = React.useState(0)
    const [manipulation, setManipulation] = React.useState(0)
    const [medicalAid, setMedicalAid] = React.useState(0)

    const [maxHeavyMachinery, setMaxHeavyMachinery] = React.useState(1)
    const [maxEndurance, setMaxEndurance] = React.useState(1)
    const [maxCloseCombat, setMaxCloseCombat] = React.useState(1)

    const [maxMobility, setMaxMobility] = React.useState(1)
    const [maxRangedCombat, setMaxRangedCombat] = React.useState(1)
    const [maxPiloting, setMaxPiloting] = React.useState(1)

    const [maxObservation, setMaxObservation] = React.useState(1)
    const [maxComtech, setMaxComtech] = React.useState(1)
    const [maxSurvival, setMaxSurvival] = React.useState(1)

    const [maxCommand, setMaxCommand] = React.useState(1)
    const [maxManipulation, setMaxManipulation] = React.useState(1)
    const [maxMedicalAid, setMaxMedicalAid] = React.useState(1)

    const [remainingPoints, setRemainingPoints] = React.useState(10)

    useEffect(() => {
        setMaxValuesByCareer(career)
    }, [career])

    useEffect(() => {
        if (careerSelected && career) {
            setHeavyMachinery(0)
            setEndurance(0)
            setCloseCombat(0)
            setMobility(0)
            setRangedCombat(0)
            setPiloting(0)
            setObservation(0)
            setComtech(0)
            setSurvival(0)
            setCommand(0)
            setManipulation(0)
            setMedicalAid(0)
            setRemainingPoints(10)
        }
    }, [career]);

    const setMaxValuesByCareer = (career: string) => {
        setMaxHeavyMachinery(1)
        setMaxEndurance(1)
        setMaxCloseCombat(1)
        setMaxMobility(1)
        setMaxRangedCombat(1)
        setMaxPiloting(1)
        setMaxObservation(1)
        setMaxComtech(1)
        setMaxSurvival(1)
        setMaxCommand(1)
        setMaxManipulation(1)
        setMaxMedicalAid(1)

        switch (career) {
            case "Agent de la compagnie":
                setMaxComtech(3)
                setMaxManipulation(3)
                setMaxObservation(3)
                break;
            case "Gamin":
                setMaxMobility(3)
                setMaxObservation(3)
                setMaxSurvival(3)
                break;
            case "Marine colonial":
                setMaxRangedCombat(3)
                setMaxCloseCombat(3)
                setMaxEndurance(3)
                break;
            case "Marshal colonial":
                setMaxRangedCombat(3)
                setMaxManipulation(3)
                setMaxObservation(3)
                break;
            case "Médecin":
                setMaxMobility(3)
                setMaxObservation(3)
                setMaxMedicalAid(3)
                break;
            case "Officier":
                setMaxRangedCombat(3)
                setMaxCommand(3)
                setMaxManipulation(3)
                break;
            case "Pilote":
                setMaxRangedCombat(3)
                setMaxComtech(3)
                setMaxPiloting(3)
                break;
            case "Prolo":
                setMaxCloseCombat(3)
                setMaxEndurance(3)
                setMaxHeavyMachinery(3)
                break;
            case "Scientifique":
                setMaxComtech(3)
                setMaxObservation(3)
                setMaxSurvival(3)
                break;
            default:
                break;
        }
    }

    const handleIncrement = (skill: string) => {
        if (remainingPoints > 0) {
            switch (skill) {
                case "heavyMachinery":
                    if (heavyMachinery < maxHeavyMachinery) {
                        setHeavyMachinery(heavyMachinery + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case "endurance":
                    if (endurance < maxEndurance) {
                        setEndurance(endurance + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case "closeCombat":
                    if (closeCombat < maxCloseCombat) {
                        setCloseCombat(closeCombat + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case "mobility":
                    if (mobility < maxMobility) {
                        setMobility(mobility + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case "rangedCombat":
                    if (rangedCombat < maxRangedCombat) {
                        setRangedCombat(rangedCombat + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case "piloting":
                    if (piloting < maxPiloting) {
                        setPiloting(piloting + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case "observation":
                    if (observation < maxObservation) {
                        setObservation(observation + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case "comtech":
                    if (comtech < maxComtech) {
                        setComtech(comtech + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case "survival":
                    if (survival < maxSurvival) {
                        setSurvival(survival + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case "command":
                    if (command < maxCommand) {
                        setCommand(command + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case "manipulation":
                    if (manipulation < maxManipulation) {
                        setManipulation(manipulation + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case "medicalAid":
                    if (medicalAid < maxMedicalAid) {
                        setMedicalAid(medicalAid + 1)
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                default:
                    break;
            }

            onSkillsChange({
                heavyMachinery,
                endurance,
                closeCombat,
                mobility,
                rangedCombat,
                piloting,
                observation,
                comtech,
                survival,
                command,
                manipulation,
                medicalAid
            })
        }
    }

    const handleDecrement = (skill: string) => {
        switch (skill) {
            case "heavyMachinery":
                if (heavyMachinery > 0) {
                    setHeavyMachinery(heavyMachinery - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case "endurance":
                if (endurance > 0) {
                    setEndurance(endurance - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case "closeCombat":
                if (closeCombat > 0) {
                    setCloseCombat(closeCombat - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case "mobility":
                if (mobility > 0) {
                    setMobility(mobility - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case "rangedCombat":
                if (rangedCombat > 0) {
                    setRangedCombat(rangedCombat - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case "piloting":
                if (piloting > 0) {
                    setPiloting(piloting - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case "observation":
                if (observation > 0) {
                    setObservation(observation - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case "comtech":
                if (comtech > 0) {
                    setComtech(comtech - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case "survival":
                if (survival > 0) {
                    setSurvival(survival - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case "command":
                if (command > 0) {
                    setCommand(command - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case "manipulation":
                if (manipulation > 0) {
                    setManipulation(manipulation - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case "medicalAid":
                if (medicalAid > 0) {
                    setMedicalAid(medicalAid - 1)
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            default:
                break;
        }
    }

    return (
        <>
            <CSSTransition in={careerSelected} timeout={300} classNames={"fade"} unmountOnExit>
                <div className={"flex flex-col gap-6"}>
                    <Title text={"Compétences"} />
                    <div className={"skills flex flex-row gap-12"}>
                        <div className={"flex flex-col gap-4"}>
                            <p className={"ability"}>FORCE</p>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${heavyMachinery === 3 ? "text-amber-300" : "text-white"}`}>{heavyMachinery}</span>
                                <span className={`ml-1.5 ${maxHeavyMachinery === 3 ? "text-amber-300 underline" : "text-white"}`}>{`Machines lourdes`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("heavyMachinery")}
                                    disabled={heavyMachinery >= maxHeavyMachinery || remainingPoints <= 0}
                                    className={`text-white ${heavyMachinery >= maxHeavyMachinery || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("heavyMachinery")}
                                    disabled={heavyMachinery <= 0}
                                    className={`text-white ${heavyMachinery <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${endurance === 3 ? "text-amber-300" : "text-white"}`}>{endurance}</span>
                                <span className={`ml-1.5 ${maxEndurance === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Endurances`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("endurance")}
                                    disabled={endurance >= maxEndurance || remainingPoints <= 0}
                                    className={`text-white ${endurance >= maxEndurance || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("endurance")}
                                    disabled={endurance <= 0}
                                    className={`text-white ${endurance <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${closeCombat === 3 ? "text-amber-300" : "text-white"}`}>{closeCombat}</span>
                                <span className={`ml-1.5 ${maxCloseCombat === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Combat rapproché`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("closeCombat")}
                                    disabled={closeCombat >= maxCloseCombat || remainingPoints <= 0}
                                    className={`text-white ${closeCombat >= maxCloseCombat || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("closeCombat")}
                                    disabled={closeCombat <= 0}
                                    className={`text-white ${closeCombat <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <p className={"ability"}>AGILITÉ</p>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${mobility === 3 ? "text-amber-300" : "text-white"}`}>{mobility}</span>
                                <span className={`ml-1.5 ${maxMobility === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Mobilité`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("mobility")}
                                    disabled={mobility >= maxMobility || remainingPoints <= 0}
                                    className={`text-white ${mobility >= maxMobility || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("mobility")}
                                    disabled={mobility <= 0}
                                    className={`text-white ${mobility <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${rangedCombat === 3 ? "text-amber-300" : "text-white"}`}>{rangedCombat}</span>
                                <span className={`ml-1.5 ${maxRangedCombat === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Combat à distance`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("rangedCombat")}
                                    disabled={rangedCombat >= maxRangedCombat || remainingPoints <= 0}
                                    className={`text-white ${rangedCombat >= maxRangedCombat || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("rangedCombat")}
                                    disabled={rangedCombat <= 0}
                                    className={`text-white ${rangedCombat <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${piloting === 3 ? "text-amber-300" : "text-white"}`}>{piloting}</span>
                                <span className={`ml-1.5 ${maxPiloting === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Pilotage`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("piloting")}
                                    disabled={piloting >= maxPiloting || remainingPoints <= 0}
                                    className={`text-white ${piloting >= maxPiloting || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("piloting")}
                                    disabled={piloting <= 0}
                                    className={`text-white ${piloting <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <p className={"ability"}>ESPRIT</p>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${observation === 3 ? "text-amber-300" : "text-white"}`}>{observation}</span>
                                <span className={`ml-1.5 ${maxObservation === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Observation`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("observation")}
                                    disabled={observation >= maxObservation || remainingPoints <= 0}
                                    className={`text-white ${observation >= maxObservation || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("observation")}
                                    disabled={observation <= 0}
                                    className={`text-white ${observation <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${comtech === 3 ? "text-amber-300" : "text-white"}`}>{comtech}</span>
                                <span className={`ml-1.5 ${maxComtech === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Comtech`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("comtech")}
                                    disabled={comtech >= maxComtech || remainingPoints <= 0}
                                    className={`text-white ${comtech >= maxComtech || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("comtech")}
                                    disabled={comtech <= 0}
                                    className={`text-white ${comtech <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${survival === 3 ? "text-amber-300" : "text-white"}`}>{survival}</span>
                                <span className={`ml-1.5 ${maxSurvival === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Survie`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("survival")}
                                    disabled={survival >= maxSurvival || remainingPoints <= 0}
                                    className={`text-white ${survival >= maxSurvival || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("survival")}
                                    disabled={survival <= 0}
                                    className={`text-white ${survival <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-4 "}>
                            <p className={"ability"}>EMPATHIE</p>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${command === 3 ? "text-amber-300" : "text-white"}`}>{command}</span>
                                <span className={`ml-1.5 ${maxCommand === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Commandement`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("command")}
                                    disabled={command >= maxCommand || remainingPoints <= 0}
                                    className={`text-white ${command >= maxCommand || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("command")}
                                    disabled={command <= 0}
                                    className={`text-white ${command <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${manipulation === 3 ? "text-amber-300" : "text-white"}`}>{manipulation}</span>
                                <span className={`ml-1.5 ${maxManipulation === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Manipulation`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("manipulation")}
                                    disabled={manipulation >= maxManipulation || remainingPoints <= 0}
                                    className={`text-white ${manipulation >= maxManipulation || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("manipulation")}
                                    disabled={manipulation <= 0}
                                    className={`text-white ${manipulation <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${medicalAid === 3 ? "text-amber-300" : "text-white"}`}>{medicalAid}</span>
                                <span className={`ml-1.5 ${maxMedicalAid === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Soins médicaux`}</span>
                                <IconButton
                                    onClick={() => handleIncrement("medicalAid")}
                                    disabled={medicalAid >= maxMedicalAid || remainingPoints <= 0}
                                    className={`text-white ${medicalAid >= maxMedicalAid || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement("medicalAid")}
                                    disabled={medicalAid <= 0}
                                    className={`text-white ${medicalAid <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                        </div>
                        <div>
                            <p className={"reamining-point"}>Points restants : {remainingPoints}</p>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}