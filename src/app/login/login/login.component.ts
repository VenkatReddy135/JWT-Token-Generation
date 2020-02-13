import { Component, OnInit } from '@angular/core';
import { VenkatService } from 'src/app/venkat.service';
import { Router } from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  submitted=false
  constructor(private router:Router,private fb:FormBuilder,private venkatservice:VenkatService) { }
  get f(){ return this.form.controls}
form=this.fb.group({
  uname:['',Validators.required],
  pwd:['',Validators.required]
})
login(){
this.submitted=true
if(this.form.invalid){
return
}else{
  if(this.form.controls['uname'].value=='venkat' && this.form.controls['pwd'].value=='venkat'){
this.venkatservice.sendToken(this.form.value.uname)
this.router.navigate(['page'])
  }else{
    alert('username & password are incorrect')
    this.form.reset()
    this.submitted=false
}
}
}
}

