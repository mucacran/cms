import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }

export class Contact{
  constructor(
      public id:string,
      public name:string,
      public email:string,
      public phone:string,
      public imgUrl:string,
      public group?: Contact[]
      ){}
}