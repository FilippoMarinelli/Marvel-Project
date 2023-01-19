import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.botaoClicadoSuccess: {
      console.log('sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.botaoClicadoFailure: {
      console.log('deu erro');
      return state;
    }

    case types.botaoClicadoRequest: {
      console.log('estou fazendo a requisição');
      return state;
    }

    default:
      return state;
  }
}
