import React from 'react';
import {Link} from 'react-router-dom'

const navStyle ={ color:'white', textDecoration: 'none'}
export default class MainHome extends React.Component {



    render() {
        return (
            <div className="masthead text-white text-center">
                <div className="overlay"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <form>
                            <div className="form-row">
                            <div className="col-12 col-md-9 mb-2 mb-md-0">
                                <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                            </div>
                            <div className="col-12 col-md-3">
                                <button type="submit" className="btn btn-block btn-lg btn-primary"><Link to='/signup' style={navStyle} >Sign up!</Link></button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

