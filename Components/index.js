import React from 'react'
import { Text } from 'react-native'
import Theme from '../../../assets/styles'

function index(props){
    
    let styles = {}

    if( props.tiny )
        styles.fontSize = Theme.tinyText

        
    if( props.small )
        styles.fontSize = Theme.smallText


    if( props.big )
        styles.fontSize = Theme.bigText


    if( props.gigant )
        styles.fontSize = Theme.gigantText

    if( props.superGigant )
        styles.fontSize = Theme.superGigantText


    if( props.primary )
        styles.color = Theme.primaryColor

    if( props.primaryContrast )
        styles.color = Theme.primaryColorContrast

    if( props.negativeContrast )
        styles.color = Theme.negativeContrast

    if( props.disabledContrast )
        styles.color = Theme.disabledColorContrast

    if( props.disabled )
    styles.color = Theme.disabledColor

    if( props.white )
        styles.color = 'white'

    if( props.big )
        styles.fontSize = Theme.bigText


    if( props.bold )
        styles.fontWeight = 'bold'

    if(props.center)
        styles.textAlign = 'center'

    if(props.left)
        styles.textAlign = 'left'

    if(props.right)
        styles.textAlign = 'right'

    return <Text style={styles}>{ props.children }</Text>

}

export default index
