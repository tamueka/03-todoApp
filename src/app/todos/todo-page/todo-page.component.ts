import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { togleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  completado = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  togleAll(): void {
    this.completado = !this.completado;
    this.store.dispatch(togleAll({ completado: this.completado }));
  }
}
