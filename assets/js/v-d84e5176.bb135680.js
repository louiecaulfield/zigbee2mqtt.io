"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[39650],{892918:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-d84e5176","path":"/devices/ZiPulses.html","title":"LiXee ZiPulses control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"LiXee ZiPulses control via MQTT","description":"Integrate your LiXee ZiPulses via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-09-08T21:16:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Multiplier (numeric)","slug":"multiplier-numeric","link":"#multiplier-numeric","children":[]},{"level":3,"title":"Divisor (numeric)","slug":"divisor-numeric","link":"#divisor-numeric","children":[]},{"level":3,"title":"UnitOfMeasure (enum)","slug":"unitofmeasure-enum","link":"#unitofmeasure-enum","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1696747982000},"filePathRelative":"devices/ZiPulses.md"}')},841077:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(166252);const a=(0,o._)("h1",{id:"lixee-zipulses",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#lixee-zipulses","aria-hidden":"true"},"#"),(0,o.Uk)(" LiXee ZiPulses")],-1),l=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"ZiPulses")],-1),d=(0,o._)("td",null,"Vendor",-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Lixee ZiPulses")],-1),u=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"voltage, temperature, multiplier, divisor, unitOfMeasure, energy, linkquality")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZiPulses.jpg",alt:"LiXee ZiPulses"})])],-1),c=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),h=(0,o.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="multiplier-numeric" tabindex="-1"><a class="header-anchor" href="#multiplier-numeric" aria-hidden="true">#</a> Multiplier (numeric)</h3><p>It is necessary to press the link button to update. Value can be found in the published state on the <code>multiplier</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;multiplier&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>1000</code>.</p><h3 id="divisor-numeric" tabindex="-1"><a class="header-anchor" href="#divisor-numeric" aria-hidden="true">#</a> Divisor (numeric)</h3><p>It is necessary to press the link button to update. Value can be found in the published state on the <code>divisor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;divisor&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>1000</code>.</p><h3 id="unitofmeasure-enum" tabindex="-1"><a class="header-anchor" href="#unitofmeasure-enum" aria-hidden="true">#</a> UnitOfMeasure (enum)</h3><p>It is necessary to press the link button to update. Value can be found in the published state on the <code>unitOfMeasure</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;unitOfMeasure&quot;: NEW_VALUE}</code>. The possible values are: <code>kWh</code>, <code>m3</code>, <code>ft3</code>, <code>ccf</code>, <code>US gl</code>, <code>IMP gl</code>, <code>BTUs</code>, <code>L (litre)</code>, <code>kPA (jauge)</code>, <code>kPA (absolu)</code>, <code>kPA (absolu)</code>, <code>sans unité</code>, <code>MJ</code>, <code>kVar</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),p={},m=(0,i(983744).Z)(p,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),a,(0,o._)("table",null,[l,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[d,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=LiXee"},{default:(0,o.w5)((()=>[(0,o.Uk)("LiXee")])),_:1})])]),r,u,s])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,o.kq)(" Notes END: Do not edit below this line "),c,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[(0,o.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);