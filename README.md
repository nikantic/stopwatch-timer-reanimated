# My Expo Stopwatch

...

- Dont update react native svg to 12.3.0 - breaks web animation for circle: https://github.com/marcuzgabriel/reanimated-animation-library/pull/3
- this version works fine - "react-native-svg": "^12.2.0",

Fixed:

- Android crash on reset
- Big clock animation out of sync for some reason

To do:

- Timer: Complete TimerEdit screen inputs and Timer state (edit) - check validation
- Stopwatch: Add FlatList and SavedTimes screen
- Navigation
- Deploy app
- Test on iOS and Android simulators

To fix:

- Tap on Timer clock should also opens modal
- Modal should close on tap outside
- Limit clock to the width of device
- Web styling fixes
- Different Colors for stopwatch and timer

Possible:

- Localization and single labels file
