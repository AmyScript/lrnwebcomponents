import { storiesOf } from "@storybook/polymer";
import * as storybookBridge from "@storybook/addon-knobs/polymer";
import { A11YCollapse } from "./a11y-collapse.js";

// need to account for polymer goofiness when webpack rolls this up
var template = require("raw-loader!./demo/index.html");
let pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
var array_matches = pattern.exec(template);
// now template is just the body contents
template = array_matches[1];
const stories = storiesOf("11", module);
stories.addDecorator(storybookBridge.withKnobs);
stories.add("a11y-collapse", () => {
  var binding = {};
  // start of tag for demo
  let elementDemo = `<a11y-collapse`;
  // mix in properties defined on the class
  for (var key in A11YCollapse.properties) {
    // skip prototype
    if (!A11YCollapse.properties.hasOwnProperty(key)) continue;
    // convert typed props
    if (A11YCollapse.properties[key].type.name) {
      let method = "text";
      switch (A11YCollapse.properties[key].type.name) {
        case "Boolean":
        case "Number":
        case "Object":
        case "Array":
        case "Date":
          method = A11YCollapse.properties[key].type.name.toLowerCase();
          break;
        default:
          method = "text";
          break;
      }
      binding[key] = storybookBridge[method](
        key,
        A11YCollapse.properties[key].value
      );
      // ensure ke-bab case
      let kebab = key.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function(
        match
      ) {
        return "-" + match.toLowerCase();
      });
      elementDemo += ` ${kebab}="${binding[key]}"`;
    }
  }
  const innerText = storybookBridge.text("Inner contents", "11");
  elementDemo += `> ${innerText}</a11y-collapse>`;
  return `
  <h1>Live demo</h1>
  ${elementDemo}
  <h1>Additional examples</h1>
  ${template}
  `;
});
