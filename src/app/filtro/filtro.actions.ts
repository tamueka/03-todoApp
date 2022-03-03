import { createAction, props } from '@ngrx/store';
import { Todo } from '../todos/models/todo.models';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: filtrosValidos }>()
);
