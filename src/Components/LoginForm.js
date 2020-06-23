import React from "react"
import {Button} from 'react-bootstrap'

class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.titleClicked = this.state.titleClicked.bind(this);
    }
    
    titleClicked = () => {
        return(
        this.tab('show')
        )
    }

    render() {
        return (
            <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                <div class="card">
                  <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs" id="bologna-list" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link"  href="#history" role="tab" aria-controls="history" aria-selected="false">History</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#deals" role="tab" aria-controls="deals" aria-selected="false">Deals</a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Bologna</h4>
                    <h6 class="card-subtitle mb-2">Emilia-Romagna Region, Italy</h6>
                    
                     <div className="tab-content mt-2">
                      <div className="tab-pane active" id="signup" role="tabpanel" onClick={this.titleClicked()}>
                        <h1>Hello</h1>
                      </div>
                       
                      <div className="tab-pane" id="signin" role="tabpanel" aria-labelledby="signin-tab">  
                        <Button>SignIn</Button>  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

        
    }

}


export default LoginForm