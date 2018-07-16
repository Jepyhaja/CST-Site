import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';

class NotFound extends Component {

    render() {
        return (
            <div className="pt-5">
                <h2>Valitettavasti sivua ei ole olemassa.</h2>
                <Link to="/"><button className="btn btn-secondary mt-5">Palaa etusivulle</button></Link>
            </div>
        );
    }
}

export default NotFound;