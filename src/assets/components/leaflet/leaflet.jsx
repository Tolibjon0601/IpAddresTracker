import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import"leaflet/dist/leaflet.css"
const LeafletMap = (data) => {
const position=data.location?.lat?[data.location.lat,data.location.lng]:[41.23333, 69.8]
  return (
<MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{height:"500px",width:"100%"}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  )
}

export default LeafletMap
