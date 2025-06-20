var wms_layers = [];


        var lyr_Satellitehybrid_0 = new ol.layer.Tile({
            'title': 'Satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Googlemap_1 = new ol.layer.Tile({
            'title': 'Google map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_QT18102020_2 = new ol.format.GeoJSON();
var features_QT18102020_2 = format_QT18102020_2.readFeatures(json_QT18102020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QT18102020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QT18102020_2.addFeatures(features_QT18102020_2);
var lyr_QT18102020_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QT18102020_2, 
                style: style_QT18102020_2,
                popuplayertitle: 'QT18102020',
                interactive: true,
                title: '<img src="styles/legend/QT18102020_2.png" /> QT18102020'
            });
var format_QT28102024_3 = new ol.format.GeoJSON();
var features_QT28102024_3 = format_QT28102024_3.readFeatures(json_QT28102024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QT28102024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QT28102024_3.addFeatures(features_QT28102024_3);
var lyr_QT28102024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QT28102024_3, 
                style: style_QT28102024_3,
                popuplayertitle: 'QT28102024',
                interactive: true,
                title: '<img src="styles/legend/QT28102024_3.png" /> QT28102024'
            });

lyr_Satellitehybrid_0.setVisible(true);lyr_Googlemap_1.setVisible(true);lyr_QT18102020_2.setVisible(true);lyr_QT28102024_3.setVisible(true);
var layersList = [lyr_Satellitehybrid_0,lyr_Googlemap_1,lyr_QT18102020_2,lyr_QT28102024_3];
lyr_QT18102020_2.set('fieldAliases', {'label': 'label', });
lyr_QT28102024_3.set('fieldAliases', {'label': 'label', });
lyr_QT18102020_2.set('fieldImages', {'label': 'TextEdit', });
lyr_QT28102024_3.set('fieldImages', {'label': 'Range', });
lyr_QT18102020_2.set('fieldLabels', {'label': 'no label', });
lyr_QT28102024_3.set('fieldLabels', {'label': 'no label', });
lyr_QT28102024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});