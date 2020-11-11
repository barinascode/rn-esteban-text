var table = require('markdown-table')
let fs = require("fs")
 

// let output = table(
//     [
//         [ 'Size props', 'Theme value' ],
//         [ 'tiny', 'tinyText' ],
//         [ 'small', 'smallText' ],
//         [ 'big', 'bigText' ],
//         [ 'gigant', 'gigantText' ],
//         [ 'superGigant', 'superGigantText' ]
//     ],
//     {align: [ 'l', 'r' ]}
//     )


// let output = table(
//     [
//         [ 'Color props', 'Theme value' ],
//         [ 'primary', 'primaryColor' ],
//         [ 'primaryContrast', 'primaryColorContrast'],
//         [ 'negativeContrast', 'negativeContrast' ],
//         [ 'disabledContrast', 'disabledColorContrast' ],
//         [ 'disabled', 'disabledBgColor' ],
//         [ 'white', 'white color' ],
//         [ 'black', 'black color' ]
//     ],
//     {align: [ 'l', 'r' ]}
//     )


let output = table(
    [
        [ 'Other props', 'Value', 'Description' ],
        [ 'center', 'center', 'Center text' ],
        [ 'left', 'left', 'Align to left'],
        [ 'right', 'right', 'Align to right' ],
        [ 'bold', 'bold', 'set text to bold' ],
    ],
    {align: [ 'l', 'r' ]}
    )

    fs.writeFileSync("demo.md", output)

    // let a = {
    //     primaryColor: '#002E86',
    //     primaryColorContrast : '#20F8F8',
    //     negativeContrast : 'red',
    //     disabledColorContrast : 'red',
    //     disabledBgColor : 'grey'
    // }