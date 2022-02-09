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
1. Download and install AdGuard from the App Store (Make sure to pay for a subscription or purchase the Pro version)
    - [AdGuard][AdGuard App Store Link] - Free With Optional Paid Subscription
    - [AdGuard Pro][AdGuard Pro App Store Link] - One-Time Purchase
2. Open the AdGuard application and go to the Protection section
    <br>
    2a. Turn on "Safari Protection" by tapping the toggle button
    <br>
    2b. Turn on "Advanced Protection" by tapping the toggle button
3. Close the AdGuard application and open the Settings application
4. Click on the following options in the Settings application: `Safari > Extensions`
    <br>
    4a. Turn on all the AdGuard options in the content blocker section to allow "Safari Protection" to work in Safari
    <br>
    4b. Turn on AdGuard and allow it on all websites in the extension section to allow "Advanced Protection" to work in Safari
5. Close the Settings application and open the AdGuard application
6. Click on the following options in the AdGuard application: `Protection > Safari protection > Filters > Custom`
    <br>
    6a. Turn on the use of "Custom" filters by tapping the toggle button
    <br>
    6b. Add a filter list from this repository to AdGuard by clicking on the "Add a filter" button, pasting the raw GitHub link from this repository into the "Filter URL" field, clicking the "Next" button, and clicking the "Add" button after reviewing the prompt to confirm that it is the correct filter list
#### uBlock Origin on Google Chrome (Desktop)
1. Add the uBlock Origin extension by downloading it from the [Chrome Web Store][uBlock Origin Chrome Web Store Link] or [GitHub][uBlock Origin GitHub Link]
2. After adding the extension, follow this [guide][uBlock Origin Filter Guide] to manually import a filter list from this repository to uBlock Origin or left-click on any of the **"Subscribe"** buttons below to automatically add a filter list to uBlock Origin
### Usage
No further actions are necessary. After adding a filter list from this repository to a content blocker, that filter list will work and remove annoyances without any user input.

