import { Component, inject } from '@angular/core';
import {FormBuilder, MinLengthValidator, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  private fb = inject(FormBuilder);

  userFromGroup =  this.fb.group({
        userName:['', [Validators.required, Validators.minLength(5)]],
        email:['', Validators.required],
        pwd:['', Validators.required]
      });


  onFormSubmit(){
    console.log(this.userFromGroup.value);
  }


}
