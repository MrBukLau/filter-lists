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
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript">
  </a>
  <a href="https://github.com/MrBukLau/filter-lists/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-181717?style=for-the-badge&logo=github">
  </a>
  <a href="https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters">
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
    4a. "Allow These Content Blockers" Section: Turn on all the AdGuard options to allow "Safari Protection" to work in Safari ([Guide][Content Blockers Guide])
    <br>
    4b. "Allow These Extensions" Section: Turn on AdGuard and click on the "Allow" option in the permission area to allow "Advanced Protection" to work in Safari ([Guide][Safari Web Extensions Guide])
5. Close the Settings application and open the AdGuard application
6. Click on the following options in the AdGuard application: `Protection > Safari protection > Filters > Custom`
    <br>
    6a. Turn on the use of "Custom" filters by tapping the toggle button
    <br>
    6b. Add a filter list from this repository to AdGuard by clicking on the "Add a filter" button, pasting the raw GitHub link from this repository into the "Filter URL" field, clicking on the "Next" button, and clicking on the "Add" button after reviewing the prompt to confirm that it is the correct filter list
#### uBlock Origin on Google Chrome (Desktop)
1. Download the uBlock Origin extension from the [Chrome Web Store][uBlock Origin Chrome Web Store Link] or [GitHub][uBlock Origin GitHub Link]
2. After downloading and installing the extension, follow this [guide][uBlock Origin Filter Guide] to manually import a filter list from this repository to uBlock Origin or click on any of the **"Subscribe"** buttons below to automatically add a filter list to uBlock Origin
    <br>
    2a. If [MrBukLau's Scriptlet Filters][Scriptlet Filter] is chosen to be imported to uBlock Origin, [MrBukLau's Scriptlets][Scriptlet File Link] also has to be imported to uBlock Origin, so follow this [guide][uBlock Origin Scriptlet Guide] to learn how to add this scriptlet file to uBlock Origin
### Usage
No further actions are necessary. After adding a filter list from this repository to a content blocker, that filter list will work and remove annoyances without any user input.

