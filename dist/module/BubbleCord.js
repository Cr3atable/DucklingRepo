parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"index.js":[function(require,module,exports) {
"use strict";function n(n,r,e,a,t,o,i){try{var p=n[o](i),d=p.value}catch(s){return void e(s)}p.done?r(d):Promise.resolve(d).then(a,t)}function r(r){return function(){var e=this,a=arguments;return new Promise(function(t,o){var i=r.apply(e,a);function p(r){n(i,t,o,p,d,"next",r)}function d(r){n(i,t,o,p,d,"throw",r)}p(void 0)})}}var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a={goosemodHandlers:{onImport:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=document.createElement("style"),document.head.appendChild(e),e.appendChild(document.createTextNode('.panels-j1Uci_ {\n  position: absolute;\n  bottom: 10px;\n  z-index: 1000;\n  left: 20px;\n  border-radius: 8px;\n}\n\n.iconWrapper-2OrFZ1 + .iconWrapper-2OrFZ1[id*="-"] ~ .iconWrapper-2OrFZ1 {\n  z-index: 3001 !important;\n}\n\n.container-3baos1 {\n  width: 202px;\n  height: 44px;\n}\n\n.panels-j1Uci_ > .container-3baos1 .avatarWrapper-2yR4wp {\n  position: fixed;\n  left: 0px;\n  background: var(--background-secondary-alt);\n  border-radius: 8px;\n  padding: 10px;\n  padding-top: 0px;\n  bottom: 0px;\n}\n\n.avatar-SmRMf2 {\n  padding: 10px;\n  right: 10px;\n  margin-bottom: 10px;\n}\n\n.unreadBottom-1_LF_w {\n  margin-bottom: 80px;\n}\n\n.layers-3iHuyZ > .layer-3QrUeG {\n  transform: scale(1) !important;\n  opacity: 1 !important;\n}\n\n.statusWithPopout-3ZfFol > .contents-18-Yxp {\n  max-width: 110px;\n}\n\n.panels-j1Uci_ {\n  max-width: 220px;\n}\n\n.animatedContainer-1NSq4T {\n  width: 218px;\n  margin-left: 11px;\n  margin-top: 11px;\n  border-radius: 8px;\n}\n\n.message-2qnXI6.selected-2P5D_Z, .message-2qnXI6:not(.mentioned-xhSam7):hover {\n  background-color: var(--background-message-hover);\n}\n\n.message-2qnXI6.selected-2P5D_Z.mentioned-xhSam7, .message-2qnXI6.mentioned-xhSam7:hover {\n  background-color: var(--background-mentioned-hover);\n}\n\n.channelNotice-1-XFjC.quickswitcher-35bYg4 {\n  top: 50px;\n}\n\n.scroller-2LSbBU::-webkit-scrollbar-track {\n  margin-top: calc(3.3em + .18em);\n}\n\n.form-2fGMdU::before {\n  display: none;\n}\n\n[style="opacity: 1; height: 56px; transform: scale(1);"] {\n  top: 10px;\n  position: relative;\n}\n\n.channelTextArea-rNsIhG {\n  background-color: transparent;\n}\n\n.jumpToPresentBar-G1R9s6 {\n  border-radius: 8px;\n  bottom: 20px;\n  padding: 0px;\n}\n\n.toolbar-1t6TWx {\n  position: relative;\n  top: 30px;\n  left: 0px;\n  padding: 5px;\n  background: var(--background-secondary-alt);\n  border-radius: 8px;\n}\n\n.children-19S4PO {\n  position: relative;\n  top: 30px;\n  left: 6px;\n  padding: 5px 5px 5px 5px;\n  margin-right: 40px;\n  background: var(--background-secondary-alt);\n  border-radius: 8px;\n}\n\n.scrollerContent-WzeG7R.content-3YMskv {\n  padding-top: 40px;\n}\n\n.children-19S4PO::after {\n  display: none;\n}\n\n.title-3qD0b- {\n  height: 0px;\n}\n\n.info-WdNIDE > .size14-e6ZScH {\n  width: 125px;\n}\n\n.header-2V-4Sw {\n  position: absolute;\n  top: 12px;\n  background-color: var(--background-secondary-alt);\n  width: 220px;\n  height: 33px;\n  border-radius: 8px;\n  left: 10px;\n}\n\n.clickable-25tGDB .header-2V-4Sw:hover {\n  background-color: var(--background-secondary-alt);\n}\n\n.scroller-3BxosC {\n  position: relative;\n}\n\n.menu-3sdvDG {\n  position: relative;\n  margin-top: 40px;\n}\n\n.searchHeader-2XoQg7, .scroller-3GIiMh {\n  top: 60px;\n}\n\n.newMessagesBar-265mhP {\n  top: 60px;\n  border-radius: 8px;\n}\n\n.search-36MZv- {\n  order: -1;\n}\n\n.searchBar-3dMhjb {\n  width: 28px;\n  transition: width 0.6s ease-in-out;\n  color: #fff;\n  background: none;\n}\n\n.focused-31_ccS .searchBar-3dMhjb,\n.open-6_Y_aH .searchBar-3dMhjb {\n  width: 240px;\n  background: var(--background-tertiary);\n}\n\n.icon-3cZ1F_ {\n  height: 24px;\n  width: 24px;\n  color: var(--interactive-normal);\n}\n\n.iconContainer-O4O2CN {\n  bottom: 4px;\n}\n\n.search-36MZv- {\n  margin-left: 0px;\n}\n\n.sprite-2iCowe {\n  filter: grayscale(0%) !important;\n}\n\n.attachWrapper-2TRKBi {\n  display: none;\n}\n\n.buttonContainer-28fw2U:not(.message-translate-settings-button) > .button-38aScr:not(.emojiButton-pET4wH):not(.message-translate-settings-button).colorBrand-3pXr91 > .contents-18-Yxp:not(.stickerButton-3OEgwj) {\n  display: none;\n}\n\n.stickerButton-3OEgwj {\n  display: none;\n}\n\n.buttons-3JBrkn > .button-38aScr:not(.buttonWrapper-1ZmCpA):not(.message-translate-settings-button) {\n  display: none;\n}\n\n[href="https://support.discord.com"] {\n  display: none;\n}\n\n.actionButtons-14eAc_, .container-1giJp5 {\n  display: none;\n}\n\n.panels-j1Uci_:hover > div > .container-1giJp5 {\n  display: block;\n}\n\n.panels-j1Uci_:hover > div > div > .actionButtons-14eAc_ {\n  display: flex;\n}\n\n.membersWrap-2h-GB4 {\n  margin-bottom: 10px;\n  margin-top: 60px;\n}\n\n.members-1998pB {\n  border-radius: 8px;\n  margin-right: 10px;\n}\n\n.scroller-RmtA4e {\n  margin-bottom: 80px;\n  margin-top: 57px;\n}\n\n.scroller-RmtA4e {\n  border-radius: 8px;\n  background: var(--background-secondary-alt);\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.wrapper-1Rf91z {\n  margin-bottom: 80px;\n}\n\n.wrapper-1Rf91z {\n  margin-top: 67px !important;\n  border-radius: 8px;\n}\n\n.platform-win .wrapper-1Rf91z {\n  margin-top: 70px !important;\n  border-radius: 8px;\n}\n\n.sidebar-2K8pFh {\n  margin-left: 10px;\n}\n\n.scroller-2TZvBN {\n  background: var(--background-secondary-alt);\n}\n\n.app-1q1i1E {\n  margin-left: 10px;\n}\n\n.scroller-2TZvBN > .tutorialContainer-1v44GL {\n  padding-top: 11px;\n}\n\n.headerBar-1YYOfi {\n  display: none;\n}\n\n.stickyHeader-1pqx0j {\n  top: 40px;\n  position: relative;\n}\n\n.rowWrapper-2fB6P0 {\n  top: 0px;\n}\n\n.item-2hkk8m[style*="height: 40px;"] {\n  background: var(--radio-group-dot-foreground);\n}\n\n.scroller-3GIiMh {\n  margin-bottom: 60px;\n}\n\n.libraryHeader-3g95kE:before {\n  display: none;\n}\n\n.container-1D34oG, .container-3Mxszk, .applicationStore-1pNvnv {\n  margin-left: 10px;\n  border-radius: 8px;\n}\n\n.premiumContainer-2Iux5m, .hero-EvfTTA {\n  max-width: unset;\n}\n\n.body-3s3lDR {\n  margin-top: 40px;\n}\n\n.listRow-hutiT_:hover, .listRow-hutiT_ {\n  border-radius: 8px;\n  background-color: var(--background-tertiary);\n}\n\n.listItem-2P_4kh.mentioned > .pill-31IEus > .item-2hkk8m,\n.wrapper-21YSNc.mentioned > .pill-31IEus > .item-2hkk8m,\n.wrapper-21YSNc.mentioned > .listItem-2P_4kh > .pill-31IEus > .item-2hkk8m,\n.wrapper-21YSNc.mentioned > .pill-31IEus > .item-2hkk8m {\n  background-color: rgb(240, 71, 71);\n}\n\n.tutorialContainer-1v44GL {\n  position: fixed;\n  top: 0px;\n  left: 0.5px;\n  z-index: 100;\n  padding: 0px;\n  background: var(--background-secondary-alt);\n  border-radius: 8px;\n  padding-right: 1px;\n  width: 72px;\n}\n\n.platform-win .tutorialContainer-1v44GL {\n  position: fixed;\n  top: 0px;\n}\n\n.scroller-2TZvBN > .tutorialContainer-1v44GL {\n  padding-top: 5px;\n}\n\n.pill-2uzAFe, .guildSeparator-3s64Iy {\n  display: none;\n}\n\n.tutorialContainer-1v44GL > .listItem-2P_4kh {\n  width: 70px;\n  left: 0.7px;\n  top: 1px;\n}\n\n.tutorialContainer-1v44GL > div > div > div > svg > foreignObject > .wrapper-1BJsBx > .childWrapper-anI2G9, .expandedFolderIconWrapper-1xLaU-, .expandedFolderBackground-2sPsd- {\n  background: var(--background-tertiary);\n}\n\n.powercord-spotify > .container-3baos1 {\n  display: none;\n}\n\n.powercord-spotify.hover > .container-3baos1 {\n  display: flex;\n}\n\n.powercord-spotify:hover > .container-3baos1 {\n  display: flex;\n}\n\n.spotify-seek-bar, .powercord-spotify .spotify-seek-bar-progress {\n  height: 4px !important;\n}\n\n.unreadTop-3rAB3r {\n  top: 45px;\n}\n\n.avatar-SmRMf2 {\n  top: 0.5px;\n}\n\n.avatar-SmRMf2 > .mask-1l8v16 > foreignObject {\n  mask: none;\n  border-radius: 8px;\n}\n\n.size12-3cLvbJ:not(.marginTop20-3TxNs6):not(.colorHeaderSecondary-3Sp3Ft) {\n  max-width: 112px;\n}\n\n.header-2V-4Sw {\n  z-index: 5;\n}\n\n.animatedContainer-1NSq4T {\n  z-index: 4;\n}\n\n.tabBody-3YRQ8W {\n  margin-top: 55px;\n}\n\n.leftSplit-1qOwnR {\n  max-width: unset;\n}\n\n.container-1r6BKw {\n  height: 0px;\n}\n\n.scroller-1JbKMe > .content-3YMskv {\n  padding-bottom: 60px;\n}\n\n.sidebar-2K8pFh {\n  border-bottom-left-radius: 8px !important;\n  border-top-left-radius: 8px !important;\n}\n\n.platform-osx .sidebar-2K8pFh {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n\n.chat-3bRxxu {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  margin-left: 10px;\n}\n\n.layers-3iHuyZ > .layer-3QrUeG {\n  margin-right: 10px;\n  margin-bottom: 10px;\n  border-radius: 8px;\n}\n\n.sidebar-2K8pFh {\n  border-bottom-left-radius: 8px;\n}\n\n.sidebar-CFHs9e {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n}\n\n.sidebarRegion-VFTUkN {\n  flex: 0 0 auto;\n}\n\n.contentColumn-2hrIYH, .customColumn-Rb6toI {\n  max-width: unset;\n}\n\n.sidebarRegion-VFTUkN {\n  margin: 10px;\n  border-radius: 8px;\n}\n\n.nowPlayingColumn-2sl4cE,\n.peopleColumn-29fq28 {\n  margin: 10px !important;\n  border-radius: 8px;\n  background: var(--background-secondary);\n}\n\n.nowPlayingColumn-2sl4cE > .scrollerBase-289Jih::-webkit-scrollbar-thumb,\n.peopleColumn-29fq28 > .scrollerBase-289Jih::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-auto-thumb);\n}\n\n.nowPlayingColumn-2sl4cE > .scrollerBase-289Jih::-webkit-scrollbar-track,\n.peopleColumn-29fq28 > .scrollerBase-289Jih::-webkit-scrollbar-track {\n  background: var(--scrollbar-auto-scrollbar-color-track);\n}\n\n.wrapper-6URcxg {\n  width: 100%;\n}\n\n.overlay-4k_Q4- {\n  border-radius: 40px;\n}\n\n.avatarUploaderIndicator-2G-aIZ {\n  display: none;\n}\n\n.avatarUploaderInner-2EvNMg {\n  border-radius: 8px;\n}\n\n.sidebarRegionScroller-3MXcoP {\n  border-radius: 8px;\n}\n\n.contentColumn-2hrIYH {\n  padding: 10px;\n}\n\n.contentRegion-3nDuYy {\n  margin: 10px;\n}\n\n.contentRegionScroller-26nc1e, .contentTransitionWrap-3hqOEW, .contentRegion-3nDuYy {\n  border-radius: 8px;\n}\n\n.standardSidebarView-3F1I7i {\n  background: var(--background-secondary-alt);\n}\n\n.toolsContainer-1edPuj {\n  margin-right: 5px !important;\n  padding-top: 10px !important;\n}\n\n@media only screen and (min-width: 1200px) {\n  .contentRegionScroller-26nc1e {\n    margin-right: 20%;\n  }\n\n  .closeButton-1tv5uR {\n    background: transparent;\n    width: calc(20% - 50px);\n    position: fixed;\n    height: 100px;\n    right: 0px;\n    z-index: -10;\n    height: 100%;\n    top: 0%;\n    border-radius: 0%;\n    border: none;\n  }\n\n  .closeButton-1tv5uR svg, .keybind-KpFkfr {\n    display: none;\n  }\n\n  .closeButton-1tv5uR:hover {\n    background: transparent !important;\n  }\n\n  .contentRegion-3nDuYy, .standardSidebarView-3F1I7i {\n    background: transparent;\n  }\n\n  .layer-3QrUeG {\n    background: rgba(0, 0, 0, 0.565);\n  }\n}\n@media only screen and (min-width: 2200px) {\n  .contentRegionScroller-26nc1e {\n    margin-right: 50%;\n  }\n\n  .closeButton-1tv5uR {\n    background: transparent;\n    width: calc(47% - 60px);\n    position: fixed;\n    height: 100px;\n    right: 0px;\n    z-index: -10;\n    height: 100%;\n    top: 0%;\n    border-radius: 0%;\n    border: none;\n  }\n\n  .closeButton-1tv5uR svg, .keybind-KpFkfr {\n    display: none;\n  }\n\n  .closeButton-1tv5uR:hover {\n    background: transparent !important;\n  }\n\n  .contentRegion-3nDuYy, .standardSidebarView-3F1I7i {\n    background: transparent;\n  }\n\n  .layer-3QrUeG {\n    background: rgba(0, 0, 0, 0.565);\n  }\n}\n.header-2BwW8b {\n  border-radius: 8px;\n  margin: 5px;\n  margin-top: 10px;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.activityUserPopout-2yItg2 {\n  margin: 10px;\n  border-radius: 8px;\n}\n\n.body-3iLsc4 {\n  border-radius: 8px;\n  margin: 5px;\n  margin-bottom: 5px;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.header-2BwW8b {\n  background-color: var(--background-tertiary);\n}\n\n.topSectionStreaming-1Tpf5X + .body-3ND3kc, .headerStreaming-2FjmGz > .activityUserPopout-2yItg2 {\n  background-color: #593695;\n}\n\n.topSectionPlaying-1J5E4n + .body-3ND3kc, .headerPlaying-j0WQBV > .activityUserPopout-2yItg2 {\n  background-color: #7289da;\n}\n\n.topSectionSpotify-1lI0-P + .body-3ND3kc, .headerSpotify-zpWxgT > .activityUserPopout-2yItg2 {\n  background-color: #1db954;\n}\n\n.topSectionXbox-3fWLjS + .body-3ND3kc, .headerXbox-3G-4PF > .activityUserPopout-2yItg2 {\n  background-color: #107c10;\n}\n\n.rolesList-22qj2L ~ div {\n  display: none;\n}\n\n.footer-1fjuF6 {\n  border-radius: 8px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: 5px;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.protip-YaFfgO {\n  display: none;\n}\n\n.userPopout-3XzG_A {\n  background: var(--background-secondary-alt);\n}\n\n.header-QKLPzZ {\n  background-color: var(--background-tertiary);\n}\n\n.activity-1ythUs, .tabBarContainer-1s1u-z {\n  background-color: var(--background-tertiary);\n}\n\n.header-QKLPzZ {\n  border-radius: 8px;\n  margin: 5px;\n  margin-top: 10px;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.activityUserPopout-2yItg2 {\n  margin: 10px;\n  border-radius: 8px;\n}\n\n.activity-1ythUs, .tabBarContainer-1s1u-z {\n  border-radius: 8px;\n  margin: 5px;\n  margin-bottom: 5px;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.topSectionNormal-2-vo2m {\n  background-color: var(--background-secondary);\n}\n\n.messagesPopoutWrap-1MQ1bW,\n.header-2-Imhb, .header-ykumBX {\n  border-radius: 8px;\n}\n\n.messagesPopout-24nkyi {\n  max-height: 70vh;\n  margin-top: 10px;\n  background-color: var(--background-secondary);\n  border-radius: 8px;\n}\n\n.messagesPopoutWrap-1MQ1bW {\n  background: transparent;\n}\n\n.userInfoSection-2acyCx {\n  background-color: #202225;\n  position: relative;\n  border-radius: 8px;\n  margin: 5px;\n  margin-bottom: 5px;\n  margin-right: 10px;\n  margin-left: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  width: 560px;\n  right: 20px;\n}\n\n#app-mount .wrapper-3t9DeA rect[fill="#ffffff"]:not([mask="url(#svg-mask-status-idle)"]):not([mask="url(#svg-mask-status-dnd)"]):not([mask="url(#svg-mask-status-streaming)"]):not([mask="url(#svg-mask-status-idle-mobile)"]):not([mask="url(#svg-mask-status-dnd-mobile)"]) {\n  fill: var(--online) !important;\n}\n\n#app-mount .wrapper-3t9DeA rect[fill="#ffffff"]:not([mask="url(#svg-mask-status-online)"]):not([mask="url(#svg-mask-status-idle)"]):not([mask="url(#svg-mask-status-streaming)"]):not([mask="url(#svg-mask-status-online-mobile)"]):not([mask="url(#svg-mask-status-idle-mobile)"]) {\n  fill: var(--dnd) !important;\n}\n\n#app-mount .wrapper-3t9DeA rect[fill="#ffffff"]:not([mask="url(#svg-mask-status-dnd)"]):not([mask="url(#svg-mask-status-online)"]):not([mask="url(#svg-mask-status-streaming)"]):not([mask="url(#svg-mask-status-online-mobile)"]):not([mask="url(#svg-mask-status-dnd-mobile)"]) {\n  fill: var(--idle) !important;\n}\n\n#app-mount .wrapper-3t9DeA rect[fill="#ffffff"]:not([mask="url(#svg-mask-status-dnd)"]):not([mask="url(#svg-mask-status-online)"]):not([mask="url(#svg-mask-status-idle)"]):not([mask="url(#svg-mask-status-online-mobile)"]):not([mask="url(#svg-mask-status-dnd-mobile)"]):not([mask="url(#svg-mask-status-idle-mobile)"]) {\n  fill: var(--streaming) !important;\n}\n\n.profileBadgeStaff-3BXdTO {\n  background-image: url(/assets/4358ad1fb423b346324516453750f569.svg) !important;\n}\n\n.profileBadgePartner-j6Lwhr {\n  background-image: url(/assets/6203964d9d25c394a573fd4f6be36d97.svg) !important;\n}\n\n.profileBadgeHypesquad-12E2P6 {\n  background-image: url(/assets/6c73f47daf179ffade99f501bfc5101b.svg) !important;\n}\n\n.profileBadgeHypeSquadOnlineHouse1-3rBtjf {\n  background-image: url(/assets/64ae1208b6aefc0a0c3681e6be36f0ff.svg) !important;\n}\n\n.profileBadgeHypeSquadOnlineHouse2-2oU04B {\n  background-image: url(/assets/48cf0556d93901c8cb16317be2436523.svg) !important;\n}\n\n.profileBadgeHypeSquadOnlineHouse3-1DoJkv {\n  background-image: url(/assets/9fdc63ef8a3cc1617c7586286c34e4f1.svg) !important;\n}\n\n.profileBadgeHypeSquadOnlineHouse1Winner-3wCl80 {\n  background-image: url(/assets/26a2dc8c9d70955a988cb377eec84c22.svg) !important;\n}\n\n.profileBadgeHypeSquadOnlineHouse2Winner-AS5bXe {\n  background-image: url(/assets/88d4f11bee9ea34fee59973b33353da0.svg) !important;\n}\n\n.profileBadgeHypeSquadOnlineHouse3Winner-2CwwQi {\n  background-image: url(/assets/3245b2cd85b787b195ea8f6e10ef5790.svg) !important;\n}\n\n.profileBadgeVerifiedDeveloper-195KfD {\n  background-image: url(/assets/45cd06af582dcd3c6b79370b4e3630de.svg) !important;\n}\n\n.profileBadgeEarlySupporter-2ng_jL {\n  background-image: url(/assets/23e59d799436a73c024819f84ea0b627.svg) !important;\n}\n\n.profileBadgePremium-1KDZYC {\n  background-image: url(/assets/386884eecd36164487505ddfbac35a9d.svg) !important;\n}\n\n.profileBadgeBugHunterLevel1-dbEzVz {\n  background-image: url(/assets/f61b8981e92feead854f52e5a1ba14f0.svg) !important;\n}\n\n.profileBadgeBugHunterLevel2-3TUciC {\n  background-image: url(/assets/9286332d6e947c91fa91569efce431b0.svg) !important;\n}\n\n.profileGuildSubscriberlvl1-3oI9tx {\n  background-image: url(/assets/fbb6f1e160280f0e9aeb5d7c452eefe1.svg) !important;\n}\n\n.profileGuildSubscriberlvl2-r6nJHT {\n  background-image: url(/assets/b4b741bef6c3de9b29e2e0653e294620.svg) !important;\n}\n\n.profileGuildSubscriberlvl3-38s3Dj {\n  background-image: url(/assets/93f5a393e22796a850931483166d7cb9.svg) !important;\n}\n\n.profileGuildSubscriberlvl4-2NXrsI {\n  background-image: url(/assets/4c380650960c2b1e1584115d5e9ad63b.svg) !important;\n}\n\n.profileGuildSubscriberlvl5-3XIa2K {\n  background-image: url(/assets/438dd7ecbffcf21b6cbf2773ade51a04.svg) !important;\n}\n\n.profileGuildSubscriberlvl6-3e3sxW {\n  background-image: url(/assets/7a5f78de816fcecbbd1d5d6e635cc7dd.svg) !important;\n}\n\n.profileGuildSubscriberlvl7-1dVhQT {\n  background-image: url(/assets/5a24b20b84fb3eafc138916729386e76.svg) !important;\n}\n\n.profileGuildSubscriberlvl8-1kXdFr {\n  background-image: url(/assets/f31d590e1f3629cd0b614330f4a8ee2a.svg) !important;\n}\n\n.profileGuildSubscriberlvl9-1d6zav {\n  background-image: url(/assets/9ba64f1fa91ccde0eba506c1c33f3d1a.svg) !important;\n}\n\n.macButtons-2MuSAC {\n  padding-top: 6px;\n}\n\n.platform-osx .app-1q1i1E {\n  margin-top: 22px;\n}\n\n.typeMacOS-3EmCyP {\n  position: absolute;\n  width: auto;\n}\n\n.typeMacOS-3EmCyP {\n  z-index: 3001;\n  width: 100%;\n}\n\n.platform-osx .wrapper-1Rf91z {\n  margin-top: 4px;\n}\n\n.typeMacOS-3EmCyP::after {\n  content: url(\'data:image/svg+xml; utf8, <svg width="400" height="18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path stroke="none" fill="rgb(114,118,125)" fill-rule="evenodd" transform="scale(1,1) translate(5,4)" d="M3.57642276,0.141304348 L0,0.141304348 L0,4.22826087 L2.38069106,6.40217391 L2.38069106,2.43478261 L3.66260163,2.43478261 C4.47052846,2.43478261 4.86910569,2.83695652 4.86910569,3.4673913 L4.86910569,6.5 C4.86910569,7.13043478 4.49207317,7.55434783 3.66260163,7.55434783 L0,7.55434783 L0,9.85869565 L3.57642276,9.85869565 C5.49390244,9.86956522 7.29288618,8.90217391 7.29288618,6.66304348 L7.29288618,3.39130435 C7.29288618,1.13043478 5.49390244,0.141304348 3.57642276,0.141304348 Z M22.3310976,6.67391304 L22.3310976,3.32608696 C22.3310976,2.11956522 24.4640244,1.83695652 25.1103659,3.05434783 L27.0817073,2.23913043 C26.3168699,0.510869565 24.8949187,0 23.7207317,0 C21.803252,0 19.9073171,1.13043478 19.9073171,3.32608696 L19.9073171,6.67391304 C19.9073171,8.88043478 21.803252,10 23.6776423,10 C24.8841463,10 26.3276423,9.39130435 27.1247967,7.81521739 L25.0134146,6.82608696 C24.4963415,8.17391304 22.3310976,7.84782609 22.3310976,6.67391304 Z M15.8030488,3.7826087 C15.0597561,3.61956522 14.5642276,3.34782609 14.5319106,2.88043478 C14.575,1.75 16.2878049,1.7173913 17.2896341,2.79347826 L18.8731707,1.55434783 C17.8821138,0.326086957 16.7617886,0 15.598374,0 C13.8424797,0 12.1404472,1 12.1404472,2.91304348 C12.1404472,4.77173913 13.5408537,5.76086957 15.0813008,6 C15.8676829,6.10869565 16.7402439,6.42391304 16.7186992,6.97826087 C16.654065,8.02173913 14.5426829,7.9673913 13.5839431,6.7826087 L12.0650407,8.23913043 C12.9591463,9.40217391 14.1764228,10 15.3182927,10 C17.074187,10 19.0239837,8.9673913 19.0993902,7.08695652 C19.2071138,4.69565217 17.5050813,4.09782609 15.8030488,3.7826087 Z M8.59634146,9.85869565 L11.0093496,9.85869565 L11.0093496,0.141304348 L8.59634146,0.141304348 L8.59634146,9.85869565 Z M49.2835366,0.141304348 L45.7071138,0.141304348 L45.7071138,4.22826087 L48.0878049,6.40217391 L48.0878049,2.43478261 L49.3589431,2.43478261 C50.1668699,2.43478261 50.5654472,2.83695652 50.5654472,3.4673913 L50.5654472,6.5 C50.5654472,7.13043478 50.1884146,7.55434783 49.3589431,7.55434783 L45.6963415,7.55434783 L45.6963415,9.85869565 L49.2727642,9.85869565 C51.1902439,9.86956522 52.9892276,8.90217391 52.9892276,6.66304348 L52.9892276,3.39130435 C53,1.13043478 51.2010163,0.141304348 49.2835366,0.141304348 Z M31.7353659,0 C29.753252,0 27.7819106,1.09782609 27.7819106,3.33695652 L27.7819106,6.66304348 C27.7819106,8.89130435 29.7640244,10 31.7569106,10 C33.7390244,10 35.7103659,8.89130435 35.7103659,6.66304348 L35.7103659,3.33695652 C35.7103659,1.10869565 33.7174797,0 31.7353659,0 Z M33.2865854,6.66304348 C33.2865854,7.35869565 32.5109756,7.7173913 31.7461382,7.7173913 C30.9705285,7.7173913 30.1949187,7.36956522 30.1949187,6.66304348 L30.1949187,3.33695652 C30.1949187,2.61956522 30.9489837,2.23913043 31.7030488,2.23913043 C32.4894309,2.23913043 33.2865854,2.58695652 33.2865854,3.33695652 L33.2865854,6.66304348 Z M44.3605691,3.33695652 C44.3067073,1.05434783 42.7770325,0.141304348 40.8056911,0.141304348 L36.9815041,0.141304348 L36.9815041,9.86956522 L39.4268293,9.86956522 L39.4268293,6.77173913 L39.8577236,6.77173913 L42.0768293,9.85869565 L45.0930894,9.85869565 L42.4861789,6.52173913 C43.6495935,6.15217391 44.3605691,5.14130435 44.3605691,3.33695652 Z M40.8487805,4.65217391 L39.4268293,4.65217391 L39.4268293,2.43478261 L40.8487805,2.43478261 C42.3784553,2.43478261 42.3784553,4.65217391 40.8487805,4.65217391 Z"></path></svg>\') !important;\n  width: 74px;\n  position: absolute;\n  top: 3.5px;\n  right: 0%;\n  padding-left: 5px;\n}\n\n.actionButton-uPB8Fs {\n  background: var(--background-primary);\n}\n\n.panel-24C3ux {\n  display: none;\n}\n\n.panels-j1Uci_:hover > .panel-24C3ux {\n  display: flex;\n}\n\n.typeMacOS-3EmCyP.titleBar-AC4pGV ~ div #channelTabs-container > :first-child > :first-child {\n  margin-left: 0px !important;\n}\n\n.channelTabs-favContainer {\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.channelTabs-favContainer, #undefined-Add-to-favourites,\n#channel-context-ChannelTabs--Save-bookmark {\n  display: none;\n}\n\n.submenu-2-ysNh.menu-3sdvDG {\n  margin-top: -5px;\n}\n\n.channelTabs-tabContainer {\n  margin-bottom: 5px;\n}\n\n#channelTabs-container {\n  margin-right: 10px;\n}\n\n.channelTabs-tabContainer {\n  border-radius: 8px;\n}\n\n.menu-3sdvDG {\n  position: relative;\n  margin-top: 30px;\n}\n\n.listItem-2P_4kh.frame-oXWS21 {\n  position: fixed;\n  bottom: 80px;\n  z-index: 1;\n}\n\n.scroller-2TZvBN {\n  padding-bottom: 40px;\n}\n\n.userPopout-3XzG_A {\n  width: 300px;\n}\n\n.theme-dark .root-1gCeng {\n  background: #36393f;\n}\n\n.theme-dark .footer-2gL1pp {\n  background: #2f3136;\n}\n\n.theme-dark .container-UC8Ug1 {\n  background: #292b2f;\n}\n\n.theme-dark .colorHeaderPrimary-26Jzh- {\n  color: #fff;\n}\n\n.theme-dark .colorHeaderSecondary-3Sp3Ft,\n.theme-dark .colorStandard-2KCXvj, .theme-dark .sampleLink-2NLvZg {\n  color: #b9bbbe;\n}\n\n.theme-dark .close-hZ94c6 {\n  color: #b9bbbe;\n}\n\n.theme-dark .close-hZ94c6:hover {\n  color: #dcddde;\n}\n\n.platform-win .layer-3QrUeG {\n  top: 0px;\n  padding-top: 0px;\n}\n\n.platform-win .standardSidebarView-3F1I7i {\n  margin-top: -22px;\n}\n\n.pageWrapper-1PgVDX {\n  margin-left: 10px;\n  border-radius: 8px;\n}\n\n.sidebar-2K8pFh {\n  border-radius: 8px !important;\n}\n\n@media only screen and (min-width: 1200px) {\n  .powercord-entities-manage-items {\n    display: grid;\n    grid-gap: 16px;\n    grid-template-columns: repeat(auto-fill, calc(50% - calc(225.488px / 28)));\n    -webkit-box-pack: left;\n    -ms-flex-pack: left;\n    justify-content: left;\n    margin-top: 16px;\n  }\n\n  .powercord-product .description, .powercord-product .metadata, .powercord-product-permissions, .powercord-product-footer {\n    margin-top: 10px !important;\n    margin-bottom: 10px !important;\n  }\n\n  .powercord-product.cardPrimary-1Hv-to.card-3Qj_Yx {\n    border-radius: 8px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    min-height: 233px;\n    padding: 16px 16px 0;\n    text-align: center;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    overflow: hidden;\n  }\n\n  .powercord-entities-manage .powercord-product .metadata > div {\n    width: 100% !important;\n  }\n}\n:root {\n  --online:#43b581;\n  --dnd:#f04747;\n  --idle:#faa61a;\n  --offline:rgb(116, 127, 141);\n  --streaming:rgb(89, 54, 149);\n}'));case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),onRemove:function(){var n=r(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.remove();case 1:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()}};exports.default=a;
},{}]},{},["index.js"], null);parcelRequire('index.js').default