export class PersonalInfo {
    name: string;
    age: string;
    history: string;
    job: string;
    personality: string;
    objective: string;
    buddy: string;
    rival: string;
    image: File | null;
    appearance: string;

    constructor(name: string, age: string, history: string, job: string, personality: string, objective: string, buddy: string, rival: string, image: File | null, appearance: string) {
        this.name = name;
        this.age = age;
        this.history = history;
        this.job = job;
        this.personality = personality;
        this.objective = objective;
        this.buddy = buddy;
        this.rival = rival;
        this.image = image;
        this.appearance = appearance;
    }
}