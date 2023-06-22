import { useState} from "react"
import { NavBar } from "./components/Navbar.tsx"
import { Hero } from "./components/Hero.tsx"
import { SelectCareer } from "./components/SelectCareer.tsx"
import { SelectAttributs } from "./components/SelectAttributs.tsx"
import { SelectSkills } from "./components/SelectSkills.tsx";
import { SelectTalent } from "./components/SelectTalent.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import { PersonalInfo } from "./components/PersonalInfo.tsx";
import { SpaceBackground } from "./components/SpaceBackground.tsx";
import { SelectEquipments } from "./components/SelectEquipments.tsx";
import { Footer } from "./components/Footer.tsx";
import { CreateSheet } from "./components/CreateSheet.tsx";
import { Career } from "./objets/Career.tsx";
import {AttributesList} from "./objets/Attributes.tsx";

export const App = () => {
    // Career object
    const [careerSelected, setCareerSelected] = useState(false)
    const [career, setCareer] = useState<Career>();
    const [attributs, setAttributs] = useState<AttributesList>();
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


    const handleCareerChange = (selectedCareer: Career) => {
        if (selectedCareer) {
            setCareer(selectedCareer);
            setCareerSelected(true);
        }
    };

    const handleAttributsChange = (attributs: AttributesList) => {
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
                    <p className={"text-white"}>Carrière : {career?.name}</p>
                    <p className={"text-white"}> Equipement : {selectedEquipments}</p>
                    <SelectCareer onCareerSelected={handleCareerChange} />
                    <SelectAttributs onAttributsChange={handleAttributsChange} career={career} careerSelected={careerSelected} />
                    <SelectSkills onSkillsChange={handleSkillsChange} career={career} careerSelected={careerSelected} />
                    <SelectTalent onTalentSelected={handleTalentChange} career={career} careerSelected={careerSelected} />
                    <SelectEquipments onEquipmentsSelected={handleEquipmentsChange} career={career} careerSelected={careerSelected} />
                    <PersonalInfo onPersonalInfoChange={handlePersonalInfoChange} careerSelected={careerSelected} />
                    <CreateSheet careerSelected={careerSelected} character={{ career: career, attributs: attributs, skills: skills, talent: talent, selectedEquipments: selectedEquipments, personalInfo: personalInfo }} />
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    </>
  )
}