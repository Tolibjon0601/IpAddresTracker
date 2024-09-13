import { useState } from "react";
import { BASE_URL, IP_KEY_IpTracker } from "./services/api";
import "./App.css";
import Card from "./assets/components/card/card";
import LeafletMap from "./assets/components/leaflet/leaflet";

function App() {
  const [ipValue, setIpValue] = useState("");
  const [ipData, setIpData] = useState({});
  const submitHandler = async (evt) => {
    evt.preventDefault();

    const res = await fetch(
      `${BASE_URL}/v2/country,city?apiKey=${IP_KEY_IpTracker}&ipAddress=${ipValue}`
    );
    const data = await res.json();
    setIpData(data);
  };

  return (
    <>
<div className=" min-w-full search-bar-container bg-cover flex flex-col  justify-center items-center gap-8  " >
<h1 className="text-white font-bold items-center mt-16 mb-1 text-3xl">IP Address Tracker</h1>
   <div className=" flex justify-center items-center h-10 ">
   <form onSubmit={submitHandler}>
        <input
          className="rounded-md  py-3 px-60 text-left text-xl "
          placeholder="Search for any IP addres"
          value={ipValue}
          onChange={(evt) => setIpValue(evt.target.value)}
        />
        <button type="submit" className="bg-slate-500 py-3 px-3 rounded-md"  >
          Send
        </button>
      </form>
   </div>
      </div>
      <div>
        <Card data={ipData} />
        <LeafletMap data={ipData} />
      </div>

    </>
  );
}

export default App;
