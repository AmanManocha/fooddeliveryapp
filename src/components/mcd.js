import React from 'react'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import Quantity from './quantity';

export default function Macdonalds() {
  return (
    <div>
    <h1> Macdonalds </h1>
    <DropdownButton id="dropdown-basic-button" title="select your favourite item on mcd">
  <Dropdown.Item href="#/action-1">Mac allo tikki</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Wrap</Dropdown.Item>
  <Dropdown.Item href="#/action-3">French fries</Dropdown.Item>
  <Dropdown.Item href="#/action-2">nuggets</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Coca cola</Dropdown.Item>
</DropdownButton>

<Quantity/>
</div>
  )
}
