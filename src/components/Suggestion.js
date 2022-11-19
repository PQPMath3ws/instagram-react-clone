import "../assets/css/suggestion.css";

const Suggestion = (props) => (
    <div className="sugestao">
        <div className="usuario">
            <img src={props.userImage} alt="" />
            <div className="texto">
                <div className="nome">{props.userName}</div>
                <div className="razao">{props.userStatus}</div>
            </div>
        </div>
        <div className="seguir">Seguir</div>
    </div>
);

export default Suggestion;