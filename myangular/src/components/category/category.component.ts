import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

    public modelData:any;
    public isShowAddCatForm:boolean = false;
    public url:string = "http://api.inmar.in/api/v1/category" 
    submitted = false;
    updated_id =  false;

    constructor(
        private apiSrv: ApiService,
        ) { 

        }

    public modelForm = new FormGroup({
        model_name: new FormControl('', Validators.required),
        model_description: new FormControl('', Validators.required),
    });
    
    ngOnInit() {
        this.getModelData();
    }

    get modelFormControl() {
        return this.modelForm.controls;
    }

    getModelData(){
        this.apiSrv.fetchFromServer(this.url).subscribe((response:any)=>{
            this.modelData = response;
        });
    }

    toggleShowAddForm(type:any){
        this.isShowAddCatForm = true;
        if(type != undefined && type != 'add'){
            let url = this.url + '/' + type + '/';
            this.apiSrv.fetchFromServer(url).subscribe((response:any)=>{
                this.updated_id = type;
                if (response){
                    this.modelFormControl['model_name'].setValue(response[0]['name']);
                    this.modelFormControl['model_description'].setValue(response[0]['description']);
                }
            });
        }else{
            this.modelFormControl['model_name'].reset();
            this.modelFormControl['model_description'].reset();
        }
    }

    deletemodel(id:any){
        if(id){
            this.apiSrv.deleteInServer(this.url, id).subscribe((response:any)=>{
                this.getModelData();
            })
        }
        
    }

    onSubmit(){
        this.submitted = true;
        if (this.modelForm.valid) {
            let postData = {
                name : this.modelFormControl.model_name.value,
                description : this.modelFormControl.model_description.value
            }
            let url =  this.url;
            if(this.updated_id){
                url = this.url + '/' + this.updated_id + '/';
            }
            this.apiSrv.postToServer(url, postData).subscribe((response:any)=>{
                this.getModelData();
                this.isShowAddCatForm = false;
                this.updated_id = false;
            });
            
        }
    }

    hideForm(){
        this.isShowAddCatForm = false;
        this.updated_id = false;
    }


  

}
