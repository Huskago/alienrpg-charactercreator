import { useState} from "react"
import { NavBar } from "./components/Navbar.tsx"
import { Hero } from "./components/Hero.tsx"
import { Career } from "./components/Career.tsx"
import { Attributs } from "./components/Attributs.tsx"
import { Skills } from "./components/Skills.tsx";
import { Talent } from "./components/Talent.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import { PersonalInfo } from "./components/PersonalInfo.tsx";
import { SpaceBackground } from "./components/SpaceBackground.tsx";
import { Equipments } from "./components/Equipments.tsx";
import { Footer } from "./components/Footer.tsx";
import { CreateSheet } from "./components/CreateSheet.tsx";

export const App = () => {
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
    const [selectedEquipments, setSelectedEquipments] = useState("");
    const [personalInfo, setPersonalInfo] = useState<{
        name: string,
        age: string,
        history: string,
        job: string,
        personality: string,
        objective: string,
        buddy: string,
        rival: string,
        image: File | null,
        appearance: string,
    }>({
        name: "",
        age: "",
        history: "",
        job: "",
        personality: "",
        objective: "",
        buddy: "",
        rival: "",
        image: null,
        appearance: "",
    });


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

    const handleEquipmentsChange = (selectedEquipments: string) => {
        if (selectedEquipments) {
            setSelectedEquipments(selectedEquipments);
        }
    }

    const handlePersonalInfoChange = (personalInfo: {
        name: string,
        age: string,
        history: string,
        job: string,
        personality: string,
        objective: string,
        buddy: string,
        rival: string,
        image: File | null,
        appearance: string,
    }) => {
        setPersonalInfo(personalInfo)
    }

    return (
    <>
        <ThemeProvider>
            <SpaceBackground />
            <div className={"relative z-10"}>
                <NavBar />
                <Hero />
                <div className={"ml-36 pl-16 py-6 mt-28 border-l-4 border-primary flex flex-col gap-16"}>
                    <Career onCareerSelected={handleCareerChange} />
                    <Attributs onAttributsChange={handleAttributsChange} career={career} careerSelected={careerSelected} />
                    <Skills onSkillsChange={handleSkillsChange} career={career} careerSelected={careerSelected} />
                    <Talent onTalentSelected={handleTalentChange} career={career} careerSelected={careerSelected} />
                    <Equipments onEquipmentsSelected={handleEquipmentsChange} career={career} careerSelected={careerSelected} />
                    <PersonalInfo onPersonalInfoChange={handlePersonalInfoChange} careerSelected={careerSelected} />
                    <CreateSheet careerSelected={careerSelected} character={{ career: career, attributs: attributs, skills: skills, talent: talent, selectedEquipments: selectedEquipments, personalInfo: personalInfo }} />
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    </>
  )
}