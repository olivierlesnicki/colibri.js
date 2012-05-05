# Colibri.js

**Colibri.js** is a jQuery plugin to add simple Growl like notifications to your websites. Although the script functionalities are minimalist yet efficient, the look and feel of the notifications are fully customisable with CSS.

## Dependencies

As a jQuery plugin, Colibri.js requires jQuery 1.6+ to work smoothly.

## How-To-Use

### It's easy

1. Link to colibri.css `<link href="colibri.css" rel="stylesheet"/>`

2. Link to colibri.js `<script src="colibri.js"></script>`

3. Popup a notification

         // Only one line is required
         colibri('This is a notification!');

### Default styles

         // Success
         colibri('Well done! You successfully read this important alert message.', 'colibri-success');

         // Warning
         colibri('Warning! Best check yo self, you're not looking too good.', 'colibri-warning');

         // Error
         colibri('Oh snap! Change a few things up and try submitting again.', 'colibri-error');

## Author

This plugin was carefully crafted in London, United Kingdom by Olivier Lesnicki [@swaggaguru](http://www.twitter.com/swaggaguru).

## License

Licensed under the MIT licenses:
[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)