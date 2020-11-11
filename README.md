# React Native Esteban Text

React Native primitive text component for theme creation.

## installation
You only need 3 steps to get started

Step 1) 
```bash
npm install rn-esteban-text
```

Step 2) 
On your root project folder create an assets folder like this
```bash
mkdir assets
```

Step 3) 
On created assets folder, now create a styles.js file and add this code, or overwrite your theme file

```js

// This is your theme file
const style = {

  /*
    Font size section
  */  
  tinyText : 12,
  smallText : 16,
  bigText : 25,
  gigantText : 30,
  superGigantText : 40,


  /*
    Theme color section
  */
  primaryColor: '#002E86',
  primaryColorContrast : '#20F8F8',
  negativeContrast : 'red',
  disabledColorContrast : 'red',
  disabledBgColor : 'grey'

}


export default style

```

## Usage

```js
import {Text} from 'rn-esteban-text'

const index() => {
 return (<Text big white center>Hello world</Text>)
}

export default index
```

## Size

| Size props  |     Theme value |
| :---------- | --------------: |
| tiny        |        tinyText |
| small       |       smallText |
| big         |         bigText |
| gigant      |      gigantText |
| superGigant | superGigantText |

## Color

| Color props      |           Theme value |
| :--------------- | --------------------: |
| primary          |          primaryColor |
| primaryContrast  |  primaryColorContrast |
| negativeContrast |      negativeContrast |
| disabledContrast | disabledColorContrast |
| disabled         |       disabledBgColor |
| white            |           white color |
| black            |           black color |

## More props
| Other props |  Value | Description      |
| :---------- | -----: | ---------------- |
| center      | center | Center text      |
| left        |   left | Align to left    |
| right       |  right | Align to right   |
| bold        |   bold | set text to bold |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)