import React from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import Quantity from './quantity';

export default function starbucks() {
  return (
    <div>
    <h1> Starbucks </h1>
    <DropdownButton id="dropdown-basic-button" title="select your favourite drink">
  <Dropdown.Item href="#/action-1">cappuccino</Dropdown.Item>
  <Dropdown.Item href="#/action-2">frappuccino</Dropdown.Item>
  <Dropdown.Item href="#/action-3">latte</Dropdown.Item>
  <Dropdown.Item href="#/action-2">macchiato</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Cold brew</Dropdown.Item>
</DropdownButton>
<Quantity/>
</div>
   

  )
}
