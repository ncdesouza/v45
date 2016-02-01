import React, {Component} from 'react';
import fetch from '../../core/fetch';

class FormLogin extends Component {

  state = {
    uname: 'user1@test.com',
    pword: 'test'
  };

  handleUsernameChange = (e) => {
    this.setState({uname: e.target.value});
  };

  handlePasswordChange = (e) => {
    this.setState({pword: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var user = this.state.uname.trim();
    var pass = this.state.pword.trim();
    if (!user || !pass) {
      return;
    }
    this.props.onLoginSubmit({email: user, password: pass});
    //this.setState({uname: '', pword: ''});
  };

  render = () => {
    return (
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <div className="col-xs-12 col-sm-9">
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Email or Username"
              className="form-control"
              value={this.state.uname}
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <div className="col-xs-12 col-sm-9">
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={this.state.pword}
              onChange={this.handlePasswordChange}
            />
          </div>
        </div>
        <div className="col-xs-3 col-sm-3">
          <input type="submit" value="Login" className="btn btn-success btn-block"/>
        </div>
      </form>
    );
  }
}

export default FormLogin;
