import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-furniture',
  templateUrl: './get-furniture.component.html',
  styleUrls: ['./get-furniture.component.css']
})
export class GetFurnitureComponent {
  closeForm=true;
  projectForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router){

  }
  ngOnInit(): void {
    this.projectForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      dateOfDelivery:['',Validators.required],
      deliveryAddress:['',Validators.required],
      furnitureToChoose:['',Validators.required],
      customFurniture:['',Validators.required],
      suggestionNote:['',Validators.required],   
    }) 
  }

submitHandler(){
  let body={
    status:"no Status",
    name:this.projectForm.get('name')?.value,
    email:this.projectForm.get('email')?.value,
    phoneNo:this.projectForm.get('phone')?.value,
    dateOfDelivery:this.projectForm.get('dateOfDelivery')?.value,
    deliveryAddress:this.projectForm.get('deliveryAddress')?.value,
    customFurniture:this.projectForm.get('customFurniture')?.value,
    furnitureToChoose:this.projectForm.get('furnitureToChoose')?.value,
    suggestionNote:this.projectForm.get('suggestionNote')?.value,
  }


  if(this.projectForm.valid){
    this.http.post('http://localhost:3000/furniture',body).subscribe(res=>{
    if(res){
      this.router.navigate(['/getproject']);
      this.closeForm=false
    }
    })
  }
  

  
}
get name() {
  return this.projectForm.get('name')!;
}

get phoneNo() {
  return this.projectForm.get('phoneNo')!;
}

get email() {
  return this.projectForm.get('email')!;
}

get dateOfDelivery() {
  return this.projectForm.get('dateOfDelivery')!;
}
get deliveryAddress() {
  return this.projectForm.get('deliveryAddress')!;
}
get customFurniture() {
  return this.projectForm.get('customFurniture')!;
}
get furnitureToChoose() {
  return this.projectForm.get('furnitureToChoose')!;
}
get suggestionNote() {
  return this.projectForm.get('suggestionNote')!;
}
validate(): void {
  if (this.projectForm?.invalid) {
    for (const control of Object.keys(this.projectForm.controls)) {
      this.projectForm.controls[control].markAsTouched();
    }
    return;
  }
}
}
