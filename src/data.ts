export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const customStyles1 = {
   input:() =>({
  width: "100px",
}),

}
export const customStyles = {
  control: () => ({
    display:"inline-flex",
    height:"40px",
    width:"300px",
    background: '#000000',
    border: "2px solid #8D98F8",
}),
menu:(provided) =>({
    ...provided,
    background: '#000000',
    border: "2px solid #8D98F8",
    marginTop:"20px",
}),
input:() =>({
    color:"white",
    lineHeight:"2.1",
    paddingLeft:"7px",
    fontSize: "16px",
    fontFamily: 'Verdanai',
}),
valueContainer:() =>({
    width:"100%",
}),
singleValue:() =>({
    color:"white",
    lineHeight:"2.1",
    paddingLeft:"7px",
    fontSize: "16px",
    fontFamily: 'Verdanai',
    height: "0px",
}),
option: () => ({
    backgroundColor: "black",
    padding: 10,
    fontSize: "16px",
    fontFamily: 'Verdanai',
    
  }),
placeholder: () => ({
    color:"white",
    filter:"brightness(0.5)",
    lineHeight:"2.7",
    paddingLeft:"7px",
    fontSize: "13px",
    fontFamily: 'Verdanai',
    width:"100%",
    height:"0px",
  }),  
  noOptionsMessage:() =>({
    color:"white",
    lineHeight:"2.1",
    paddingLeft:"7px",
    filter:"brightness(0.5)",
    fontSize: "16px",
    fontFamily: 'Verdanai',
  }),
indicatorSeparator: () => ({
    display:"none",
  }),
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean' },
  { value: 'blue', label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'red', label: 'Red'},
  { value: 'orange', label: 'Orange'},
  { value: 'yellow', label: 'Yellow' },
  { value: 'green', label: 'Green' },
  { value: 'forest', label: 'Forest' },
  { value: 'slate', label: 'Slate' },
  { value: 'silver', label: 'Silver' },
];

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly ColourOption[];
}

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: 'Colours',
    options: colourOptions,
  },
];