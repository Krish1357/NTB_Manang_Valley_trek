var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Clinic_1 = new ol.format.GeoJSON();
var features_Clinic_1 = format_Clinic_1.readFeatures(json_Clinic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clinic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clinic_1.addFeatures(features_Clinic_1);
var lyr_Clinic_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clinic_1, 
                style: style_Clinic_1,
                popuplayertitle: 'Clinic',
                interactive: true,
                title: '<img src="styles/legend/Clinic_1.png" /> Clinic'
            });
var format_Helipads_2 = new ol.format.GeoJSON();
var features_Helipads_2 = format_Helipads_2.readFeatures(json_Helipads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Helipads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Helipads_2.addFeatures(features_Helipads_2);
var lyr_Helipads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Helipads_2, 
                style: style_Helipads_2,
                popuplayertitle: 'Helipads',
                interactive: false,
                title: '<img src="styles/legend/Helipads_2.png" /> Helipads'
            });
var format_Airport_3 = new ol.format.GeoJSON();
var features_Airport_3 = format_Airport_3.readFeatures(json_Airport_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airport_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airport_3.addFeatures(features_Airport_3);
var lyr_Airport_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airport_3, 
                style: style_Airport_3,
                popuplayertitle: 'Airport',
                interactive: false,
                title: '<img src="styles/legend/Airport_3.png" /> Airport'
            });
var format_Peak_4 = new ol.format.GeoJSON();
var features_Peak_4 = format_Peak_4.readFeatures(json_Peak_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peak_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peak_4.addFeatures(features_Peak_4);
var lyr_Peak_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peak_4, 
                style: style_Peak_4,
                popuplayertitle: 'Peak',
                interactive: false,
                title: '<img src="styles/legend/Peak_4.png" /> Peak'
            });
var format_Hospitals_5 = new ol.format.GeoJSON();
var features_Hospitals_5 = format_Hospitals_5.readFeatures(json_Hospitals_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitals_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitals_5.addFeatures(features_Hospitals_5);
var lyr_Hospitals_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospitals_5, 
                style: style_Hospitals_5,
                popuplayertitle: 'Hospitals',
                interactive: true,
                title: '<img src="styles/legend/Hospitals_5.png" /> Hospitals'
            });
var format_PrimaryHealthServices_6 = new ol.format.GeoJSON();
var features_PrimaryHealthServices_6 = format_PrimaryHealthServices_6.readFeatures(json_PrimaryHealthServices_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimaryHealthServices_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimaryHealthServices_6.addFeatures(features_PrimaryHealthServices_6);
var lyr_PrimaryHealthServices_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimaryHealthServices_6, 
                style: style_PrimaryHealthServices_6,
                popuplayertitle: 'Primary Health Services',
                interactive: true,
                title: '<img src="styles/legend/PrimaryHealthServices_6.png" /> Primary Health Services'
            });
var format_HotelsResorts_7 = new ol.format.GeoJSON();
var features_HotelsResorts_7 = format_HotelsResorts_7.readFeatures(json_HotelsResorts_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HotelsResorts_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HotelsResorts_7.addFeatures(features_HotelsResorts_7);
var lyr_HotelsResorts_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HotelsResorts_7, 
                style: style_HotelsResorts_7,
                popuplayertitle: 'Hotels & Resorts',
                interactive: true,
                title: '<img src="styles/legend/HotelsResorts_7.png" /> Hotels & Resorts'
            });
var format_RestPointManangValleyTrek_8 = new ol.format.GeoJSON();
var features_RestPointManangValleyTrek_8 = format_RestPointManangValleyTrek_8.readFeatures(json_RestPointManangValleyTrek_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestPointManangValleyTrek_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestPointManangValleyTrek_8.addFeatures(features_RestPointManangValleyTrek_8);
var lyr_RestPointManangValleyTrek_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RestPointManangValleyTrek_8, 
                style: style_RestPointManangValleyTrek_8,
                popuplayertitle: 'Rest Point Manang Valley Trek',
                interactive: false,
                title: '<img src="styles/legend/RestPointManangValleyTrek_8.png" /> Rest Point Manang Valley Trek'
            });
