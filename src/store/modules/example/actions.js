import * as types from '../types';

export function clicaBotaoRequest() {
  return {
    type: types.botaoClicadoRequest,
  };
}

export function clicaBotaoSuccess() {
  return {
    type: types.botaoClicadoSuccess,
  };
}

export function clicaBotaoFailure() {
  return {
    type: types.botaoClicadoFailure,
  };
}
