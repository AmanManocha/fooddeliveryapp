import React from 'react'
import {Dropdown,DropdownButton} from 'react-bootstrap'

export default function home() {

    return (
  
      <div>
          <h1>hey! order some food from your favourite restaurants</h1>
          <DropdownButton id="dropdown-item-button" title="select your fav restaurant">
  <Dropdown.Item href="/Dominos">Dominos</Dropdown.Item>
  <Dropdown.Item href="/sethidhaba">Sethi Dhaba</Dropdown.Item>
  <Dropdown.Item href="/mcd">Macdonalds</Dropdown.Item>
  <Dropdown.Item href="/Paldhaba">pal dhaba</Dropdown.Item>
  <Dropdown.Item href="/starbucks">starbucks</Dropdown.Item>
</DropdownButton>
          </div>
    )

    }