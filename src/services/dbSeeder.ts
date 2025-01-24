import Tree from '../models/tree.model';
import BD from '..//models/db.model';

export const insertTreeData = async (data: any) => {
    try {
        // Optionnel : Supprimer les données existantes avant l'insertion (si nécessaire)
        await Tree.deleteMany({});
        console.log('All existing trees have been deleted.');
        const validTrees = data.results.filter((tree: any) => tree.id_arbres_cms);
        const treesToInsert = validTrees.map((tree: any) => ({
            // _id: tree.id_arbres_cms,
            nom_fr: tree.nom_fr,
            nom_nl: tree.nom_nl,
            nom_la: tree.nom_la,
            firstimage: tree.firstimage,
            statuts_fr: tree.statuts_fr,
            statuts_nl: tree.statuts_nl,
            rarete: parseFloat(tree.rarete),
            circonference: parseFloat(tree.circonference),
            diametre_cime: parseFloat(tree.diametre_cime),
            cepee: tree.cepee || null,
            url_fr: tree.url_fr,
            url_nl: tree.url_nl,
            geo_point_2d: {
                lon: tree.geo_point_2d.lon,
                lat: tree.geo_point_2d.lat,
            },
            geo_shape: tree.geo_shape,
        }));

        // Insertion des arbres dans la base de données
        await Tree.insertMany(treesToInsert, { ordered: false });
        console.log(`Successfully inserted ${treesToInsert.length} trees.`);

    } catch (error) {
        console.error('Error inserting tree data:', error);
    }
};



export const insertBData = async (data: any) => {
    try {
        // Optionnel : Supprimer toutes les BD existantes avant l'insertion
        await BD.deleteMany({});
        console.log('All existing BDs have been deleted.');

        // Filtrer les BD valides (ceux qui ont un id_bd défini)
        const validBDs = data.results.filter((bd: any) => bd.id_bd);

        if (validBDs.length === 0) {
            console.log('No valid BDs to insert.');
            return;
        }

        // Préparer les BD à insérer dans la base de données
        const bdsToInsert = validBDs.map((bd: any) => ({
            nom_fr: bd.nom_fr,
            nom_en: bd.nom_en,
            auteur: bd.auteur,
            année: parseInt(bd.année, 10),  // S'assurer que l'année est un entier
            genre: bd.genre,
            image_url: bd.image_url,
            description: bd.description,
            url_fr: bd.url_fr,
            url_en: bd.url_en,
        }));

        // Insertion des BD dans la base de données
        await BD.insertMany(bdsToInsert, { ordered: false });
        console.log(`Successfully inserted ${bdsToInsert.length} BDs.`);
    } catch (error) {
        console.error('Error inserting BD data:', error);
    }
};

