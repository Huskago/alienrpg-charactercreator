import React, { useEffect, useState } from "react";
import { Title } from "./ui/Title.tsx";
import {Card, Typography} from "@material-tailwind/react";
import {Career} from "../objets/Career.tsx";
import {List, ListItem} from "@mui/material";
import {getTalent} from "../objets/Talents.tsx";

interface TalentProps {
    onTalentSelected: (selectedTalent: string) => void;
    career: Career | undefined
    careerSelected: boolean;
}

export const SelectTalent: React.FC<TalentProps> = ({
  onTalentSelected,
  career,
  careerSelected,
}) => {
    const [, setTalent] = useState("");
    const [, setTalentSelected] = useState(false);
    // const [data, setData] = useState<TalentItem[] | undefined>(undefined);
    const [selected, setSelected] = useState(0);
    const setSelectedItem = (value: number) => setSelected(value);
    const [prevCareer, setPrevCareer] = useState<Career>();

    useEffect(() => {
        if (careerSelected && career) {
            setPrevCareer(career)
        }
    }, [career, careerSelected]);

    useEffect(() => {
        if (prevCareer !== career) {
            resetTalent();
            setPrevCareer(career)
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
                            {career.talents.map((talent, index) => (
                                <ListItem className={"hover:cursor-pointer rounded-2xl"} key={getTalent(talent).name} onClick={() => {
                                    setSelectedItem(index + 1);
                                    handleTalentChange(getTalent(talent).name);
                                }} selected={selected === index + 1}>
                                    <div>
                                        <Typography variant={"paragraph"} color={"blue-gray"} className={"font-alien"}>
                                            {getTalent(talent).name}
                                        </Typography>
                                        <Typography variant={"small"} color={"gray"} className={"font-alien text-xs"}>
                                            {getTalent(talent).description}
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
