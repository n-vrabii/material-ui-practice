import { useReducer } from 'react';

export function useForm(initialState) {
  const [state, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case "firstName":
        return { ...state, firstName: action.value, buttonIsDisabled: !(action.value && state.secondName && state.email) }
      case "secondName":
        return { ...state, secondName: action.value, buttonIsDisabled: !(state.firstName && action.value && state.email) }
      case "email":
        return { ...state, email: action.value, buttonIsDisabled: !(state.firstName && state.secondName && action.value) }
      case "reset":
        return initialState;
      default:
        return state
    }
  }, initialState);

  return [state, dispatch];
}