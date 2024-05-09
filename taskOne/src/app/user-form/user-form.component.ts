import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  
  resetForm(my_from:NgForm){

    my_from.resetForm();
  }

  save(formData:any){
    //console.log(formData);
    console.log(formData.value);
    
    //formData.reset(); After Submit the form you can reset form using <- method.

  }
}
