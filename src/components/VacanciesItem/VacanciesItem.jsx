const VacanciesItem = (props) => {
    return (
        <li className={`vacancies-item _${props.id}`}>
            <div className="vacancies-content">
                <h2 className="vacancies-title">Account Manager at MediaMonks AMS</h2>
                <span className="vacancies-office">
                    Amsterdam
                    <span>Client Services</span>
                </span>
            </div>
        </li>
    )
}

export default VacanciesItem;