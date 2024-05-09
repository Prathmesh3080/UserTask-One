import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {

  userList:any []=[];
  headArray = [
    {'Head': 'User Id', 'FieldName': 'id'},
    {'Head': 'User Name', 'FieldName': 'name'},
    {'Head': 'Email', 'FieldName': 'email'},
    {'Head': 'Website', 'FieldName': 'website'},
    {'Head': 'Action', 'FieldName': ''}
  ];

  /**
   *
   */
  constructor(private http:HttpClient) {}

  ngOnInit(): void{
    this.loadUser();
  }

  loadUser(){

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any) =>{
      this.userList = result;
    });
  }

  editUser(item:any){
    debugger;
  }

   deleteUser(item:any){
    debugger;
   } 
}
