<h1 align="center">
  MrBukLau's Filter Lists
</h1>

<div align="center">
  <b>
    Additional filters for
    <a href="https://adguard.com/">
      AdGuard
    </a>
    and
    <a href="https://github.com/gorhill/uBlock">
      uBlock Origin
    </a>
  </b>
  <br>
  <br>
  <a href="#description">
    Description
  </a>
  •
  <a href="#getting-started">
    Getting Started
  </a>
  •
  <a href="#available-filter-lists">
    Available Filter Lists
  </a>
  •
  <a href="#special-thanks">
    Special Thanks
  </a>
  •
  <a href="#license">
    License
  </a>
  <br>
  <br>
  <a href="https://developer.mozilla.org/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript">
  </a>
  <a href="https://github.com/MrBukLau/filter-lists/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-181717?style=for-the-badge&logo=github">
  </a>
  <a href="https://adguard.com/kb/general/ad-filtering/create-own-filters/">
    <img src="https://img.shields.io/badge/Syntax-AdGuard-68BC71?style=for-the-badge&logo=adguard">
  </a>
  <a href="https://github.com/gorhill/uBlock/wiki/Static-filter-syntax">
    <img src="https://img.shields.io/badge/Syntax-uBlock%20Origin-800000?style=for-the-badge&logo=ublock-origin">
  </a>
</div>

## Description
This repository contains filter lists that can be added to content blockers, such as [AdGuard][AdGuard Website Link] and [uBlock Origin][uBlock Origin GitHub Link]. The filters in these lists are for removing annoyances from websites.

## Getting Started
### Installation
#### AdGuard on Safari (Mobile - iOS 15 or Above)
1. Download [AdGuard][AdGuard App Store Link] or [AdGuard Pro][AdGuard Pro App Store Link] from the App Store (Buy a subscription if downloading the free version)
2. Open the AdGuard application and go to the Protection section
    <br>
    2a. Turn on "Safari Protection" by tapping the toggle button
    <br>
    2b. Turn on "Advanced Protection" by tapping the toggle button
3. Close the AdGuard application and open the Settings application
4. Click on the following options in the Settings application: `Safari > Extensions`
    <br>
    4a. "Allow These Content Blockers" Section: Turn on all the AdGuard options to allow "Safari Protection" to work in Safari ([Guide][Content Blockers Guide Link])
    <br>
    4b. "Allow These Extensions" Section: Turn on AdGuard and click on the "Allow" option in the permission area to allow "Advanced Protection" to work in Safari ([Guide][Safari Web Extensions Guide Link])
5. Close the Settings application and open the AdGuard application
6. Click on the following options in the AdGuard application: `Protection > Safari protection > Filters > Custom`
    <br>
    6a. Turn on the use of "Custom" filters by tapping the toggle button
    <br>
    6b. Add a filter list from this repository to AdGuard by clicking on the "Add a filter" button, pasting the raw GitHub link from this repository into the "Filter URL" field, clicking on the "Next" button, and clicking on the "Add" button after reviewing the prompt to confirm that it is the correct filter list
#### uBlock Origin on Google Chrome (Desktop)
1. Download the uBlock Origin extension from the [Chrome Web Store][uBlock Origin Chrome Web Store Link] or [GitHub][uBlock Origin GitHub Link]
2. After downloading and installing the extension, follow this [guide][uBlock Origin Filter Guide Link] to manually import a filter list from this repository to uBlock Origin or click on any of the **"Subscribe"** buttons below to automatically add a filter list to uBlock Origin
    <br>
    2a. If [MrBukLau's Scriptlet Filters][Scriptlet Filter] is chosen to be imported to uBlock Origin, [MrBukLau's Scriptlets][Scriptlet File Link] also has to be imported to uBlock Origin, so follow this [guide][uBlock Origin Scriptlet Guide Link] to learn how to add this scriptlet file to uBlock Origin
### Usage
No further actions are necessary. After adding a filter list from this repository to a content blocker, that filter list will work and remove annoyances without any user input.

