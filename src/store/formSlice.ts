import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
  id: string;
  nameTitle: string;
  firstname: string;
  sirname: string;
  birthday: string;
  nationality: string;
  citizenId: string;
  gender: string;
  phoneCode: string;
  phoneNumber: string;
  passsport: string;
  salary: string;
  part1: string;
  part2: string;
  part3: string;
  part4: string;
  part5: string;
}

interface FormState {
  formData: FormData[];
}

const getInitialFormData = (): FormData[] => {
  const storedData = localStorage.getItem("formdata");
  return storedData ? JSON.parse(storedData) : [];
};

const initialState: FormState = {
  formData: getInitialFormData(),
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormData[]>) => {
      state.formData = action.payload;
      localStorage.setItem("formdata", JSON.stringify(action.payload));
    },
    deleteFormData: (state, action: PayloadAction<string>) => {
      state.formData = state.formData.filter(
        (data) => data.id !== action.payload
      );
      localStorage.setItem("formdata", JSON.stringify(state.formData));
    },
    deleteAllFormData: (state) => {
      state.formData = [];
      localStorage.removeItem("formdata");
    },
    updateFormData: (state, action: PayloadAction<FormData>) => {
      const { id } = action.payload;
      const index = state.formData.findIndex((data) => data.id === id);
      if (index !== -1) {
        state.formData[index] = action.payload;
        localStorage.setItem("formdata", JSON.stringify(state.formData));
      }
    },
  },
});

export const {
  setFormData,
  deleteFormData,
  deleteAllFormData,
  updateFormData,
} = formSlice.actions;

export const selectFormData = (state: { form: FormState }) =>
  state.form.formData;

export default formSlice.reducer;
