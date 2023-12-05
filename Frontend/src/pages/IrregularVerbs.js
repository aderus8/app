import React from "react";
import IrregularVerbsTable from "../components/table/verbTable/VerbTable";
import "./IrregularVerbs.css"

const IrregularVerbs = () => {

    return (
        <div className="irregular-bg">
                <div style={{marginTop : '100px', display:"flex", alignItems: "center", flexDirection: "column", marginLeft:"80px"}}>
            <IrregularVerbsTable/>
        </div>
        </div>
    )
}

export default IrregularVerbs;
