import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { concatWith } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent 
{
  rechedFive={
    "background-color": "blue",
    "color": "White"};
  num:number=0;
  listIntegers:number[] =[];
  HideParagraphTuna:boolean=false;
  userName:string="";
  disabled:boolean=true;
  DisableTheButton()
  {
    if(this.userName=="" || this.userName==null)
    {
      this.disabled= true;
      console.log("DISABLED ");
    }
    else
    {
      this.disabled=  false;
      console.log("ENABLED");
    }
  }

   AlertUserName() {
    alert(" the user name is not empty.");
  }
  RestToEmptystring()
  {
    this.userName="";
    this.AlertUserName();
    this.disabled=true;
  }
  HideAndShowTunaSecret()
  {
    
    if(this.HideParagraphTuna)
    {
      this.HideParagraphTuna=false;
    }
    else
    {
      this.HideParagraphTuna=true;
    }
    if(this.num !=5)
    {
      this.listIntegers?.push(this.num);
      console.log(this.listIntegers);
       console.log(this.num);
       this.num++;
    }
    else
    {

    }
  }

}
