# Groceries
App for keeping a groceries list. \
Features autocompletion based on the previous entered items (min 3 chars). \
Coded in React Native and Typescript.

> ⚠️  Careful when upgrading the TailwindCSS version to >3.3.2 [(see explanation
> here)](https://stackoverflow.com/questions/76688256/getting-error-use-processcss-thencb-to-work-with-async-plugins)

#### TBD
- [ ] Add remove item from autocomplete list
- [ ] Bottom tab navigator with full list on another tab
- [ ] Add some tests


## Run
1. Setup your environment, by following the [instructions](https://reactnative.dev/docs/set-up-your-environment) until the _Creating a new application_ step.
2. Start _Metro_ (the JavaScript bundler that ships with React Native) by running \
`npm start` or `yarn start` from from the root of the project. 
3. Press either `a` for Android or `i` for iOS to run the app on an emulator or a connected device.


If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

> Note: You can also run your app directly from within Android Studio or Xcode.


Now that you have successfully run the app, let's modify it.

1. Open `src/App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> on Windows and Linux, or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!



## Compile
```
cd android &&  ./gradlew assembleRelease
```


## Publish to play store
You can follow the [official guide](https://reactnative.dev/docs/signed-apk-android).


### Icon Attribution
[Grocery-cart Icon](https://www.flaticon.com/free-icons/grocery-cart) created by small.smiles and downloaded from Flaticon
