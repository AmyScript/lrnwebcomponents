import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";import{HAXWiring}from"./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";import"./node_modules/@lrnwebcomponents/lrndesign-gallery/lrndesign-gallery.js";import"./node_modules/@lrnwebcomponents/lrndesign-gallery/lib/lrndesign-gallery-grid.js";class MediaGallery extends PolymerElement{static get template(){return html`
<style>:host {
  display: block;
}
:host([hidden]) {
  display: none;
}</style>
<template is="dom-if" if="[[!grid]]" restamp>
  <lrndesign-gallery
    accent-color$="[[accentColor]]"
    dark$="[[dark]]"
    id$="[[galleryId]]"
    sizing$="[[sizing]]"
    sources$="[[sources]]"
    title$="[[title]]"
  >
    <slot slot="description" name="description"></slot>
  </lrndesign-gallery>
</template>
<template is="dom-if" if="[[grid]]" restamp>
  <lrndesign-gallery-grid
    accent-color$="[[accentColor]]"
    dark$="[[dark]]"
    id$="[[galleryId]]"
    sizing$="[[sizing]]"
    sources$="[[sources]]"
    title$="[[title]]"
  >
    <slot slot="description" name="description"></slot>
  </lrndesign-gallery-grid>
</template>`}static get haxProperties(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Image Gallery",description:"Displays carousels, grids, thumbnails, and images with captions.",icon:"image:photo-library",color:"deep-purple",groups:["Images","Media"],handles:[{type:"image",url:"source"}],meta:{author:"Your organization on github"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the gallery",inputMethod:"textfield",icon:"editor:title"},{property:"grid",title:"Thumbnails/Grid",description:"Display as thumbnails.",inputMethod:"boolean",icon:"image:grid-on"},{property:"accentColor",title:"Accent color",description:"Select the accent color for the player.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme.",inputMethod:"boolean",icon:"invert-colors"}],configure:[{property:"sizing",title:"Sizing",description:"How images will fit into the gallery.",inputMethod:"select",options:{cover:"Cover (cropping)",contain:"Contain (letterboxing)"}},{property:"sources",title:"Image(s)",description:"Tracks of different languages of closed captions",inputMethod:"array",properties:[{property:"title",title:"Title",description:"Title of the image.",inputMethod:"textfield"},{property:"src",title:"Source/URL",description:"Source of the image",inputMethod:"textfield"},{property:"alt",title:"Alt text",description:"Alternative text of this image (for accessibility).",inputMethod:"textfield"},{property:"details",title:"Details/long description about this image",description:"Alternative text for accessibility.",inputMethod:"textfield"}]}],advanced:[]}}}static get properties(){return{accentColor:{type:"String",value:null},dark:{type:"Boolean",value:!1},galleryId:{type:"String",value:null},grid:{type:"Boolean",value:!1,reflectToAttribute:!0},sources:{type:"Array",value:[]},sizing:{type:"String",value:"cover"},title:{type:"String",value:null}}}static get tag(){return"media-gallery"}connectedCallback(){super.connectedCallback();this.HAXWiring=new HAXWiring;this.HAXWiring.setup(MediaGallery.haxProperties,MediaGallery.tag,this)}}window.customElements.define(MediaGallery.tag,MediaGallery);export{MediaGallery};