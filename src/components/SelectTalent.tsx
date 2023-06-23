import React, { useEffect, useState } from "react";
import { Title } from "./ui/Title.tsx";
import { Card, Typography}  from "@material-tailwind/react";
import { Career } from "../objets/Career.tsx";
import { List, ListItem } from "@mui/material";
import { getTalent, Talent, Talents } from "../objets/Talents.tsx";

interface TalentProps {
    careerSelected: boolean;
    career: Career | undefined
    onTalentSelected: (selectedTalent: Talent | undefined) => void;
}

export const SelectTalent: React.FC<TalentProps> = ({
  onTalentSelected,
  career,
  careerSelected,
}) => {
    const [, setTalentSelected] = useState(false);
    const [selected, setSelected] = useState(0);
    const [, setTalent] = useState<Talent>();
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
        setSelected(0);
        setTalent(undefined);
        setTalentSelected(false);
        onTalentSelected(undefined);
    }

    const handleTalentChange = (selectedTalent: Talents) => {
        switch (selectedTalent) {
            case Talents.PersonalSafety:
                setTalent(getTalent(Talents.PersonalSafety));
                onTalentSelected(getTalent(Talents.PersonalSafety));
                break;
            case Talents.TakeControl:
                setTalent(getTalent(Talents.TakeControl));
                onTalentSelected(getTalent(Talents.TakeControl));
                break;
            case Talents.Cunning:
                setTalent(getTalent(Talents.Cunning));
                onTalentSelected(getTalent(Talents.Cunning));
                break;
            case Talents.Dodge:
                setTalent(getTalent(Talents.Dodge));
                onTalentSelected(getTalent(Talents.Dodge));
                break;
            case Talents.BeneathNotice:
                setTalent(getTalent(Talents.BeneathNotice));
                onTalentSelected(getTalent(Talents.BeneathNotice));
                break;
            case Talents.Nimble:
                setTalent(getTalent(Talents.Nimble));
                onTalentSelected(getTalent(Talents.Nimble));
                break;
            case Talents.Banter:
                setTalent(getTalent(Talents.Banter));
                onTalentSelected(getTalent(Talents.Banter));
                break;
            case Talents.PastTheLimit:
                setTalent(getTalent(Talents.PastTheLimit));
                onTalentSelected(getTalent(Talents.PastTheLimit));
                break;
            case Talents.OverKill:
                setTalent(getTalent(Talents.OverKill));
                onTalentSelected(getTalent(Talents.OverKill));
                break;
            case Talents.Authority:
                setTalent(getTalent(Talents.Authority));
                onTalentSelected(getTalent(Talents.Authority));
                break;
            case Talents.Investigator:
                setTalent(getTalent(Talents.Investigator));
                onTalentSelected(getTalent(Talents.Investigator));
                break;
            case Talents.Subdue:
                setTalent(getTalent(Talents.Subdue));
                onTalentSelected(getTalent(Talents.Subdue));
                break;
            case Talents.FieldSurgeon:
                setTalent(getTalent(Talents.FieldSurgeon));
                onTalentSelected(getTalent(Talents.FieldSurgeon));
                break;
            case Talents.Compassion:
                setTalent(getTalent(Talents.Compassion));
                onTalentSelected(getTalent(Talents.Compassion));
                break;
            case Talents.CalmingPresence:
                setTalent(getTalent(Talents.CalmingPresence));
                onTalentSelected(getTalent(Talents.CalmingPresence));
                break;
            case Talents.Influence:
                setTalent(getTalent(Talents.Influence));
                onTalentSelected(getTalent(Talents.Influence));
                break;
            case Talents.PullRank:
                setTalent(getTalent(Talents.PullRank));
                onTalentSelected(getTalent(Talents.PullRank));
                break;
            case Talents.FieldCommander:
                setTalent(getTalent(Talents.FieldCommander));
                onTalentSelected(getTalent(Talents.FieldCommander));
                break;
            case Talents.FullThrottle:
                setTalent(getTalent(Talents.FullThrottle));
                onTalentSelected(getTalent(Talents.FullThrottle));
                break;
            case Talents.LikeTheBackOfYourHand:
                setTalent(getTalent(Talents.LikeTheBackOfYourHand));
                onTalentSelected(getTalent(Talents.LikeTheBackOfYourHand));
                break;
            case Talents.Reckless:
                setTalent(getTalent(Talents.Reckless));
                onTalentSelected(getTalent(Talents.Reckless));
                break;
            case Talents.TheLongHaul:
                setTalent(getTalent(Talents.TheLongHaul));
                onTalentSelected(getTalent(Talents.TheLongHaul));
                break;
            case Talents.Resilient:
                setTalent(getTalent(Talents.Resilient));
                onTalentSelected(getTalent(Talents.Resilient));
                break;
            case Talents.TrueGrit:
                setTalent(getTalent(Talents.TrueGrit));
                onTalentSelected(getTalent(Talents.TrueGrit));
                break;
            case Talents.Analysis:
                setTalent(getTalent(Talents.Analysis));
                onTalentSelected(getTalent(Talents.Analysis));
                break;
            case Talents.Inquisitive:
                setTalent(getTalent(Talents.Inquisitive));
                onTalentSelected(getTalent(Talents.Inquisitive));
                break;
            case Talents.Breakthrough:
                setTalent(getTalent(Talents.Breakthrough));
                onTalentSelected(getTalent(Talents.Breakthrough));
                break;
        }
        setTalentSelected(true);
    };

    return (
        <>
            {careerSelected && career ? (
                <div>
                    <Title text="Talent" />
                    <Card className={"mt-5 w-[624px]"}>
                        <List>
                            {career.getTalents().map((talent, index) => (
                                <ListItem className={"hover:cursor-pointer rounded-2xl"} key={getTalent(talent).name} onClick={() => {
                                    setSelectedItem(index + 1);
                                    handleTalentChange(talent)
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
                <></>
            )}
        </>
    );
};
