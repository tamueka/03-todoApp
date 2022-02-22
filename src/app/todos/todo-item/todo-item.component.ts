import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.models';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;
  chkCompletado: FormControl;
  textInput: FormControl;
  editando: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.textInput = new FormControl(this.todo.texto, Validators.required);
  }

  editar(): void {
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion(): void {
    this.editando = false;
  }
}
