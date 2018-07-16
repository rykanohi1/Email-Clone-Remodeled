export const GET_FOLDERS = 'GET_FOLDERS'
export const DISPLAY_FOLDER = 'DISPLAY_FOLDER'

export const getFolders = userId => ({
    type: GET_FOLDERS,
    id: userId
})

export const displayFolder = folderId => ({
    type: DISPLAY_FOLDER,
    id: folderId
})