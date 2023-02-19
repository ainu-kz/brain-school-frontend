import React from "react";

const Cell = (props) => {

    const [status, setStatus] = React.useState(false);

    const handleChangeImage = () => {
        status ? setStatus(false) : setStatus(true);
        return status;
    };
    const handlePseudoSelector = () => {
        return status ? "_before" : "_after";
    };
  
    const checkBackground = () => {
        return props.name !== props.imageName && handleChangeImage();
    };
  
    React.useEffect(() => {
        checkBackground();
    }, [props.imageName]);

    return (
        <div
            className={`cell ${
                props.name !== props.imageName ? handlePseudoSelector() : "_active"
            }`}
            style={
                props.name !== props.imageName
                ? { background: `url("${props.src}") no-repeat 0 0 fixed` }
                : null
            }
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        >
            <p className="cell__number">
                { props.id < 10 ? "0" + props.id : props.id }
            </p>
            <p className="cell__name">
                { props.name }
            </p>
            <span className="cell__letter">
                { props.name[0] }
            </span>
            <svg className="cell__diagonal">
                <line className="cell__line" x1="100%" y1="0" x2="0" y2="100%"></line>
            </svg>
            <div className="borders">
                <span className="x-top"></span>
                <span className="x-bottom"></span>
                <span className="y-left"></span>
                <span className="y-right"></span>
            </div>
        </div>
    );
}

export default Cell;