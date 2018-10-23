define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.PaperIconPicker = void 0;
  function _templateObject_654044d0d70111e89bb785a3ee432663() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_654044d0d70111e89bb785a3ee432663 = function() {
      return data;
    };
    return data;
  }
  var PaperIconPicker = (function(_PolymerElement) {
    babelHelpers.inherits(PaperIconPicker, _PolymerElement);
    function PaperIconPicker() {
      babelHelpers.classCallCheck(this, PaperIconPicker);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          PaperIconPicker.__proto__ || Object.getPrototypeOf(PaperIconPicker)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      PaperIconPicker,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                PaperIconPicker.prototype.__proto__ ||
                  Object.getPrototypeOf(PaperIconPicker.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              PaperIconPicker.haxProperties,
              PaperIconPicker.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_654044d0d70111e89bb785a3ee432663()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Paper icon-picker",
                description: "Automated conversion of paper-icon-picker/",
                icon: "icons:android",
                color: "green",
                groups: ["Icon"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "paper-icon-picker";
          }
        }
      ]
    );
    return PaperIconPicker;
  })(_polymerElement.PolymerElement);
  _exports.PaperIconPicker = PaperIconPicker;
  window.customElements.define(PaperIconPicker.tag, PaperIconPicker);
});