var format_ManangValleyTrekRoute_9 = new ol.format.GeoJSON();
var features_ManangValleyTrekRoute_9 = format_ManangValleyTrekRoute_9.readFeatures(json_ManangValleyTrekRoute_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ManangValleyTrekRoute_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ManangValleyTrekRoute_9.addFeatures(features_ManangValleyTrekRoute_9);
var lyr_ManangValleyTrekRoute_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ManangValleyTrekRoute_9, 
                style: style_ManangValleyTrekRoute_9,
                popuplayertitle: 'Manang Valley Trek Route',
                interactive: false,
    title: 'Manang Valley Trek Route<br />\
    <img src="styles/legend/ManangValleyTrekRoute_9_0.png" /> Trekking<br />\
    <img src="styles/legend/ManangValleyTrekRoute_9_1.png" /> Highway<br />\
    <img src="styles/legend/ManangValleyTrekRoute_9_2.png" /> Major Road<br />\
    <img src="styles/legend/ManangValleyTrekRoute_9_3.png" /> Other<br />' });
var group_Dolpo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Dolpo'});
var group_DolpoTrek = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Dolpo Trek'});
var group_Mustang = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Mustang'});
var group_MustangTrek = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mustang Trek'});
var group_Everest = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Everest'});
var group_EverestTrek = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Everest Trek'});
var group_LangtangTrek = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Langtang Trek'});
var group_Langtang = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Langtang'});
var group_ManaskluTrek = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Manasklu Trek'});
var group_Manaslu = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Manaslu'});
var group_AnnapurnaTrek = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Annapurna Trek'});
var group_Annapurna = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Annapurna'});
var group_ManangValleyTrek = new ol.layer.Group({
                                layers: [lyr_RestPointManangValleyTrek_8,lyr_ManangValleyTrekRoute_9,],
                                fold: 'open',
                                title: 'Manang Valley Trek'});
var group_Manang = new ol.layer.Group({
                                layers: [lyr_Clinic_1,lyr_Helipads_2,lyr_Airport_3,lyr_Peak_4,lyr_Hospitals_5,lyr_PrimaryHealthServices_6,lyr_HotelsResorts_7,],
                                fold: 'open',
                                title: 'Manang'});
var group_KanchengungaTrek = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Kanchengunga Trek'});
var group_Kanchenjunga_Services = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Kanchenjunga_Services'});

