// src/features/formSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  userData: {
    name?: string;
    mobile?: string;
    age?: number;
    city?: string;
    company?: string;
    chiefComplaints?: string;
    expreience?: string;
    doctor?: string;
  };
  step: number;
}

const initialState: FormState = {
  userData: {
    name: "",
    mobile: "",
    age: undefined,
    city: "",
    company: "",
    chiefComplaints: "",
    expreience: "",
    doctor: "",
  },
  step: 1,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<FormState["userData"]>) => {
      console.log("!", action.payload);
      state.userData = { ...state.userData, ...action.payload };
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    resetForm: (state) => {
      state.userData = {
        name: "",
        mobile: "",
        age: undefined,
        city: "",
        company: "",
        chiefComplaints: "",
        expreience: "",
        doctor: "",
      };
      state.step = 1;
    },
  },
});

export const { setUserData, setStep, resetForm } = formSlice.actions;

export const selectForm = (state: { form: FormState }) => state.form;

export default formSlice.reducer;
