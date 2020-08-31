import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as customTemplate } from "./customTemplate";
import { templates as qrcodeCertificateTemplate } from "./qrcodeCertificateTemplate";
import { templates as watermarkTemplate } from "./watermarkTemplate";
import styled from "@emotion/styled";
import { CustomTemplate } from "./customTemplate/customTemplate";

export const registry: TemplateRegistry<any> = {
  custom: customTemplate,
  qrcodeCertificate: qrcodeCertificateTemplate,
  watermark: watermarkTemplate,
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
