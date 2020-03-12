import React from 'react'
import { Select, FormGroup, Checkbox, FormControlLabel, RadioGroup, Radio, MenuItem } from '@material-ui/core'

import { inputTypes } from '../../constants'

export function FilterCriterion(props) {

  const { data, handleChange } = props;

  switch (data.type) {
    case inputTypes.CHECKBOX:
      return (
        <FormGroup name={data.name} >
          {data.values.map((el, index) => (
            <FormControlLabel value={el} control={<Checkbox onChange={handleChange({ parent: data.name, name: el, type: inputTypes.CHECKBOX })} />} label={el} key={index} />
          ))}
        </FormGroup>
      )
    case inputTypes.RADIO:
      return (
        <RadioGroup name={data.name} defaultValue={data.values[0]} onChange={handleChange()}>
          {data.values.map((el, index) => (
            <FormControlLabel value={el} control={<Radio />} label={el} key={index} />
          ))}
        </RadioGroup>
      )
    case inputTypes.SELECT:
      return (
        <Select name={data.name} defaultValue={data.values[0]} onChange={handleChange()}>
          {data.values.map((el, index) => (
            <MenuItem value={el} key={index}>{el}</MenuItem>
          ))}
        </Select>
      )
    default:
      return null
  }
}