define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-card/paper-card.js",
  "./node_modules/@polymer/iron-image/iron-image.js",
  "./node_modules/@polymer/iron-icon/iron-icon.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "../../node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js",
  "./lib/person-testimonial-icon.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_a07a11a0dbb811e895dccd2fe3f56817() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n        font-family: sans-serif;\n        color: darkslategray;\n      }\n\n      paper-card {\n        display: inline-flex;\n      }\n\n      iron-image {\n        display: block;\n        width: 150px;\n        height: 100%;\n      }\n      .image {\n        padding-right:5px;\n      }\n\n      iron-icon {\n        --iron-icon-height: 15px;\n        --iron-icon-width: 15px;\n        --iron-icon-fill-color: darkslategray;\n      }\n\n      .wrap {\n        margin: 15px;\n      }\n\n      .testimonial {\n        line-height: 24px;\n        font-size: 16px;\n        font-style: italic;\n      }\n\n      .name {\n        font-size: 21px;\n        text-transform: uppercase;\n        font-weight: bold;\n        margin-top: 20px;\n      }\n\n      .position {\n        font-size: 14px;\n        margin-top: 5px;\n      }\n\n      .arrow_right {\n        width: 0;\n        height: 0;\n        border-top: 15px solid white;\n        border-bottom: 15px solid white;\n        border-left: solid 15px transparent;\n        position: relative;\n        top: 55px;\n      }\n\n      #quotestart {\n        display: inline-flex;\n        transform: rotateY(180deg);\n      }\n\n      #quoteend {\n        display: inline-flex;\n      }\n\n      @media screen and (max-width: 850px) {\n        paper-card {\n          display: flex;\n          flex-wrap: wrap;\n        }\n        iron-image {\n          display: block;\n          border-radius: 50%;\n          width: 200px;\n          height: 200px;\n        }\n        .image {\n          margin-top: 25px;\n          border-radius: 50%;\n          padding: 5px;\n          margin-left: auto;\n          margin-right: auto;\n        }\n        .arrow_right {\n          display: none;\n        }\n        .name, .position {\n          text-align: center;\n        }\n      }\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class$="[[accentColorClass]] image">\n        <iron-image style$="background-color: [[accentColor]];" src="[[image]]" sizing="cover" preload="" fade=""></iron-image>\n      </div>\n      <div class$="arrow_right [[accentColorClass]]"></div>\n      <div class="wrap">\n        <div class="testimonial">\n          <iron-icon id="quotestart" icon="persontestimonial:format-quote"></iron-icon>\n          <slot></slot>\n          <iron-icon id="quoteend" icon="persontestimonial:format-quote"></iron-icon>\n        </div>\n        <div class="name">[[name]]</div>\n        <div class="position">[[position]]</div>\n      </div>\n    </paper-card>\n'
      ],
      [
        '\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n        font-family: sans-serif;\n        color: darkslategray;\n      }\n\n      paper-card {\n        display: inline-flex;\n      }\n\n      iron-image {\n        display: block;\n        width: 150px;\n        height: 100%;\n      }\n      .image {\n        padding-right:5px;\n      }\n\n      iron-icon {\n        --iron-icon-height: 15px;\n        --iron-icon-width: 15px;\n        --iron-icon-fill-color: darkslategray;\n      }\n\n      .wrap {\n        margin: 15px;\n      }\n\n      .testimonial {\n        line-height: 24px;\n        font-size: 16px;\n        font-style: italic;\n      }\n\n      .name {\n        font-size: 21px;\n        text-transform: uppercase;\n        font-weight: bold;\n        margin-top: 20px;\n      }\n\n      .position {\n        font-size: 14px;\n        margin-top: 5px;\n      }\n\n      .arrow_right {\n        width: 0;\n        height: 0;\n        border-top: 15px solid white;\n        border-bottom: 15px solid white;\n        border-left: solid 15px transparent;\n        position: relative;\n        top: 55px;\n      }\n\n      #quotestart {\n        display: inline-flex;\n        transform: rotateY(180deg);\n      }\n\n      #quoteend {\n        display: inline-flex;\n      }\n\n      @media screen and (max-width: 850px) {\n        paper-card {\n          display: flex;\n          flex-wrap: wrap;\n        }\n        iron-image {\n          display: block;\n          border-radius: 50%;\n          width: 200px;\n          height: 200px;\n        }\n        .image {\n          margin-top: 25px;\n          border-radius: 50%;\n          padding: 5px;\n          margin-left: auto;\n          margin-right: auto;\n        }\n        .arrow_right {\n          display: none;\n        }\n        .name, .position {\n          text-align: center;\n        }\n      }\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class\\$="[[accentColorClass]] image">\n        <iron-image style\\$="background-color: [[accentColor]];" src="[[image]]" sizing="cover" preload="" fade=""></iron-image>\n      </div>\n      <div class\\$="arrow_right [[accentColorClass]]"></div>\n      <div class="wrap">\n        <div class="testimonial">\n          <iron-icon id="quotestart" icon="persontestimonial:format-quote"></iron-icon>\n          <slot></slot>\n          <iron-icon id="quoteend" icon="persontestimonial:format-quote"></iron-icon>\n        </div>\n        <div class="name">[[name]]</div>\n        <div class="position">[[position]]</div>\n      </div>\n    </paper-card>\n'
      ]
    );
    _templateObject_a07a11a0dbb811e895dccd2fe3f56817 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_a07a11a0dbb811e895dccd2fe3f56817()
    ),
    is: "person-testimonial",
    behaviors: [
      HAXBehaviors.PropertiesBehaviors,
      MaterializeCSSBehaviors.ColorBehaviors
    ],
    properties: {
      accentColor: { type: String, value: "#e65100" },
      accentColorClass: {
        type: String,
        reflectToAttribute: !0,
        computed: "_computeColorClass(accentColor)"
      },
      elevation: { type: Number, value: 1, reflectToAttribute: !0 },
      image: { type: String },
      name: { type: String },
      position: { type: String }
    },
    attached: function attached() {
      this.setHaxProperties({
        canScale: !0,
        canPosition: !0,
        canEditSource: !0,
        gizmo: {
          title: "Testimonial",
          description: "A person saying a nice thing about us",
          icon: "editor:format-quote",
          color: "orange",
          groups: ["Content", "Presentation"],
          handles: [
            {
              type: "image",
              source: "image",
              title: "name",
              caption: "position"
            }
          ],
          meta: { author: "EberlyODL / LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "image",
              title: "Image",
              description: "Adds image to this testimonial",
              inputMethod: "textfield",
              icon: "editor:insert-photo"
            },
            {
              property: "name",
              title: "Full Name",
              description: "Credit the person making the testimonial",
              inputMethod: "textfield",
              icon: "account-circle"
            },
            {
              property: "position",
              title: "Position or Job Title",
              description: "List the position and job title",
              inputMethod: "textfield",
              icon: "icons:work"
            },
            {
              property: "accentColor",
              title: "Accent color",
              description: "Select the color for the edge of the photo.",
              inputMethod: "colorpicker",
              icon: "editor:format-color-fill"
            }
          ],
          configure: [
            {
              property: "image",
              title: "Image",
              description: "Adds image to testimonial",
              inputMethod: "textfield",
              icon: "editor:insert-photo"
            },
            {
              property: "accentColor",
              title: "Accent color",
              description: "Select the color for the edge of the photo.",
              inputMethod: "colorpicker",
              icon: "editor:format-color-fill"
            },
            {
              slot: "",
              title: "User's testimonial:",
              description: "This is where you enter your testimonial.",
              inputMethod: "code-editor",
              required: !0
            },
            {
              property: "name",
              title: "Full Name",
              description: "Credit the person making the testimonial",
              inputMethod: "textfield",
              icon: "account-circle"
            },
            {
              property: "position",
              title: "Position or Job Title",
              description: "List the position and job title",
              inputMethod: "textfield",
              icon: "icons:work"
            }
          ],
          advanced: []
        }
      });
    },
    _computeColorClass: function _computeColorClass(color) {
      if (null != color && "#" == color.substring(0, 1)) {
        return this._colorTransform(color.toLowerCase(), "", "");
      }
    }
  });
});