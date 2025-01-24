import mongoose, { Schema } from 'mongoose';

interface ITree {
    nom_fr: string;
    nom_nl: string;
    nom_la: string;
    firstimage: string;
    statuts_fr: string;
    statuts_nl: string;
    rarete: number;
    circonference: number;
    diametre_cime: number;
    cepee: string | null;
    url_fr: string;
    url_nl: string;
    geo_point_2d: {
        lon: number;
        lat: number;
    };
    geo_shape: {
        type: string;
        geometry: {
            coordinates: [number, number];
            type: string;
        };
        properties: object;
    };
}

const treeSchema: Schema = new Schema({
    nom_fr: { type: String, required: true },
    nom_nl: { type: String, required: true },
    nom_la: { type: String, required: true },
    firstimage: { type: String, required: true },
    statuts_fr: { type: String, required: true },
    statuts_nl: { type: String, required: true },
    rarete: { type: Number, required: true },
    circonference: { type: Number, required: true },
    diametre_cime: { type: Number, required: true },
    cepee: { type: String, required: false, },
    url_fr: { type: String, required: true },
    url_nl: { type: String, required: true },
    geo_point_2d: {
        lon: { type: Number, required: true },
        lat: { type: Number, required: true },
    },
    geo_shape: {
        type: { type: String, required: true },
        geometry: {
            coordinates: { type: [Number], required: true },
            type: { type: String, required: true },
        },
        properties: { type: Object, required: false },
    },
});

const Tree = mongoose.model<ITree>('Tree', treeSchema);
export default Tree;
