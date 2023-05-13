import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  tableData!: any[];
  tableData1!: any[];
  tableData2!: any[];

  constructor(private http: HttpClient,private modalService: NgbModal) { }

  ngOnInit() {
    // Make API call to retrieve data
    this.http.get<any>('http://localhost:3000/furniture').subscribe(data => {
      if(data)
      this.tableData = data;
    });
    this.http.get<any>('http://localhost:3000/users').subscribe(data => {
      if(data)
      this.tableData1 = data;
    });
    this.http.get<any>('http://localhost:3000/msg').subscribe(data => {
      if(data)
      this.tableData2 = data;
    });
  }
  deleteHandler(item:any){
    this.http.delete<any>(`http://localhost:3000/msg/${item._id}`).subscribe(res=>{
      this.ngOnInit();
      console.log('sucess')
    })
  }
  acceptHandler(item:any){
    let body={
      _id:item._id,
      status:"accepted",
      name:item.name,
      email:item.email,
      phoneNo:item.phoneNo,
      dateOfDelivery:item.dateOfDelivery.toString().slice(0,10),
      deliveryAddress:item.deliveryAddress,
      customFurniture:item.customFurniture,
      furnitureToChoose:item.furnitureToChoose,
      suggestionNote:item.suggestionNote,
    }
    this.http.put<any>(`http://localhost:3000/furniture/${item._id}`,body).subscribe(res=>{
      this.ngOnInit();
      console.log('sucess')
    })
  }
  rejectHandler(item:any){
    let body={
      _id:item._id,
      status:"rejected",
      name:item.name,
      email:item.email,
      phoneNo:item.phoneNo,
      dateOfDelivery:item.dateOfDelivery.toString().slice(0,10),
      deliveryAddress:item.deliveryAddress,
      customFurniture:item.customFurniture,
      furnitureToChoose:item.furnitureToChoose,
      suggestionNote:item.suggestionNote,
    }
    this.http.put<any>(`http://localhost:3000/furniture/${item._id}`,body).subscribe(res=>{
      this.ngOnInit();
      console.log('sucess')
    })
  }
  deleteUser(item:any){
    this.http.delete<any>(`http://localhost:3000/users/${item._id}`).subscribe(res=>{
      this.ngOnInit();
      console.log('sucess')
    })
  }
  editUser(user: any) {
    const modalRef = this.modalService.open(EditProfileComponent);
      modalRef.componentInstance.user = user;
  }
}
