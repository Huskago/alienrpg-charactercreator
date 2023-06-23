import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { Title } from "./ui/Title.tsx";
import { Career } from "../objets/Career.tsx";
import { Skill, Skills, SkillsList } from "../objets/Skills.tsx";

interface SelectSkillsProps {
    careerSelected: boolean,
    career: Career | undefined,
    onSkillsChange: (skills: SkillsList) => void,
}

export const SelectSkills: React.FC<SelectSkillsProps> = ({
    onSkillsChange,
    career,
    careerSelected,
}) => {
    const [heavyMachinery] = React.useState<Skill>(new Skill(Skills.HeavyMachinery, 0))
    const [endurance] = React.useState<Skill>(new Skill(Skills.Endurance, 0))
    const [closeCombat] = React.useState<Skill>(new Skill(Skills.CloseCombat, 0))

    const [mobility] = React.useState<Skill>(new Skill(Skills.Mobility, 0))
    const [rangedCombat] = React.useState<Skill>(new Skill(Skills.RangedCombat, 0))
    const [piloting] = React.useState<Skill>(new Skill(Skills.Piloting, 0))

    const [observation] = React.useState<Skill>(new Skill(Skills.Observation, 0))
    const [comtech] = React.useState<Skill>(new Skill(Skills.Comtech, 0))
    const [survival] = React.useState<Skill>(new Skill(Skills.Survival, 0))

    const [command] = React.useState<Skill>(new Skill(Skills.Command, 0))
    const [manipulation] = React.useState<Skill>(new Skill(Skills.Manipulation, 0))
    const [medicalAid] = React.useState<Skill>(new Skill(Skills.MedicalAid, 0))

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
        if (career) setMaxValuesByCareer(career)
    }, [career])

    useEffect(() => {
        if (careerSelected && career) {
            resetSkills()
            setRemainingPoints(10)
        }
    }, [career]);

    const resetSkills = () => {
        heavyMachinery.resetValue();
        endurance.resetValue();
        closeCombat.resetValue();
        mobility.resetValue();
        rangedCombat.resetValue();
        piloting.resetValue();
        observation.resetValue();
        comtech.resetValue();
        survival.resetValue();
        command.resetValue();
        manipulation.resetValue();
        medicalAid.resetValue();
    }

    const setMaxValuesByCareer = (career: Career) => {
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

        for (const skill of career.getSkills()) {
            switch (skill) {
                case Skills.HeavyMachinery:
                    setMaxHeavyMachinery(3)
                    break;
                case Skills.Endurance:
                    setMaxEndurance(3)
                    break;
                case Skills.CloseCombat:
                    setMaxCloseCombat(3)
                    break;
                case Skills.Mobility:
                    setMaxMobility(3)
                    break;
                case Skills.RangedCombat:
                    setMaxRangedCombat(3)
                    break;
                case Skills.Piloting:
                    setMaxPiloting(3)
                    break;
                case Skills.Observation:
                    setMaxObservation(3)
                    break;
                case Skills.Comtech:
                    setMaxComtech(3)
                    break;
                case Skills.Survival:
                    setMaxSurvival(3)
                    break;
                case Skills.Command:
                    setMaxCommand(3)
                    break;
                case Skills.Manipulation:
                    setMaxManipulation(3)
                    break;
                case Skills.MedicalAid:
                    setMaxMedicalAid(3)
                    break;
            }
        }
    }

    useEffect(() => {
        onSkillsChange(new SkillsList(heavyMachinery, endurance, closeCombat, mobility, rangedCombat, piloting, observation, comtech, survival, command, manipulation, medicalAid))
    }, [
        heavyMachinery.getValue(),
        endurance.getValue(),
        closeCombat.getValue(),
        mobility.getValue(),
        rangedCombat.getValue(),
        piloting.getValue(),
        observation.getValue(),
        comtech.getValue(),
        survival.getValue(),
        command.getValue(),
        manipulation.getValue(),
        medicalAid.getValue(),
    ])

    const handleIncrement = (skill: Skills) => {
        if (remainingPoints > 0) {
            switch (skill) {
                case Skills.HeavyMachinery:
                    if (heavyMachinery.getValue() < maxHeavyMachinery) {
                        heavyMachinery.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case Skills.Endurance:
                    if (endurance.getValue() < maxEndurance) {
                        endurance.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case Skills.CloseCombat:
                    if (closeCombat.getValue() < maxCloseCombat) {
                        closeCombat.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case Skills.Mobility:
                    if (mobility.getValue() < maxMobility) {
                        mobility.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case Skills.RangedCombat:
                    if (rangedCombat.getValue() < maxRangedCombat) {
                        rangedCombat.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case Skills.Piloting:
                    if (piloting.getValue() < maxPiloting) {
                        piloting.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case Skills.Observation:
                    if (observation.getValue() < maxObservation) {
                        observation.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case Skills.Comtech:
                    if (comtech.getValue() < maxComtech) {
                        comtech.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case Skills.Survival:
                    if (survival.getValue() < maxSurvival) {
                        survival.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case Skills.Command:
                    if (command.getValue() < maxCommand) {
                        command.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case Skills.Manipulation:
                    if (manipulation.getValue() < maxManipulation) {
                        manipulation.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
                case Skills.MedicalAid:
                    if (medicalAid.getValue() < maxMedicalAid) {
                        medicalAid.incrementValue();
                        setRemainingPoints(remainingPoints - 1)
                    }
                    break;
            }
        }
    }

    const handleDecrement = (skill: Skills) => {
        switch (skill) {
            case Skills.HeavyMachinery:
                if (heavyMachinery.getValue() > 0) {
                    heavyMachinery.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case Skills.Endurance:
                if (endurance.getValue() > 0) {
                    endurance.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case Skills.CloseCombat:
                if (closeCombat.getValue() > 0) {
                    closeCombat.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case Skills.Mobility:
                if (mobility.getValue() > 0) {
                    mobility.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case Skills.RangedCombat:
                if (rangedCombat.getValue() > 0) {
                    rangedCombat.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case Skills.Piloting:
                if (piloting.getValue() > 0) {
                    piloting.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case Skills.Observation:
                if (observation.getValue() > 0) {
                    observation.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case Skills.Comtech:
                if (comtech.getValue() > 0) {
                    comtech.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case Skills.Survival:
                if (survival.getValue() > 0) {
                    survival.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case Skills.Command:
                if (command.getValue() > 0) {
                    command.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case Skills.Manipulation:
                if (manipulation.getValue() > 0) {
                    manipulation.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
            case Skills.MedicalAid:
                if (medicalAid.getValue() > 0) {
                    medicalAid.decrementValue();
                    setRemainingPoints(remainingPoints + 1)
                }
                break;
        }
    }

    return (
        <>
            {careerSelected && career ? (
                <div className={"flex flex-col gap-6"}>
                    <Title text={"Compétences"} />
                    <div className={"skills flex flex-row gap-12"}>
                        <div className={"flex flex-col gap-4"}>
                            <p className={"ability"}>FORCE</p>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${heavyMachinery.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{heavyMachinery.getValue()}</span>
                                <span className={`ml-1.5 ${maxHeavyMachinery === 3 ? "text-amber-300 underline" : "text-white"}`}>{`Machines lourdes`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.HeavyMachinery)}
                                    disabled={heavyMachinery.getValue() >= maxHeavyMachinery || remainingPoints <= 0}
                                    className={`text-white ${heavyMachinery.getValue() >= maxHeavyMachinery || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.HeavyMachinery)}
                                    disabled={heavyMachinery.getValue() <= 0}
                                    className={`text-white ${heavyMachinery.getValue() <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${endurance.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{endurance.getValue()}</span>
                                <span className={`ml-1.5 ${maxEndurance === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Endurances`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.Endurance)}
                                    disabled={endurance.getValue() >= maxEndurance || remainingPoints <= 0}
                                    className={`text-white ${endurance.getValue() >= maxEndurance || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.Endurance)}
                                    disabled={endurance.getValue() <= 0}
                                    className={`text-white ${endurance.getValue() <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${closeCombat.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{closeCombat.getValue()}</span>
                                <span className={`ml-1.5 ${maxCloseCombat === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Combat rapproché`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.CloseCombat)}
                                    disabled={closeCombat.getValue() >= maxCloseCombat || remainingPoints <= 0}
                                    className={`text-white ${closeCombat.getValue() >= maxCloseCombat || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.CloseCombat)}
                                    disabled={closeCombat.getValue() <= 0}
                                    className={`text-white ${closeCombat.getValue() <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <p className={"ability"}>AGILITÉ</p>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${mobility.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{mobility.getValue()}</span>
                                <span className={`ml-1.5 ${maxMobility === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Mobilité`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.Mobility)}
                                    disabled={mobility.getValue() >= maxMobility || remainingPoints <= 0}
                                    className={`text-white ${mobility.getValue() >= maxMobility || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.Mobility)}
                                    disabled={mobility.getValue() <= 0}
                                    className={`text-white ${mobility.getValue() <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${rangedCombat.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{rangedCombat.getValue()}</span>
                                <span className={`ml-1.5 ${maxRangedCombat === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Combat à distance`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.RangedCombat)}
                                    disabled={rangedCombat.getValue() >= maxRangedCombat || remainingPoints <= 0}
                                    className={`text-white ${rangedCombat.getValue() >= maxRangedCombat || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.RangedCombat)}
                                    disabled={rangedCombat.getValue() <= 0}
                                    className={`text-white ${rangedCombat.getValue() <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${piloting.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{piloting.getValue()}</span>
                                <span className={`ml-1.5 ${maxPiloting === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Pilotage`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.Piloting)}
                                    disabled={piloting.getValue() >= maxPiloting || remainingPoints <= 0}
                                    className={`text-white ${piloting.getValue() >= maxPiloting || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.Piloting)}
                                    disabled={piloting.getValue() <= 0}
                                    className={`text-white ${piloting.getValue() <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-4"}>
                            <p className={"ability"}>ESPRIT</p>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${observation.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{observation.getValue()}</span>
                                <span className={`ml-1.5 ${maxObservation === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Observation`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.Observation)}
                                    disabled={observation.getValue() >= maxObservation || remainingPoints <= 0}
                                    className={`text-white ${observation.getValue() >= maxObservation || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.Observation)}
                                    disabled={observation.getValue() <= 0}
                                    className={`text-white ${observation.getValue() <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${comtech.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{comtech.getValue()}</span>
                                <span className={`ml-1.5 ${maxComtech === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Comtech`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.Comtech)}
                                    disabled={comtech.getValue() >= maxComtech || remainingPoints <= 0}
                                    className={`text-white ${comtech.getValue() >= maxComtech || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.Comtech)}
                                    disabled={comtech.getValue() <= 0}
                                    className={`text-white ${comtech.getValue() <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${survival.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{survival.getValue()}</span>
                                <span className={`ml-1.5 ${maxSurvival === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Survie`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.Survival)}
                                    disabled={survival.getValue() >= maxSurvival || remainingPoints <= 0}
                                    className={`text-white ${survival.getValue() >= maxSurvival || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.Survival)}
                                    disabled={survival.getValue() <= 0}
                                    className={`text-white ${survival.getValue()<= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-4 "}>
                            <p className={"ability"}>EMPATHIE</p>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${command.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{command.getValue()}</span>
                                <span className={`ml-1.5 ${maxCommand === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Commandement`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.Command)}
                                    disabled={command.getValue() >= maxCommand || remainingPoints <= 0}
                                    className={`text-white ${command.getValue() >= maxCommand || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.Command)}
                                    disabled={command.getValue() <= 0}
                                    className={`text-white ${command.getValue() <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${manipulation.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{manipulation.getValue()}</span>
                                <span className={`ml-1.5 ${maxManipulation === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Manipulation`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.Manipulation)}
                                    disabled={manipulation.getValue() >= maxManipulation || remainingPoints <= 0}
                                    className={`text-white ${manipulation.getValue() >= maxManipulation || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.Manipulation)}
                                    disabled={manipulation.getValue() <= 0}
                                    className={`text-white ${manipulation.getValue() <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                            <div className={"flex flex-row items-center"}>
                                <span className={`mr-1 ${medicalAid.getValue() === 3 ? "text-amber-300" : "text-white"}`}>{medicalAid.getValue()}</span>
                                <span className={`ml-1.5 ${maxMedicalAid === 3 ? "text-amber-300 underline" : "text-white"}`}>{` Soins médicaux`}</span>
                                <IconButton
                                    onClick={() => handleIncrement(Skills.MedicalAid)}
                                    disabled={medicalAid.getValue() >= maxMedicalAid || remainingPoints <= 0}
                                    className={`text-white ${medicalAid.getValue() >= maxMedicalAid || remainingPoints <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Add className="text-white" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleDecrement(Skills.MedicalAid)}
                                    disabled={medicalAid.getValue() <= 0}
                                    className={`text-white ${medicalAid.getValue() <= 0 ? "opacity-50" : ""}`}
                                >
                                    <Remove className="text-white" />
                                </IconButton>
                            </div>
                        </div>
                        <div>
                            <p className={"text-white text-base"}>Points restants : {remainingPoints}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}