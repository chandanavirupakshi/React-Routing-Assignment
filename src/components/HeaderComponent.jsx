import './css/HeaderComponent.css';
function HeaderComponent(props){
    return (
        <div className="header">
            <h1>{props.name}</h1>
        </div>
        
    );
}

export default HeaderComponent;