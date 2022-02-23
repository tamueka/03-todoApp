import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.models';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.textInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe((valor) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
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
