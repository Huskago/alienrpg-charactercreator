import React, { useEffect, useState } from "react";
import { Title } from "./ui/Title.tsx";
import { TalentItem, getTalent } from "./utils/TalentsList.tsx";
import { Card, List, ListItem, Typography } from "@material-tailwind/react";

interface TalentProps {
    onTalentSelected: (selectedTalent: string) => void;
    career: string;
    careerSelected: boolean;
}

export const Talent: React.FC<TalentProps> = ({
  onTalentSelected,
  career,
  careerSelected,
}) => {
    const [, setTalent] = useState("");
    const [, setTalentSelected] = useState(false);
    const [data, setData] = useState<TalentItem[] | undefined>(undefined);
    const [selected, setSelected] = useState(0);
    const setSelectedItem = (value: number) => setSelected(value);
    const [prevCareer, setPrevCareer] = useState("");

    useEffect(() => {
        if (careerSelected && career) {
            setPrevCareer(career)
            const talentData = getTalent(career);
            if (talentData) {
                setData(talentData);
                setTalent(talentData[0].value);
            }
        }
    }, [career, careerSelected]);

    useEffect(() => {
        if (prevCareer !== career) {
            resetTalent();
            setPrevCareer("")
        }
    }, [career, prevCareer])

    const resetTalent = () => {
        setSelected(0)
        setTalent("");
        setTalentSelected(false);
        onTalentSelected(" ");
    }

    const handleTalentChange = (selectedTalent: string) => {
        if (selectedTalent) {
            setTalent(selectedTalent);
            setTalentSelected(true);
            onTalentSelected(selectedTalent);
        }
    };

    return (
        <>
            {careerSelected && career ? (
                <div>
                    <Title text="Talent" />
                    <Card className={"mt-5 w-[624px]"}>
                        <List>
                            {data && data.map(({ label, value, description }, index) => (
                                <ListItem key={value} onClick={() => {
                                    setSelectedItem(index + 1);
                                    handleTalentChange(value);
                                }} selected={selected === index + 1} >
                                    <div>
                                        <Typography variant={"paragraph"} color={"blue-gray"} className={"font-alien"}>
                                            {label}
                                        </Typography>
                                        <Typography variant={"small"} color={"gray"} className={"font-alien text-xs"}>
                                            {description}
                                        </Typography>
                                    </div>
                                </ListItem>
                            ))}
                        </List>
                    </Card>
                </div>
            ) : (
                <p>Choisissez une carrière</p>
            )}
        </>
    );
};
