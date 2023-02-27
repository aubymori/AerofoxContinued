# Installation Instructions
## Copying files
In Firefox, go to about:profiles and look for the profile in use. Open the "Root Directory" folder. Copy the contents of /profile into this folder.  
Next you can go to your Firefox installation directory. It should be C:\Program Files\Mozilla Firefox. Copy the contents of /ffroot into this directory, you may need administrator permissions.

## Setting up
After restarting, you're going to need to go to about:config and enable these flags:
- toolkit.legacyUserProfileCustomizations.stylesheets - set to true
- svg.context-properties.content.enabled - set to true
- ui.prefersReducedMotion - set to 1, you may need to create a new "Number" value
- widget.non-native-theme.enabled - set to false,  
- extensions.unifiedExtensions.enabled - set to false, 109+ only,

then restart Firefox.

To get the tab view button and interface like IE, install [Tip Tab](https://addons.mozilla.org/en-US/firefox/addon/tip-tab/)

## UI Configuration
After installation, right click on the tabs toolbar and press "Customize Toolbar". Here is a guide to help you:
![On the navigation bar, put the following items in order: Back, Forward, History, Address Bar, Search Bar. On the bookmark bar, put the following items in order: Favorites, Spacer, Separator, Library, Bookmarks toolbar items. On the tab bar, put the following items in order: Spacer, TipTab extension, All tabs, Tab Bar, New Tab, any of your extensions, Home, Downloads, Mail Link, Print, Settings.](images/layout_guide.png)

**Make sure to enable Title Bar and set the Bookmarks Toolbar to "Always Show."**