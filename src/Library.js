import { useHistory } from "react-router-dom";
import { Base } from "./Base";

export function Library() {
  const history = useHistory();
  return (
    <Base title={"Library"}>
      
      
        <div className="sec">
          <button className="bn" onClick={() => history.push("/tamil")}>
            Tamil
          </button>
          <button className="bn" onClick={() => history.push("/biography")}>
            Biography
          </button>
          <button className="bn" onClick={() => history.push("/history")}>
            History
          </button>
          <button className="bn" onClick={() => history.push("/science")}>
            Science Fiction
          </button>
          <button className="bn" onClick={() => history.push("/geography")}>
            Geography
          </button>
          <button className="bn" onClick={() => history.push("/economics")}>
            Economics
          </button>
        </div>
      
    </Base>
  );
}
