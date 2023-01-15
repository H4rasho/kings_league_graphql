export enum Role {
    Defensa = "Defensa",
    Delantero = "Delantero",
    Jugador11 = "jugador 11",
    Medio = "Medio",
    Portero = "Portero",
}

export interface Stats {
    speed?:    number;
    physique?: number;
    shooting?: number;
    passing?:  number;
    talent?:   number;
    defense?:  number;
    score?:    number;
    reflexes?: number;
    saves?:    number;
    kickoff?:  number;
    stretch?:  number;
}

export interface Player {
    id:         string;
    dorsalName: string;
    fullName:   string;
    role:       Role;
    image:      string;
    stats:      Stats;
}
