import React from 'react';
import DottedMap from 'dotted-map/without-countries';
import ComputedDottedMap from "./data/map_dotted.json"
import GeoData from "./data/countries.geo.json"
import { StyleSheet, View, Animated, StyleProp, ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';

interface MapRendererProps {
    style: StyleProp<ViewStyle>
}

function findCoordinatesByCountry(countryName: string, geoJson: any): number[] | null {
    for (const data of geoJson.ref_country_codes) {
      if (data.country === countryName) {
        let coords : number[] = [];
        coords[0] = data.latitude;
        coords[1] = data.longitude;
        return coords;
      }
    }
    return null; // Return null if country is not found
}

function getCityCoords(cityName: string): number[] | null {
    const jsonGeo = JSON.stringify(GeoData);
    const geoData = JSON.parse(jsonGeo);

    const coords = findCoordinatesByCountry(cityName, geoData);
    return coords;
};

const MapRenderer: React.FC<MapRendererProps> = (props) => { //52X29 map
    const computedData = JSON.stringify(ComputedDottedMap);
    const map = new DottedMap({ map: JSON.parse(computedData) });

    const coordsPin = getCityCoords("Italy");
    if(coordsPin == null)
        return;

    map.addPin({
        lat: coordsPin[0],
        lng: coordsPin[1],
        svgOptions: { color: 'red', radius: 0.4 },
    });

    const svgMap = map.getSVG({
        radius: 0.4,
        color: '#423B38',
        shape: 'circle',
        backgroundColor: '#0a0a0a',
    });

    return (
        <Animated.View style={[styles.mainContainer, props.style]}>
            <SvgXml xml={svgMap} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({  
    mainContainer: {
        marginHorizontal: 10,
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        display: "flex",
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default MapRenderer;