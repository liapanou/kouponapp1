import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import Link from "../../node_modules/next/link";
import { CardMagazia } from "../cardmagazia";

export function List() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    axios.get("/api").then((d) => {
      setStores(d.data);
    });
  }, []);

  return (
    <div className="mt-20 flex  w-full">
      <div className=" grid grid-cols-2  gap-4 container mx-auto ">
        {/* epistrefei mia lista me ta katastimata kai tous pontous kai episis kanei link me mia allh selida me ta proionda */}
        {stores.map((y) => (
          <Link href={`/store/${y.name}`} key={y.name}>
            <a>
              <CardMagazia name={y.name} points={y.points} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
