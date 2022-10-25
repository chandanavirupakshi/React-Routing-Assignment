import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function ButtonComponent(){
    return (
        <>
    <Button variant="primary"> Click here </Button><br></br>

<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button>

<button type="button" className="btn btn-outline-primary">Primary</button>
<button type="button" className="btn btn-outline-secondary">Secondary</button>
<button type="button" className="btn btn-outline-success">Success</button>
<button type="button" className="btn btn-outline-danger">Danger</button>
<button type="button" className="btn btn-outline-warning">Warning</button>
<button type="button" className="btn btn-outline-info">Info</button>
<button type="button" className="btn btn-outline-light">Light</button>
<button type="button" className="btn btn-outline-dark">Dark</button>
        </>
    );
}

export default ButtonComponent;