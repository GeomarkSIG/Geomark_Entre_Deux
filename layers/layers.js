var wms_layers = [];

var lyr_MNT_EntreDeux_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MNT_EntreDeux<br />\
    <img src="styles/legend/MNT_EntreDeux_0_0.png" /> 2,0000<br />\
    <img src="styles/legend/MNT_EntreDeux_0_1.png" /> 100,0000<br />\
    <img src="styles/legend/MNT_EntreDeux_0_2.png" /> 200,0000<br />\
    <img src="styles/legend/MNT_EntreDeux_0_3.png" /> 400,0000<br />\
    <img src="styles/legend/MNT_EntreDeux_0_4.png" /> 500,0000<br />\
    <img src="styles/legend/MNT_EntreDeux_0_5.png" /> 700,0000<br />\
    <img src="styles/legend/MNT_EntreDeux_0_6.png" /> 1000,0000<br />\
    <img src="styles/legend/MNT_EntreDeux_0_7.png" /> 1200,0000<br />\
    <img src="styles/legend/MNT_EntreDeux_0_8.png" /> 1500,0000<br />\
    <img src="styles/legend/MNT_EntreDeux_0_9.png" /> 1700,0000<br />\
    <img src="styles/legend/MNT_EntreDeux_0_10.png" /> 2000,0000<br />\
    <img src="styles/legend/MNT_EntreDeux_0_11.png" /> 2100,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MNT_EntreDeux_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6173222.366060, -2425993.977097, 6181849.626596, -2407983.195315]
        })
    });
var format_ExplepartieldeMAJbatiments2026_1 = new ol.format.GeoJSON();
var features_ExplepartieldeMAJbatiments2026_1 = format_ExplepartieldeMAJbatiments2026_1.readFeatures(json_ExplepartieldeMAJbatiments2026_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExplepartieldeMAJbatiments2026_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExplepartieldeMAJbatiments2026_1.addFeatures(features_ExplepartieldeMAJbatiments2026_1);
var lyr_ExplepartieldeMAJbatiments2026_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExplepartieldeMAJbatiments2026_1, 
                style: style_ExplepartieldeMAJbatiments2026_1,
                popuplayertitle: 'Exple partiel de MAJ batiments 2026',
                interactive: false,
                title: '<img src="styles/legend/ExplepartieldeMAJbatiments2026_1.png" /> Exple partiel de MAJ batiments 2026'
            });
var format_batiments_EntreDeux_2 = new ol.format.GeoJSON();
var features_batiments_EntreDeux_2 = format_batiments_EntreDeux_2.readFeatures(json_batiments_EntreDeux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batiments_EntreDeux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batiments_EntreDeux_2.addFeatures(features_batiments_EntreDeux_2);
var lyr_batiments_EntreDeux_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batiments_EntreDeux_2, 
                style: style_batiments_EntreDeux_2,
                popuplayertitle: 'batiments_EntreDeux',
                interactive: false,
                title: '<img src="styles/legend/batiments_EntreDeux_2.png" /> batiments_EntreDeux'
            });
var format_commune_EntreDeux_3 = new ol.format.GeoJSON();
var features_commune_EntreDeux_3 = format_commune_EntreDeux_3.readFeatures(json_commune_EntreDeux_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_commune_EntreDeux_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commune_EntreDeux_3.addFeatures(features_commune_EntreDeux_3);
var lyr_commune_EntreDeux_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_commune_EntreDeux_3, 
                style: style_commune_EntreDeux_3,
                popuplayertitle: 'commune_EntreDeux',
                interactive: false,
                title: 'commune_EntreDeux'
            });
var format_PNR_EntreDeux_4 = new ol.format.GeoJSON();
var features_PNR_EntreDeux_4 = format_PNR_EntreDeux_4.readFeatures(json_PNR_EntreDeux_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PNR_EntreDeux_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNR_EntreDeux_4.addFeatures(features_PNR_EntreDeux_4);
var lyr_PNR_EntreDeux_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNR_EntreDeux_4, 
                style: style_PNR_EntreDeux_4,
                popuplayertitle: 'PNR_EntreDeux',
                interactive: false,
    title: 'PNR_EntreDeux<br />\
    <img src="styles/legend/PNR_EntreDeux_4_0.png" /> Coeur du Parc national<br />\
    <img src="styles/legend/PNR_EntreDeux_4_1.png" /> Aire d\'Adhésion<br />\
    <img src="styles/legend/PNR_EntreDeux_4_2.png" /> Aire ouverte à l\'Adhésion<br />' });
