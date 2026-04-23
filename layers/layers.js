var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelite_1 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Colector_2 = new ol.format.GeoJSON();
var features_Colector_2 = format_Colector_2.readFeatures(json_Colector_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colector_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_2.addFeatures(features_Colector_2);
var lyr_Colector_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_2, 
                style: style_Colector_2,
                popuplayertitle: 'Colector',
                interactive: false,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_2_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Colector_2_1.png" /> VERIFICADO<br />\
    <img src="styles/legend/Colector_2_2.png" /> SEMI VERIFICADO<br />' });
var format_Cmara_3 = new ol.format.GeoJSON();
var features_Cmara_3 = format_Cmara_3.readFeatures(json_Cmara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cmara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_3.addFeatures(features_Cmara_3);
var lyr_Cmara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_3, 
                style: style_Cmara_3,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_3_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Cmara_3_1.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_3_2.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_3_3.png" /> SELLADA<br />\
    <img src="styles/legend/Cmara_3_4.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Cmara_3_5.png" /> SIN ACCESO<br />\
    <img src="styles/legend/Cmara_3_6.png" /> ENTERRADA<br />\
    <img src="styles/legend/Cmara_3_7.png" /> NO INSPECCIONABLE<br />' });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_2,lyr_Cmara_3,],
                                fold: 'open',
                                title: 'Levantamiento'});
