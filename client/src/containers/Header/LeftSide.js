import React, { Component } from 'react'
import logo from '../../images/boomtown-logo.svg'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'



export default class LeftSide extends Component {
  render() {
    const { names, values, handleChange } = this.props

    return (
      <div style={{ display: "flex", width: "50%" }}> 
       <Link to={`/`}><img src={logo} className='logoStyle'></img></Link>


       <SelectField
          multiple={true}
          hintText='Filter by Tag'
          value={values}
          onChange={handleChange}
          className='selectField'
          style={{ width: 300}}>
            {names.map(name => (
                <MenuItem
                    key={name.tagId}
                    insetChildren
                    checked={values && values.indexOf(name.title) > -1}
                    value={name.title}
                    primaryText={name.title}
                />
            ))}
      </SelectField>
      </div>
    )
  }
}
