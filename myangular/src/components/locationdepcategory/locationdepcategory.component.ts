import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formatCurrency } from '@angular/common';


@Component({
  selector: 'app-locationdepcategory',
  templateUrl: './locationdepcategory.component.html',
  styleUrls: ['./locationdepcategory.component.scss']
})

export class LocationDepCategoryComponent implements OnInit {

    public modelData:any;
    public url:string = "http://api.inmar.in/api/v1/location" 
    public location_list:any;
    public department_list:any;
    public category_list:any;
    public submitted = false;
    public categories_data:any;
    public selected_location_id:any;
    public selected_department_id:any;


    constructor(
        private apiSrv: ApiService,
        ) { 

        }

    public modelForm = new FormGroup({
        location_list: new FormControl('', Validators.required),
        department_list: new FormControl('', Validators.required),
        category_list: new FormControl('', Validators.required),
    });
    
    ngOnInit() {
        this.getLocations();
        this.getDepartments();
        this.getCateories();
    }

    selectedLocationId(event:any){
        this.selected_location_id = event.target.value;
        if(this.selected_department_id){
            this.showLocationDepartmentCategories(this.selected_location_id, this.selected_department_id)
        }
    }

    selectedDepartmentId(event:any){
        this.selected_department_id = event.target.value;
        this.showLocationDepartmentCategories(this.selected_location_id, this.selected_department_id)
    }

    showLocationDepartmentCategories(location_id:any, department_id:any){
        if(location_id && department_id){
            let url =  'http://api.inmar.in/api/v1/location/'+location_id+ '/department/'+department_id+'/category';
            this.apiSrv.fetchFromServer(url).subscribe((response:any)=>{
                if(response.length){
                    this.categories_data = response;
                }else{
                    this.categories_data = false;
                }
            });
        }
        
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

    getCateories(){
        let url = "http://api.inmar.in/api/v1/category"
        this.apiSrv.fetchFromServer(url).subscribe((response:any)=>{
            this.category_list = response;
        });
    }

    deleteFCR(location_id:any, department_id:any, id:any){
        if(location_id && department_id && id){
            let url =  'http://api.inmar.in/api/v1/location/'+location_id+ '/department/'+department_id+'/category/'+id;
            this.apiSrv.deleteInServer(url, false).subscribe((response:any)=>{
                this.showLocationDepartmentCategories(this.selected_location_id, this.selected_department_id);
            })
        }
        
    }

    onSubmit(){
        this.submitted = true;
        if (this.modelForm.valid) {
            let postData = {
                category_id : this.modelForm.value.category_list
            }
            let url =  'http://api.inmar.in/api/v1/location/'+this.modelForm.value.location_list + '/department/'+this.modelForm.value.department_list+'/category';
            
            this.apiSrv.postToServer(url, postData).subscribe((response:any)=>{
                this.showLocationDepartmentCategories(this.selected_location_id, this.selected_department_id)
            });
        }
    }



  

}
