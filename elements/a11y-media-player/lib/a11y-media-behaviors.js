/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import "@lrnwebcomponents/responsive-utility/responsive-utility.js";

export { A11yMediaBehaviors };
/**
 * `a11y-media-behaviors`
 * `A set of properties for a11y-media components.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @extends SimpleColors
 * @customElement
 * @polymer
 */
class A11yMediaBehaviors extends SimpleColors {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "a11y-media-behaviors";
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      /**
       * autoplay is an option,
       * but generally not recommended for a11y
       */
      autoplay: {
        type: Boolean,
        value: false
      },
      /**
       * show closed captions
       */
      cc: {
        type: Boolean,
        value: false
      },
      /**
       * The height of the media player.
       */
      height: {
        type: Number,
        value: null
      },
      /**
       * is YouTube?
       */
      isYoutube: {
        type: Boolean,
        computed: "_hasAttribute(youtubeId)"
      },
      /**
       * Language
       */
      lang: {
        type: String,
        value: "en"
      },
      /**
       * Loop the video?
       */
      loop: {
        type: Boolean,
        value: false
      },
      /**
       * Dash.js manifest source?
       */
      manifest: {
        type: String,
        value: null
      },
      /**
       * Is audio muted?
       */
      muted: {
        type: Boolean,
        value: false
      },
      /**
       * Preload the sources: auto, metadata (default), or none.
       */
      preload: {
        type: String,
        value: "metadata"
      },
      /**
       * Playback rate where 1 is normal speed, 0.5 is half-speed, and 2 is double speed
       */
      playbackRate: {
        type: Number,
        value: 1
      },
      /**
       * status
       */
      status: {
        type: String,
        value: "loading..."
      },
      /**
       * the selected track
       */
      selectedTrack: {
        type: Object,
        value: null
      },
      /**
       * id of the selected track
       */
      selectedTrackID: {
        type: Number,
        value: null
      },
      /**
       * array of tracks and cues
       */
      tracks: {
        type: Array,
        value: null
      },
      /**
       * Range is 0 to 100. Default should not be loud enough to overpower screen readers.
       */
      volume: {
        type: Number,
        value: 70
      },
      /**
       * the id for the video
       */
      youtubeId: {
        type: String,
        value: null
      },
      /**
       * the YouTube player object
       */
      youTube: {
        type: Object,
        value: {}
      }
    };
  }

  /**
   * gets behaviors
   */
  static get behaviors() {
    return [SimpleColors, ResponsiveUtility];
  }

  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
  }

  /**
   * returns true if an attribute is not null
   *
   * @param {object} the attribute to check
   * @returns {boolean} attr !== undefined && attr !== null
   */
  _hasAttribute(attr) {
    return attr !== undefined && attr !== null;
  }

  /**
   * returns true if an attribute is set to a value
   *
   * @param {object} the attribute to check
   * @param {object} the value to check
   * @returns {boolean} attr === val
   */

  _testAttribute(attr, val) {
    return attr === val;
  }

  /**
   * calls responsive-utility to get parent's responsive size
   *
   * @param {object} a set of responsive for options, eg: `{element: root, attribute: "responsive-size", relativeToParent: true}`
   */
  _addResponsiveUtility(options) {
    let root = this;
    window.ResponsiveUtility.requestAvailability();
    window.dispatchEvent(
      new CustomEvent("responsive-element", {
        detail:
          options !== undefined
            ? options
            : {
                element: root,
                attribute: "responsive-size",
                relativeToParent: true
              }
      })
    );
  }

  /**
   * converts time in millesconds to HH:MM:SS
   *
   * @param {float} the elapsed time, in seconds
   * @param {float} the duration, in seconds
   * @returns {string} a human-readable string of elapsed time/duration in HH:MM:SS
   *
   */
  _getHHMMSS(val, max) {
    max = max === undefined ? val : max;
    let a = val => {
        return val < 10 ? "0" + val : val;
      },
      b = (val, i, none) => {
        return max >= i ? a(Math.floor(val / i)) + ":" : none;
      },
      c = val => {
        return val < 100 ? val + "0" : val;
      };
    return (
      b(val, 3600, "") + b(val % 3600, 60, "00:") + a(Math.round(val % 60))
    );
  }
}
window.customElements.define(A11yMediaBehaviors.tag, A11yMediaBehaviors);
