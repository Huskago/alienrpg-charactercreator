interface IEquipment {
    name: string;
    weight: number;
    count?: number;
}

export class Equipment {
    name: string;
    weight: number;
    count: number;

    constructor();
    constructor(equipment: IEquipment);
    constructor(equipment?: IEquipment) {
        this.name = equipment?.name ?? "";
        this.weight = equipment?.weight ?? 0;
        this.count = equipment?.count ?? 1;
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }

    getCount() {
        return this.count;
    }
}

export enum Equipments {
    LeatherSuitcase,
    ChromeSuitcase,
    PlatedPen,
    ExceptionalWatch,
    DataTransmitterCard,
    M4A3ServicePistol,
    D6NeversleepPills,
    D6Naproleve,
    FishingRod,
    LaserPointer,
    Magnet,
    RemoteControlledCar,
    Yoyo,
    PocketVideoGameConsole,
    PersonalLocatorBeacon,
    ColoredFeltPens,
    ArmatM41APulseRifle,
    M56A2SmartGun,
    M314MotionTracker,
    "2G2ElectroshockGrenade",
    IRCMk35CompressionSuit,
    M3PersonalArmor,
    Flare,
    CardPack,
    "357MagumRevolver",
    ArmatModel37A212GaugePumpAction,
    Binoculars,
    HiBeamFlashlight,
    PersonalMedkit,
    StunBaton,
    PocketRadio,
    SurgicalKit,
    IRCMk50CompressionSuit,
    D6ExperimentalXDrugs,
    SamaniESeriesWatch,
    ReximRXFM5EVAPistol,
    SeegsonPDAT,
    IFFTransponder,
    PRPUTUplinkTerminal,
    D6DistressFlare,
    MaintenanceJack,
    SeegsonSystemDiagnosticDevice,
    CuttingTorch,
    WatatsumiDV303BoltGun,
    D6Hydr8tion,
    StrongAlcoholReserve,
    SeegsonCSeriesMagneticTapeRecorder
}

