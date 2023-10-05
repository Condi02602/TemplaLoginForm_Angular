import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  // @ViewChild('regform') regform: NgForm;

  // Custom validator function for salary range validation
  // salaryRangeValidator(value: any) {
  //   if (value !== null && (isNaN(value) || value < 50000 || value > 100000)) {
  //     return { salaryRange: true };
  //   }
  //   return null;
  // }
  maleClothingItems = ["Jeans", "T-Shirt", "Court"];
  femaleClothingItems = ["Skirt", "Jeans Pants", "Shirts"];

  passwordsMatching: boolean = false;
  isConfirmPasswordDirty: boolean = false;
  confirmPasswordClass: string = 'form-control';
  repassword:string='';
  selectedGender: string = ''; // Initialize selectedGender as an empty string



  password: string = '';
  
  passwordStrengthText: string = '';
  strengthColor: string = 'black';



  bithdate: Date  | null = null;
  ageMessage: string | null = null; // Initialize ageMessage as null
  ageReg: string | null = null; // Initialize ageMessage as null
  minimumDate: string = '';
  age!:any;
  ageeer!:any;
  maxDate!: string;
  minDate!:any;
  rd!:string;
  items!:string;
  isGenderDirty: boolean = false; // Initialize isGenderDirty as false
  regform: any;
  linkVisited = false;
  constructor() {
    this.calculateMaxDate();
    // Calculate the minimum date (18 years ago from today)
    // const today = new Date();
    // today.setFullYear(today.getFullYear() - 18);
    // this.minimumDate = today.toISOString().split('T')[0];
    this.registrationDate();
    this.calculateMinDate();
  }
  checkStrength() {
    const password = this.password;
    let strength = 0;
     
    if (password.length < 7) {
      this.passwordStrengthText = 'Too short';
      return;
    }

    if (password.length > 7) strength += 1;
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;
    if (password.match(/([0-9])/)) strength += 1;
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
    if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;
      console.log(strength);
    if (strength < 2) {
      this.passwordStrengthText = 'Weak';
      this.strengthColor = 'red';
    } else if (strength <= 2) {
      this.passwordStrengthText = 'Good';
      this.strengthColor = 'orange';
    } else if(strength > 2){
      this.passwordStrengthText = 'Strong';
      this.strengthColor = 'green';
    }
  }

checkPasswords(pw: string, cpw: string) {
    this.isConfirmPasswordDirty = true;
    if (pw === cpw) {
      this.passwordsMatching = true;
      this.confirmPasswordClass = 'form-control is-valid';
    } else {
      this.passwordsMatching = false;
      this.confirmPasswordClass = 'form-control is-invalid'
    }
  }
  CalculateAge(){
    if (this.bithdate) {
      const today = new Date();
      // console.log(today);
      const birthDate = new Date(this.bithdate);
      const ageDiff = today.getTime() - birthDate.getTime();
      const mindate= new Date(today.getFullYear()-18,today.getMonth(),today.getDate());
      if(birthDate > mindate){
        // this.age="age cannot be below 18";
        this.ageMessage = 'Age cannot be below 18';
        
        this.age = null;
   }
      else{
      // this.age="age is valid";
      this.ageMessage = null;
      this.age = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25));
     }
  
  }
}
calculateMaxDate() {
  const today = new Date();
  const year = today.getFullYear()-18;
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  this.maxDate = `${year}-${month}-${day}`;
}
registrationDate(){
  const today = new Date();
  const year = today.getFullYear()
  const month = today.getMonth()+4
  const day = today.getDate().toString().padStart(2, '0');
  this.rd= `${year}-${month}-${day}`;


}
calculateMinDate() {
  const today = new Date();
  const year = today.getFullYear().toString();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  this.minDate = `${year}-${month}-${day}`;
}


  // ... your existing code

  genderChanged() {
    // Reset the selected clothing item when the gender changes
    this.items = '';
    // Set isGenderDirty to true when gender changes
    this.isGenderDirty = true;
  }
  onSubmit(regform: NgForm) {
    // Check if the form is valid before submitting
    if (regform.valid) {
      // Form is valid, you can proceed with submission
      console.log('Form is valid');
    } else {
      // Form is invalid, display error messages
      console.log('Form is invalid');
    }
  }
  markLinkAsVisited() {
    this.linkVisited = true;
  }

}