export const addNum = () => {
    return dispatch => {
      dispatch(deleteNum())
    }
}

export const deleteNum = () => ({
  type:'DELETE_NUM'
})