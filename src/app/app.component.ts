import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms_proj';


  constructor(private fb:FormBuilder){

  }
  registration= this.fb.group({
    name1:['',[Validators.required,Validators.minLength(3)]],
    name2:['',[Validators.required]],
    agree:false,
    address:this.fb.group({
      postal_code:['',Validators.required],
      state:[''],
      city:['']
    })
  })
  
  /* registration :FormGroup =new FormGroup({
    name1:new FormControl('Name',Validators.required),
    name2:new FormControl('',Validators.required),
    agree:new FormControl(false),
    address:new FormGroup({postal_code: new FormControl(''),
      state:new FormControl(''),
      city:new FormControl('')
    })
  })
 */
  /* load_api_data(){
    this.registration.patchValue({
      name1:'Kalani',
    name2:'Prabodha',
    agree:false,
   

  })

} */
get name1(){
  return this.registration.get('name1')
}

}
 