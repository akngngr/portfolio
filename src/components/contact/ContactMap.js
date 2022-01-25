import React from 'react'
import GoogleMapReact from 'google-map-react'
import ContactDetails from './ContactDetails'
import './Contact.css'
import { locations } from '../../data'


const ContactMap = ({center, zoom}) => {

    const mapLocation = locations.map((location,id) => {
        return (
        <ContactDetails key={id} lat={location.lat} lng={location.lng} />
        )});

  return (
    <div className="contact-map-container">
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
            defaultCenter = { center }
            defaultZoom = { zoom }
            className="contact-map"
        >
            {mapLocation}
        </GoogleMapReact>
    </div>
  )
};

ContactMap.defaultProps = {
    center: {
        lat: 42.757870,
        lng: -71.463951
    },
    zoom: 9
}

export default ContactMap;
