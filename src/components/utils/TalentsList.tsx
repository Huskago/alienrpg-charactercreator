interface TalentItem {
    label: string;
    value: string;
    description: string;
}

export function getTalent(career: string): TalentItem[] | undefined {
    switch (career) {
        case "Agent de la compagnie":
            return [
                {
                    label: "Moi d'abord",
                    value: "moi d'abord",
                    description: "Protégez-vous en priorité. Si vous êtes attaqué et qu'une autre personne amicale est à proximité (dans la même zone), vous pouvez réussir un test de MANIPULATION pour qu'elle subisse l'attaque à votre place. Cela augmente votre NIVEAU DE STRESS de 1.",
                },
                {
                    label: "Prise de contrôle",
                    value: "prise de contrôle",
                    description: "Utilisez votre ESPRIT plutôt que votre EMPATHIE pour manipuler les autres et les forcer à faire ce que vous voulez.",
                },
                {
                    label: "Ruse",
                    value: "ruse",
                    description: "Vous pouvez forcer deux fois les tests de compétence basés sur l'ESPRIT, ce qui vous donne un avantage. Chaque test forcé augmente votre NIVEAU DE STRESS de 1.",
                },
            ];
        default:
            return undefined;
    }
}