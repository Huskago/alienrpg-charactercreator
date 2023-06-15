import React, { useEffect, useState } from "react";
import { Title } from "./ui/Title.tsx";
import { getTalent } from "./utils/TalentsList.tsx";
import {Card, List, ListItem, Typography} from "@material-tailwind/react";

interface TalentProps {
    onTalentSelected: (selectedTalent: string) => void;
    career: string;
    careerSelected: boolean;
}

interface TalentItem {
    label: string;
    value: string;
    description: string;
}

export const Talent: React.FC<TalentProps> = ({
  onTalentSelected,
  career,
  careerSelected,
}) => {
    const [talent, setTalent] = useState("");
    const [, setTalentSelected] = useState(false);
    const [data, setData] = useState<TalentItem[] | undefined>(undefined);
    const [selected, setSelected] = useState(1);
    const setSelectedItem = (value: number) =>  setSelected(value);

    useEffect(() => {
        if (careerSelected && career) {
            const talentData = getTalent(career);
            if (talentData) {
                setData(talentData);
                setTalent(talentData[0].value);
            }
        }
    }, [career]);

    const handleTalentChange = (selectedTalent: any) => {
        if (selectedTalent) {
            setTalent(selectedTalent);
            setTalentSelected(true);
            onTalentSelected(selectedTalent);
        }
    };

    return (
        <>
            <Title text="Talent" />
            {careerSelected && career ? (
                <Card className={"-mt-7 w-96"}>
                    <List>
                        {data && data.map(({ label, value, description }, index) => (
                            <ListItem key={value} onClick={() => {
                                setSelectedItem(index + 1);
                                handleTalentChange(value);
                            }} selected={selected === index + 1 }>
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
            ) : (
                <p>Choisissez une carrière</p>
            )}
        </>
    );
};
