import BranchInterface from "./BranchInterface"
import BranchDisplay from "./BranchDisplay"
import { useState } from "react";

export default function Branch () {
    const [refresh,setRefresh] = useState(false)

    return (
        <div>
          <BranchInterface refresh={refresh} setRefresh={setRefresh} />
          <BranchDisplay refresh={refresh} setRefresh={setRefresh} />
        </div>
      );
}