## Available Filter Lists
### Generalized Filter Lists
| **Filter Lists** | **Links** | **Information** |
|:-----------------|:----------|:----------------|
| **[Base][Base Filter]** | **Raw:** <br> [Click Here][Base Raw] <br><br> **Subscribe:** <br> [Click Here][Base Subscription] | **Description:** <br> This filter list is for removing annoyances on various websites. <br><br> **Disclaimer:** <br> These filters were only tested on Google Chrome for desktop and Safari for iOS, which means that they may or may not work on other web browsers. <br><br> **Key Filters:** <br> - Blur video thumbnails on Crunchyroll and other streaming websites <br> - Hide a variety of annoying banners on various websites <br> - Remove video player annoyances on Crunchyroll and other streaming websites
| **[Mobile][Mobile Filter]** | **Raw:** <br> [Click Here][Mobile Raw] <br><br> **Subscribe:** <br> [Click Here][Mobile Subscription] | **Description:** <br> This filter list is for removing annoyances on various mobile websites. <br><br> **Disclaimer:** <br> These filters were only tested on Safari for iOS, which means that they may or may not work on other web browsers. This filter list works better when it is used together with [MrBukLau's Base Filters][Base Filter]. Also, this filter list includes [MrBukLau's Accelerated Mobile Page Removal Filters][Accelerated Mobile Page Removal Filter] and [MrBukLau's Smart App Banner Removal Filters][Smart App Banner Removal Filter]. <br><br> **Key Filters:** <br> - Hide the "Download the App" annoyances on various mobile websites <br> - Prevent infinite scrolling on Imgur's mobile website <br> - Remove a variety of annoyances on Reddit's mobile website
| **[Scriptlet][Scriptlet Filter]** | **Raw:** <br> [Click Here][Scriptlet Raw] <br><br> **Subscribe:** <br> [Click Here][Scriptlet Subscription] | **Description:** <br> This filter list is for using [MrBukLau's Scriptlets][Scriptlet File Link] in uBlock Origin. <br><br> **Disclaimer:** <br> These filters were only tested on Google Chrome for desktop, which means that they may or may not work on other web browsers. This filter list works better when it is used together with [MrBukLau's Base Filters][Base Filter]. To view the raw file of the scriptlets, click on this [link][Scriptlet Raw File Link]. <br><br> **Key Filters:** <br> - Bypass Ouo.io, Tinyurl.is, and other URL shorteners <br> - Redirect Reddit links to Old Reddit <br> - Translate everything to English on Apple Music
### Specialized Filter Lists
| **Filter Lists** | **Links** | **Information** |
|:-----------------|:----------|:----------------|
| **[Accelerated Mobile Page Removal][Accelerated Mobile Page Removal Filter]** | **Raw:** <br> [Click Here][Accelerated Mobile Page Removal Raw] <br><br> **Subscribe:** <br> [Click Here][Accelerated Mobile Page Removal Subscription] | **Description:** <br> This filter list is for removing [Accelerated Mobile Pages][Accelerated Mobile Pages Wikipedia Link] on iOS. <br><br> **Disclaimer:** <br> These filters cannot remove the Accelerated Mobile Pages (AMP) that are implemented using parameters due to Safari web extension's limitations on iOS. <br><br> **Issues:** <br> If you encounter an Accelerated Mobile Page when using this filter list on Safari for iOS, please create an issue that includes the website's URL.
| **[Smart App Banner Removal][Smart App Banner Removal Filter]** | **Raw:** <br> [Click Here][Smart App Banner Removal Raw] <br><br> **Subscribe:** <br> [Click Here][Smart App Banner Removal Subscription] | **Description:** <br> This filter list is for removing [Smart App Banners][Smart App Banners Apple View Link] on iOS. <br><br> **Disclaimer:** <br> These filters do not remove the [Smart App Banners][Smart App Banners Apple Open Link] that show up when you already have the application installed on your device. To learn more about Smart App Banners on iOS, click on this [link][Smart App Banners Apple Link]. <br><br> **Issues:** <br> If a Smart App Banner appears when you are browsing on Safari for iOS, please refresh the page to see if it disappears from your screen. If the banner does not disappear on that web page after you have refreshed the page, please create an issue that includes the website's URL.

## Special Thanks
### Filters
#### For Creating the Original Filters
- **avatar_adg on Reddit**
    - [Social Filters](https://reddit.com/r/Adguard/comments/7o0ly5/comment/ds6sdg8/)
- **d3ward on GitHub**
    - [Analytics and Tracking Filters](https://github.com/d3ward/toolz)
#### For Providing Information That Enabled Me to Create Some of These Filters
- **AdguardTeam on GitHub**
    - [AMP Filters](https://github.com/AdguardTeam/DisableAMP)
- **Karmesinrot on GitHub**
    - [Anime Filters](https://github.com/Karmesinrot/Anifiltrs)
- **StephenP on Greasy Fork**
    - [Social Filters](https://greasyfork.org/en/scripts/395497)
### Scriptlets
#### For Creating the Original Scriptlets
- **uBlock-user on GitHub**
    - [Scriptlet for Setting an Attribute](https://github.com/uBlock-user/uBO-Scriptlets)
#### For Creating the Original Userscripts
- **IMBA Lawly on Greasy Fork**
    - [Skipper for Ouo.io](https://greasyfork.org/en/scripts/419509)
- **OperaSona on Reddit**
    - [Don't Track My Clicks, Reddit](https://reddit.com/r/privacy/comments/4aqdg0/)
#### For Providing JavaScript Codes That Enabled Me to Create Some of These Scriptlets
- **artlung on Stack Overflow**
    - [Set a New Attribute for All Elements With the Same Attribute](https://stackoverflow.com/a/804360)
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

## License
[MIT](https://github.com/MrBukLau/filter-lists/blob/master/LICENSE)

<!-- Application Links -->
[AdGuard App Store Link]: https://apps.apple.com/app/id1047223162
[AdGuard Pro App Store Link]: https://apps.apple.com/app/id1126386264
[AdGuard Website Link]: https://adguard.com/
[uBlock Origin Chrome Web Store Link]: https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
[uBlock Origin GitHub Link]: https://github.com/gorhill/uBlock

<!-- Filter Lists -->
[Accelerated Mobile Page Removal Filter]: https://github.com/MrBukLau/filter-lists/blob/master/filters/acceleratedmobilepageremovalfilters.txt
[Base Filter]: https://github.com/MrBukLau/filter-lists/blob/master/filters/basefilters.txt
[Mobile Filter]: https://github.com/MrBukLau/filter-lists/blob/master/filters/mobilefilters.txt
[Scriptlet Filter]: https://github.com/MrBukLau/filter-lists/blob/master/scriptlets/scriptletfilters.txt
[Smart App Banner Removal Filter]: https://github.com/MrBukLau/filter-lists/blob/master/filters/smartappbannerremovalfilters.txt

<!-- Information Links -->
[Accelerated Mobile Pages Wikipedia Link]: https://en.wikipedia.org/wiki/Accelerated_Mobile_Pages
[Content Blockers Guide]: https://macrumors.com/how-to/enable-content-blockers-safari/
[Safari Web Extensions Guide]: https://adguard.com/en/blog/adguard-4-3-for-ios.html
[Scriptlet File Link]: https://github.com/MrBukLau/filter-lists/blob/master/scriptlets/scriptlets.js
[Scriptlet Raw File Link]: https://github.com/MrBukLau/filter-lists/raw/master/scriptlets/scriptlets.js
[Smart App Banners Apple Link]: https://developer.apple.com/documentation/webkit/promoting_apps_with_smart_app_banners
[Smart App Banners Apple Open Link]: https://docs-assets.developer.apple.com/published/c55cd28f16/rendered2x-1605721896.png
[Smart App Banners Apple View Link]: https://docs-assets.developer.apple.com/published/20ab7d726b/rendered2x-1605721898.png
[uBlock Origin Filter Guide]: https://github.com/gorhill/uBlock/wiki/Filter-lists-from-around-the-web
[uBlock Origin Scriptlet Guide]: https://xaloez.com/blog/UblockOriginScriptlets/index.html

<!-- Raw Lists -->
[Accelerated Mobile Page Removal Raw]: https://github.com/MrBukLau/filter-lists/raw/master/filters/acceleratedmobilepageremovalfilters.txt
[Base Raw]: https://github.com/MrBukLau/filter-lists/raw/master/filters/basefilters.txt
[Mobile Raw]: https://github.com/MrBukLau/filter-lists/raw/master/filters/mobilefilters.txt
[Scriptlet Raw]: https://github.com/MrBukLau/filter-lists/raw/master/scriptlets/scriptletfilters.txt
[Smart App Banner Removal Raw]: https://github.com/MrBukLau/filter-lists/raw/master/filters/smartappbannerremovalfilters.txt

<!-- Subscription Lists -->
[Accelerated Mobile Page Removal Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/filters/acceleratedmobilepageremovalfilters.txt&title=MrBukLau%27s%20Accelerated%20Mobile%20Page%20Removal%20Filters
[Base Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/filters/basefilters.txt&title=MrBukLau%27s%20Base%20Filters
[Mobile Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/filters/mobilefilters.txt&title=MrBukLau%27s%20Mobile%20Filters
[Scriptlet Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/scriptlets/scriptletfilters.txt&title=MrBukLau%27s%20Scriptlet%20Filters
[Smart App Banner Removal Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/filters/smartappbannerremovalfilters.txt&title=MrBukLau%27s%20Smart%20App%20Banner%20Removal%20Filters
