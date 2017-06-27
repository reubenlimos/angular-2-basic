import { Component, OnInit } from '@angular/core';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
	todos;
	textbox;
  appState = 'default';
  oldText;
  constructor(private _localService: LocalService) { }

  ngOnInit() {
  	this.todos = this._localService.getTodos();
  }

  addTodo(){ 
    var newTodo = {
      text: this.textbox
    }
  	this.todos.push(newTodo);
    this._localService.addTodo(newTodo)
  }
  deleteTodo(todoText) {
  	for(var i = 0; i < this.todos.length; i++) {
  		if(this.todos[i].text == todoText) {
  			this.todos.splice(i, 1);
  		}
  	}
    this._localService.deleteTodo(todoText);
  }

  editTodo(todo) {
    this.appState = 'edit';
    this.oldText = todo.text;
    this.textbox = todo.text;
  }
  updateTodo() {
    for(var i = 0; i < this.todos.length; i++) {
      if(this.todos[i].text == this.oldText) {
        this.todos[i].text = this.textbox;
      }
    }
    this._localService.updateTodo(this.oldText, this.textbox);
  }

}
