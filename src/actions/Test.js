import {addhome, deletehome} from './home';
export const addNum = () => {
  return (dispatch, getState) => {
    let store = getState();
    console.log(store)
    dispatch(addhome())
  }
}

export const deleteNum = () => ({
  type:'DELETE_NUM'
})