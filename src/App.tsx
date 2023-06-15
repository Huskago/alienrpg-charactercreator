import { useState } from "react"
import { Hero } from "./components/Hero.tsx"
import { Career } from "./components/Career.tsx"
import { Attributs } from "./components/Attributs.tsx"
import { Skills } from "./components/Skills.tsx";
import { SpaceBackground } from "./components/SpaceBackground.tsx";
import { Talent } from "./components/Talent.tsx";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
    const [career, setCareer] = useState("")
    const [careerSelected, setCareerSelected] = useState(false)
    const [attributs, setAttributs] = useState({
        force: 2,
        agilite: 2,
        esprit: 2,
        empathie: 2,
    })
    const [skills, setSkills] = useState({
        heavyMachinery: 0,
        endurance: 0,
        closeCombat: 0,
        mobility: 0,
        rangedCombat: 0,
        piloting: 0,
        observation: 0,
        comtech: 0,
        survival: 0,
        command: 0,
        manipulation: 0,
        medicalAid: 0,
    })
    const [talent, setTalent] = useState("")

    const handleCareerChange = (selectedCareer: string) => {
        if (selectedCareer) {
            setCareer(selectedCareer);
            setCareerSelected(true);
        }
    };

    const handleAttributsChange = (attributs: {
        force: number,
        agilite: number,
        esprit: number,
        empathie: number,
    }) => {
        setAttributs(attributs)
    }

    const handleSkillsChange = (skills: {
        heavyMachinery: number,
        endurance  : number,
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
    }) => {
        setSkills(skills)
    }

    const handleTalentChange = (selectedTalent: string) => {
        if (selectedTalent) {
            setTalent(selectedTalent);
        }
    }

    return (
    <>
        <ThemeProvider>
            <SpaceBackground />
            <div className={"relative z-10"}>
                <Hero />
                <div className={"ml-36 pl-16 py-6 mt-28 border-l-4 border-primary flex flex-col gap-16"}>
                    <Career onCareerSelected={handleCareerChange} />
                    <Attributs onAttributsChange={handleAttributsChange} career={career} careerSelected={careerSelected} />
                    <Skills onSkillsChange={handleSkillsChange} career={career} careerSelected={careerSelected} />
                    {careerSelected
                        ? <Talent onTalentSelected={handleTalentChange} career={career} careerSelected={careerSelected} />
                        : <></>}
                </div>
                <p className={"text-white"}>Carrière : {career}</p>
                <p className={"text-white"}>Attributs : {JSON.stringify(attributs)}</p>
                <p className={"text-white"}>Compétences : {JSON.stringify(skills)}</p>
                <p className={"text-white"}>Talent : {talent}</p>
            </div>
        </ThemeProvider>
    </>
  )
}

export default App