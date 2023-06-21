import { createCanvas, loadImage } from "canvas";

// character: {
//         career: string;
//         attributs: {
//             force: number;
//             agilite: number;
//             esprit: number;
//             empathie: number;
//         }
//         skills: {
//             heavyMachinery: number;
//             endurance: number;
//             closeCombat: number;
//             mobility: number;
//             rangedCombat: number;
//             piloting: number;
//             observation: number;
//             comtech: number;
//             survival: number;
//             command: number;
//             manipulation: number;
//             medicalAid: number;
//         }
//         talent: string;
//         selectedEquipments: string;
//         personalInfo: {
//             name: string;
//             age: string;
//             history: string;
//             job: string;
//             personality: string;
//             objective: string;
//             buddy: string;
//             rival: string;
//             image: File | null;
//             appearance: string;
//         }
//     }

interface Character {
    career: string;
    attributs: {
        force: number;
        agilite: number;
        esprit: number;
        empathie: number;
    }
    skills: {
        heavyMachinery: number;
        endurance: number;
        closeCombat: number;
        mobility: number;
        rangedCombat: number;
        piloting: number;
        observation: number;
        comtech: number;
        survival: number;
        command: number;
        manipulation: number;
        medicalAid: number;
    }
    talent: string;
    selectedEquipments: string;
    personalInfo: {
        name: string;
        age: string;
        history: string;
        job: string;
        personality: string;
        objective: string;
        buddy: string;
        rival: string;
        image: File | null;
        appearance: string;
    }
}

export const generatePNG = async (character: Character) => {
    try {
        const image = await loadImage("/sheets/fiche_complete.png")
        const canvas = createCanvas(image.width, image.height)
        const ctx = canvas.getContext("2d")

        ctx.drawImage(image, 0, 0)


        // Career
        ctx.font = "bold 24px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.career, canvas.width/2, 290)


        // Attributes

        // Force
        ctx.font = "bold 46px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.attributs.force.toString(), canvas.width/2, canvas.height/2 - 130)

        // Agilité
        ctx.font = "bold 46px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.attributs.agilite.toString(), canvas.width/2 - 148, canvas.height/2 + 16)

        // Esprit
        ctx.font = "bold 46px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.attributs.esprit.toString(), canvas.width/2 + 148, canvas.height/2 + 16)

        // Empathie
        ctx.font = "bold 46px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.attributs.empathie.toString(), canvas.width/2, canvas.height/2 + 163)


        // Skills

        // Heavy Machinery
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.heavyMachinery.toString(), canvas.width/3 + 40, canvas.height/3 + 73)

        // Endurance
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.endurance.toString(), canvas.width - (canvas.width/3 + 44), canvas.height/3 + 73)

        // Close Combat
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.closeCombat.toString(), canvas.width/2, canvas.height/3 - 32)

        // Mobility
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.mobility.toString(), canvas.width/4 - 34, canvas.height/2 + 33)

        // Ranged Combat
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.rangedCombat.toString(), canvas.width/4 - 59, canvas.height/2 - 83)

        // Piloting
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.piloting.toString(), canvas.width/4 + 76, canvas.height/2 + 108)

        // Observation
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.observation.toString(), canvas.width - (canvas.width/4 - 59), canvas.height/2 - 83)

        // Comtech
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.comtech.toString(), canvas.width - (canvas.width/4 - 34), canvas.height/2 + 33)

        // Survival
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.survival.toString(), canvas.width - (canvas.width/4 + 76), canvas.height/2 + 108)

        // Command
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.command.toString(), canvas.width/3 - 20, canvas.height - (canvas.height/3 + 52))

        // Manipulation
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.manipulation.toString(), canvas.width/2, canvas.height - (canvas.height/3 - 57))

        // Medical Aid
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.skills.medicalAid.toString(), canvas.width - (canvas.width/3 - 17), canvas.height - (canvas.height/3 + 52))


        // Name
        ctx.font = "bold 26px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(character.personalInfo.name, canvas.width/2, 200)


        const modifiedImageDataUrl = await canvas.toDataURL("image/png")

        return modifiedImageDataUrl
    } catch (error) {
        throw new Error(`Error while generating PNG: ${error}`)
    }
}