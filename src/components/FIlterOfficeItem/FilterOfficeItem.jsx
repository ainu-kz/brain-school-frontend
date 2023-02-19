const FilterOfficeItem = (props) => {
    return (
        <li
            onClick={() => props.onClick(props.office)}
            className={`filter-office-item ${props.activeOffice === props.office ? "_active" : ""}`}
        >
            {props.office}
        </li>
    )
}

export default FilterOfficeItem;