# My Expo Stopwatch

...

- Dont update react native svg to 12.3.0 - breaks web animation for circle: https://github.com/marcuzgabriel/reanimated-animation-library/pull/3
- thi version works fine - "react-native-svg": "^12.2.0",

Fixed:

- Android crash on reset
- Big clock animation out of sync for some reason

Todo:

- limit clock to the width of device
- different colors for stopwatch and timer
- labels file
- tap on clock in Timer opens modal
- Build draggable modal (close on tap outside)
- Build List
