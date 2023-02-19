import { useState } from "react";
import FilterOfficeItem from "../FIlterOfficeItem/FilterOfficeItem"

import { offices } from '../../data/data';

const FilterOffice = () => {

    const [activeOffice, setActiveOffice] = useState('');

    const onClick = (office) => {
        setActiveOffice(office)
    }

    return (
        <div className="filter-office-wrapper">
            <ul className="filter-office">
                <li className="filter-office-item">all</li>
                    {offices.map((office, index) => {
                        return <FilterOfficeItem
                            key={index}
                            activeOffice={activeOffice}
                            office = {office}
                            onClick={() => onClick(office)} />
                    })}
                <li className="filter-office-item filter-office-item_button">
                    <button className="block-button">
                        <span className="block-text">
                            show
                            <span className="block-rest">all</span>
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default FilterOffice;