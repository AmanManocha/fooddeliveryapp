import React from 'react'
import {Dropdown,DropdownButton} from 'react-bootstrap'

export default function restaurant() {
  return (
    <DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.Item as="button" herf="./Dominos.js">Dominos</Dropdown.Item>
  <Dropdown.Item as="button">Burger King</Dropdown.Item>
  <Dropdown.Item as="button">Macdonalds</Dropdown.Item>
  <Dropdown.Item as="button" herf="">pizza hut</Dropdown.Item>
  <Dropdown.Item as="button">starbucks</Dropdown.Item>
</DropdownButton>
  )
}
