import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader, Spinner,
    Typography
} from "@material-tailwind/react";
import {Fragment, useState} from "react";
import {generatePNG} from "../utils/GenerateSheet.tsx";

interface CreateSheetProps {
    careerSelected: boolean;
    character: {
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
}

export const CreateSheet: React.FC<CreateSheetProps> = ({
    careerSelected,
    character
}) => {
    const [sheetOpen, setSheetOpen] = useState(false);
    const [simpleSheetOpen, setSimpleSheetOpen] = useState(false);
    const [completeSheetOpen, setCompleteSheetOpen] = useState(false);
    const [pngCompleteSheetOpen, setPngCompleteSheetOpen] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [sheetImageURL, setSheetImageURL] = useState("");

    const handleSheetOpen = () => setSheetOpen(!sheetOpen);
    const handleSimpleSheetOpen = () => setSimpleSheetOpen(!simpleSheetOpen);
    const handleCompleteSheetOpen = () => setCompleteSheetOpen(!completeSheetOpen);
    const handlePngCompleteSheetOpen = () => setPngCompleteSheetOpen(!pngCompleteSheetOpen);

    const handleGenerateCompletePNG = async () => {
        try {
            setIsLoading(true)
            const imageUrl = await generatePNG(character)
            // setTimeout(() => {
                setIsLoading(false)
            // }, 1000)

            setSheetImageURL(imageUrl)
        } catch (error) {
            console.error('Error while generating PNG: ', error)
            setIsLoading(false)
        }
    }

    const handleDownloadImage = () => {
        if (sheetImageURL) {
            const link = document.createElement('a')
            link.href = sheetImageURL
            link.download = 'fiche.png'
            link.click()
        }
    }

    return (
        <>
            {careerSelected ? (
                <Fragment>
                    <div className={"flex flex-row gap-5"}>
                        <Button color={"blue-gray"} variant={"gradient"} size={"lg"} onClick={
                            () => {
                                handleSheetOpen();
                            }
                        }>Générer la fiche</Button>
                    </div>
                    <Dialog open={sheetOpen} handler={handleSheetOpen}>
                        <DialogHeader>Quelle fiche voulez-vous générer ?</DialogHeader>
                        <DialogBody divider>
                            Veuillez choisir une fiche à générer. Il est possible de générer une fiche de personnage simplifiée pour voir la base du personnage, une fiche plus rp.<br/>
                            Sinon vous pouvez générer une fiche de personnage complète, avec toutes les informations, qui est ce qui est utilisé pour jouer.
                            <div className={"flex flex-row justify-between"}>
                                <div className={"flex flex-col"}>
                                    <Typography className={"font-bold"} color={"blue-gray"}>Fiche simplifiée (pas encore dispo)</Typography>
                                </div>
                                <div className={"flex flex-col"}>
                                    <Typography className={"font-bold"} color={"blue-gray"}>Fiche complète</Typography>
                                    <img alt={"Fiche complete"} src={"./sheets/fiche_complete.png"} className={"w-96"}/>
                                </div>
                            </div>
                        </DialogBody>
                        <DialogFooter>
                            <Button className={"mr-auto"} color={"red"} variant={"text"} onClick={handleSheetOpen}>
                                Annuler
                            </Button>
                            <Button disabled className={"mr-4"} color={"light-green"} variant={"gradient"}>
                                Fiche simplifiée
                            </Button>
                            <Button className={"mr-4"} color={"blue"} variant={"gradient"} onClick={() => {
                                    handleCompleteSheetOpen();
                                    handleSheetOpen();
                                }
                            }>
                                Fiche complète
                            </Button>
                        </DialogFooter>
                    </Dialog>
                    {/*Choice either png or pdf*/}
                    <Dialog open={completeSheetOpen} handler={handleCompleteSheetOpen}>
                        <DialogHeader>Quel format voulez-vous ?</DialogHeader>
                        <DialogBody divider>
                            Veuillez choisir le format de la fiche à générer. Il est possible de générer une fiche de personnage complète en format PDF ou PNG.
                        </DialogBody>
                        <DialogFooter>
                            <Button className={"mr-auto"} color={"red"} variant={"text"} onClick={() => {
                                handleSheetOpen();
                                handleCompleteSheetOpen();
                            }}>
                                Annuler
                            </Button>
                            <Button disabled className={"mr-4"} color={"light-green"} variant={"gradient"}>
                                Fiche complète PDF
                            </Button>
                            <Button className={"mr-4"} color={"blue"} variant={"gradient"} onClick={async () => {
                                handleCompleteSheetOpen()
                                handlePngCompleteSheetOpen()
                                await handleGenerateCompletePNG()
                            }}>
                                Fiche complète PNG
                            </Button>
                        </DialogFooter>
                    </Dialog>
                    <Dialog open={pngCompleteSheetOpen} handler={handlePngCompleteSheetOpen}>
                        <DialogHeader>Voici votre fiche</DialogHeader>
                        <DialogBody divider>
                            { isLoading ? (
                                    <Spinner />
                                ) : (
                                    <img alt={"Votre fiche"} src={sheetImageURL} className={"w-full"}/>
                                )
                            }
                        </DialogBody>
                        <DialogFooter>
                            <Button className={"mr-auto"} color={"red"} variant={"text"} onClick={() => {
                                handleCompleteSheetOpen();
                                handlePngCompleteSheetOpen();
                            }}>
                                Annuler
                            </Button>
                            <Button className={"mr-4"} color={"blue"} variant={"gradient"} onClick={handleDownloadImage}>
                                Télécharger
                            </Button>
                        </DialogFooter>
                    </Dialog>
                </Fragment>
            ) : (
                ""
            )}
        </>
    )
}