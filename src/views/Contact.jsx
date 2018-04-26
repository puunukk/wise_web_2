import React from "react";
import { Container, Row } from "../components/Wrapper";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 58.377834, lng: 26.733659 }}
  >
    <Marker
      position={{ lat: 58.377834, lng: 26.733659 }}
    />
  </GoogleMap>
));

const Contact = () => (
  <Container>
    Wise "Contact" page.
    <Row>
      <div className='test'>
      SOOLA 3, TARTU<br />
      STAR@WISEMEDIA.EE
      <br />
      +372 5670 7015<br />
      WWW.WISEMEDIA.EE
      </div>
      <div className='test'>
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px`, width: `600px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
        </div>
    </Row>
  </Container>
);

export default Contact