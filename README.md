# Bento

🍱 The minimalist, elegant and hackable startpage.

Forked from [migueravila/Bento](https://github.com/migueravila/Bento)

Edited files:
- `config.js`
- `assets/background.jpg`


### ⛈️ Weather: Api Key, Icons and Unit

For setting up the Weather widget you'll need an API Key from: `https://openweathermap.org/`. Once you have your Key you'll need to set your latitude and longitude, you can use: `https://www.latlong.net/` to get them. 

### 💛 Colors

In the `app.css` file you can change the variables for both themes (Dark and Light):

```css
/* Light theme  */

:root {
  --accent: #61b0f1; /* Hover color */
  --bg: #f5f5f5; /* Background color */
  --sbg: #e4e6e6; /* Cards color */
  --fg: #3a3a3a; /* Foreground color */
  --sfg: #3a3a3a; /* Sceondary Foreground color */
}

/* Dark theme  */

.darktheme {
  --accent: #61b0f1; /* Hover color */
  --bg: #19171a; /* Background color */
  --sbg: #201e21; /* Cards color */
  --fg: #d8dee9; /* Foreground color */
  --sfg: #3a3a3a; /* Secondary Foreground color */
}
```

### 🌑 Auto change theme

The theme can be automatically changed by the OS' current theme or personalized hours
that you can change in the `config.js` file:

```js
  // Autochange
  autoChangeTheme: true,

  // Autochange by OS
  changeThemeByOS: false, 

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: true, // If it's true, it will use the values below:
  hourDarkThemeActive: '18:30', // Turn on the dark theme after this hour
  hourDarkThemeInactive: '07:00', // Turn off the dark theme after this hour and before the above hour
```

![](assets/img/darkMode.png)
