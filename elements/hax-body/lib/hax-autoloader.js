import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import * as async from "@polymer/polymer/lib/utils/async.js";
import { dom } from "@polymer/polymer/lib/legacy/polymer.dom.js";
import { FlattenedNodesObserver } from "@polymer/polymer/lib/utils/flattened-nodes-observer.js";
import { pathFromUrl } from "@polymer/polymer/lib/utils/resolve-url.js";

/**
`hax-autoloader`
Automatically load elements based on the most logical location with future fallback support for CDNs.

* @demo demo/index.html

@microcopy - the mental model for this element
 - hax-autoloader - autoloading of custom element imports which can then emmit events as needed
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: none;
      }
    </style>
    <slot></slot>
  `,

  is: "hax-autoloader",

  properties: {
    /**
     * List of elements processed so we don't double process
     */
    processedList: {
      type: Object,
      value: {}
    }
  },

  /**
   * Attached to the DOM, now fire that we exist.
   */
  attached: function() {
    // fire an event that this is the manager
    this.fire("hax-register-autoloader", this);
    // notice elements when they update
    this._observer = new FlattenedNodesObserver(this, info => {
      // if we've got new nodes, we have to react to that
      if (info.addedNodes.length > 0) {
        async.microTask.run(() => {
          setTimeout(() => {
            this.processNewElements(info.addedNodes);
          }, 10);
        });
      }
    });
  },
  /**
   * Process new elements
   */
  processNewElements: function(e) {
    // when new nodes show up in the slots then fire the needed pieces
    let effectiveChildren = FlattenedNodesObserver.getFlattenedNodes(
      this
    ).filter(n => n.nodeType === Node.ELEMENT_NODE);
    for (var i = 0; i < effectiveChildren.length; i++) {
      // strip invalid tags / textnodes
      if (
        typeof effectiveChildren[i].tagName !== typeof undefined &&
        typeof this.processedList[effectiveChildren[i].tagName] ===
          typeof undefined
      ) {
        // attempt a dynamic import with graceful failure / fallback
        try {
          let name = effectiveChildren[i].tagName.toLowerCase();
          // see if we already have this definition
          if (typeof effectiveChildren[i].getHaxProperties === "function") {
            const evt = new CustomEvent("hax-register-properties", {
              bubbles: true,
              cancelable: true,
              detail: {
                tag: name,
                properties: effectiveChildren[i].getHaxProperties(),
                polymer: true
              }
            });
            context.dispatchEvent(evt);
          } else if (typeof effectiveChildren[i].HAXWiring === "function") {
            const evt = new CustomEvent("hax-register-properties", {
              bubbles: true,
              cancelable: true,
              detail: {
                tag: name,
                properties: effectiveChildren[i].HAXWiring.getHaxProperties(),
                polymer: false
              }
            });
            context.dispatchEvent(evt);
          } else {
            // @todo support CDN failover or a flag of some kind to ensure
            // this delivers locally or from remote
            // @todo need to support name spacing of packages so that we
            // don't assume they are all relative to lrnwebcomponents
            const basePath = pathFromUrl(import.meta.url);
            import(`${basePath}../../${name}/${name}.js`);
          }
          this.processedList[name] = name;
        } catch (err) {
          // error in the event this is a double registration
        }
      }
    }
  }
});
