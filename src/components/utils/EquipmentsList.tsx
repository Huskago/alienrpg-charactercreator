export interface EquipmentsItem {
    checkbox1: {
        label: string;
        value: string;
    },
    checkbox2: {
        label: string;
        value: string;
    },
}

export function getEquipments(career: string): EquipmentsItem[] | undefined {
    switch (career) {
        case "Agent de la compagnie":
            return [
                {
                    checkbox1: {
                        label: "Valise en cuir",
                        value: "valise en cuir",
                    },
                    checkbox2: {
                        label: "Valise chromée",
                        value: "valise chromée",
                    },
                },
                {
                    checkbox1: {
                        label: "Stylo plaqué",
                        value: "stylo plaqué",
                    },
                    checkbox2: {
                        label: "Montre d'exception",
                        value: "montre d'exception",
                    },
                },
                {
                    checkbox1: {
                        label: "Carte de transmission de données avec un niveau d'accréditation élevé",
                        value: "carte de transmission de données avec un niveau d'accréditation élevé",
                    },
                    checkbox2: {
                        label: "Pistolet de service M4A3",
                        value: "pistolet de service M4A3",
                    },
                },
                {
                    checkbox1: {
                        label: "D6 doses de pilules antisommeil",
                        value: "d6 doses de pilules antisommeil",
                    },
                    checkbox2: {
                        label: "D6 doses de Naproleve",
                        value: "d6 doses de Naproleve",
                    },
                },
            ];
        case "Gamin":
            return [
                {
                    checkbox1: {
                        label: "Canne à pêche",
                        value: "canne à pêche",
                    },
                    checkbox2: {
                        label: "Pointeur laser",
                        value: "pointeur laser",
                    },
                },
                {
                    checkbox1: {
                        label: "Aimant",
                        value: "aimant",
                    },
                    checkbox2: {
                        label: "Voiture télécommandée",
                        value: "voiture télécommandée",
                    },
                },
                {
                    checkbox1: {
                        label: "Yo-yo",
                        value: "yo-yo",
                    },
                    checkbox2: {
                        label: "Console de jeux vidéo de poche",
                        value: "console de jeux vidéo de poche",
                    },
                },
                {
                    checkbox1: {
                        label: "Balise de localisation personnelle",
                        value: "balise de localisation personnelle",
                    },
                    checkbox2: {
                        label: "Feutres de couleur",
                        value: "feutres de couleur",
                    }
                }
            ];
        case "Marine colonial":
            return [
                {
                    checkbox1: {
                        label: "Fusil à impulsion Armat M41A",
                        value: "fusil à impulsion Armat M41A",
                    },
                    checkbox2: {
                        label: "Smartgun M56A2",
                        value: "smartgun M56A2",
                    },
                },
                {
                    checkbox1: {
                        label: "Détecteur de mouvement M314",
                        value: "détecteur de mouvement M314",
                    },
                    checkbox2: {
                        label: "Deux grenades à électrochoc G2",
                        value: "deux grenades à électrochoc G2",
                    },
                },
                {
                    checkbox1: {
                        label: "Combinaison pressurisée IRC Mk.35",
                        value: "combinaison pressurisée IRC Mk.35",
                    },
                    checkbox2: {
                        label: "Armure personnelle M3",
                        value: "armure personnelle M3",
                    },
                },
                {
                    checkbox1: {
                        label: "Fusée éclairante",
                        value: "fusée éclairante",
                    },
                    checkbox2: {
                        label: "Paquet de cartes",
                        value: "paquet de cartes",
                    }
                }
            ];
        case "Marshal colonial":
            return [
                {
                    checkbox1: {
                        label: "Revolver 357 Magnum",
                        value: "revolver 357 Magnum",
                    },
                    checkbox2: {
                        label: "Fusil à pompe Armat modèle 37A2 calibre 12",
                        value: "fusil à pompe Armat modèle 37A2 calibre 12",
                    },
                },
                {
                    checkbox1: {
                        label: "Jumelles",
                        value: "jumelles",
                    },
                    checkbox2: {
                        label: "Lampe-torche à faisceau concentré",
                        value: "lampe-torche à faisceau concentré",
                    },
                },
                {
                    checkbox1: {
                        label: "Médikit personnel",
                        value: "médikit personnel",
                    },
                    checkbox2: {
                        label: "Matraque électrique",
                        value: "matraque électrique",
                    },
                },
                {
                    checkbox1: {
                        label: "D6 doses de pilules antisommeil",
                        value: "d6 doses de pilules antisommeil",
                    },
                    checkbox2: {
                        label: "Radio de poche",
                        value: "radio de poche",
                    }
                }
            ];
        case "Médecin":
            return [
                {
                    checkbox1: {
                        label: "Nécessaire chirurgical",
                        value: "nécessaire chirurgical",
                    },
                    checkbox2: {
                        label: "Combinaison de compression IRC Mk.50",
                        value: "combinaison de compression IRC Mk.50",
                    },
                },
                {
                    checkbox1: {
                        label: "D6 doses de Naproleve",
                        value: "d6 doses de Naproleve",
                    },
                    checkbox2: {
                        label: "D6 doses de pilules antisommeil",
                        value: "d6 doses de pilules antisommeil",
                    },
                },
                {
                    checkbox1: {
                        label: "Médikit personnel",
                        value: "médikit personnel",
                    },
                    checkbox2: {
                        label: "D6 doses de Drogue X expérimentale",
                        value: "d6 doses de Drogue X expérimentale",
                    },
                },
                {
                    checkbox1: {
                        label: "Montre Samani Série E",
                        value: "montre Samani Série E",
                    },
                    checkbox2: {
                        label: "Radio de poche",
                        value: "radio de poche",
                    }
                }
            ];
        case "Officier":
            return [
                {
                    checkbox1: {
                        label: "Pistolet de service M4A3",
                        value: "pistolet de service M4A3",
                    },
                    checkbox2: {
                        label: "Pistolet Rexim RXF-M5 EVA",
                        value: "pistolet Rexim RXF-M5 EVA",
                    },
                },
                {
                    checkbox1: {
                        label: "Montre Samani Série E",
                        value: "montre Samani Série E",
                    },
                    checkbox2: {
                        label: "Jumelles",
                        value: "jumelles",
                    },
                },
                {
                    checkbox1: {
                        label: "Détecteur de mouvement M314",
                        value: "détecteur de mouvement M314",
                    },
                    checkbox2: {
                        label: "Combinaison de compression IRC Mk.50",
                        value: "combinaison de compression IRC Mk.50",
                    },
                },
                {
                    checkbox1: {
                        label: "P-DAT Seegson",
                        value: "P-DAT Seegson",
                    },
                    checkbox2: {
                        label: "Transpondeur IFF",
                        value: "transpondeur IFF",
                    }
                }
            ];
        case "Pilote":
            return [
                {
                    checkbox1: {
                        label: "Pistolet de service M4A3",
                        value: "pistolet de service M4A3",
                    },
                    checkbox2: {
                        label: "Terminal en liaison montante PR-PUT",
                        value: "terminal en liaison montante PR-PUT",
                    },
                },
                {
                    checkbox1: {
                        label: "Radio de poche",
                        value: "radio de poche",
                    },
                    checkbox2: {
                        label: "D6 fusées de détresse",
                        value: "d6 fusées de détresse",
                    },
                },
                {
                    checkbox1: {
                        label: "Cric d'entretien",
                        value: "cric d'entretien",
                    },
                    checkbox2: {
                        label: "P-DAT Seegson",
                        value: "P-DAT Seegson",
                    },
                },
                {
                    checkbox1: {
                        label: "Appareil de diagnostic Seegson System",
                        value: "appareil de diagnostic Seegson System",
                    },
                    checkbox2: {
                        label: "Combinaison de compression IRC Mk.50",
                        value: "combinaison de compression IRC Mk.50",
                    }
                }
            ];
        case "Prolo":
            return [
                {
                    checkbox1: {
                        label: "Chalumeau découpeur",
                        value: "chalumeau découpeur",
                    },
                    checkbox2: {
                        label: "Bolt Gun Watatsumi DV-303",
                        value: "bolt gun Watatsumi DV-303",
                    },
                },
                {
                    checkbox1: {
                        label: "D6 doses d'Hydr4tation",
                        value: "d6 doses d'Hydr4tation",
                    },
                    checkbox2: {
                        label: "Cric d'entretien",
                        value: "cric d'entretien",
                    },
                },
                {
                    checkbox1: {
                        label: "Réserve d'alcool fort",
                        value: "réserve d'alcool fort",
                    },
                    checkbox2: {
                        label: "Combinaison de compression IRC Mk.50",
                        value: "combinaison de compression IRC Mk.50",
                    },
                },
                {
                    checkbox1: {
                        label: "Lampe-torche à faisceau concentré",
                        value: "lampe-torche à faisceau concentré",
                    },
                    checkbox2: {
                        label: "Enregistreur de bande magnétique Seegson Série C",
                        value: "enregistreur de bande magnétique Seegson Série C",
                    }
                }
            ];
        case "Scientifique":
            return [
                {
                    checkbox1: {
                        label: "Appareil photo numérique",
                        value: "appareil photo numérique",
                    },
                    checkbox2: {
                        label: "Radio de poche",
                        value: "radio de poche",
                    },
                },
                {
                    checkbox1: {
                        label: "P-DAT Seegson",
                        value: "P-DAT Seegson",
                    },
                    checkbox2: {
                        label: "Neurovisière",
                        value: "neurovisière",
                    },
                },
                {
                    checkbox1: {
                        label: "Appareil de diagnostic Seegson System",
                        value: "appareil de diagnostic Seegson System",
                    },
                    checkbox2: {
                        label: "Transmetteur de données personnel (TDP)",
                        value: "transmetteur de données personnel (TDP)",
                    },
                },
                {
                    checkbox1: {
                        label: "Détecteur de mouvement M314",
                        value: "détecteur de mouvement M314",
                    },
                    checkbox2: {
                        label: "Médikit personnel",
                        value: "médikit personnel",
                    }
                }
            ];
        default:
            return undefined;
    }
}