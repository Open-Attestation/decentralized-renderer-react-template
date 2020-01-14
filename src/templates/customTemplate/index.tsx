import { CustomTemplate } from "./customTemplate";
import styled from "@emotion/styled";

export const templates = [
  {
    id: "custom",
    label: "Custom",
    template: CustomTemplate
  },
  {
    id: "custom-red",
    label: "Red Custom Template",
    template: styled(CustomTemplate)`
      color: red;
    `
  }
];
