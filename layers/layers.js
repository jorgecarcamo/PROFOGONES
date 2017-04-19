var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_ProyectoMirador190417 = new ol.format.GeoJSON();
var features_ProyectoMirador190417 = format_ProyectoMirador190417.readFeatures(geojson_ProyectoMirador190417, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectoMirador190417 = new ol.source.Vector();
jsonSource_ProyectoMirador190417.addFeatures(features_ProyectoMirador190417);var lyr_ProyectoMirador190417 = new ol.layer.Vector({
                source:jsonSource_ProyectoMirador190417, 
                style: style_ProyectoMirador190417,
                title: "Proyecto Mirador 19.04.17"
            });

lyr_ProyectoMirador190417.setVisible(true);
var layersList = [baseLayer,lyr_ProyectoMirador190417];
lyr_ProyectoMirador190417.set('fieldAliases', {'Lote': 'Lote', 'Tipo': 'Tipo', 'Tipo_X': 'Tipo_X', 'Tipo_Y': 'Tipo_Y', 'Depto': 'Depto', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Cliente': 'Cliente', 'GÃ©nero': 'GÃ©nero', 'ID': 'ID', 'Edad': 'Edad', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_ProyectoMirador190417.set('fieldImages', {'Lote': 'TextEdit', 'Tipo': 'TextEdit', 'Tipo_X': 'TextEdit', 'Tipo_Y': 'TextEdit', 'Depto': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Cliente': 'TextEdit', 'GÃ©nero': 'TextEdit', 'ID': 'TextEdit', 'Edad': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_ProyectoMirador190417.set('fieldLabels', {'Lote': 'header label', 'Tipo': 'header label', 'Tipo_X': 'no label', 'Tipo_Y': 'no label', 'Depto': 'header label', 'Municipio': 'header label', 'Comunidad': 'header label', 'Cliente': 'header label', 'GÃ©nero': 'header label', 'ID': 'header label', 'Edad': 'header label', 'Latitud': 'header label', 'Longitud': 'header label', });
