import mongoose, { Schema } from 'mongoose';

interface IFresque {
    nom_de_la_fresque: string;
    naam_fresco_nl: string;
    image: string;
    dessinateur: string;
    maison_d_edition: string;
    réalisateur: string;
    date: number;
    surface_m2: number;
    adresse: string;
    adres: string;
    lien_site_parcours_bd: string;
    link_site_striproute: string;
    commune_gemeente: string;
    coordonnees_geographiques: {
        lon: number;
        lat: number;
    };
}

// Schéma de la fresque
const fresqueSchema: Schema = new Schema({
    nom_de_la_fresque: { type: String, required: true },
    naam_fresco_nl: { type: String, required: true },
    image: { type: String, required: true },
    dessinateur: { type: String, required: true },
    maison_d_edition: { type: String, required: true },
    réalisateur: { type: String, required: true },
    date: { type: Number, required: true },
    surface_m2: { type: Number, required: true },
    adresse: { type: String, required: true },
    adres: { type: String, required: true },
    lien_site_parcours_bd: { type: String, required: true },
    link_site_striproute: { type: String, required: true },
    commune_gemeente: { type: String, required: true },
    coordonnees_geographiques: {
        lon: { type: Number, required: true },
        lat: { type: Number, required: true }
    }
});

// Création du modèle Fresque
const Fresque = mongoose.model<IFresque>('Fresque', fresqueSchema);

export default Fresque;
