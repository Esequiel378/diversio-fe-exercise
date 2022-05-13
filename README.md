# Diversio FE take-home

This is Diversio's front-end take-home exercise.

## How to run

In the project directory, run:

```
yarn install
```
```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Your task: build a color picker widget

Take a look at `App.js`. Your solution should work with any `COLOR_LIST` that contains valid color values.

Please implement `ColorWidget` so that: 

- [ ] The colors in `colorList` are shown as available color choices 
- [ ] A user can click a color choice, and see a larger box change to that color
- [ ] The currently selected color is somehow marked (i.e with a black outline)
- [ ] A long `COLOR_LIST` should render in a useable way (i.e. perhaps not all on a single row). The boxes should not "jiggle" around as a user clicks them.

An example solution might look like this:

<img src="https://i.imgur.com/2vB3Pp3.png" width="200" />

## How to submit
- [ ] Please make at least one commit containing your changes, and write meaningful commit messages.
- [ ] You can commit to a new git repo and send us the link;
- [ ] Or, you can .zip up the repo and email it back. Please remove `node_modules` - we will run `yarn install`. 

## What we're looking for
This is meant to be a simple task (no gotchas). You don't need to do anything fancy. We're looking for:

- Thoughtful organization and readability in your JavaScript, JSX, and CSS;
- Well-chosen `camelCase` variable names;
- No warnings in the console related to your code.

That said, if you want to get creative, please do so :)
