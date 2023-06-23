import { Typography } from "@material-tailwind/react";
import { getVersion } from "../utils/GetVersion.tsx";

export const Footer = () => {
    return (
        <>
            <footer className="z-10 w-full bg-secondary p-8 mt-[calc(100vh-58.7vh)]">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-secondary text-center md:justify-between">
                    <div className={"flex flex-row items-center gap-4"}>
                        <img src="/icon.png" alt="logo" className="w-10" />
                        <Typography color="white" className={"text-lg"}>
                            AlienRPG CharacterCreator - v{ getVersion() }
                        </Typography>
                    </div>
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li onClick={() => window.open("https://github.com/Huskago/alienrpg-charactercreator", "_blank")}>
                            <Typography
                                as="a"
                                href="#"
                                color="white"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Source Code
                            </Typography>
                        </li>
                        <li onClick={() => window.open("https://trello.com/b/Hy17kp4T/roadmap-alienrpg-character-creator", "_blank")}>
                            <Typography
                                as="a"
                                href="#"
                                color="white"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                RoadMap
                            </Typography>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border-blue-gray-50" />
                <Typography color="white" className="text-center font-normal">
                    &copy; 2023 by Huskago. MIT License
                </Typography>
            </footer>
        </>
    )
}
