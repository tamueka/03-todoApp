import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.models';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje Ironman'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(actions.borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),

  on(actions.toggle, (state, { id }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return {
          ...todo,
        };
      }
    })
  ),

  on(actions.editar, (state, { id, texto }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return {
          ...todo,
        };
      }
    })
  ),

  on(actions.togleAll, (state, { completado }) =>
    state.map((todo) => {
      return {
        ...todo,
        completado,
      };
    })
  ),

  on(actions.limpiarTodos, (state) => state.filter((todo) => !todo.completado))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
