import React from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import Quantity from './quantity';

export default function paldhaba() {
  return (
    
    <div>
    <h1> Pal Dhaba </h1>
    <DropdownButton id="dropdown-basic-button" title="Food Items">
  <Dropdown.Item href="#/action-1">shahi paneer</Dropdown.Item>
  <Dropdown.Item href="#/action-2">butter chicken</Dropdown.Item>
  <Dropdown.Item href="#/action-3">tawa roti</Dropdown.Item>
  <Dropdown.Item href="#/action-1">dal makhni</Dropdown.Item>
  <Dropdown.Item href="#/action-2">mix veg</Dropdown.Item>
</DropdownButton>
<Quantity/>
</div>
  )
}

