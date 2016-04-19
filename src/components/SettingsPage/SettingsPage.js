
import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import s from './SettingsPage.scss';
import withStyles from '../../decorators/withStyles';

import { fetchProfilePrivacy } from '../../actions/ProfileActions';
import { connect } from 'react-redux';



const title = 'Settings';

@withStyles(s)
class SettingsPage extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 1,
    };
  }

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  componentDidMount() {
  }

  handleChange = (e, i, v) => {
    const {dispatch} = this.props;
    dispatch(fetchProfilePrivacy({
      username: 'user2',
      value: v
    }));
    this.setState({value: v})
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          Settings
          <hr/>
          <div>
            <p>Who should be able to see your profile </p>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Everyone" />
              <MenuItem value={2} primaryText="My Network"/>
              <MenuItem value={3} primaryText="Only Me"/>
            </DropDownMenu>
          </div>
          <hr/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
  }
}

export default connect(mapStateToProps)(SettingsPage);
