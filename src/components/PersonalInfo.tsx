import React, { useEffect, useState } from "react";
import { Title } from "./ui/Title.tsx"
import { CSSTransition } from "react-transition-group";
import { Card, Input, Textarea } from "@material-tailwind/react";
import resizer from 'react-image-file-resizer';

interface PersonalInfoProps {
    onPersonalInfoChange: (personalInfo: {
        name: string,
        age: string,
        history: string,
        job: string,
        personality: string,
        objective: string,
        buddy: string,
        rival: string,
        image: File | null,
    }) => void;
    careerSelected: boolean;
}

const resizeImage = (file: File) => {
    return new Promise((resolve) => {
        resizer.imageFileResizer(
            file,
            300,
            300,
            'PNG',
            100,
            0,
            (blob) => {
                resolve(blob);
            },
            'blob'
        )
    })
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
    onPersonalInfoChange,
    careerSelected,
    }) => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [history, setHistory] = useState<string>("");
    const [job, setJob] = useState<string>("");
    const [personality, setPersonality] = useState<string>("");
    const [objective, setObjective] = useState<string>("");
    const [buddy, setBuddy] = useState<string>("");
    const [rival, setRival] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [resizedImageUrl, setResizedImageUrl] = useState<string | null>(null);

    const handlePersonalInfoChange = async () => {
        let resizedImage: File | null = null;

        if (image && image instanceof File) {
            const resizedFile = await resizeImage(image as File);
            resizedImage = resizedFile as File;

            const resizedImageUrl = URL.createObjectURL(resizedImage);
            setResizedImageUrl(resizedImageUrl);
        }

        onPersonalInfoChange({
            name: name,
            age: age,
            history: history,
            job: job,
            personality: personality,
            objective: objective,
            buddy: buddy,
            rival: rival,
            image: resizedImage,
        });
    };




    useEffect(() => {
        handlePersonalInfoChange().then(r => r)
    }, [name, age, history, job, personality, objective, buddy, rival, image])

    return (
        <>
            <CSSTransition in={careerSelected} timeout={300} classNames="fade" unmountOnExit>
                <div className={"flex flex-col gap-6"}>
                    <Title text={"Informations personnelles"} />
                    <div className={"flex flex-row gap-6"}>
                        <Card color={"transparent"} shadow={false}>
                            <form>
                                <div className={"flex flex-col gap-4"}>
                                    <Input size={"lg"} label={"Name"} onChange={(e) => setName(e.target.value)} />
                                    <Input size={"lg"} label={"Age"} onChange={(e) => setAge(e.target.value)} />
                                    <Textarea className={"w-96 h-40"} size={"lg"} label={"Histoire"} onChange={(e) => setHistory(e.target.value)} />
                                    <Input size={"lg"} label={"Métier"} onChange={(e) => setJob(e.target.value)} />
                                    <Input size={"lg"} label={"Personnalité"} onChange={(e) => setPersonality(e.target.value)} />
                                    <Textarea className={"h-32"} size={"lg"} label={"Objectif"} onChange={(e) => setObjective(e.target.value)} />
                                    <Input size={"lg"} label={"Buddy"} onChange={(e) => setBuddy(e.target.value)} />
                                    <Input size={"lg"} label={"Rival"} onChange={(e) => setRival(e.target.value)} />
                                </div>
                            </form>
                        </Card>
                        <Card color={"transparent"} shadow={false}>
                            <form>
                                <div className={"flex flex-col gap-1.5"}>
                                    <Input size={"lg"} type={"file"} label={"Image"} onChange={(e) => setImage(e.target.files![0])} />
                                    {resizedImageUrl && (
                                        <div className={"flex flex-col gap-1.5"}>
                                            <img src={resizedImageUrl} alt={"preview"} />
                                            <p>{image?.name}</p>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}