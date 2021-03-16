import { Selector } from "testcafe";
import { CustomTemplateCertificate, customTemplateCertificate } from "../templates/samples";
import percySnapshot from "@percy/testcafe";

// assign certificate to a variable otherwise there is an error ... ReferenceError: sample_1 is not defined
const document: CustomTemplateCertificate = {
  ...customTemplateCertificate,
  $template: { ...customTemplateCertificate.$template, name: "red" }
};
fixture("Custom Red Certificate Template").page`http://localhost:3000`;

const CustomTemplate = Selector("#custom-template");

test("Custom certificate is rendered correctly", async test => {
  await test.eval(
    () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore can't find a way to have thos working on test cafe
      window.openAttestation({
        type: "RENDER_DOCUMENT",
        payload: {
          document
        }
      });
    },
    {
      dependencies: {
        document
      }
    }
  );
  // test the title is displayed
  await test.expect(CustomTemplate.visible).ok();
  await test.expect(CustomTemplate.textContent).contains("Bar is awesome");

  // take a snapshot
  await percySnapshot(test, "Rendered custom template");
});
