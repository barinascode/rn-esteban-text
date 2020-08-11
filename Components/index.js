import React from 'react'
import { Text } from 'react-native'
import Theme from '../../../assets/styles'

function index(props){
    
    let styles = {}
    const { mb10, mb20, mb30, mb40, mb50, mb60, mb70, mb80, mb90, mb100 } = props

        
    if(mb10)
    styles.marginBottom = 10
    
    if(mb20)
      styles.marginBottom = 20

    if(mb30)
      styles.marginBottom = 30

    if(mb40 )
      styles.marginBottom = 40

    if(mb50 )
      styles.marginBottom = 50

    if(mb60 )
      styles.marginBottom = 60

    if(mb70 )
      styles.marginBottom = 70

    if(mb80 )
      styles.marginBottom = 80

    if(mb90 )
      styles.marginBottom = 90

    if(mb100 )
      styles.marginBottom = 100

    if( props.tiny )
        styles.fontSize = Theme.tinyText

        
    if( props.small )
        styles.fontSize = Theme.smallText


    if( props.big )
        styles.fontSize = Theme.bigText

    if( props.mr1 )
        styles.marginRight = 10


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
