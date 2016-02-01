import React, { Component, PropTypes } from 'react';
import s from './PublicHome.scss';
import withStyles from '../../decorators/withStyles';


import BackgroundVideo from '../BackgroundVideo';
import FormLogin from '../FormLogin';
import Link from '../Link';

const title = 'v45';

@withStyles(s)
class PublicHome extends Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    this.context.onSetTitle(title);
    return (
      <div className={s.root}>
        <BackgroundVideo />
        <div className={s.logo}>
          <dir className={s.wrapper}>
            <img src={require('./v45.png')}/>
            <h1 className={s.slogan}>Unleash your imagination</h1>
            <div className={s.android}>
              <img width="100%" src={require('./btn_googlePlay.png')}/>
            </div>
            <div className={s.ios}>
              <img width="100%" src={require('./download_on_the_app_store.png')}/>
            </div>
          </dir>
        </div>
      </div>
    );
  }

}

export default PublicHome;

//<div className={s.container}>
//  <div className="container max-width" style={{marginTop: '80px', position: 'relative', zIndex: '99999'}}>
//    <div className="jumbotron text-center transparent-bg" style={{paddingTop:'150px', paddingBottom:'150px'}}>
//      <div className="col-xs-12 col-sm-12">
//        <h1 className="text-left"> video45</h1>
//        <h3 className="text-left"><span className="fa fa-lock"/> Log in:</h3>
//      </div>
//      <div className="row">
//        <div className="col-xs-12 col-sm-9">
//        </div>
//      </div>
//
//      <FormLogin onLoginSubmit={this.handleLogin} />
//
//      <div className="row">
//        <div className="col-xs-12 col-sm-12">
//          <div className="row">
//            <div className="col-xs-12 col-sm-9">
//              <p>or</p>
//            </div>
//          </div>
//          <div className="col-xs-4 col-sm-3"><a href="/login/facebook" className="btn btn-primary btn-block"><span className="fa fa-facebook-official social-btn"> Facebook</span></a></div>
//          <div className="col-xs-4 col-sm-3"><a href="/login/twitter" className="btn btn-info btn-block"><span className="fa fa-twitter-square social-btn"> Twitter</span></a></div>
//          <div className="col-xs-4 col-sm-3"><a href="/login/google" className="btn btn-danger btn-block social-btn"><span className="fa fa-google-plus-square"> Google+</span></a></div>
//        </div>
//      </div>
//      <div className="row">
//        <div className="col-xs-12 col-sm-12">
//          <hr/>
//          <p>Need an account? <Link to="/signup">Sign Up</Link></p>
//        </div>
//      </div>
//    </div>
//  </div>
//</div>
