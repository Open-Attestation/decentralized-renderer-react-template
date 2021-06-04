import React, { FunctionComponent } from "react";
import { QrcodeCertificateTemplate } from "./qrcodeCertificateTemplate";
import { qrcodeTemplateSample } from "../samples";

export default {
  title: "templates/QrcodeCertificateTemplate",
  component: QrcodeCertificateTemplate,
  parameters: {
    componentSubtitle: "basic sample",
  },
};

export const Default: FunctionComponent = () => {
  return <QrcodeCertificateTemplate document={qrcodeTemplateSample} handleObfuscation={() => {}} />;
};
