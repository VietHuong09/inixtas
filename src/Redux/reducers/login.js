import * as loginConst from "../constrants/loginConst";

const initialState = {
  makhachhang: undefined,
  manhanvien: undefined,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case loginConst.POST_LOGIN: {
      return {
        ...state,
        makhachhang: action.payload.data.value.makhachhang,
        manhanvien: action.payload.data.value.manhanvien,
      };
    }
    case loginConst.POST_LOGIN_SUCCESS: {
      return {
        ...state,
        makhachhang: action.payload.data.value.makhachhang,
        manhanvien: action.payload.data.value.manhanvien,
      };
    }
    case loginConst.POST_LOGIN_FAILED: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
export default reducer;
