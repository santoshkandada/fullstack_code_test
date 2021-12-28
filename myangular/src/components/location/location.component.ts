import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent implements OnInit {

    public locationData:any;
    public isShowAddLocForm:boolean = false;
    public url:string = "http://api.inmar.in/api/v1/location" 
    public submitted = false;
    public updated_id =  false;

    constructor(
        private apiSrv: ApiService,
        ) { 

        }

    public locationForm = new FormGroup({
        location_name: new FormControl('', Validators.required),
        location_description: new FormControl('', Validators.required),
    });
    
    ngOnInit() {
        this.getLocationData();
    }

    get locationFormControl() {
        return this.locationForm.controls;
    }

    getLocationData(){
        this.apiSrv.fetchFromServer(this.url).subscribe((response:any)=>{
            this.locationData = response;
        });
    }

    toggleShowAddForm(type:any){
        this.isShowAddLocForm = true;
        if(type != undefined && type != 'add'){
            let url = this.url + '/' + type + '/';
            this.apiSrv.fetchFromServer(url).subscribe((response:any)=>{
                this.updated_id = type;
                if (response){
                    this.locationFormControl['location_name'].setValue(response[0]['name']);
                    this.locationFormControl['location_description'].setValue(response[0]['description']);
                }
            });
        }else{
            this.locationFormControl['location_name'].reset();
            this.locationFormControl['location_description'].reset();
        }
    }

    deleteLocation(id:any){
        if(id){
            this.apiSrv.deleteInServer(this.url, id).subscribe((response:any)=>{
                this.getLocationData();
            })
        }
        
    }

    onSubmit(){
        this.submitted = true;
        if (this.locationForm.valid) {
            let postData = {
                name : this.locationFormControl.location_name.value,
                description : this.locationFormControl.location_description.value
            }
            let url =  this.url;
            if(this.updated_id){
                url = this.url + '/' + this.updated_id + '/';
            }
            this.apiSrv.postToServer(url, postData).subscribe((response:any)=>{
                this.getLocationData();
                this.isShowAddLocForm = false;
                this.updated_id = false;
            });
            
        }
    }

    hideForm(){
        this.isShowAddLocForm = false;
        this.updated_id = false;
    }


  

}
