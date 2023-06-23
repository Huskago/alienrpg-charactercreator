import { createCanvas, loadImage } from "canvas";
import { Character } from "../components/CreateSheet.tsx";

const wrapText = function(ctx, text, x, y, maxWidth, lineHeight) {
    let words = text.split(" ")
    let line = ""
    let testLine = ""
    let lineArray= []

    for (var n = 0; n < words.length; n++) {
        testLine += `${words[n]} `
        let metrics = ctx.measureText(testLine)
        let testWidth = metrics.width
        if (testWidth > maxWidth && n > 0) {
            lineArray.push([line, x, y])
            y += lineHeight
            line = `${words[n]} `
            testLine = `${words[n]} `
        }
        else {
            line += `${words[n]} `
        }
        if (n === words.length - 1) {
            lineArray.push([line, x, y])
        }
    }

    return lineArray
}

export const generatePNG = async (character: Character) => {
    const career = character.career?.getName() ?? ""
    const attributs = {
        force: character.attributs?.force.getValue().toString() ?? "2",
        agilite: character.attributs?.agilite.getValue().toString() ?? "2",
        wits: character.attributs?.wits.getValue().toString() ?? "2",
        empathy: character.attributs?.empathy.getValue().toString() ?? "2",
    }

    const skills = {
        heavyMachinery: character.skills?.heavyMachinery.getValue().toString() ?? "0",
        endurance: character.skills?.endurance.getValue().toString() ?? "0",
        closeCombat: character.skills?.closeCombat.getValue().toString() ?? "0",
        mobility: character.skills?.mobility.getValue().toString() ?? "0",
        rangedCombat: character.skills?.rangedCombat.getValue().toString() ?? "0",
        piloting: character.skills?.piloting.getValue().toString() ?? "0",
        observation: character.skills?.observation.getValue().toString() ?? "0",
        comtech: character.skills?.comtech.getValue().toString() ?? "0",
        survival: character.skills?.survival.getValue().toString() ?? "0",
        command: character.skills?.command.getValue().toString() ?? "0",
        manipulation: character.skills?.manipulation.getValue().toString() ?? "0",
        medicalAid: character.skills?.medicalAid.getValue().toString() ?? "0",
    }

    const talent = character.talent?.name ?? ""

    const equipment1 = character.equipments?.[0]?.name ?? ""
    const equipment2 = character.equipments?.[1]?.name ?? ""

    const name = character.personalInfo?.name ?? ""
    const objective = character.personalInfo?.objective ?? ""
    const buddy = character.personalInfo?.buddy ?? ""
    const rival = character.personalInfo?.rival ?? ""
    const appearance = character.personalInfo?.appearance ?? ""

    try {
        const image = await loadImage("/sheets/fiche_complete.png")
        const canvas = createCanvas(image.width, image.height)
        const ctx = canvas.getContext("2d")

        ctx.drawImage(image, 0, 0)

        // Career
        ctx.font = "bold 24px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(career, canvas.width/2, 290)


        // Attributes

        // Force
        ctx.font = "bold 46px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(attributs.force, canvas.width/2, canvas.height/2 - 130)

        // Agilité
        ctx.font = "bold 46px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(attributs.agilite, canvas.width/2 - 148, canvas.height/2 + 16)

        // Esprit
        ctx.font = "bold 46px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(attributs.wits, canvas.width/2 + 148, canvas.height/2 + 16)

        // Empathie
        ctx.font = "bold 46px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(attributs.empathy, canvas.width/2, canvas.height/2 + 163)


        // Skills

        // Heavy Machinery
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.heavyMachinery, canvas.width/3 + 40, canvas.height/3 + 73)

        // Endurance
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.endurance, canvas.width - (canvas.width/3 + 44), canvas.height/3 + 73)

        // Close Combat
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.closeCombat, canvas.width/2, canvas.height/3 - 32)

        // Mobility
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.mobility, canvas.width/4 - 34, canvas.height/2 + 33)

        // Ranged Combat
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.rangedCombat, canvas.width/4 - 59, canvas.height/2 - 83)

        // Piloting
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.piloting, canvas.width/4 + 76, canvas.height/2 + 108)

        // Observation
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.observation, canvas.width - (canvas.width/4 - 59), canvas.height/2 - 83)

        // Comtech
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.comtech, canvas.width - (canvas.width/4 - 34), canvas.height/2 + 33)

        // Survival
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.survival, canvas.width - (canvas.width/4 + 76), canvas.height/2 + 108)

        // Command
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.command, canvas.width/3 - 20, canvas.height - (canvas.height/3 + 52))

        // Manipulation
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.manipulation, canvas.width/2, canvas.height - (canvas.height/3 - 57))

        // Medical Aid
        ctx.font = "bold 34px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(skills.medicalAid, canvas.width - (canvas.width/3 - 17), canvas.height - (canvas.height/3 + 52))


        // Talent
        ctx.font = "bold 26px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "left"
        ctx.fillText(talent, canvas.width - (canvas.width / 4 + 138), 190)

        // Equipment
        if (character.equipments) {
            if (character.equipments.length === 2) {
                ctx.font = "bold 26px OCR A Std Regular"
                ctx.fillStyle = "black"
                ctx.textAlign = "left"
                ctx.fillText(equipment1, canvas.width - (canvas.width / 4 + 50), canvas.height - canvas.height / 3 + 8)
            }

            ctx.font = "bold 26px OCR A Std Regular"
            ctx.fillStyle = "black"
            ctx.textAlign = "left"
            ctx.fillText(equipment2, canvas.width - (canvas.width / 4 + 50), canvas.height - canvas.height / 3 - 40)
        }


        // Name
        ctx.font = "bold 26px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "center"
        ctx.fillText(name, canvas.width/2, 200)

        // Objective
        const wrappedTextObjective = wrapText(ctx, objective, 130, 170, 1000, 20)

        wrappedTextObjective.forEach(function(item) {
            ctx.font = "bold 16px OCR A Std Regular"
            ctx.fillStyle = "black"
            ctx.textAlign = "left"
            ctx.fillText(item[0], item[1], item[2])
        })

        // Rival
        ctx.font = "bold 24px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "left"
        ctx.fillText(rival, 280, 350)

        // Buddy
        ctx.font = "bold 24px OCR A Std Regular"
        ctx.fillStyle = "black"
        ctx.textAlign = "left"
        ctx.fillText(buddy, 220, 405)

        // Appearance
        const wrappedTextAppearance = wrapText(ctx, appearance, canvas.width/2, 365, 800, 20)

        wrappedTextAppearance.forEach(function(item) {
            ctx.font = "bold 20px OCR A Std Regular"
            ctx.fillStyle = "black"
            ctx.textAlign = "center"
            ctx.fillText(item[0], item[1], item[2])
        })

        return canvas.toDataURL("image/png");
    } catch (error) {
        throw new Error(`Error while generating PNG: ${error}`)
    }
}