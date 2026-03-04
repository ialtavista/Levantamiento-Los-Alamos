ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([632004.395391, 5829750.971386, 646291.711422, 5840068.160930]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Colector_1 = new ol.format.GeoJSON();
var features_Colector_1 = format_Colector_1.readFeatures(json_Colector_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Colector_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_1.addFeatures(features_Colector_1);
var lyr_Colector_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_1, 
                style: style_Colector_1,
                popuplayertitle: 'Colector',
                interactive: false,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_1_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Colector_1_1.png" /> VERIFICADO<br />' });
var format_Cmara_2 = new ol.format.GeoJSON();
var features_Cmara_2 = format_Cmara_2.readFeatures(json_Cmara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Cmara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_2.addFeatures(features_Cmara_2);
var lyr_Cmara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_2, 
                style: style_Cmara_2,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_2_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Cmara_2_1.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_2_2.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_2_3.png" /> SELLADA<br />\
    <img src="styles/legend/Cmara_2_4.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Cmara_2_5.png" /> SIN ACCESO<br />\
    <img src="styles/legend/Cmara_2_6.png" /> ENTERRADA<br />\
    <img src="styles/legend/Cmara_2_7.png" /> NO INSPECCIONABLE<br />' });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_1,lyr_Cmara_2,],
                                fold: 'open',
                                title: 'Levantamiento'});
var group_Referencial = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Referencial'});

lyr_GoogleSatelite_0.setVisible(true);lyr_Colector_1.setVisible(true);lyr_Cmara_2.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,group_Levantamiento];
lyr_Colector_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Cmara_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'COTA ENTRADA 1': 'COTA ENTRADA 1', 'COTA ENTRADA 2': 'COTA ENTRADA 2', 'COTA ENTRADA 3': 'COTA ENTRADA 3', 'COTA ENTRADA 4': 'COTA ENTRADA 4', 'COTA FONDO': 'COTA FONDO', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'COTA SALIDA': 'COTA SALIDA', 'COTA ENTRADA 5': 'COTA ENTRADA 5', 'DIAMETRO ENTRADA 1': 'DIAMETRO ENTRADA 1', 'DIAMETRO ENTRADA 2': 'DIAMETRO ENTRADA 2', 'DIAMETRO ENTRADA 3': 'DIAMETRO ENTRADA 3', 'DIAMETRO ENTRADA 4': 'DIAMETRO ENTRADA 4', 'DIAMETRO ENTRADA 5': 'DIAMETRO ENTRADA 5', 'PROFUNDIDAD ENTRADA 1': 'PROFUNDIDAD ENTRADA 1', 'PROFUNDIDAD ENTRADA 2': 'PROFUNDIDAD ENTRADA 2', 'PROFUNDIDAD ENTRADA 4': 'PROFUNDIDAD ENTRADA 4', 'PROFUNDIDAD ENTRADA 5': 'PROFUNDIDAD ENTRADA 5', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'PROFUNDIDAD SALIDA': 'PROFUNDIDAD SALIDA', 'PROFUNDIDAD ENTRADA 3': 'PROFUNDIDAD ENTRADA 3', 'DIAMETRO SALIDA': 'DIAMETRO SALIDA', 'FOTOGRAFIA HALLAZGO 1': 'FOTOGRAFIA HALLAZGO 1', 'FOTOGRAFIA HALLAZGO 2': 'FOTOGRAFIA HALLAZGO 2', });
lyr_Colector_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'TextEdit', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', });
lyr_Cmara_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'COTA ENTRADA 1': 'TextEdit', 'COTA ENTRADA 2': 'TextEdit', 'COTA ENTRADA 3': 'TextEdit', 'COTA ENTRADA 4': 'TextEdit', 'COTA FONDO': 'TextEdit', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'COTA SALIDA': 'TextEdit', 'COTA ENTRADA 5': 'TextEdit', 'DIAMETRO ENTRADA 1': 'TextEdit', 'DIAMETRO ENTRADA 2': 'TextEdit', 'DIAMETRO ENTRADA 3': 'TextEdit', 'DIAMETRO ENTRADA 4': 'TextEdit', 'DIAMETRO ENTRADA 5': 'TextEdit', 'PROFUNDIDAD ENTRADA 1': 'TextEdit', 'PROFUNDIDAD ENTRADA 2': 'TextEdit', 'PROFUNDIDAD ENTRADA 4': 'TextEdit', 'PROFUNDIDAD ENTRADA 5': 'TextEdit', 'PROFUNDIDAD FONDO': 'TextEdit', 'PROFUNDIDAD SALIDA': 'TextEdit', 'PROFUNDIDAD ENTRADA 3': 'TextEdit', 'DIAMETRO SALIDA': 'TextEdit', 'FOTOGRAFIA HALLAZGO 1': 'ExternalResource', 'FOTOGRAFIA HALLAZGO 2': 'ExternalResource', });
lyr_Colector_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', 'ESTADO': 'no label', 'DIAMETRO': 'no label', 'CAMARA_INICIO': 'no label', 'CAMARA_FINAL': 'no label', 'OBSERVACIONES': 'no label', });
lyr_Cmara_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'COTA ENTRADA 1': 'hidden field', 'COTA ENTRADA 2': 'hidden field', 'COTA ENTRADA 3': 'hidden field', 'COTA ENTRADA 4': 'hidden field', 'COTA FONDO': 'hidden field', 'ESCALINES': 'hidden field', 'OBSERVACIONES': 'hidden field', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'hidden field', 'COTA SALIDA': 'hidden field', 'COTA ENTRADA 5': 'hidden field', 'DIAMETRO ENTRADA 1': 'hidden field', 'DIAMETRO ENTRADA 2': 'hidden field', 'DIAMETRO ENTRADA 3': 'hidden field', 'DIAMETRO ENTRADA 4': 'hidden field', 'DIAMETRO ENTRADA 5': 'hidden field', 'PROFUNDIDAD ENTRADA 1': 'hidden field', 'PROFUNDIDAD ENTRADA 2': 'hidden field', 'PROFUNDIDAD ENTRADA 4': 'hidden field', 'PROFUNDIDAD ENTRADA 5': 'hidden field', 'PROFUNDIDAD FONDO': 'hidden field', 'PROFUNDIDAD SALIDA': 'hidden field', 'PROFUNDIDAD ENTRADA 3': 'hidden field', 'DIAMETRO SALIDA': 'hidden field', 'FOTOGRAFIA HALLAZGO 1': 'hidden field', 'FOTOGRAFIA HALLAZGO 2': 'hidden field', });
lyr_Cmara_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});