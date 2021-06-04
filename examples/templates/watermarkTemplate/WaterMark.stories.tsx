import React, { FunctionComponent } from "react";
import { WatermarkTemplate } from "./watermarkTemplate";
import { customTemplateCertificate } from "../samples";

export default {
  title: "templates/WatermarkTemplate",
  component: WatermarkTemplate,
  parameters: {
    componentSubtitle: "basic sample",
  },
};

export const Default: FunctionComponent = () => {
  return <WatermarkTemplate document={customTemplateCertificate} handleObfuscation={() => {}} />;
};
