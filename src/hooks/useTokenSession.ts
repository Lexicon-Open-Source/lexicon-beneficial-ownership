import { useEffect, useState } from "react";
import { v7 as uuidv7 } from "uuid";

const useTokenSession = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const uuid = uuidv7();
    setToken(uuid);
  }, []);

  return token;
};

export default useTokenSession;