lyr_OSMStandard_0.setVisible(true);lyr_Clinic_1.setVisible(true);lyr_Helipads_2.setVisible(true);lyr_Airport_3.setVisible(true);lyr_Peak_4.setVisible(true);lyr_Hospitals_5.setVisible(true);lyr_PrimaryHealthServices_6.setVisible(true);lyr_HotelsResorts_7.setVisible(true);lyr_RestPointManangValleyTrek_8.setVisible(true);lyr_ManangValleyTrekRoute_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Manang,group_ManangValleyTrek];
lyr_Clinic_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'Name', 'Source': 'Source', });
lyr_Helipads_2.set('fieldAliases', {'HELI_PT_ID': 'HELI_PT_ID', 'HELIPAD_NA': 'HELIPAD_NA', 'DISTRICT': 'DISTRICT', 'LATITUDE_I': 'LATITUDE_I', 'LONGITUDE_': 'LONGITUDE_', 'HEIGHT_IN_': 'HEIGHT_IN_', 'HEIGHT_IN1': 'HEIGHT_IN1', 'Source': 'Source', });
lyr_Airport_3.set('fieldAliases', {'Province': 'Province', 'Y_CORDINAT': 'Y_CORDINAT', 'X_CORDINAT': 'X_CORDINAT', 'AP_NAME': 'Airport Name', 'ADDRESS': 'Address', 'AP_CAT': 'Airport Category', 'MAG_VER': 'MAG_VER', 'start_x': 'start_x', 'start_y': 'start_y', 'type_1': 'type_1', 'Reference': 'Reference', });
lyr_Peak_4.set('fieldAliases', {'FID_1': 'FID_1', 'PEAK_NAME': 'PEAK_NAME', 'LAT': 'LAT', 'LONG': 'LONG', 'ELV': 'ELV', 'Reference': 'Reference', 'DIST': 'DIST', 'LOC_LV': 'LOC_LV', });
lyr_Hospitals_5.set('fieldAliases', {'Province': 'Province', 'ID': 'ID', 'UID': 'UID', 'NAM': 'Name', 'DIST': 'DIST', 'LOC_LV': 'LOC_LV', 'TOL': 'TOL', 'WRD': 'WRD', 'LAT': 'LAT', 'LONG': 'LONG', 'ALT': 'ALT', 'NO_BDS': 'Number of Bed', 'NO_DOC': 'Number of Doctors', 'NO_NRSS': 'NO_NRSS', 'ICU': 'ICU', 'Ventilator': 'Ventilator', 'Surgery': 'Surgery', 'OTH_FCT': 'OTH_FCT', 'Pharmacy': 'Pharmacy', 'V': 'V', 'S': 'S', 'I': 'I', });
lyr_PrimaryHealthServices_6.set('fieldAliases', {'FCODE': 'FCODE', 'BFU': 'BFU', 'FEATURES': 'Category', 'DIST_NAME': 'DIST_NAME', 'Source': 'Source', });
lyr_HotelsResorts_7.set('fieldAliases', {'PROVINCE': 'PROVINCE', 'ID': 'ID', 'UID': 'UID', 'NAM': 'Name', 'DIST': 'DIST', 'LOC_LV': 'LOC_LV', 'TOL': 'TOL', 'WRD': 'WRD', 'LAT': 'LAT', 'LONG': 'LONG', 'ALT': 'ALT', 'TYP': 'Hotel Type', 'SRM': 'SRM', 'DRM': 'DRM', 'DMTY': 'DMTY', 'DLXR': 'DLXR', 'KRM': 'KRM', 'ORM': 'ORM', 'TBDS': 'TBDS', 'CPN': 'CPN', 'VPN': 'VPN', 'HPA': 'HPA', 'G_CON': 'G_CON', 'E_CON': 'E_CON', 'K_CON': 'K_CON', 'FW_CON': 'FW_CON', 'OTH_CON': 'OTH_CON', 'EWMF': 'EWMF', 'LP_CON': 'LP_CON', 'IF_CON': 'IF_CON', 'CNT_INT': 'CNT_INT', 'HLL': 'HLL', 'KOSHR': 'KOSHR', 'VGN': 'VGN', 'FT_STFF': 'FT_STFF', 'SNL_STFF': 'SNL_STFF', 'PLS_STOR': 'PLS_STOR', 'OTH_TYP': 'OTH_TYP', 'SPA': 'SPA', 'RST_BR': 'Resturant/Bar', 'PRK': 'PRK', 'SMG_PUL': 'Swimming Pool', 'SRTY': 'SRTY', 'SVNR_SHP': 'SVNR_SHP', 'ETMT': 'ETMT', 'S_HLL': 'Hall', 'FTNS_CNTR': 'FTNS_CNTR', 'GOLF': 'GOLF', 'LIBRY': 'LIBRY', 'CASINO': 'CASINO', 'YGA_MDT': 'YGA_MDT', 'FCT_OTH': 'FCT_OTH', 'THR_RMS': 'THR_RMS', 'LNDRY': 'LNDRY', 'TOR_EXRSN': 'TOR_EXRSN', 'AP_TFR': 'AP_TFR', 'MD_DOC': 'MD_DOC', 'MN_EXC': 'MN_EXC', 'TOR_GD': 'TOR_GD', 'HS_OTH': 'HS_OTH', 'WEB_HFCTNP': 'WEB_HFCTNP', 'WEB_TICL': 'WEB_TICL', 'ONL_RVN': 'ONL_RVN', 'DP_FCT': 'DP_FCT', 'PRM_SM': 'PRM_SM', 'DTU_OTH': 'DTU_OTH', 'TPT_PR': 'TPT_PR', 'DW_PR': 'DW_PR', 'WM_PR': 'WM_PR', 'SEC_PR': 'SEC_PR', 'NET_PR': 'NET_PR', 'TOR_SCN_PR': 'TOR_SCN_PR', 'HC_CN_PR': 'HC_CN_PR', 'ECT_PR': 'ECT_PR', 'PR_OTH': 'PR_OTH', 'OTH_PR': 'OTH_PR', 'PLS_STOR_O': 'PLS_STOR_O', 'TYPE_01': 'TYPE_01', });
lyr_RestPointManangValleyTrek_8.set('fieldAliases', {'id': 'id', 'Day': 'Day', 'Name': 'Name', 'Altitude': 'Altitude', 'Remarks': 'Remarks', });
lyr_ManangValleyTrekRoute_9.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'trekking': 'trekking', 'use': 'use', 'Trek_sect': 'Trek_sect', 'length': 'length', 'Length_lab': 'Length_lab', });
lyr_Clinic_1.set('fieldImages', {'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'Hidden', 'name': 'TextEdit', 'Source': 'Hidden', });
lyr_Helipads_2.set('fieldImages', {'HELI_PT_ID': 'TextEdit', 'HELIPAD_NA': 'TextEdit', 'DISTRICT': 'TextEdit', 'LATITUDE_I': 'TextEdit', 'LONGITUDE_': 'TextEdit', 'HEIGHT_IN_': 'TextEdit', 'HEIGHT_IN1': 'TextEdit', 'Source': 'TextEdit', });
lyr_Airport_3.set('fieldImages', {'Province': 'Hidden', 'Y_CORDINAT': 'Hidden', 'X_CORDINAT': 'Hidden', 'AP_NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'AP_CAT': 'Hidden', 'MAG_VER': 'Hidden', 'start_x': 'Hidden', 'start_y': 'Hidden', 'type_1': 'Hidden', 'Reference': 'Hidden', });
lyr_Peak_4.set('fieldImages', {'FID_1': '', 'PEAK_NAME': 'TextEdit', 'LAT': '', 'LONG': '', 'ELV': '', 'Reference': '', 'DIST': '', 'LOC_LV': '', });
lyr_Hospitals_5.set('fieldImages', {'Province': 'Hidden', 'ID': 'Hidden', 'UID': 'Hidden', 'NAM': 'TextEdit', 'DIST': 'Hidden', 'LOC_LV': 'Hidden', 'TOL': 'Hidden', 'WRD': 'Hidden', 'LAT': 'Hidden', 'LONG': 'Hidden', 'ALT': 'Hidden', 'NO_BDS': 'TextEdit', 'NO_DOC': 'TextEdit', 'NO_NRSS': 'Hidden', 'ICU': 'Hidden', 'Ventilator': 'Hidden', 'Surgery': 'Hidden', 'OTH_FCT': 'Hidden', 'Pharmacy': 'TextEdit', 'V': 'Hidden', 'S': 'Hidden', 'I': 'Hidden', });
lyr_PrimaryHealthServices_6.set('fieldImages', {'FCODE': 'Hidden', 'BFU': 'Hidden', 'FEATURES': 'TextEdit', 'DIST_NAME': 'Hidden', 'Source': 'Hidden', });
lyr_HotelsResorts_7.set('fieldImages', {'PROVINCE': 'Hidden', 'ID': 'Hidden', 'UID': 'Hidden', 'NAM': 'TextEdit', 'DIST': 'Hidden', 'LOC_LV': 'Hidden', 'TOL': 'Hidden', 'WRD': 'Hidden', 'LAT': 'Hidden', 'LONG': 'Hidden', 'ALT': 'Hidden', 'TYP': 'TextEdit', 'SRM': 'Hidden', 'DRM': 'Hidden', 'DMTY': 'Hidden', 'DLXR': 'Hidden', 'KRM': 'Hidden', 'ORM': 'Hidden', 'TBDS': 'Hidden', 'CPN': 'Hidden', 'VPN': 'Hidden', 'HPA': 'Hidden', 'G_CON': 'Hidden', 'E_CON': 'Hidden', 'K_CON': 'Hidden', 'FW_CON': 'Hidden', 'OTH_CON': 'Hidden', 'EWMF': 'Hidden', 'LP_CON': 'Hidden', 'IF_CON': 'Hidden', 'CNT_INT': 'Hidden', 'HLL': 'Hidden', 'KOSHR': 'Hidden', 'VGN': 'Hidden', 'FT_STFF': 'Hidden', 'SNL_STFF': 'Hidden', 'PLS_STOR': 'Hidden', 'OTH_TYP': 'Hidden', 'SPA': 'Hidden', 'RST_BR': 'TextEdit', 'PRK': 'Hidden', 'SMG_PUL': 'TextEdit', 'SRTY': 'Hidden', 'SVNR_SHP': 'Hidden', 'ETMT': 'Hidden', 'S_HLL': 'TextEdit', 'FTNS_CNTR': 'Hidden', 'GOLF': 'Hidden', 'LIBRY': 'Hidden', 'CASINO': 'Hidden', 'YGA_MDT': 'Hidden', 'FCT_OTH': 'Hidden', 'THR_RMS': 'Hidden', 'LNDRY': 'Hidden', 'TOR_EXRSN': 'Hidden', 'AP_TFR': 'Hidden', 'MD_DOC': 'Hidden', 'MN_EXC': 'Hidden', 'TOR_GD': 'Hidden', 'HS_OTH': 'Hidden', 'WEB_HFCTNP': 'Hidden', 'WEB_TICL': 'Hidden', 'ONL_RVN': 'Hidden', 'DP_FCT': 'Hidden', 'PRM_SM': 'Hidden', 'DTU_OTH': 'Hidden', 'TPT_PR': 'Hidden', 'DW_PR': 'Hidden', 'WM_PR': 'Hidden', 'SEC_PR': 'Hidden', 'NET_PR': 'Hidden', 'TOR_SCN_PR': 'Hidden', 'HC_CN_PR': 'Hidden', 'ECT_PR': 'Hidden', 'PR_OTH': 'Hidden', 'OTH_PR': 'Hidden', 'PLS_STOR_O': 'Hidden', 'TYPE_01': 'Hidden', });
lyr_RestPointManangValleyTrek_8.set('fieldImages', {'id': 'TextEdit', 'Day': 'TextEdit', 'Name': 'TextEdit', 'Altitude': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_ManangValleyTrekRoute_9.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'trekking': 'TextEdit', 'use': 'TextEdit', 'Trek_sect': 'TextEdit', 'length': 'TextEdit', 'Length_lab': 'TextEdit', });
lyr_Clinic_1.set('fieldLabels', {'name': 'inline label - visible with data', });
lyr_Helipads_2.set('fieldLabels', {'HELI_PT_ID': 'no label', 'HELIPAD_NA': 'no label', 'DISTRICT': 'no label', 'LATITUDE_I': 'no label', 'LONGITUDE_': 'no label', 'HEIGHT_IN_': 'no label', 'HEIGHT_IN1': 'no label', 'Source': 'no label', });
lyr_Airport_3.set('fieldLabels', {'AP_NAME': 'no label', 'ADDRESS': 'no label', });
lyr_Peak_4.set('fieldLabels', {'FID_1': 'no label', 'PEAK_NAME': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'ELV': 'no label', 'Reference': 'no label', 'DIST': 'no label', 'LOC_LV': 'no label', });
lyr_Hospitals_5.set('fieldLabels', {'NAM': 'inline label - visible with data', 'NO_BDS': 'inline label - visible with data', 'NO_DOC': 'inline label - visible with data', 'Pharmacy': 'inline label - visible with data', });
lyr_PrimaryHealthServices_6.set('fieldLabels', {'FEATURES': 'inline label - visible with data', });
lyr_HotelsResorts_7.set('fieldLabels', {'NAM': 'inline label - visible with data', 'TYP': 'inline label - visible with data', 'RST_BR': 'inline label - visible with data', 'SMG_PUL': 'inline label - always visible', 'S_HLL': 'inline label - visible with data', });
lyr_RestPointManangValleyTrek_8.set('fieldLabels', {'id': 'no label', 'Day': 'no label', 'Name': 'no label', 'Altitude': 'no label', 'Remarks': 'no label', });
lyr_ManangValleyTrekRoute_9.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'trekking': 'no label', 'use': 'no label', 'Trek_sect': 'no label', 'length': 'no label', 'Length_lab': 'no label', });
lyr_ManangValleyTrekRoute_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});