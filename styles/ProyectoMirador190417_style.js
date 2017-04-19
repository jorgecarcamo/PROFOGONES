var size = 0;

var styleCache_ProyectoMirador190417={}
var style_ProyectoMirador190417 = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(51,160,44,1.0)"})})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_ProyectoMirador190417[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_ProyectoMirador190417[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_ProyectoMirador190417[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};