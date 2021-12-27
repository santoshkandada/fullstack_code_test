import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})

export class SubcategoryComponent implements OnInit {

    public modelData:any;
    public isShowAddSubCatForm:boolean = false;
    public url:string = "http://api.inmar.in/api/v1/subcategory" 
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
            console.log(response)
            this.modelData = response;
        });
    }

    toggleShowAddForm(type:any){
        this.isShowAddSubCatForm = true;
        if(type != undefined && type != 'add'){
            let url = this.url + '/' + type + '/';
            this.apiSrv.fetchFromServer(url).subscribe((response:any)=>{
                console.log('fetch respose on update ---' , response);
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
                console.log('delete response-- ', response);
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
                console.log('Add & Update response-- ', response)
                this.getModelData();
                this.isShowAddSubCatForm = false;
                this.updated_id = false;
            });
            
        }
    }

    hideForm(){
        this.isShowAddSubCatForm = false;
        this.updated_id = false;
    }


  

}
