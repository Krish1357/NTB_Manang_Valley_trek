var size = 0;
var placement = 'point';

var style_RestPointManangValleyTrek_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "14.3px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#e3cfe2";
    var bufferWidth = 1.7999999999999998;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_RestPointManangValleyTrek_8_eval_expression(context) !== null) {
        labelText = String(exp_label_RestPointManangValleyTrek_8_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.4 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(179,92,21,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(247,128,30,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
