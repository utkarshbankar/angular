import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {


  formModel = {
    userName: '',
    email:'',
    pwd:''
  }
 
  
  onSubmit(formData:any){
    console.log('submit', formData['value']);
  }
}
