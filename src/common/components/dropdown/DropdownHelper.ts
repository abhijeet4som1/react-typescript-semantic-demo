/*helper file for dropdown options*/

/*Dropdown options format*/
export interface dropdownOptions{
	key: string;
	value: string;
}

/*Dropdown model props*/
export interface DropdownModelProps{
  /*options for the dropdown*/
   options: Array<dropdownOptions>;
   /*label for the dropdown*/
   label?:string;
   /*current value*/
   value:string;
   /*name*/
   name:string;

   hideLabel:boolean;

   onValueChange:any;
}
