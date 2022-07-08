import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Link from "../../node_modules/next/link";

export function List() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get("/api").then((d) => {
      setStores(d.data);
    });
  }, []);

  return (
    <div className="overflow-x-auto flex mt-20">
      <table className="table  w-full container mx-auto">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {/* epistrefei mia lista me ta katastimata kai tous pontous kai episis kanei link me mia allh selida me ta proionda */}
          {stores.map((y, idx) => (
            <Link href={`/store/${y.name}`} key={y.name}>
              <tr>
                <td>{idx}</td>
                <td>{y.name}</td>
                <td>{y.points}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
}
