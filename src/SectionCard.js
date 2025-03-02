import { Link } from 'react-router-dom';


export function sectionCard (section) {
    return (
        <div className="card-item">
            <Link to={`./QuizView?name=${encodeURIComponent(section.id)}`} style={{textDecoration: 'none'}}>
            <div id={section.id} className="card-details">
                <img src={section.image} alt={section.name} />
                <h3>{section.name}</h3>
                <p>{section.description} </p>
            </div>
            </Link>
        </div>
    )
}

export default sectionCard;