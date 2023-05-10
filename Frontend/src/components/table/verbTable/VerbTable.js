import React from "react";
import {irregularVerbsJSON} from "../../../data/irregularVerbsJSON";
import "./VerbTable.css";

const IrregularVerbsTable = () => {


return (
    <div className="container-irregular-verbs">
        <h1>Irregular Verbs</h1>
        <table className="irregular-verbs-table">
            <thead>
            <tr>
                <th>Base</th>
                <th>Past Simple </th>
                <th>Past Participle </th>
            </tr>
            </thead>
            <tbody>
            {irregularVerbsJSON.map((item, index) => (
                <tr key={index}>
                    <td>{item.Base}</td>
                    <td>{item.pastsimple}</td>
                    <td>{item.pastparticiple}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    )
}

export default IrregularVerbsTable;
