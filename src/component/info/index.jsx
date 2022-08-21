import "./styles.scss";

export default function Info(props) {
    return (
        <div className="Info">
            <h1 className="Info__value">{props.value}</h1>
            <span className="Info__name">{props.name}</span>
        </div>
    );
}