var format_Hydro_EntreDeux_5 = new ol.format.GeoJSON();
var features_Hydro_EntreDeux_5 = format_Hydro_EntreDeux_5.readFeatures(json_Hydro_EntreDeux_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydro_EntreDeux_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydro_EntreDeux_5.addFeatures(features_Hydro_EntreDeux_5);
var lyr_Hydro_EntreDeux_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydro_EntreDeux_5, 
                style: style_Hydro_EntreDeux_5,
                popuplayertitle: 'Hydro_EntreDeux',
                interactive: false,
                title: '<img src="styles/legend/Hydro_EntreDeux_5.png" /> Hydro_EntreDeux'
            });
var group_Environnement = new ol.layer.Group({
                                layers: [lyr_PNR_EntreDeux_4,lyr_Hydro_EntreDeux_5,],
                                fold: 'close',
                                title: 'Environnement'});
var group_Administratif = new ol.layer.Group({
                                layers: [lyr_ExplepartieldeMAJbatiments2026_1,lyr_batiments_EntreDeux_2,lyr_commune_EntreDeux_3,],
                                fold: 'open',
                                title: 'Administratif'});
var group_Fond_de_plan = new ol.layer.Group({
                                layers: [lyr_MNT_EntreDeux_0,],
                                fold: 'open',
                                title: 'Fond_de_plan'});

