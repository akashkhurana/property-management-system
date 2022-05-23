import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient, private properties:PropertyService) { }
  
  propertyList = <any>[]

  propertyForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    size: new FormControl('', [Validators.required])
    })
    

  ngOnInit(): void {
    this.properties.getProperties().subscribe((data) => {
      this.propertyList = data.records;
      console.log(this.propertyList)
    })
  }

  saveProperty(){
    let tableData = {
        'fields': this.propertyForm.value
      }
    console.log(tableData);
    this.properties.addProperty(tableData).subscribe((res)=>{console.log(res)})
    window.location.reload();
  }

  removeProperty(id:any){
    this.properties.deleteProperty(id).subscribe((res)=>{console.log(res)});
    console.warn(id);
    window.location.reload();
  }

}
