import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formatCurrency } from '@angular/common';


@Component({
  selector: 'app-foodcatalogue',
  templateUrl: './foodcatalogue.component.html',
  styleUrls: ['./foodcatalogue.component.scss']
})

export class FoodCatalogueComponent implements OnInit {

    public modelData:any;
    public isShowAddCatForm:boolean = false;
    public url:string = "http://api.inmar.in/api/v1/location" 
    location_list:any;
    department_list:any;
    submitted = false;
    departments_data:any;
    selected_location_id:any;


    constructor(
        private apiSrv: ApiService,
        ) { 

        }

    public modelForm = new FormGroup({
        location_list: new FormControl('', Validators.required),
        department_list: new FormControl('', Validators.required),
    });
    
    ngOnInit() {
        this.getLocations();
        this.getDepartments();
    }

    selectedLocationId(event:any){
        this.selected_location_id = event.target.value;
        this.showLocationDepartments(this.selected_location_id); 
    }

    showLocationDepartments(location_id:any){
        let url =  'http://api.inmar.in/api/v1/location/'+location_id+ '/department';
        this.apiSrv.fetchFromServer(url).subscribe((response:any)=>{
            if(response.length){
                this.departments_data = response;
            }else{
                this.departments_data = false;
            }
        });
    }

    get modelFormControl() {
        return this.modelForm.controls;
    }

    getLocations(){
        let url = "http://api.inmar.in/api/v1/location"
        this.apiSrv.fetchFromServer(url).subscribe((response:any)=>{
            this.location_list = response;
        });
    }

    getDepartments(){
        let url = "http://api.inmar.in/api/v1/department"
        this.apiSrv.fetchFromServer(url).subscribe((response:any)=>{
            this.department_list = response;
        });
    }

    deleteFCR(location_id:any, id:any){
        if(location_id && id){
            let url =  'http://api.inmar.in/api/v1/location/'+location_id+ '/department/'+id;
            this.apiSrv.deleteInServer(url, false).subscribe((response:any)=>{
                this.showLocationDepartments(this.selected_location_id);
            })
        }
        
    }

    onSubmit(){
        this.submitted = true;
        if (this.modelForm.valid) {
            let postData = {
                department_id : this.modelForm.value.department_list
            }
            let url =  'http://api.inmar.in/api/v1/location/'+this.modelForm.value.location_list + '/department';
            this.apiSrv.postToServer(url, postData).subscribe((response:any)=>{
                this.isShowAddCatForm = false;
                this.showLocationDepartments(this.selected_location_id)
            });
        }
    }



  

}
