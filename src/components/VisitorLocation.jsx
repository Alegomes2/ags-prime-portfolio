import { useEffect, useState } from "react";
import { getLocation } from "../api/location";

function VisitorLocation() {

  const [country, setCountry] = useState("");

  useEffect(() => {
    getLocation().then(data => {
      setCountry(data.country);
    });
  }, []);

  return (
    <p className="text-sm text-center text-gray-400">
      Olá visitante do {country}
    </p>
  );
}

export default VisitorLocation;