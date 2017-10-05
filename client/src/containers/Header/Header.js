import React, {Component} from 'react';
import logo from '../../images/boomtown-logo.svg';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';


class Header extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

  // menuItems(values) {
  //   return names.map((name) => (
  //     <MenuItem
  //       key={name}
  //       insetChildren={true}
  //       checked={values && values.indexOf(name) > -1}
  //       value={name}
  //       primaryText={name}
  //     />
  //   ));
  // }

  render () {
    const style = {
      margin: 12,
    };

    const names = ['Electronics', 'Household Items', 'Musical Instruments',
    'Physical Media', 'Recreational Equipment', 'Sporting Goods', 'Tools'];

   return (
     <div className='NavBarStyle'>
       <img src={logo} className='logoStyle'></img>
       <SelectField
          multiple={true}
          hintText='Filter by Tag'
          value={this.values}
          onChange={this.handleChange}
          className='selectField'>
            {this.menuItems(value)}
            {names.map(name => (
                <MenuItem
                    key={name}
                    insetChildren
                    checked={values && values.indexOf(name) > -1}
                    value={name}
                    primaryText={name}
                />
            ))}
      </SelectField>
       <div className='raised-button'> 
         <RaisedButton label="My Profile" primary style={style} />
         <RaisedButton label="Logout" primary buttonStyle={{ backgroundColor: 'gray' }}/>
      </div>
    </div>
   )
 }
}

export default Header;
