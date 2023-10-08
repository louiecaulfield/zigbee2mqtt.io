"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55198],{306128:(e,t,r)=>{r.r(t),r.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-566b77b2","path":"/devices/SPM02.html","title":"TuYa SPM02 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa SPM02 control via MQTT","description":"Integrate your TuYa SPM02 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-01T15:13:29.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Voltage X (numeric)","slug":"voltage-x-numeric","link":"#voltage-x-numeric","children":[]},{"level":3,"title":"Voltage Y (numeric)","slug":"voltage-y-numeric","link":"#voltage-y-numeric","children":[]},{"level":3,"title":"Voltage Z (numeric)","slug":"voltage-z-numeric","link":"#voltage-z-numeric","children":[]},{"level":3,"title":"Power X (numeric)","slug":"power-x-numeric","link":"#power-x-numeric","children":[]},{"level":3,"title":"Power Y (numeric)","slug":"power-y-numeric","link":"#power-y-numeric","children":[]},{"level":3,"title":"Power Z (numeric)","slug":"power-z-numeric","link":"#power-z-numeric","children":[]},{"level":3,"title":"Current X (numeric)","slug":"current-x-numeric","link":"#current-x-numeric","children":[]},{"level":3,"title":"Current Y (numeric)","slug":"current-y-numeric","link":"#current-y-numeric","children":[]},{"level":3,"title":"Current Z (numeric)","slug":"current-z-numeric","link":"#current-z-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Produced energy (numeric)","slug":"produced-energy-numeric","link":"#produced-energy-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1696747982000},"filePathRelative":"devices/SPM02.md"}')},867978:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var i=r(166252);const n=(0,i._)("h1",{id:"tuya-spm02",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#tuya-spm02","aria-hidden":"true"},"#"),(0,i.Uk)(" TuYa SPM02")],-1),o=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"SPM02")],-1),c=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Smart energy monitor for 3P+N system")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"voltage_X, voltage_Y, voltage_Z, power_X, power_Y, power_Z, current_X, current_Y, current_Z, energy, produced_energy, linkquality")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SPM02.jpg",alt:"TuYa SPM02"})])],-1),s=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),h=(0,i.uE)('<ul><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="voltage-x-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-x-numeric" aria-hidden="true">#</a> Voltage X (numeric)</h3><p>Measured electrical potential value (phase X). Value can be found in the published state on the <code>voltage_X</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-y-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-y-numeric" aria-hidden="true">#</a> Voltage Y (numeric)</h3><p>Measured electrical potential value (phase Y). Value can be found in the published state on the <code>voltage_Y</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-z-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-z-numeric" aria-hidden="true">#</a> Voltage Z (numeric)</h3><p>Measured electrical potential value (phase Z). Value can be found in the published state on the <code>voltage_Z</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-x-numeric" tabindex="-1"><a class="header-anchor" href="#power-x-numeric" aria-hidden="true">#</a> Power X (numeric)</h3><p>Instantaneous measured power (phase X). Value can be found in the published state on the <code>power_X</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-y-numeric" tabindex="-1"><a class="header-anchor" href="#power-y-numeric" aria-hidden="true">#</a> Power Y (numeric)</h3><p>Instantaneous measured power (phase Y). Value can be found in the published state on the <code>power_Y</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-z-numeric" tabindex="-1"><a class="header-anchor" href="#power-z-numeric" aria-hidden="true">#</a> Power Z (numeric)</h3><p>Instantaneous measured power (phase Z). Value can be found in the published state on the <code>power_Z</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-x-numeric" tabindex="-1"><a class="header-anchor" href="#current-x-numeric" aria-hidden="true">#</a> Current X (numeric)</h3><p>Instantaneous measured electrical current (phase X). Value can be found in the published state on the <code>current_X</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-y-numeric" tabindex="-1"><a class="header-anchor" href="#current-y-numeric" aria-hidden="true">#</a> Current Y (numeric)</h3><p>Instantaneous measured electrical current (phase Y). Value can be found in the published state on the <code>current_Y</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-z-numeric" tabindex="-1"><a class="header-anchor" href="#current-z-numeric" aria-hidden="true">#</a> Current Z (numeric)</h3><p>Instantaneous measured electrical current (phase Z). Value can be found in the published state on the <code>current_Z</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Total forward active energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="produced-energy-numeric" tabindex="-1"><a class="header-anchor" href="#produced-energy-numeric" aria-hidden="true">#</a> Produced energy (numeric)</h3><p>Total reverse active energy. Value can be found in the published state on the <code>produced_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',26),p={},m=(0,r(983744).Z)(p,[["render",function(e,t){const r=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[o,(0,i._)("tbody",null,[a,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i.Wm)(r,{to:"/supported-devices/#v=TuYa"},{default:(0,i.w5)((()=>[(0,i.Uk)("TuYa")])),_:1})])]),d,u,l])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),s,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(r,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);