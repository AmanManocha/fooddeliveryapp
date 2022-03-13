import React from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import Quantity from './quantity';

export default function SethiDhaba() {
  return (
    <div>
    <h1> Sethi Dhaba </h1>
    <DropdownButton id="dropdown-basic-button" title="Food Items">
  <Dropdown.Item href="#/action-1">Breakfast Thali</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Lunch Thali</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Dinner Thali</Dropdown.Item>
</DropdownButton>
<Quantity/>
</div>
  )
}
