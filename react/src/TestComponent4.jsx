import { useEffect, useState } from "react";

const TestComponent4 = () => {
  const [isClicked, setIsClicked] = useState(false);

  return <>
    {isClicked ? "megjelent" : null}

    <button onClick={() => setIsClicked(!isClicked)}>Clickme!</button>
  </>
}

export default TestComponent4;