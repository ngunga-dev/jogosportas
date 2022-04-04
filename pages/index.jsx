import { useState } from "react";
import Porta from "../src/components/Porta";
import Presente from "../src/components/Presente";
import PortaModel from "../src/model/porta";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1));
  return (
    <div style={{ display: "flex" }}>
      <Porta porta={p1} />
    </div>
  );
}
