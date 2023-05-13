import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  closeForm=true;
  submitForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient){

  }
  ngOnInit(): void {
    this.submitForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      message:['',Validators.required],

      
    }) 
  }

submitHandler(){
  let body={
    name:this.submitForm.get('name')?.value,
    email:this.submitForm.get('email')?.value,
    phoneNo:this.submitForm.get('phone')?.value,
    message:this.submitForm.get('message')?.value,
  }
  if(this.submitForm.valid){
    this.http.post('http://localhost:3000/msg',body).subscribe(res=>{
      if(res){
        this.closeForm=false
      }
      })
      
        
  }

}
get name() {
  return this.submitForm.get('name')!;
}

get phone() {
  return this.submitForm.get('phone')!;
}

get email() {
  return this.submitForm.get('email')!;
}
get message() {
  return this.submitForm.get('message')!;
}


validate(): void {
  if (this.submitForm?.invalid) {
    for (const control of Object.keys(this.submitForm.controls)) {
      this.submitForm.controls[control].markAsTouched();
    }
    return;
  }
}
}
