import {GET_FOLDERS, DISPLAY_FOLDER} from './folder-list.actions';

const defaultState = {folders: []};
const folders = [{label: 'Butch', count: 2, id: 1, hasUnread: true},
                 {label: 'mitch', count: 11, id: 2},
                 {label: 'enrique', count: 20, id: 3}];

const folderList = (state = defaultState, action) => {
    switch (action.type) {
      case GET_FOLDERS:
        return {
          ...state,
            folders
        }
     // case DISPLAY_FOLDER:
   //     return {
  //        ...state,
 //           folderPage
 //       }
      default:
        return state
    }
  }
  
  export default folderList