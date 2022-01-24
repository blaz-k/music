import { Form as VeeForm, Field as VeeField, defineRule, ErrorMessage } from "vee-validate"; // eslint-disable-line

import { required } from "@vee-validate/rules";

export default {
  // components: {
  //   VeeField,
  //   VeeForm,
  // },
  // methods: {
  //   // Validator function
  //   isRequired(value) {
  //     return value ? true : "This field is required";
  //   },
  // },

  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("required", required);
  },
};
