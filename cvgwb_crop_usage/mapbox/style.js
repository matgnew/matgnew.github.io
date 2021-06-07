
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "ESRIGraydark_0": {
            "type": "raster",
            "tiles": ["https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"],
            "tileSize": 256
        },
        "CVGWBCropOwnershipbySubRegion_1": {
            "type": "geojson",
            "data": json_CVGWBCropOwnershipbySubRegion_1
        }
                    ,
        "CVGWBSubRegionsLines_2": {
            "type": "geojson",
            "data": json_CVGWBSubRegionsLines_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_ESRIGraydark_0_0",
            "type": "raster",
            "source": "ESRIGraydark_0"
        },
        {
            "id": "lyr_CVGWBCropOwnershipbySubRegion_1_0",
            "type": "fill",
            "source": "CVGWBCropOwnershipbySubRegion_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'Duty'], 0.0], ['<=', ['get', 'Duty'], 0.0796]], 1.0, ['all', ['>', ['get', 'Duty'], 0.0796], ['<=', ['get', 'Duty'], 0.1592]], 1.0, ['all', ['>', ['get', 'Duty'], 0.1592], ['<=', ['get', 'Duty'], 0.2388]], 1.0, ['all', ['>', ['get', 'Duty'], 0.2388], ['<=', ['get', 'Duty'], 0.3184]], 1.0, ['all', ['>', ['get', 'Duty'], 0.3184], ['<=', ['get', 'Duty'], 0.398]], 1.0, ['all', ['>', ['get', 'Duty'], 0.398], ['<=', ['get', 'Duty'], 0.4776]], 1.0, ['all', ['>', ['get', 'Duty'], 0.4776], ['<=', ['get', 'Duty'], 0.5572]], 1.0, ['all', ['>', ['get', 'Duty'], 0.5572], ['<=', ['get', 'Duty'], 0.6368]], 1.0, ['all', ['>', ['get', 'Duty'], 0.6368], ['<=', ['get', 'Duty'], 0.7164]], 1.0, ['all', ['>', ['get', 'Duty'], 0.7164], ['<=', ['get', 'Duty'], 0.796]], 1.0, ['all', ['>', ['get', 'Duty'], 0.796], ['<=', ['get', 'Duty'], 0.8756]], 1.0, ['all', ['>', ['get', 'Duty'], 0.8756], ['<=', ['get', 'Duty'], 0.9552]], 1.0, ['all', ['>', ['get', 'Duty'], 0.9552], ['<=', ['get', 'Duty'], 1.0348]], 1.0, ['all', ['>', ['get', 'Duty'], 1.0348], ['<=', ['get', 'Duty'], 1.1144]], 1.0, ['all', ['>', ['get', 'Duty'], 1.1144], ['<=', ['get', 'Duty'], 1.194]], 1.0, ['all', ['>', ['get', 'Duty'], 1.194], ['<=', ['get', 'Duty'], 1.2736]], 1.0, ['all', ['>', ['get', 'Duty'], 1.2736], ['<=', ['get', 'Duty'], 1.3532]], 1.0, ['all', ['>', ['get', 'Duty'], 1.3532], ['<=', ['get', 'Duty'], 1.4328]], 1.0, ['all', ['>', ['get', 'Duty'], 1.4328], ['<=', ['get', 'Duty'], 1.5124]], 1.0, ['all', ['>', ['get', 'Duty'], 1.5124], ['<=', ['get', 'Duty'], 1.592]], 1.0, ['all', ['>', ['get', 'Duty'], 1.592], ['<=', ['get', 'Duty'], 1.6716]], 1.0, ['all', ['>', ['get', 'Duty'], 1.6716], ['<=', ['get', 'Duty'], 1.7512]], 1.0, ['all', ['>', ['get', 'Duty'], 1.7512], ['<=', ['get', 'Duty'], 1.8308]], 1.0, ['all', ['>', ['get', 'Duty'], 1.8308], ['<=', ['get', 'Duty'], 1.9104]], 1.0, ['all', ['>', ['get', 'Duty'], 1.9104], ['<=', ['get', 'Duty'], 1.99]], 1.0, ['all', ['>', ['get', 'Duty'], 1.99], ['<=', ['get', 'Duty'], 2.0696]], 1.0, ['all', ['>', ['get', 'Duty'], 2.0696], ['<=', ['get', 'Duty'], 2.1492]], 1.0, ['all', ['>', ['get', 'Duty'], 2.1492], ['<=', ['get', 'Duty'], 2.2288]], 1.0, ['all', ['>', ['get', 'Duty'], 2.2288], ['<=', ['get', 'Duty'], 2.3084]], 1.0, ['all', ['>', ['get', 'Duty'], 2.3084], ['<=', ['get', 'Duty'], 2.388]], 1.0, ['all', ['>', ['get', 'Duty'], 2.388], ['<=', ['get', 'Duty'], 2.4676]], 1.0, ['all', ['>', ['get', 'Duty'], 2.4676], ['<=', ['get', 'Duty'], 2.5472]], 1.0, ['all', ['>', ['get', 'Duty'], 2.5472], ['<=', ['get', 'Duty'], 2.6268]], 1.0, ['all', ['>', ['get', 'Duty'], 2.6268], ['<=', ['get', 'Duty'], 2.7064]], 1.0, ['all', ['>', ['get', 'Duty'], 2.7064], ['<=', ['get', 'Duty'], 2.786]], 1.0, ['all', ['>', ['get', 'Duty'], 2.786], ['<=', ['get', 'Duty'], 2.8656]], 1.0, ['all', ['>', ['get', 'Duty'], 2.8656], ['<=', ['get', 'Duty'], 2.9452]], 1.0, ['all', ['>', ['get', 'Duty'], 2.9452], ['<=', ['get', 'Duty'], 3.0248]], 1.0, ['all', ['>', ['get', 'Duty'], 3.0248], ['<=', ['get', 'Duty'], 3.1044]], 1.0, ['all', ['>', ['get', 'Duty'], 3.1044], ['<=', ['get', 'Duty'], 3.184]], 1.0, ['all', ['>', ['get', 'Duty'], 3.184], ['<=', ['get', 'Duty'], 3.2636]], 1.0, ['all', ['>', ['get', 'Duty'], 3.2636], ['<=', ['get', 'Duty'], 3.3432]], 1.0, ['all', ['>', ['get', 'Duty'], 3.3432], ['<=', ['get', 'Duty'], 3.4228]], 1.0, ['all', ['>', ['get', 'Duty'], 3.4228], ['<=', ['get', 'Duty'], 3.5024]], 1.0, ['all', ['>', ['get', 'Duty'], 3.5024], ['<=', ['get', 'Duty'], 3.582]], 1.0, ['all', ['>', ['get', 'Duty'], 3.582], ['<=', ['get', 'Duty'], 3.6616]], 1.0, ['all', ['>', ['get', 'Duty'], 3.6616], ['<=', ['get', 'Duty'], 3.7412]], 1.0, ['all', ['>', ['get', 'Duty'], 3.7412], ['<=', ['get', 'Duty'], 3.8208]], 1.0, ['all', ['>', ['get', 'Duty'], 3.8208], ['<=', ['get', 'Duty'], 3.9004]], 1.0, ['all', ['>', ['get', 'Duty'], 3.9004], ['<=', ['get', 'Duty'], 3.98]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'Duty'], 0.0], ['<=', ['get', 'Duty'], 0.0796]], '#2b83ba', ['all', ['>', ['get', 'Duty'], 0.0796], ['<=', ['get', 'Duty'], 0.1592]], '#358ab8', ['all', ['>', ['get', 'Duty'], 0.1592], ['<=', ['get', 'Duty'], 0.2388]], '#4092b7', ['all', ['>', ['get', 'Duty'], 0.2388], ['<=', ['get', 'Duty'], 0.3184]], '#4a99b5', ['all', ['>', ['get', 'Duty'], 0.3184], ['<=', ['get', 'Duty'], 0.398]], '#55a1b3', ['all', ['>', ['get', 'Duty'], 0.398], ['<=', ['get', 'Duty'], 0.4776]], '#5fa8b1', ['all', ['>', ['get', 'Duty'], 0.4776], ['<=', ['get', 'Duty'], 0.5572]], '#6aafaf', ['all', ['>', ['get', 'Duty'], 0.5572], ['<=', ['get', 'Duty'], 0.6368]], '#74b7ae', ['all', ['>', ['get', 'Duty'], 0.6368], ['<=', ['get', 'Duty'], 0.7164]], '#7fbeac', ['all', ['>', ['get', 'Duty'], 0.7164], ['<=', ['get', 'Duty'], 0.796]], '#89c5aa', ['all', ['>', ['get', 'Duty'], 0.796], ['<=', ['get', 'Duty'], 0.8756]], '#94cda8', ['all', ['>', ['get', 'Duty'], 0.8756], ['<=', ['get', 'Duty'], 0.9552]], '#9ed4a6', ['all', ['>', ['get', 'Duty'], 0.9552], ['<=', ['get', 'Duty'], 1.0348]], '#a9dca5', ['all', ['>', ['get', 'Duty'], 1.0348], ['<=', ['get', 'Duty'], 1.1144]], '#b0dfa6', ['all', ['>', ['get', 'Duty'], 1.1144], ['<=', ['get', 'Duty'], 1.194]], '#b7e2a8', ['all', ['>', ['get', 'Duty'], 1.194], ['<=', ['get', 'Duty'], 1.2736]], '#bee5aa', ['all', ['>', ['get', 'Duty'], 1.2736], ['<=', ['get', 'Duty'], 1.3532]], '#c5e8ac', ['all', ['>', ['get', 'Duty'], 1.3532], ['<=', ['get', 'Duty'], 1.4328]], '#ccebaf', ['all', ['>', ['get', 'Duty'], 1.4328], ['<=', ['get', 'Duty'], 1.5124]], '#d3edb1', ['all', ['>', ['get', 'Duty'], 1.5124], ['<=', ['get', 'Duty'], 1.592]], '#daf0b3', ['all', ['>', ['get', 'Duty'], 1.592], ['<=', ['get', 'Duty'], 1.6716]], '#e1f3b5', ['all', ['>', ['get', 'Duty'], 1.6716], ['<=', ['get', 'Duty'], 1.7512]], '#e7f6b8', ['all', ['>', ['get', 'Duty'], 1.7512], ['<=', ['get', 'Duty'], 1.8308]], '#eef9ba', ['all', ['>', ['get', 'Duty'], 1.8308], ['<=', ['get', 'Duty'], 1.9104]], '#f5fbbc', ['all', ['>', ['get', 'Duty'], 1.9104], ['<=', ['get', 'Duty'], 1.99]], '#fcfebe', ['all', ['>', ['get', 'Duty'], 1.99], ['<=', ['get', 'Duty'], 2.0696]], '#fffcbb', ['all', ['>', ['get', 'Duty'], 2.0696], ['<=', ['get', 'Duty'], 2.1492]], '#fff6b4', ['all', ['>', ['get', 'Duty'], 2.1492], ['<=', ['get', 'Duty'], 2.2288]], '#ffefac', ['all', ['>', ['get', 'Duty'], 2.2288], ['<=', ['get', 'Duty'], 2.3084]], '#ffe8a4', ['all', ['>', ['get', 'Duty'], 2.3084], ['<=', ['get', 'Duty'], 2.388]], '#ffe29d', ['all', ['>', ['get', 'Duty'], 2.388], ['<=', ['get', 'Duty'], 2.4676]], '#ffdb95', ['all', ['>', ['get', 'Duty'], 2.4676], ['<=', ['get', 'Duty'], 2.5472]], '#fed48d', ['all', ['>', ['get', 'Duty'], 2.5472], ['<=', ['get', 'Duty'], 2.6268]], '#fece85', ['all', ['>', ['get', 'Duty'], 2.6268], ['<=', ['get', 'Duty'], 2.7064]], '#fec77e', ['all', ['>', ['get', 'Duty'], 2.7064], ['<=', ['get', 'Duty'], 2.786]], '#fec076', ['all', ['>', ['get', 'Duty'], 2.786], ['<=', ['get', 'Duty'], 2.8656]], '#feba6e', ['all', ['>', ['get', 'Duty'], 2.8656], ['<=', ['get', 'Duty'], 2.9452]], '#feb367', ['all', ['>', ['get', 'Duty'], 2.9452], ['<=', ['get', 'Duty'], 3.0248]], '#fdab5f', ['all', ['>', ['get', 'Duty'], 3.0248], ['<=', ['get', 'Duty'], 3.1044]], '#fa9f5a', ['all', ['>', ['get', 'Duty'], 3.1044], ['<=', ['get', 'Duty'], 3.184]], '#f69354', ['all', ['>', ['get', 'Duty'], 3.184], ['<=', ['get', 'Duty'], 3.2636]], '#f3864f', ['all', ['>', ['get', 'Duty'], 3.2636], ['<=', ['get', 'Duty'], 3.3432]], '#f07a49', ['all', ['>', ['get', 'Duty'], 3.3432], ['<=', ['get', 'Duty'], 3.4228]], '#ed6e43', ['all', ['>', ['get', 'Duty'], 3.4228], ['<=', ['get', 'Duty'], 3.5024]], '#ea623e', ['all', ['>', ['get', 'Duty'], 3.5024], ['<=', ['get', 'Duty'], 3.582]], '#e75638', ['all', ['>', ['get', 'Duty'], 3.582], ['<=', ['get', 'Duty'], 3.6616]], '#e44932', ['all', ['>', ['get', 'Duty'], 3.6616], ['<=', ['get', 'Duty'], 3.7412]], '#e13d2d', ['all', ['>', ['get', 'Duty'], 3.7412], ['<=', ['get', 'Duty'], 3.8208]], '#de3127', ['all', ['>', ['get', 'Duty'], 3.8208], ['<=', ['get', 'Duty'], 3.9004]], '#da2521', ['all', ['>', ['get', 'Duty'], 3.9004], ['<=', ['get', 'Duty'], 3.98]], '#d7191c', '#ffffff']}
        }
,
        {
            "id": "lyr_CVGWBSubRegionsLines_2_0",
            "type": "line",
            "source": "CVGWBSubRegionsLines_2",
            "layout": {},
            "paint": {'line-width': 1.7857142857142856, 'line-opacity': 1.0, 'line-color': '#000000'}
        }
],
}