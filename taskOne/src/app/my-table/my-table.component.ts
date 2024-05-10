import { HttpClient } from '@angular/common/http';
import { Component,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})
export class MyTableComponent {

  @Input() HeadArray : any []=[];
  @Input() GridArray : any []=[];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  constructor(private http:HttpClient) {}
   
    ngOnInit(): void{}
   
  edit(item: any){
    debugger;
    item.onEdit = true;
  }

  delete(item: any){
    console.log(item);
    this.http.delete(`https://jsonplaceholder.typicode.com/users/${item}`);
    // this.onDelete.emit(item);
  }

}
