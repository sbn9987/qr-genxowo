import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {

  Suser :string; 
  user = Object;
  createdCode = null;


  constructor(
    private authService: AuthService,
  ){}

   ngOnInit() { 
     this.authService.getProfile().subscribe(profile => {
       this.user = profile.user;
     }, err => {
       console.log(err);
       return false;
     });
   }

   createCode() {
     this.authService.getProfile().subscribe(profile => {
       this.Suser = JSON.stringify(profile.user);
       this.createdCode = this.Suser;
     }, err => {
       console.log(err); return false;
     });
    }
  }