import {GET_FOLDERS} from './folder-list.actions';

const defaultState = {folders: []};
const folders = [{name: 'Butch', count: 2, id: 1 },
                 {name: 'mitch', count: 11, id: 2},
                 {name: 'enrique', count: 20, id: 3}];

const folderList = (state = defaultState, action) => {
    switch (action.type) {
      case GET_FOLDERS:
        return {
          ...state,
            folders
        }
      default:
        return state
    }
  }
  
  export default folderList