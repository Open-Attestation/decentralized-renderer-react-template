import React from "react";
import { addDecorator } from "@storybook/react";

addDecorator((storyFn) => <>{storyFn()}</>);