export function getEquipment(equipment: Equipments): Equipment {
    switch (equipment) {
        case Equipments.LeatherSuitcase:
            return {name: "Valise en cuir", weight: 0.0} as Equipment
        case Equipments.ChromeSuitcase:
            return { name: "Valise chromée", weight: 0.0 } as Equipment
        case Equipments.PlatedPen:
            return { name: "Stylo plaqué", weight: 0.0 } as Equipment
        case Equipments.ExceptionalWatch:
            return { name: "Montre d'exception", weight: 0.0 } as Equipment
        case Equipments.DataTransmitterCard:
            return { name: "Carte de transmission de données (avec un niveau d'accréditation élevé)", weight: 0.0 } as Equipment
        case Equipments.M4A3ServicePistol:
            return { name: "Pistolet de service M4A3", weight: 1/2 } as Equipment
        case Equipments.D6NeversleepPills:
            return { name: "D6 Pilules antisommeil", weight: 0.0 } as Equipment
        case Equipments.D6Naproleve:
            return { name: "D6 Naproleve", weight: 0.0 } as Equipment
        case Equipments.FishingRod:
            return { name: "Canne à pêche", weight: 0.0 } as Equipment
        case Equipments.LaserPointer:
            return { name: "Pointeur laser", weight: 0.0 } as Equipment
        case Equipments.Magnet:
            return { name: "Aimant", weight: 0.0 } as Equipment
        case Equipments.RemoteControlledCar:
            return { name: "Voiture télécommandée", weight: 0.0 } as Equipment
        case Equipments.Yoyo:
            return { name: "Yoyo", weight: 0.0 } as Equipment
        case Equipments.PocketVideoGameConsole:
            return { name: "Console de jeu portable", weight: 0.0 } as Equipment
        case Equipments.PersonalLocatorBeacon:
            return { name: "Balise de localisation personnelle", weight: 0.0 } as Equipment
        case Equipments.ColoredFeltPens:
            return { name: "Feutres de couleur", weight: 0.0 } as Equipment
        case Equipments.ArmatM41APulseRifle:
            return { name: "Fusil à impulsion Armat M41A", weight: 1.0 } as Equipment
        case Equipments.M56A2SmartGun:
            return { name: "Smartgun M56A2", weight: 3.0 } as Equipment
        case Equipments.M314MotionTracker:
            return { name: "Détecteur de mouvement M314", weight: 1.0 } as Equipment
        case Equipments["2G2ElectroshockGrenade"]:
            return { name: "Grenade à électrochoc G2", weight: 1/2, count: 2 } as Equipment
        case Equipments.IRCMk35CompressionSuit:
            return { name: "Combinaison pressurisée IRC Mk.35", weight: 2.0 } as Equipment
        case Equipments.M3PersonalArmor:
            return { name: "Armure personnelle M3", weight: 1.0 } as Equipment
        case Equipments.Flare:
            return { name: "Fusée éclairante", weight: 0.0 } as Equipment
        case Equipments.CardPack:
            return { name: "Paquet de cartes", weight: 0.0 } as Equipment
        case Equipments["357MagumRevolver"]:
            return { name: "Revolver 357 Magnum", weight: 1 } as Equipment
        case Equipments.ArmatModel37A212GaugePumpAction:
            return { name: "Fusil à pompe Armat modèle 37A2 calibre 12", weight: 1 } as Equipment
        case Equipments.Binoculars:
            return { name: "Jumelles", weight: 0.0 } as Equipment
        case Equipments.HiBeamFlashlight:
            return { name: "Lampe-torche à faisceau concentré", weight: 1/2 } as Equipment
        case Equipments.PersonalMedkit:
            return { name: "Médikit personnel", weight: 1/4 } as Equipment
        case Equipments.StunBaton:
            return { name: "Matraque électrique", weight: 1/2 } as Equipment
        case Equipments.PocketRadio:
            return { name: "Radio de poche", weight: 0.0 } as Equipment
        case Equipments.SurgicalKit:
            return { name: "Kit chirurgical", weight: 1/2 } as Equipment
        case Equipments.IRCMk50CompressionSuit:
            return { name: "Combinaison de compression IRC Mk.50", weight: 1.0 } as Equipment
        case Equipments.D6ExperimentalXDrugs:
            return { name: "D6 Drogues X", weight: 0.0 } as Equipment
        case Equipments.SamaniESeriesWatch:
            return { name: "Montre Samani série E", weight: 0.0 } as Equipment
        case Equipments.ReximRXFM5EVAPistol:
            return { name: "Pistolet Rexim RXF-M5 EVA", weight: 1/2 } as Equipment
        case Equipments.SeegsonPDAT:
            return { name: "P-DAT Seegson", weight: 1/2 } as Equipment
        case Equipments.IFFTransponder:
            return { name: "Transpondeur IFF", weight: 0.0 } as Equipment
        case Equipments.PRPUTUplinkTerminal:
            return { name: "Terminal en liaison montante PR-PUT", weight: 1 } as Equipment
        case Equipments.D6DistressFlare:
            return { name: "Fusée de détresse D6", weight: 0.0 } as Equipment
        case Equipments.MaintenanceJack:
            return { name: "Cric d'entretien", weight: 1.0 } as Equipment
        case Equipments.SeegsonSystemDiagnosticDevice:
            return { name: "Appareil de diagnostic Seegson System", weight: 1.0 } as Equipment
        case Equipments.CuttingTorch:
            return { name: "Chalumeau de découpe", weight: 1.0 } as Equipment
        case Equipments.WatatsumiDV303BoltGun:
            return { name: "Bolt Gun Watatsumi DV-303", weight: 1.0 } as Equipment
        case Equipments.D6Hydr8tion:
            return { name: "D6 Hydr4tation", weight: 0.0 } as Equipment
        case Equipments.SeegsonCSeriesMagneticTapeRecorder:
            return { name: "Enregistreur de bande magnétique Seegson série C", weight: 1/2 } as Equipment
        case Equipments.StrongAlcoholReserve:
            return { name: "Réserve d'alcool fort", weight: 1.0 } as Equipment
    }
}