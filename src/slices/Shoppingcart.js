import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  selectedData: [],
  addtocartmoney: 0,
  Total: 200000,
};
//shoppingfetch
export const shoppingfetch = createAsyncThunk("shoppingfetch", async (url) => {
  try {
    const data = await axios.get(url);
    const datatwo = await data.data;
    console.log(datatwo);
    return datatwo;
  } catch (error) {
    console.log(error);
  }
});
const ShoppingSlice = createSlice({
  name: "shoppingcart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(shoppingfetch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(shoppingfetch.fulfilled, (state, action) => {
      state.data = action.payload.products;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(shoppingfetch.rejected, (state, action) => {
      state.isError = action.payload;
    });
  },
  reducers: {
    done: {
      prepare(amount) {
        return {
          payload: { amount },
        };
      },
      reducer(state, action) {
        console.log("Done", (state.isError = false));
      },
    },
    addelelement: {
      prepare(id) {
        return {
          payload: { id: id },
        };
      },
      reducer(state, action) {
        const dataa = state.data;
        const findel = dataa.find((e) => e.id === action.payload.id);
        state.selectedData.push(findel);
        state.addtocartmoney += findel.price;
        state.Total -= state.addtocartmoney;
        console.log(findel);
      },
    },
    deleteitem: {
        prepare(id) {
          return {
            payload: { id: id },
          };
        },
        reducer(state, action) {
          const findel = state.selectedData.filter(
            (e) => e.id === action.payload.id
          );
          state.selectedData = state.selectedData.filter(
            (e) => e.id !== action.payload.id
          );
  
          const el=findel[0];
          findel.shift();
          if(findel.length==0&&state.selectedData==0){
              state.addtocartmoney=0;
              state.Total=200000
              return ;
          }else{
              state.addtocartmoney=state.addtocartmoney-el.price;
              state.Total+=el.price;
          }
          for (let v of findel) {
            state.selectedData.push(v)
          }
          
        },
      },
      
    reset(state, action) {
      state.selectedData = [];
      state.addtocartmoney = 0;
      state.data = [];
      state.Total = 200000;
    },
  },
});
export default ShoppingSlice.reducer;
export const { addelelement, done, reset, deleteitem } = ShoppingSlice.actions;
