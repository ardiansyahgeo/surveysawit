var wms_layers = [];


        var lyr_BingSatelite_0 = new ol.layer.Tile({
            'title': 'Bing Satelite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=0&dir=dir_n'
            })
        });

        var lyr_ESRI_1 = new ol.layer.Tile({
            'title': 'ESRI',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_googlehybrid_2 = new ol.layer.Tile({
            'title': 'google  hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_KebunKelapaSawit_3 = new ol.format.GeoJSON();
var features_KebunKelapaSawit_3 = format_KebunKelapaSawit_3.readFeatures(json_KebunKelapaSawit_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KebunKelapaSawit_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KebunKelapaSawit_3.addFeatures(features_KebunKelapaSawit_3);
var lyr_KebunKelapaSawit_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KebunKelapaSawit_3, 
                style: style_KebunKelapaSawit_3,
                popuplayertitle: "Kebun Kelapa Sawit",
                interactive: true,
                title: '<img src="styles/legend/KebunKelapaSawit_3.png" /> Kebun Kelapa Sawit'
            });
var format_BatasKabupaten_4 = new ol.format.GeoJSON();
var features_BatasKabupaten_4 = format_BatasKabupaten_4.readFeatures(json_BatasKabupaten_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_4.addFeatures(features_BatasKabupaten_4);
var lyr_BatasKabupaten_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_4, 
                style: style_BatasKabupaten_4,
                popuplayertitle: "Batas Kabupaten",
                interactive: true,
                title: '<img src="styles/legend/BatasKabupaten_4.png" /> Batas Kabupaten'
            });
var format_TitikSampel_5 = new ol.format.GeoJSON();
var features_TitikSampel_5 = format_TitikSampel_5.readFeatures(json_TitikSampel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikSampel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikSampel_5.addFeatures(features_TitikSampel_5);
var lyr_TitikSampel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikSampel_5, 
                style: style_TitikSampel_5,
                popuplayertitle: "Titik Sampel",
                interactive: true,
                title: '<img src="styles/legend/TitikSampel_5.png" /> Titik Sampel'
            });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_BingSatelite_0,lyr_ESRI_1,lyr_googlehybrid_2,],
                                fold: "open",
                                title: "Basemap"});

lyr_BingSatelite_0.setVisible(false);lyr_ESRI_1.setVisible(false);lyr_googlehybrid_2.setVisible(true);lyr_KebunKelapaSawit_3.setVisible(true);lyr_BatasKabupaten_4.setVisible(true);lyr_TitikSampel_5.setVisible(true);
var layersList = [group_Basemap,lyr_KebunKelapaSawit_3,lyr_BatasKabupaten_4,lyr_TitikSampel_5];
lyr_KebunKelapaSawit_3.set('fieldAliases', {'sawit': 'sawit', 'ha': 'ha', });
lyr_BatasKabupaten_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TitikSampel_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'Kecamatan', 'WADMKD': 'Desa', 'WADMKK': 'kabupaten', 'WADMPR': 'Provinsi', 'koordinat': 'koordinat', 'RUTE': 'Rute', 'kode': 'kode', });
lyr_KebunKelapaSawit_3.set('fieldImages', {'sawit': 'TextEdit', 'ha': 'TextEdit', });
lyr_BatasKabupaten_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TitikSampel_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'koordinat': 'TextEdit', 'RUTE': 'TextEdit', 'kode': 'TextEdit', });
lyr_KebunKelapaSawit_3.set('fieldLabels', {'sawit': 'inline label - visible with data', 'ha': 'inline label - visible with data', });
lyr_BatasKabupaten_4.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_TitikSampel_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'koordinat': 'inline label - always visible', 'RUTE': 'inline label - always visible', 'kode': 'inline label - always visible', });
lyr_TitikSampel_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});