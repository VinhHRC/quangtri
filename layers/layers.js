var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_QT18102020_1 = new ol.format.GeoJSON();
var features_QT18102020_1 = format_QT18102020_1.readFeatures(json_QT18102020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QT18102020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QT18102020_1.addFeatures(features_QT18102020_1);
var lyr_QT18102020_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QT18102020_1, 
                style: style_QT18102020_1,
                popuplayertitle: 'QT18102020',
                interactive: true,
                title: '<img src="styles/legend/QT18102020_1.png" /> QT18102020'
            });
var format_QT28102024_2 = new ol.format.GeoJSON();
var features_QT28102024_2 = format_QT28102024_2.readFeatures(json_QT28102024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QT28102024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QT28102024_2.addFeatures(features_QT28102024_2);
var lyr_QT28102024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QT28102024_2, 
                style: style_QT28102024_2,
                popuplayertitle: 'QT28102024',
                interactive: true,
                title: '<img src="styles/legend/QT28102024_2.png" /> QT28102024'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_QT18102020_1.setVisible(true);lyr_QT28102024_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_QT18102020_1,lyr_QT28102024_2];
lyr_QT18102020_1.set('fieldAliases', {'label': 'label', });
lyr_QT28102024_2.set('fieldAliases', {'label': 'label', });
lyr_QT18102020_1.set('fieldImages', {'label': 'TextEdit', });
lyr_QT28102024_2.set('fieldImages', {'label': 'Range', });
lyr_QT18102020_1.set('fieldLabels', {'label': 'no label', });
lyr_QT28102024_2.set('fieldLabels', {'label': 'no label', });
lyr_QT28102024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});