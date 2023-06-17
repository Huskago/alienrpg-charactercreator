import { Button, Menu, MenuHandler, MenuItem, MenuList, Navbar } from "@material-tailwind/react";
import { GitHub } from "@mui/icons-material";

export const NavBar = () => {
    return (
        <>
            <Navbar className={"sticky inset-0 z-10 h-max rounded-t-none max-w-full py-2 px-4 lg:px-8 lg:py-4 bg-secondary border-secondary flex flex-row justify-between items-center"}>
                <Menu placement={"right-start"}>
                    <MenuHandler>
                        <Button className={"ml-32"} color={"blue-gray"}>Base de donnée</Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem onClick={() => window.open("https://docs.google.com/document/d/1OPQW0jJbUYkgGTRTtyTs9PchFqZHgpmKgZ_JGGU2sSg/edit?usp=sharing", "_blank")}>
                            Guide pour la création d'un personnage
                        </MenuItem>
                        <MenuItem onClick={() => window.open("https://docs.google.com/document/d/1CDgEBRWX1JUNr4DfWO50zws8ZkBCnxLpT1VKzteNOE0/edit?usp=sharing", "_blank")}>
                            Liste des carrières
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Button color={"white"} className={"flex items-center gap-3 mr-32"} onClick={() => window.open("https://github.com/Huskago/alienrpg-charactercreator", "_blank")}>
                    <GitHub strokeWidth={2} className={"h-5 w-5"} /> Source Code
                </Button>
            </Navbar>
        </>
    )
}