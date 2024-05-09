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

  constructor() {}
   
    ngOnInit(): void{}
   
  edit(item: any){
    debugger;
    item.onEdit = true;
  }

  delete(item: any){
    debugger;
    this.onDelete.emit(item);
  }

}
