import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates } from "./customTemplate";
import styled from "@emotion/styled";
import { CustomTemplate } from "./customTemplate/customTemplate";

export const registry: TemplateRegistry<any> = {
  custom: templates,
  red: [
    {
      id: "custom-red",
      label: "Red Custom Template",
      template: styled(CustomTemplate)`
        color: red;
      `
    }
  ]
};
