import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import"leaflet/dist/leaflet.css"
const LeafletMap = (data) => {

  return (
<MapContainer center={[41.23333, 69.8]} zoom={13} scrollWheelZoom={false} style={{height:"500px",width:"100%"}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[41.23333, 69.8]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
  )
}

export default LeafletMap
