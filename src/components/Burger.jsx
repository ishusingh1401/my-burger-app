import { useState, useReducer } from "react";
import "./Burger.css";

export default function Burger() {

  // previous state, dispatch param
  const addRemoveIngredientComplex = (state, objWithTypeAndIngredient) => {
    console.log(state, objWithTypeAndIngredient)
    switch (objWithTypeAndIngredient.ingredient) {
      case "lettuce": {
        if (objWithTypeAndIngredient.type === 'add') {
          return {lettuce: state.lettuce + 1};
        } else if (objWithTypeAndIngredient.type === 'remove') {
          return {lettuce: state.lettuce - 1};
        }
        break;
      }

      case "cheese": {
        if (objWithTypeAndIngredient.type === 'add') {
          return {cheese: state.cheese + 1};
        } else if (objWithTypeAndIngredient.type === 'remove') {
          return {cheese: state.cheese - 1};
        }
        break;
      }

      case "tomato": {
        if (objWithTypeAndIngredient.type === 'add') {
          return {tomato: state.tomato + 1};
        } else if (objWithTypeAndIngredient.type === 'remove') {
          return {tomato: state.tomato - 1};
        }
        break;
      }

      case "patty": {
        if (objWithTypeAndIngredient.type === 'add') {
          return {patty: state.patty + 1};
        } else if (objWithTypeAndIngredient.type === 'remove') {
          return {patty: state.patty - 1};
        }
        break;
      }

      case "onion": {
        if (objWithTypeAndIngredient.type === 'add') {
          return {onion: state.onion + 1};
        } else if (objWithTypeAndIngredient.type === 'remove') {
          return {onion: state.onion - 1};
        }
        break;
      }

      default:
        break;
    }
  };

  const [myComplexState, dispatch] = useReducer(addRemoveIngredientComplex, {
    patty: 0,
    onion: 0,
    lettuce: 0,
    tomato: 0,
    cheese: 0,
  })
  
  return (
    <div>
      <h1 className="header">Zingy Burger Maker</h1>
      <div className="burger-top"></div>
      {myComplexState.onion > 0 ? <div className="ing-onion"></div> : null}
      {myComplexState.lettuce > 0 ? <div className="ing-lettuce"></div> : null}
      {myComplexState.tomato > 0 ? <div className="ing-tomato"></div> : null}
      {myComplexState.cheese > 0 ? <div className="ing-cheese"></div> : null}
      <div className="burger-bottom"></div>
      <p className="header1">Lettuce</p>
      <div className="header1">
        <button
          className="btn-add"
          onClick={() => dispatch({type:"add", ingredient:"lettuce"})}
        >
          Add
        </button>
        <button
          className="btn-delete"
          onClick={() => dispatch({type:"remove", ingredient:"lettuce"})}
        >
          Remove
        </button>
      </div>

      <p>Tomato</p>
      <div className="">
        <button
          className="btn-add"
          onClick={() => dispatch({type:"add", ingredient:"tomato"})}
        >
          Add
        </button>
        <button
          className="btn-delete"
          onClick={() => dispatch({type:"remove", ingredient:"tomato"})}
        >
          Remove
        </button>
      </div>

      <p>Patty</p>
      <div className="">
        <button
          className="btn-add"
          onClick={() => dispatch({type:"add", ingredient:"patty"})}
        >
          Add
        </button>
        <button
          className="btn-delete"
          onClick={() => dispatch({type:"remove", ingredient:"patty"})}
        >
          Remove
        </button>
      </div>

      <p>Cheese</p>
      <div className="">
        <button
          className="btn-add"
          onClick={() => dispatch({type:"add", ingredient:"cheese"})}
        >
          Add
        </button>
        <button
          className="btn-delete"
          onClick={() => dispatch({type:"remove", ingredient:"cheese"})}
        >
          Remove
        </button>
      </div>

      <p>Onion</p>
      <div className="">
        <button
          className="btn-add"
          onClick={() => dispatch({type:"add", ingredient:"onion"})}
        >
          Add
        </button>
        <button
          className="btn-delete"
          onClick={() => dispatch({type:"remove", ingredient:"onion"})}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