lyr_MNT_EntreDeux_0.setVisible(true);lyr_ExplepartieldeMAJbatiments2026_1.setVisible(true);lyr_batiments_EntreDeux_2.setVisible(true);lyr_commune_EntreDeux_3.setVisible(true);lyr_PNR_EntreDeux_4.setVisible(true);lyr_Hydro_EntreDeux_5.setVisible(true);
var layersList = [group_Fond_de_plan,group_Administratif,group_Environnement];
lyr_ExplepartieldeMAJbatiments2026_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'commune': 'commune', 'nom': 'nom', 'type': 'type', 'created': 'created', 'updated': 'updated', });
lyr_batiments_EntreDeux_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'commune': 'commune', 'nom': 'nom', 'type': 'type', 'created': 'created', 'updated': 'updated', });
lyr_commune_EntreDeux_3.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', });
lyr_PNR_EntreDeux_4.set('fieldAliases', {'Type': 'Type', 'Code_type': 'Code_type', 'Surface': 'Surface', 'Surf_ha': 'Surf_ha', 'Decret': 'Decret', });
lyr_Hydro_EntreDeux_5.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'FICTIF': 'FICTIF', 'ETAT': 'ETAT', 'POS_SOL': 'POS_SOL', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'FOSSE': 'FOSSE', 'NAVIGABL': 'NAVIGABL', 'SALINITE': 'SALINITE', 'NUM_ORDRE': 'NUM_ORDRE', 'CLA_ORDRE': 'CLA_ORDRE', 'ORIGINE': 'ORIGINE', 'PER_ORDRE': 'PER_ORDRE', 'SENS_ECOUL': 'SENS_ECOUL', 'RES_COULAN': 'RES_COULAN', 'TRACECONNU': 'TRACECONNU', 'LARGEUR': 'LARGEUR', 'BRAS': 'BRAS', 'COMMENT': 'COMMENT', 'CODE_CARTH': 'CODE_CARTH', 'IPE': 'IPE', 'ID_IPE': 'ID_IPE', 'ID_C_EAU': 'ID_C_EAU', 'ID_ND_INI': 'ID_ND_INI', 'ID_ND_FIN': 'ID_ND_FIN', 'ID_S_HYDRO': 'ID_S_HYDRO', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_ExplepartieldeMAJbatiments2026_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'commune': 'TextEdit', 'nom': 'TextEdit', 'type': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', });
lyr_batiments_EntreDeux_2.set('fieldImages', {'ogc_fid': 'TextEdit', 'commune': 'TextEdit', 'nom': 'TextEdit', 'type': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', });
lyr_commune_EntreDeux_3.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'NOM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'POPULATION': 'Range', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'SIREN_EPCI': 'TextEdit', });
lyr_PNR_EntreDeux_4.set('fieldImages', {'Type': 'TextEdit', 'Code_type': 'Range', 'Surface': 'TextEdit', 'Surf_ha': 'TextEdit', 'Decret': 'TextEdit', });
lyr_Hydro_EntreDeux_5.set('fieldImages', {'ID': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'CODE_PAYS': 'TextEdit', 'NATURE': 'TextEdit', 'FICTIF': 'TextEdit', 'ETAT': 'TextEdit', 'POS_SOL': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'SRC_COORD': 'TextEdit', 'SRC_ALTI': 'TextEdit', 'STATUT': 'TextEdit', 'PERSISTANC': 'TextEdit', 'FOSSE': 'TextEdit', 'NAVIGABL': 'TextEdit', 'SALINITE': 'TextEdit', 'NUM_ORDRE': 'TextEdit', 'CLA_ORDRE': 'TextEdit', 'ORIGINE': 'TextEdit', 'PER_ORDRE': 'TextEdit', 'SENS_ECOUL': 'TextEdit', 'RES_COULAN': 'TextEdit', 'TRACECONNU': 'TextEdit', 'LARGEUR': 'TextEdit', 'BRAS': 'TextEdit', 'COMMENT': 'TextEdit', 'CODE_CARTH': 'TextEdit', 'IPE': 'TextEdit', 'ID_IPE': 'TextEdit', 'ID_C_EAU': 'TextEdit', 'ID_ND_INI': 'TextEdit', 'ID_ND_FIN': 'TextEdit', 'ID_S_HYDRO': 'TextEdit', 'ID_ENT_TR': 'TextEdit', 'NOM_C_EAU': 'TextEdit', 'NOM_ENT_TR': 'TextEdit', });
lyr_ExplepartieldeMAJbatiments2026_1.set('fieldLabels', {'ogc_fid': 'no label', 'commune': 'no label', 'nom': 'no label', 'type': 'no label', 'created': 'no label', 'updated': 'no label', });
lyr_batiments_EntreDeux_2.set('fieldLabels', {'ogc_fid': 'no label', 'commune': 'no label', 'nom': 'no label', 'type': 'no label', 'created': 'no label', 'updated': 'no label', });
lyr_commune_EntreDeux_3.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'NOM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', });
lyr_PNR_EntreDeux_4.set('fieldLabels', {'Type': 'no label', 'Code_type': 'no label', 'Surface': 'no label', 'Surf_ha': 'no label', 'Decret': 'no label', });
lyr_Hydro_EntreDeux_5.set('fieldLabels', {'ID': 'no label', 'CODE_HYDRO': 'no label', 'CODE_PAYS': 'no label', 'NATURE': 'no label', 'FICTIF': 'no label', 'ETAT': 'no label', 'POS_SOL': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'SOURCE': 'no label', 'ID_SOURCE': 'no label', 'ACQU_PLANI': 'no label', 'PREC_PLANI': 'no label', 'ACQU_ALTI': 'no label', 'PREC_ALTI': 'no label', 'SRC_COORD': 'no label', 'SRC_ALTI': 'no label', 'STATUT': 'no label', 'PERSISTANC': 'no label', 'FOSSE': 'no label', 'NAVIGABL': 'no label', 'SALINITE': 'no label', 'NUM_ORDRE': 'no label', 'CLA_ORDRE': 'no label', 'ORIGINE': 'no label', 'PER_ORDRE': 'no label', 'SENS_ECOUL': 'no label', 'RES_COULAN': 'no label', 'TRACECONNU': 'no label', 'LARGEUR': 'no label', 'BRAS': 'no label', 'COMMENT': 'no label', 'CODE_CARTH': 'no label', 'IPE': 'no label', 'ID_IPE': 'no label', 'ID_C_EAU': 'no label', 'ID_ND_INI': 'no label', 'ID_ND_FIN': 'no label', 'ID_S_HYDRO': 'no label', 'ID_ENT_TR': 'no label', 'NOM_C_EAU': 'no label', 'NOM_ENT_TR': 'no label', });
lyr_Hydro_EntreDeux_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});