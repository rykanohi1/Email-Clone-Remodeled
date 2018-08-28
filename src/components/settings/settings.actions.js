export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';

export const changeVisibility = settingsId => {
    type: CHANGE_VISIBILITY;
    id: settingsId;
}