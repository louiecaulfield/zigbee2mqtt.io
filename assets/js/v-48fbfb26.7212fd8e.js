"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67692],{662406:(e,t,n)=>{n.r(t),n.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-48fbfb26","path":"/devices/511.524.html","title":"Iluminize 511.524 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Iluminize 511.524 control via MQTT","description":"Integrate your Iluminize 511.524 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-05-28T23:00:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pair the device","slug":"pair-the-device","link":"#pair-the-device","children":[]},{"level":3,"title":"Scenes","slug":"scenes","link":"#scenes","children":[]},{"level":3,"title":"Central On/Off button","slug":"central-on-off-button","link":"#central-on-off-button","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1696747982000},"filePathRelative":"devices/511.524.md"}')},715496:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var i=n(166252);const a=(0,i._)("h1",{id:"iluminize-511-524",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#iluminize-511-524","aria-hidden":"true"},"#"),(0,i.Uk)(" Iluminize 511.524")],-1),o=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"511.524")],-1),s=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Zigbee 3.0 wall dimmer CCT 4 zones")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"action, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/511.524.jpg",alt:"Iluminize 511.524"})])],-1),u=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pair-the-device" tabindex="-1"><a class="header-anchor" href="#pair-the-device" aria-hidden="true">#</a> Pair the device</h3><ol><li>Enable &#39;Permit Join (All)&#39;</li><li>Connect the device to power</li><li>Press the On/Off button in the center till the status LED blinks</li><li>Press &#39;S1&#39; to pair the device</li></ol><h3 id="scenes" tabindex="-1"><a class="header-anchor" href="#scenes" aria-hidden="true">#</a> Scenes</h3><p>The 4 scenes can not be setup via the web-ui. They have to be setup on the wall dimmer itself. For that bring all the lights into the desired configuration (on/off/brightness/color temp) and press the desired scene button (S1/S2/S3/S4) for a few seconds till the status LED blinks. Short press the scene button to restore the scene.</p><h3 id="central-on-off-button" tabindex="-1"><a class="header-anchor" href="#central-on-off-button" aria-hidden="true">#</a> Central On/Off button</h3><p>The central On/Off button turns on/off ALL connected devices! It is not group-aware!</p>',7),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),p=(0,i.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>recall_*</code>, <code>on</code>, <code>off</code>, <code>brightness_step_down</code>, <code>brightness_step_up</code>, <code>brightness_move_down</code>, <code>brightness_move_up</code>, <code>brightness_stop</code>, <code>color_move</code>, <code>color_temperature_move</code>, <code>hue_move</code>, <code>color_loop_set</code>, <code>enhanced_move_to_hue_and_saturation</code>, <code>hue_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),m={},v=(0,n(983744).Z)(m,[["render",function(e,t){const n=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[o,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[s,(0,i._)("td",null,[(0,i.Wm)(n,{to:"/supported-devices/#v=Iluminize"},{default:(0,i.w5)((()=>[(0,i.Uk)("Iluminize")])),_:1})])]),d,r,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,i.kq)(" Notes END: Do not edit below this line "),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);