## Available Filter Lists
| **Filter Lists** | **Links** | **Information** |
|:-----------------|:----------|:----------------|
| **[Desktop][Desktop Filter]** | **Raw:** <br> [Click Here][Desktop Raw] <br><br> **Subscribe:** <br> [Click Here][Desktop Subscription] | **Description:** This filter list is for removing annoyances on the desktop version of websites. <br> **Disclaimer:** These filters were only tested on Google Chrome, which means that they may or may not work on other web browsers. <br> **Key Filters:** <br> - Blur out episode screenshots on AnimePahe, Crunchyroll, and Funimation to avoid spoilers <br> - Remove the dark overlay when watching a video on Crunchyroll and Funimation <br> - Remove the play/pause buttons that pop up at the center of the screen when watching a video on AnimePahe and Crunchyroll <br> - Remove the top-right corner watermarks on AnimePahe and Funimation
| **[Mobile][Mobile Filter]** | **Raw:** <br> [Click Here][Mobile Raw] <br><br> **Subscribe:** <br> [Click Here][Mobile Subscription] | **Description:** This filter list is for removing annoyances on the mobile version of websites. <br> **Disclaimer:** These filters were only tested on Safari for iOS, which means that they may or may not work on other web browsers and operating systems. Also, this filter list includes [MrBukLau's Smart App Banner Removal Filters][Smart App Banner Removal Filter]. <br> **Key Filters:** <br> - Prevent infinite scrolling on Imgur's mobile website <br> - Remove "Download the App" overlays and "Open in App" buttons on the mobile version of various websites <br> - Remove pop-ups, banners, and other annoyances on Reddit's mobile website <br> - Remove the NSFW prompt on Reddit's mobile website to allow for the viewing of NSFW pictures and videos
| **[Scriptlet][Scriptlet Filter]** | **Raw:** <br> [Click Here][Scriptlet Raw] <br><br> **Subscribe:** <br> [Click Here][Scriptlet Subscription] | **Description:** This filter list is for using [MrBukLau's Scriptlets][Scriptlet File Link] in uBlock Origin. <br> **Disclaimer:** These filters were only tested on Google Chrome, which means that they may or may not work on other web browsers. To learn how to use these scriptlets with uBlock Origin, click on this [link][uBlock Origin Scriptlet Guide]. To view the raw file of the actual scriptlets, click on this [link][Scriptlet Raw File Link]. <br> **Key Filters:** <br> - Block Reddit from tracking outbound links on Old Reddit <br> - Bypass Ouo.io, Tinyurl.is, and other URL shorteners <br> - Redirect Reddit links to Old Reddit <br> - Translate everything to English on Apple Music
| **[Smart App Banner Removal][Smart App Banner Removal Filter]** | **Raw:** <br> [Click Here][Smart App Banner Removal Raw] <br><br> **Subscribe:** <br> [Click Here][Smart App Banner Removal Subscription] | **Description:** This filter list is for removing [Smart App Banners][Smart App Banners Apple View Link] on iOS. <br> **Disclaimer:** These filters do not remove the [Smart App Banners][Smart App Banners Apple Open Link] that show up when you already have the application installed on your device. To learn more about Smart App Banners on iOS, click on this [link][Smart App Banners Apple Link]. <br> **Issues:** [Click Here][Smart App Banners Issues Link]

## License
[MIT](https://github.com/MrBukLau/filter-lists/blob/master/LICENSE)

<!-- Application Links -->
[AdGuard App Store Link]: https://apps.apple.com/app/id1047223162
[AdGuard Pro App Store Link]: https://apps.apple.com/app/id1126386264
[AdGuard Website Link]: https://adguard.com/
[uBlock Origin Chrome Web Store Link]: https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm
[uBlock Origin GitHub Link]: https://github.com/gorhill/uBlock

<!-- Filter Lists -->
[Desktop Filter]: https://github.com/MrBukLau/filter-lists/blob/master/filters/desktopfilters.txt
[Mobile Filter]: https://github.com/MrBukLau/filter-lists/blob/master/filters/mobilefilters.txt
[Scriptlet Filter]: https://github.com/MrBukLau/filter-lists/blob/master/scriptlets/scriptletfilters.txt
[Smart App Banner Removal Filter]: https://github.com/MrBukLau/filter-lists/blob/master/filters/smartappbannerremovalfilters.txt

<!-- Information Links -->
[Scriptlet File Link]: https://github.com/MrBukLau/filter-lists/blob/master/scriptlets/scriptlets.js
[Scriptlet Raw File Link]: https://github.com/MrBukLau/filter-lists/raw/master/scriptlets/scriptlets.js
[Smart App Banners Apple Link]: https://developer.apple.com/documentation/webkit/promoting_apps_with_smart_app_banners
[Smart App Banners Apple Open Link]: https://docs-assets.developer.apple.com/published/c55cd28f16/rendered2x-1605721896.png
[Smart App Banners Apple View Link]: https://docs-assets.developer.apple.com/published/20ab7d726b/rendered2x-1605721898.png
[Smart App Banners Issues Link]: https://github.com/MrBukLau/filter-lists/issues/2
[uBlock Origin Filter Guide]: https://github.com/gorhill/uBlock/wiki/Filter-lists-from-around-the-web
[uBlock Origin Scriptlet Guide]: https://github.com/gorhill/uBlock/wiki/Advanced-settings#userresourceslocation

<!-- Raw Lists -->
[Desktop Raw]: https://github.com/MrBukLau/filter-lists/raw/master/filters/desktopfilters.txt
[Mobile Raw]: https://github.com/MrBukLau/filter-lists/raw/master/filters/mobilefilters.txt
[Scriptlet Raw]: https://github.com/MrBukLau/filter-lists/raw/master/scriptlets/scriptletfilters.txt
[Smart App Banner Removal Raw]: https://github.com/MrBukLau/filter-lists/raw/master/filters/smartappbannerremovalfilters.txt

<!-- Subscription Lists -->
[Desktop Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/filters/desktopfilters.txt&title=MrBukLau%27s%20Desktop%20Filters
[Mobile Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/filters/mobilefilters.txt&title=MrBukLau%27s%20Mobile%20Filters
[Scriptlet Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/scriptlets/scriptletfilters.txt&title=MrBukLau%27s%20Scriptlet%20Filters
[Smart App Banner Removal Subscription]: https://subscribe.adblockplus.org/?location=https://github.com/MrBukLau/filter-lists/raw/master/filters/smartappbannerremovalfilters.txt&title=MrBukLau%27s%20Smart%20App%20Banner%20Removal%20Filters
