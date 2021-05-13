import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '@micronx/data';

@Component({
  selector: 'micronx-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[];
  ngOnInit(): void {
    console.log('Test')
  }

}
