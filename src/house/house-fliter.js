import React from 'react';
import { useHistory } from 'react-router';
const HouseFliter = ({allHouses}) => {
    const countries = allHouses  ? Array.from(new Set(allHouses.map( (h) => h.country))) : [];
    const history= useHistory();
    countries.unshift(null);
    const onSearchChange=(e)=>{
        const country=e.target.value;
        history.push(`searchcountry/${country}`);
    }




    return (
        <div className="row">
                <div className="offset-md-4 col-md-4">
                Look for your house in a country:
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" onChange={onSearchChange}>
                    {countries.map( (c) => 
                    <option key={c} value={c}>
                        {c}
                    </option>
                    )}
                </select>
            </div>
        </div>
    );
};

export default HouseFliter;