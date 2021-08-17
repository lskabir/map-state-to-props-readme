export default function shoppingListItemReducer(state = {items: 0}, action) {
	console.log(action);
	switch (action.type) {
	  case 'INCREASE_COUNT':
		console.log('Current state.clicks %s', state.items);
		console.log('Updating state.clicks to %s', state.items + 1);
		return {
		  items: state.items + 1
		};
  
	  default:
		console.log('Initial state.clicks: %s', state.items);
		return state;
	}
  }