## Available Filter Lists
| **Filter Lists** | **Links** | **Information** |
|:-----------------|:----------|:----------------|
| **[Base][Base Filter]** | **Raw:** <br> [Click Here][Base Raw] <br><br> **Subscribe:** <br> [Click Here][Base Subscription] | **Description:** <br> This filter list is for removing annoyances on various websites. <br><br> **Disclaimer:** <br> These filters were only tested on Google Chrome for desktop and Safari for iOS, which means that they may or may not work on other web browsers. <br><br> **Key Filters:** <br> - Eliminate annoying pop-under and pop-up advertisements on various websites <br> - Hide donation, premium, and subscription banners on various websites <br> - Remove useless URL parameters on Google Search and other websites
| **[Mobile][Mobile Filter]** | **Raw:** <br> [Click Here][Mobile Raw] <br><br> **Subscribe:** <br> [Click Here][Mobile Subscription] | **Description:** <br> This filter list is for removing annoyances on various mobile websites. <br><br> **Disclaimer:** <br> These filters were only tested on Safari for iOS, which means that they may or may not work on other web browsers. This filter list works better when it is used together with [MrBukLau's Base Filters][Base Filter]. When using this filter list on an Apple device, please make sure to enable "Advanced Protection" in AdGuard. Also, please make sure that Apple device is running at least iOS 15.4. <br><br> **Key Filters:** <br> - Disable Accelerated Mobile Pages on iOS <br> - Hide annoyances on Reddit's mobile website <br> - Remove Smart App Banners on every website for iOS
| **[Personal][Personal Filter]** | **Raw:** <br> [Click Here][Personal Raw] <br><br> **Subscribe:** <br> [Click Here][Personal Subscription] | **Description:** <br> This filter list is for removing designs and features on various websites that I consider to be useless but could be useful to other people, meaning that these filters are only beneficial to me. <br><br> **Disclaimer:** <br> These filters were only tested on Google Chrome for desktop and Safari for iOS, which means that they may or may not work on other web browsers. This filter list works better when it is used together with [MrBukLau's Base Filters][Base Filter] and [MrBukLau's Mobile Filters][Mobile Filter]. <br><br> **Key Filters:** <br> - Disable login and comment buttons on various websites <br> - Force a variety of websites to have a minimalistic style <br> - Hide account-only features and tools on various websites
| **[Scriptlet][Scriptlet Filter]** | **Raw:** <br> [Click Here][Scriptlet Raw] <br><br> **Subscribe:** <br> [Click Here][Scriptlet Subscription] | **Description:** <br> This filter list is for using [MrBukLau's Scriptlets][Scriptlet File Link] in uBlock Origin. <br><br> **Disclaimer:** <br> These filters were only tested on Google Chrome for desktop, which means that they may or may not work on other web browsers. This filter list works better when it is used together with [MrBukLau's Base Filters][Base Filter]. To view the raw file of the actual scriptlets, click on this [link][Scriptlet Raw File Link]. <br><br> **Key Filters:** <br> - Bypass a variety of URL shorteners <br> - Redirect regular Reddit links to Old Reddit <br> - Set a new attribute to an existing element

## Special Thanks
### For Creating the Original Filters, Scriptlets, and Userscripts
- **avatar_adg on Reddit**
    - Filter: [Prevent Infinite Scrolling on Imgur's Mobile Website](https://reddit.com/r/Adguard/comments/7o0ly5/comment/ds6sdg8/)
- **Fuim on Greasy Fork**
    - Userscript: [YouTube Shorts Redirect](https://greasyfork.org/en/scripts/439993)
- **IMBA Lawly on Greasy Fork**
    - Userscript: [Skipper for Ouo.io](https://greasyfork.org/en/scripts/419509)
- **uBlock-user on GitHub**
    - Scriptlet: [Set a New Attribute to an Existing Element](https://github.com/uBlock-user/uBO-Scriptlets)
### For Providing JavaScript Codes That Enabled Me to Create Some of These Scriptlets
- **Brock Adams on Stack Overflow**
    - [Add a New Parameter to the URL](https://stackoverflow.com/a/16070740)
    - [Click on a Link Based on Its Text](https://stackoverflow.com/a/6990386)
- **James Hibbard and Yaphi Berhanu on SitePoint**
    - [Get a Specific Parameter From the URL](https://sitepoint.com/get-url-parameters-with-javascript/)
- **Mark Byers on Stack Overflow**
    - [Combine Two Replace Methods Into a Single Expression](https://stackoverflow.com/a/7990896)
- **VisioN on Stack Overflow**
    - [Check if an Element With a Defined Class Exists in the HTML Document](https://stackoverflow.com/a/26254984)
- **Vivre on Greasy Fork**
    - [Replace a String in the URL With Another String](https://greasyfork.org/en/discussions/requests/55817#comment-144843)
### For Providing Valuable Information That Enabled Me to Create Some of These Filters
- **AdguardTeam on GitHub**
    - [Accelerated Mobile Pages](https://github.com/AdguardTeam/DisableAMP)
- **DandelionSprout on GitHub**
    - [URL Parameters](https://github.com/DandelionSprout/adfilt)
- **StephenP on Greasy Fork**
    - [Social](https://greasyfork.org/en/scripts/395497)
- **Tomáš Zato on Stack Overflow**
    - [Sports](https://stackoverflow.com/a/34072219)
- **uBlock Origin Community on Reddit**
    - [General](https://reddit.com/r/uBlockOrigin/)

## License
[MIT](https://github.com/MrBukLau/filter-lists/blob/master/LICENSE)

<!-- Application Links -->
[AdGuard App Store Link]: https://apps.apple.com/app/id1047223162
[AdGuard Pro App Store Link]: https://apps.apple.com/app/id1126386264
[AdGuard Website Link]: https://adguard.com/
[uBlock Origin Chrome Web Store Link]: https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
[uBlock Origin GitHub Link]: https://github.com/gorhill/uBlock

<!-- Filter Lists -->
[Base Filter]: https://github.com/MrBukLau/filter-lists/blob/master/filters/basefilters.txt
[Mobile Filter]: https://github.com/MrBukLau/filter-lists/blob/master/filters/mobilefilters.txt
[Personal Filter]: https://github.com/MrBukLau/filter-lists/blob/master/filters/personalfilters.txt
[Scriptlet Filter]: https://github.com/MrBukLau/filter-lists/blob/master/scriptlets/scriptletfilters.txt

<!-- Guide Links -->
[Content Blockers Guide Link]: https://macrumors.com/how-to/enable-content-blockers-safari/
[Safari Web Extensions Guide Link]: https://adguard.com/kb/adguard-for-ios/web-extension/#how-to-enable-adguards-safari-web-extension
[uBlock Origin Filter Guide Link]: https://github.com/gorhill/uBlock/wiki/Filter-lists-from-around-the-web
[uBlock Origin Scriptlet Guide Link]: https://xaloez.com/blog/UblockOriginScriptlets/index.html

<!-- JavaScript Links -->
[Scriptlet File Link]: https://github.com/MrBukLau/filter-lists/blob/master/scriptlets/scriptlets.js
[Scriptlet Raw File Link]: https://github.com/MrBukLau/filter-lists/raw/master/scriptlets/scriptlets.js

<!-- Raw Lists -->
[Base Raw]: https://github.com/MrBukLau/filter-lists/raw/master/filters/basefilters.txt
[Mobile Raw]: https://github.com/MrBukLau/filter-lists/raw/master/filters/mobilefilters.txt
[Personal Raw]: https://github.com/MrBukLau/filter-lists/raw/master/filters/personalfilters.txt
[Scriptlet Raw]: https://github.com/MrBukLau/filter-lists/raw/master/scriptlets/scriptletfilters.txt

<!-- Subscription Lists -->
[Base Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/filters/basefilters.txt&title=MrBukLau%27s%20Base%20Filters
[Mobile Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/filters/mobilefilters.txt&title=MrBukLau%27s%20Mobile%20Filters
[Personal Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/filters/personalfilters.txt&title=MrBukLau%27s%20Personal%20Filters
[Scriptlet Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/scriptlets/scriptletfilters.txt&title=MrBukLau%27s%20Scriptlet%20Filters
