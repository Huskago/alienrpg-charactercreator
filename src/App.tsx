import { useState } from "react"
import { SpaceBackground } from "./components/SpaceBackground.tsx";
import { NavBar } from "./components/Navbar.tsx"
import { Hero } from "./components/Hero.tsx"
import { Career } from "./objets/Career.tsx";
import { SelectCareer } from "./components/SelectCareer.tsx"
import { AttributesList } from "./objets/Attributes.tsx";
import { SelectAttributs } from "./components/SelectAttributs.tsx"
import { SkillsList } from "./objets/Skills.tsx";
import { SelectSkills } from "./components/SelectSkills.tsx";
import { Talent } from "./objets/Talents.tsx";
import { SelectTalent } from "./components/SelectTalent.tsx";
import { Equipment } from "./objets/Equipments.tsx";
import { SelectEquipments } from "./components/SelectEquipments.tsx";
import { PersonalInfo } from "./objets/PersonalInfo.tsx";
import { PersonalInfoForm } from "./components/PersonalInfoForm.tsx";
import { CreateSheet } from "./components/CreateSheet.tsx";
import { Footer } from "./components/Footer.tsx";

export const App = () => {
    // Career object
    const [careerSelected, setCareerSelected] = useState(false);
    const [career, setCareer] = useState<Career>();
    const [attributs, setAttributs] = useState<AttributesList>();
    const [skills, setSkills] = useState<SkillsList>();
    const [talent, setTalent] = useState<Talent>();
    const [equipments, setEquipments] = useState<Equipment[]>();
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
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

        resetWhenCareerChange();
    };

    const resetWhenCareerChange = () => {
        setAttributs(undefined);
        setSkills(undefined);
        setTalent(undefined);
        setEquipments([]);
    }

    const handleAttributsChange = (attributs: AttributesList) => {
        setAttributs(attributs)
    }

    const handleSkillsChange = (skills: SkillsList) => {
        setSkills(skills)
    }

    const handleTalentChange = (selectedTalent: Talent | undefined) => {
        if (selectedTalent) {
            setTalent(selectedTalent);
        }
    }

    const handleEquipmentsChange = (selectedEquipments: Equipment[]) => {
        setEquipments(selectedEquipments);
    }

    const handlePersonalInfoChange = (personalInfo: PersonalInfo) => {
        setPersonalInfo(personalInfo)
    }

    return (
    <>
        <SpaceBackground starSpeed={0.25} starSize={2} />
        <div className={"relative z-10"}>
            <NavBar />
            <Hero />
            <div className={"ml-36 pl-16 py-6 mt-28 border-l-4 border-primary flex flex-col gap-16"}>
                <SelectCareer onCareerSelected={handleCareerChange} />
                <SelectAttributs onAttributsChange={handleAttributsChange} career={career} careerSelected={careerSelected} />
                <SelectSkills onSkillsChange={handleSkillsChange} career={career} careerSelected={careerSelected} />
                <SelectTalent onTalentSelected={handleTalentChange} career={career} careerSelected={careerSelected} />
                <SelectEquipments onEquipmentsSelected={handleEquipmentsChange} career={career} careerSelected={careerSelected} />
                <PersonalInfoForm onPersonalInfoChange={handlePersonalInfoChange} careerSelected={careerSelected} />
                <CreateSheet careerSelected={careerSelected} character={{ career: career, attributs: attributs, skills: skills, talent: talent, equipments: equipments, personalInfo: personalInfo }} />
            </div>
            <Footer />
        </div>
    </>
  )
}