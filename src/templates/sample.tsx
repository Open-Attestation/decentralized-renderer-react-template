import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface CustomTemplateCertificate extends Document {
  name: string;
  institute: string;
}

export const customTemplateCertificate: CustomTemplateCertificate = {
  name: "John Doe",
  institute: "Institute of John Doe"
};
