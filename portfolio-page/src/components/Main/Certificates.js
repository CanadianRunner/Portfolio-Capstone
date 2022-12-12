import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { GooglePic } from '../../assets/GoogleCoursera.png'

<div nameSpace='cert-carousel'>
  

</div>
function Certificates(props, GooglePic) {
  var items = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!",
        src: '../../assets/GoogleCoursera.png',
        alt: "Google Certificate"
      
  
    },
    
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

  return (
    <Carousel>
    {
        items.map( (item, i) => <Item key={i} item={item} /> )
    }
</Carousel>
  )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

Certificates.propTypes = {}

export default Certificates
