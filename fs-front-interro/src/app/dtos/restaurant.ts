export interface Restaurant {
    id: number;
    nom: string;
    adresse: string;
    moyenne: number;
}

export interface Evaluation {
    id: number;
    evaluateur: string;
    commentaire: string;
    note: number;
}