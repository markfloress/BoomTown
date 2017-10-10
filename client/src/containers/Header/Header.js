import React, {Component} from 'react';
import { RightSide, LeftSide } from './index';
import './styles.css';


class Header extends Component {
  state = {
    values: [],
    names: ['Electronics', 'Household Items', 'Musical Instruments',
    'Physical Media', 'Recreational Equipment', 'Sporting Goods', 'Tools']
  };

  handleChange = (event, index, values) => this.setState({values});

  render () {
    const {values, names} = this.state


   return (
     <div className='NavBarStyle'>
      <LeftSide names={names} values={values} handleChange={this.handleChange}/>
      <RightSide/>
    </div>
   )
 }
}

export default Header;
