// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class Talent {
    name: string;
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }
}

export enum Talents {
    PersonalSafety,
    TakeControl,
    Cunning,
    Dodge,
    BeneathNotice,
    Nimble,
    Banter,
    PastTheLimit,
    OverKill,
    Authority,
    Investigator,
    Subdue,
    FieldSurgeon,
    Compassion,
    CalmingPresence,
    Influence,
    PullRank,
    FieldCommander,
    FullThrottle,
    LikeTheBackOfYourHand,
    Reckless,
    TheLongHaul,
    Resilient,
    TrueGrit,
    Analysis,
    Inquisitive,
    Breakthrough,
}

interface ITalent {
    name: string;
    description: string;
}

export function getTalent(talent: Talents): ITalent {
    switch (talent) {
        case Talents.PersonalSafety:
            return { name: "Moi d'abord", description: "Les intérêts de la compagnie passent avant tout, quoi qu'il advienne. Et c'est vous qui la représentez. Par conséquent, votre sécurité est essentielle ; les autres membres d'équipage, eux, peuvent être sacrifiés... Si vous êtes attaqué ou en danger de mort, et si un autre PJ ou PNJ amical se trouve à portée COURTE (dans la même zone), vous pouvez faire un test de MANIPULATION (normal et non opposé, qui ne compte pas comme une action) : en cas de succès, c'est l'autre personnage qui est victime de l'attaque ou du danger à votre place. Utiliser ce talent augmente votre NIVEAU DE STRESS de 1." }
        case Talents.TakeControl:
            return { name: "Prise de contrôle", description: "Vous savez comment forcer autrui à faire ce que vous voulez, et vous n'avez aucun scrupule à employer ce talent. Vous pouvez faire vos tests de MANIPULATION avec votre ESPRIT plutôt que votre EMPATHIE." }
        case Talents.Cunning:
            return { name: "Ruse", description: "Si la compagnie vous a appris quelque chose, c'est bien de rester à l'affût de tout ce qui vous per- met d'avoir l'avantage. Vous pouvez forcer deux fois (au lieu d'une comme n'importe qui d'autre) tout test de compétence basé sur l'ESPRIT. Chaque test forcé augmente de 1 votre NIVEAU DE STRESS." }
        case Talents.Dodge:
            return { name: "Esquive", description: "Quand on vous attaque en combat rapproché, vous pouvez esquiver. L'esquive fonctionne comme un blocage, mais vous utilisez votre MOBILITÉ au lieu de votre COMBAT RAPPROCHÉ et vous ne pouvez vous en servir que pour réduire les dégâts, jamais pour contre-attaquer ou désarmer. Vous pouvez même esquiver l'attaque spéciale d'une créature." }
        case Talents.BeneathNotice:
            return { name: "Passe-partout", description: "Aussi horrible que soit la situation où vous vous retrouvez, vous vous en sortez apparemment indemne, peut-être parce que personne ne vous prête beaucoup d'attention. Lorsque vous tirez une blessure critique, vous pouvez relancer les dés et choisir le résultat que vous préférez." }
        case Talents.Nimble:
            return { name: "Vif", description: "Vous passez votre temps à jouer ? Peut-être aux yeux des autres, mais vous ne vous y trompez pas: tous ces « divertissements » ont aiguise vos réflexes. Vous pouvez forcer deux fois (au lieu d'une comme n'importe qui d'autre) tout test de compétence basé sur l'AGILITE. Chaque test forcé augmente de 1 votre NIVEAU DE STRESS." }
        case Talents.Banter:
            return { name: "Déconnade", description: "Entre deux combats, vous relâchez la pression avec vos équipiers en vous charriant mutuellement. Votre NIVEAU DE STRESS et celui de tous les personnages à COURTE portée de vous baisse de 2 points (au lieu de 1) pour chaque Tour passé en lieu sûr. Le bénéfice ne se cumule pas si plusieurs Marines bénéficient de ce talent." }
        case Talents.PastTheLimit:
            return { name: "Dépassement de soi", description: "C'est dans les moments difficiles qu'on reconnait les vrais durs, et le plus dur, c'est vous. Vous pouvez forcer deux fois (au lieu d'une comme n'importe qui d'autre) tout test de compétence basé sur la FORCE. Chaque test forcé augmente de 1 votre NIVEAU DE STRESS." }
        case Talents.OverKill:
            return { name: "Folie meurtrière", description: "Quand ça commence à barder, vous n'êtes pas du genre à courir vous planquer. Au lieu de paniquer face à un danger mortel, vous exploitez votre terreur comme une arme contre l'ennemi. Vous pouvez déclencher l'effet Folie meurtrière lorsque vous faites un test de Panique." }
        case Talents.Authority:
            return { name: "Autorité", description: "En invoquant votre autorité de Marshal Colonial, vous pouvez employer votre COMMANDEMENT à la place de votre MANIPULATION pour pousser quelqu'un à se soumettre à vos exigences." }
        case Talents.Investigator:
            return { name: "Investigateur", description: "Vous remarquez ce qui échappe aux autres et vous êtes doué pour remarquer les petits détails aussi bien que pour les interpréter. Quand vous passez unTour dans une pièce ou un lieu semblable, vous pouvez effectuer un test d'OBSERVATION. Vous n'avez droit qu'à une seule tentative. Pour chaque (6) obtenu, vous pouvez poser une des questions suivantes à Maman. Maman doit vous répondre sincèrement, mais elle a le droit de vous donner des informations floues ou incomplètes : ▪ Qu'est-ce qui s'est passé ici ? ▪ Y a-t-il quelque chose de caché ici, et si oui, où ? ▪ Y a-t-il des détails curieux ici, des choses qui sortent de l'ordinaire ?" }
        case Talents.Subdue:
            return { name: "Neutralisation", description: "Vous êtes capable de neutraliser un adversaire sans le blesser. Quand vous attaquez un adversaire humanoïde en combat rapproché, vous pouvez déclarer que vous tentez de le neutraliser. Vous bénéficiez d'un modificateur de +2 à votre attaque, mais si celle-ci réussit, vous n'infligez pas de dégâts : à la place, vous saisissez votre adversaire et vous l'immobilisez. Les (6) supplémentaires obtenus n'ont pas d'effet. Notez cependant qu'une telle manœuvre ne fonctionne que sur des cibles humanoïdes." }
        case Talents.FieldSurgeon:
            return { name: "Chirurgien de terrain", description: "Vous maitrisez l'art délicat qui consiste à arrêter une hémorragie ou à soigner des blessures graves. Vous bénéficiez d'un modificateur de +2 aux tests de SOINS MÉDICAUX lorsque vous traitez un patient sur le point de mourir d'une blessure critique." }
        case Talents.Compassion:
            return { name: "Compassion", description: "Pour vous, ce n'est pas qu'un job. Les gens qu'on vous a confiés comptent réellement à vos yeux. Vous pouvez forcer deux fois (au lieu d'une comme n'importe qui d'autre) tout test de compétence basé sur l'EMPATHIE. Chaque test forcé augmente de 1 votre NIVEAU DE STRESS." }
        case Talents.CalmingPresence:
            return { name: "Présence apaisante", description: "Les gens se détendent en votre présence. Une fois par Tour, vous pouvez réduire le NIVEAU DE STRESS d'un autre personnage situé à portée COURTE de 1 point, en plus de l'élimination de stress ordinaire. Pour pouvoir employer ce talent, vous et le personnage qui espère bénéficier de votre présence apaisante devez vous trouver en lieu relativement sûr. Vous ne pouvez pas utiliser ce talent sur vous-même." }
        case Talents.Influence:
            return { name: "Influence", description: "Votre statut s'accompagne de certains privilèges, dont celui de se faire obéir. Vous pouvez forcer deux fois (au lieu d'une comme n'importe qui d'autre) tout est de compétence basé sur l'EMPATHIE. Chaque test forcé augmente de 1 votre NIVEAU DE STRESS." }
        case Talents.PullRank:
            return { name: "Jouer du galon", description: "Vous pouvez utiliser votre COMMANDEMENT pour donner des ordres aux PJ et PNJ qui ne sont pas Officiers, à condition qu'ils appartiennent à la même organisation que vous. Pour forcer quelqu'un à obéir à vos ordres et à effectuer une action spécifique, faites un test de COMMANDEMENT opposé à la MANIPULATION de la cible. Si vous l'emportez, la cible doit obéir à votre ordre, même s'il lui nuit ou la met en danger. Votre NIVEAU DE STRESS augmente de 1 chaque fois que vous procédez de la sorte. Remarquez que chaque test ne correspond qu'à une action spécifique. Vous ne pouvez pas empêcher des actions déclenchées par un test de Panique au moyen de ce talent." }
        case Talents.FieldCommander:
            return { name: "Officier de terrain", description: "Vous pouvez vous servir de COMMANDEMENT pour donner des ordres au combat au prix d'une action rapide plutôt que d'une action lente. En pratique, ceci vous permet de donner deux ordres au cours d'un même Round." }
        case Talents.FullThrottle:
            return { name: "Pleins gaz", description: "Vous aimez la vitesse. La grande vitesse. Quand vous pilotez un vaisseau spatial vous bénéficiez d'un modificateur de +2 à tous les tests de PILOTAGE destinés à effectuer une Accélération ou une Décélération." }
        case Talents.LikeTheBackOfYourHand:
            return { name: "Sur le bout des doigts", description: "Ce véhicule, c'est le vôtre, et vous le connaissez comme si vous l'aviez fait. Choisissez un véhicule ou un vaisseau spatial (pas un type de véhicule, mais un appareil unique, spécifique). Vous bénéficiez d'un modificateur de +2 aux tests de PILOTAGE effectués aux commandes de celui-ci. Vous pouvez choisir ce talent à plusieurs reprises, une fois pour chaque véhicule." }
        case Talents.Reckless:
            return { name: "Téméraire", description: "En votre qualité de pilote, vous vivez pour ce moment où l'adrénaline afflue dans vos veines, et où vous poussez vos limites comme personne. Vous pouvez forcer deux fois (au lieu d'une comme n'importe qui d'autre) tout test de compétence basé sur l'AGILITÉ. Chaque test forcé augmente de 1 votre NIVEAU DE STRESS." }
        case Talents.TheLongHaul:
            return { name: "Blasé", description: "Vous avez déjà tout vu, tout fait. Rien ne vous surprend plus dorénavant. Une fois par acte en Mode Cinéma et une fois par séance de jeu en Mode Campagne, vous pouvez ignorer tous les (1) d'un jet de dé." }
        case Talents.Resilient:
            return { name: "Coriace", description: "Seuls les durs à cuire survivent ici-bas. Faites un test de FORCE (l'attribut, sans aucune compétence) chaque fois que vous subissez des dégâts. Vous ne pouvez pas le forcer, et il ne compte pas comme une action. Pour chaque (6) obtenu, vous éliminez 1 point de dégâts. Si vous les éliminez tous, vous ne subissez aucun mal." }
        case Talents.TrueGrit:
            return { name: "Cran", description: "À la Frontière, la vie est une lutte permanente. Heureusement, vous avez ce qu'il faut pour affronter tous les dangers qui se présente. Vous pouvez forcer deux fois (au lieu d’une comme n’importe qui d’autre) tout test de compétences basé sur la FORCE. Chaque test forcé augment de 1 votre NIVEAU DE STRESS." }
        case Talents.Analysis:
            return { name: "Analyse", description: "Vous pouvez effectuer un test d'OBSERVATION pour obtenir des informations sur les reliques ou créatures extraterrestres que vous croisez et avez l'occasion d'analyser au moins pendant un Tour. Pour chaque (6) obtenu, vous pouvez poser à Maman une des questions ci-dessous : ▪ Est-ce humain ou extraterrestre ? ▪ Est-ce mort ou vivant ? ▪ Ça a quel âge ? ▪ À quoi ça sert ? ▪ Comment ça fonctionne ? ▪ Quel problème ça pourrait causer ? Maman doit répondre avec sincérité, mais peut tout à fait fournir des réponses vagues ou incomplètes. Un test d'Analyse réussi réduit également de 1 le NIVEAU DE STRESS de tous les autres PJ situés à COURTE portée, tandis qu'un échec le fait augmenter de 1." }
        case Talents.Inquisitive:
            return { name: "Curiosité", description: "Vous cherchez toujours à approfondir vos connaissances. Vous pouvez forcer deux fois (au lieu d'une comme n'importe qui d'autre) tout test de compétence basé sur l'ESPRIT. Chaque test forcé augmente de 1 votre NIVEAU DE STRESS." }
        case Talents.Breakthrough:
            return { name: "Découverte", description: "Vous avez réussi ! Une fois par séance de jeu, vous réussissez automatiquement un test d'OBSERVATION de votre choix sans avoir à lancer les dés. Pour éviter de gâcher le scénario, précisons que Maman a le dernier mot lorsqu'il s'agit de savoir si ce talent peut s'appliquer ou pas à un test particulier." }
    }
}