import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import makeItAnObject from './helper';

function MapContainer({
  placesToShow,
  location,
  placeList,
  setCurrentPlaceReview,
}: any) {
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: location ? location.coords.lat : 41.3874,
        longitude: location ? location.coords.lng : 2.1686,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
    >
      {placesToShow
        ? placesToShow.map((place: any) => {
            return (
              <Marker
                coordinate={{
                  latitude: Number(place.lat),
                  longitude: Number(place.lng),
                }}
                onPress={() => {
                  for (let i = 0; i < placeList.length; i++) {
                    let coords = makeItAnObject(placeList[i].location);
                    if (coords.lat === place.lat && coords.lng === place.lng) {
                      setCurrentPlaceReview(placeList[i]);
                      break;
                    }
                  }
                }}
              />
            ); //>
          })
        : null}
    </MapView>
  );
}

export default MapContainer;
