import React from 'react'
import { Text } from 'react-native'
import Theme from '../../../assets/styles'

function index(props){
    
    let styles = {}
    const { 

      /*
        @Inject style section
      */
      style,



      /*
        @Font size section
      */
      tiny,
      small, 
      big, 
      gigant, 
      superGigant, 



      /*
        @Theme color section
      */
      primary, 
      primaryContrast,
      negativeContrast,
      disabledContrast,
      disabled,
      white,
      black,



     /*
        Font weight section
     */ 
      bold,


      
      /*
        Alignment section
      */ 
      center,
      left,
      right



     } = props

     
     if( bold )
      styles.fontWeight = 'bold'


     /*
        Font size section
     */

    if( tiny )
        styles.fontSize = Theme.tinyText

    if( small )
      styles.fontSize = Theme.smallText

    if( big )
      styles.fontSize = Theme.bigText

    if( gigant )
      styles.fontSize = Theme.gigantText

    if( superGigant )
      styles.fontSize = Theme.superGigantText


     /*
        Theme color section
     */

    if( primary )
      styles.color = Theme.primaryColor

    if( primaryContrast )
      styles.color = Theme.primaryColorContrast

    if( negativeContrast )
      styles.color = Theme.negativeContrast

    if( disabledContrast )
      styles.color = Theme.disabledColorContrast

    if( disabled )
      styles.color = Theme.disabledColor



    /*
      Default color section
    */

    if( white )
        styles.color = 'white'
    
    if( black )
        styles.color = 'black'



    /*
      Alignment section
    */   
    if( center )
        styles.textAlign = 'center'

    if( left )
        styles.textAlign = 'left'

    if( right )
        styles.textAlign = 'right'


        
    return <Text style={{ ...styles, ...style }}>{ props.children }</Text>


}



export default index