var group_Referencial = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Referencial'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelite_1.setVisible(true);lyr_Colector_2.setVisible(true);lyr_Cmara_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelite_1,group_Levantamiento];
lyr_Colector_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Cmara_3.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'COTA ENTRADA 1': 'COTA ENTRADA 1', 'COTA ENTRADA 2': 'COTA ENTRADA 2', 'COTA ENTRADA 3': 'COTA ENTRADA 3', 'COTA ENTRADA 4': 'COTA ENTRADA 4', 'COTA FONDO': 'COTA FONDO', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'COTA ENTRADA 5': 'COTA ENTRADA 5', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'PROFUNDIDAD ENTRADA 1': 'PROFUNDIDAD ENTRADA 1', 'PROFUNDIDAD ENTRADA 2': 'PROFUNDIDAD ENTRADA 2', 'PROFUNDIDAD ENTRADA 4': 'PROFUNDIDAD ENTRADA 4', 'PROFUNDIDAD ENTRADA 5': 'PROFUNDIDAD ENTRADA 5', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'PROFUNDIDAD SALIDA': 'PROFUNDIDAD SALIDA', 'PROFUNDIDAD ENTRADA 3': 'PROFUNDIDAD ENTRADA 3', 'DIAMETRO SALIDA': 'DIAMETRO SALIDA', 'FOTOGRAFIA HALLAZGO 1': 'FOTOGRAFIA HALLAZGO 1', 'FOTOGRAFIA HALLAZGO 2': 'FOTOGRAFIA HALLAZGO 2', 'FALLA ESTRUCTURAL': 'FALLA ESTRUCTURAL', 'DIAMETRO SALIDA 2': 'DIAMETRO SALIDA 2', 'EMBANCAMIENTO': 'EMBANCAMIENTO', 'REQUIERE LIMPIEZA?': 'REQUIERE LIMPIEZA?', 'DIAMETRO SALIDA 3': 'DIAMETRO SALIDA 3', 'COMUNA': 'COMUNA', 'ESTADO CANAL': 'ESTADO CANAL', 'ESTADO BANQUETA': 'ESTADO BANQUETA', 'NAPA': 'NAPA', 'ESTADO ESCALINES': 'ESTADO ESCALINES', 'PROFUNDIDAD SALIDA 2': 'PROFUNDIDAD SALIDA 2', 'TAPA METALICA': 'TAPA METALICA', 'DENTRO DOMICILIO': 'DENTRO DOMICILIO', 'TERRENO NATURAL INACCESIBLE': 'TERRENO NATURAL INACCESIBLE', 'DIFICULTAD FISICA': 'DIFICULTAD FISICA', 'SALIDA 3': 'SALIDA 3', 'E (m) RTK': 'E (m) RTK', 'N (m) RTK': 'N (m) RTK', 'COTA ANILLO (m) RTK': 'COTA ANILLO (m) RTK', 'PFODUNDIDAD FONDO (m)': 'PFODUNDIDAD FONDO (m)', 'COTA FONDO (m) RTK': 'COTA FONDO (m) RTK', 'E (m) SIRGAS 2025': 'E (m) SIRGAS 2025', 'N (m) SIRGAS 2025': 'N (m) SIRGAS 2025', 'COTA ANILLO (m) SIRGAS 2025': 'COTA ANILLO (m) SIRGAS 2025', 'COTA FONDO (m) SIRGAS 2025': 'COTA FONDO (m) SIRGAS 2025', });
lyr_Colector_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'TextEdit', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', });
lyr_Cmara_3.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'COTA ENTRADA 1': 'TextEdit', 'COTA ENTRADA 2': 'TextEdit', 'COTA ENTRADA 3': 'TextEdit', 'COTA ENTRADA 4': 'TextEdit', 'COTA FONDO': 'TextEdit', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'COTA ENTRADA 5': 'TextEdit', 'DIAMETRO ENTRADA 1': 'TextEdit', 'DIAMETRO ENTRADA 2': 'TextEdit', 'DIAMETRO ENTRADA 3': 'TextEdit', 'DIAMETRO ENTRADA 4': 'TextEdit', 'DIAMETRO ENTRADA 5': 'TextEdit', 'PROFUNDIDAD ENTRADA 1': 'TextEdit', 'PROFUNDIDAD ENTRADA 2': 'TextEdit', 'PROFUNDIDAD ENTRADA 4': 'TextEdit', 'PROFUNDIDAD ENTRADA 5': 'TextEdit', 'PROFUNDIDAD FONDO': 'TextEdit', 'PROFUNDIDAD SALIDA': 'TextEdit', 'PROFUNDIDAD ENTRADA 3': 'TextEdit', 'DIAMETRO SALIDA': 'TextEdit', 'FOTOGRAFIA HALLAZGO 1': 'ExternalResource', 'FOTOGRAFIA HALLAZGO 2': 'ExternalResource', 'FALLA ESTRUCTURAL': 'CheckBox', 'DIAMETRO SALIDA 2': 'TextEdit', 'EMBANCAMIENTO': 'TextEdit', 'REQUIERE LIMPIEZA?': 'CheckBox', 'DIAMETRO SALIDA 3': 'TextEdit', 'COMUNA': 'TextEdit', 'ESTADO CANAL': 'TextEdit', 'ESTADO BANQUETA': 'TextEdit', 'NAPA': 'TextEdit', 'ESTADO ESCALINES': 'TextEdit', 'PROFUNDIDAD SALIDA 2': 'TextEdit', 'TAPA METALICA': 'CheckBox', 'DENTRO DOMICILIO': 'CheckBox', 'TERRENO NATURAL INACCESIBLE': 'CheckBox', 'DIFICULTAD FISICA': 'CheckBox', 'SALIDA 3': 'TextEdit', 'E (m) RTK': 'TextEdit', 'N (m) RTK': 'TextEdit', 'COTA ANILLO (m) RTK': 'TextEdit', 'PFODUNDIDAD FONDO (m)': 'TextEdit', 'COTA FONDO (m) RTK': 'TextEdit', 'E (m) SIRGAS 2025': 'TextEdit', 'N (m) SIRGAS 2025': 'TextEdit', 'COTA ANILLO (m) SIRGAS 2025': 'TextEdit', 'COTA FONDO (m) SIRGAS 2025': 'TextEdit', });
lyr_Colector_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ESTADO': 'inline label - visible with data', 'DIAMETRO': 'inline label - visible with data', 'CAMARA_INICIO': 'inline label - visible with data', 'CAMARA_FINAL': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', });
lyr_Cmara_3.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'COTA ENTRADA 1': 'hidden field', 'COTA ENTRADA 2': 'hidden field', 'COTA ENTRADA 3': 'hidden field', 'COTA ENTRADA 4': 'hidden field', 'COTA FONDO': 'hidden field', 'ESCALINES': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'inline label - visible with data', 'COTA SALIDA': 'hidden field', 'COTA ENTRADA 5': 'hidden field', 'DIAMETRO ENTRADA 1': 'inline label - visible with data', 'DIAMETRO ENTRADA 2': 'inline label - visible with data', 'DIAMETRO ENTRADA 3': 'inline label - visible with data', 'DIAMETRO ENTRADA 4': 'inline label - visible with data', 'DIAMETRO ENTRADA 5': 'inline label - visible with data', 'PROFUNDIDAD ENTRADA 1': 'hidden field', 'PROFUNDIDAD ENTRADA 2': 'hidden field', 'PROFUNDIDAD ENTRADA 4': 'hidden field', 'PROFUNDIDAD ENTRADA 5': 'hidden field', 'PROFUNDIDAD FONDO': 'inline label - visible with data', 'PROFUNDIDAD SALIDA': 'hidden field', 'PROFUNDIDAD ENTRADA 3': 'hidden field', 'DIAMETRO SALIDA': 'inline label - visible with data', 'FOTOGRAFIA HALLAZGO 1': 'inline label - visible with data', 'FOTOGRAFIA HALLAZGO 2': 'inline label - visible with data', 'FALLA ESTRUCTURAL': 'hidden field', 'DIAMETRO SALIDA 2': 'inline label - visible with data', 'EMBANCAMIENTO': 'inline label - visible with data', 'REQUIERE LIMPIEZA?': 'hidden field', 'DIAMETRO SALIDA 3': 'inline label - visible with data', 'COMUNA': 'inline label - visible with data', 'ESTADO CANAL': 'inline label - visible with data', 'ESTADO BANQUETA': 'inline label - visible with data', 'NAPA': 'inline label - visible with data', 'ESTADO ESCALINES': 'inline label - visible with data', 'PROFUNDIDAD SALIDA 2': 'hidden field', 'TAPA METALICA': 'hidden field', 'DENTRO DOMICILIO': 'hidden field', 'TERRENO NATURAL INACCESIBLE': 'hidden field', 'DIFICULTAD FISICA': 'hidden field', 'SALIDA 3': 'hidden field', 'E (m) RTK': 'hidden field', 'N (m) RTK': 'hidden field', 'COTA ANILLO (m) RTK': 'hidden field', 'PFODUNDIDAD FONDO (m)': 'inline label - visible with data', 'COTA FONDO (m) RTK': 'hidden field', 'E (m) SIRGAS 2025': 'inline label - visible with data', 'N (m) SIRGAS 2025': 'inline label - visible with data', 'COTA ANILLO (m) SIRGAS 2025': 'inline label - always visible', 'COTA FONDO (m) SIRGAS 2025': 'inline label - visible with data', });
lyr_Cmara_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});