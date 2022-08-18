import React, { useState } from "react";

import { default as ReactSelect } from "react-select";
import { components } from "react-select";

import dropDownOptions from "./dropDownDataFile"
//Below props is the props sent by ReactSelect (it included all the data you want)
const Option = (props) => {

  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected} //VERY IMP: parent ReactSelect will pass the information that whether this item is selected or not. 
          //Using that , we will corresponding checkmark our checkbox input

          onChange={() => null} //no need to take any action  on checkbox click
        />
        <label//VERY IMP: label is from data.js (VERYIMPORTANT way to put comment in JSX)
        >{props.label}</label>
      </components.Option>
    </div>
  );
};

const MultiSelectDropDown = () => {

  //VERY IMP: At any state after change, selectedDropDownOptions will have list of item selected. Which can be passed to other component to uses as per requirement.
  const [selectedDropDownOptions, setSelectedDropDownOptions] = useState(null);
  //IMP: if passed null => nothing will be selected by default.
  //if passes dropDownOptions => all iteam will be selectd by default.

  const handleDropdownChange = (selectedDataFromPage) => {

    setSelectedDropDownOptions(selectedDataFromPage);
  }

  return (
    <span //TO-DO: Discuss with K , as what this is doing
      className="d-inline-block" // need K discussion
      data-toggle="popover" //need K discussion
      data-trigger="focus" //need K discussion
      data-content="Please Select Options"
    >

      <ReactSelect
        options={dropDownOptions} //DropDown Items
        isMulti                  //Is Multiple Selection Allowed?
        closeMenuOnSelect={false}  //If false, then dropdown will not close on selection of item(s)
        hideSelectedOptions={false} //as is
        components={{              //IMP: You can add you custom component //IMP: they can also use props of parent component to show , where they are selected or not and etc
          Option
        }}

        onChange={handleDropdownChange}  //This will be clicked, whenever their is a selection of de-selection of items
        allowSelectAll={true} //as is

        value={selectedDropDownOptions}  //current selected items. // NEED to be managed by useState or class this.state
      >

      </ReactSelect>

    </span>

  )
}

export default MultiSelectDropDown;