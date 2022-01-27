import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms_proj';
  registration :FormGroup =new FormGroup({
    name1:new FormControl('Name',Validators.required),
    name2:new FormControl('',Validators.required),
    agree:new FormControl(false),
    address:new FormGroup({postal_code: new FormControl(''),
      state:new FormControl(''),
      city:new FormControl('')
    })
  })

  load_api_data(){
    this.registration.patchValue({
      name1:'Kalani',
    name2:'Prabodha',
    agree:false,
   

  })

}

}
 