import React, {Component} from 'react';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import flashcard from '../images/flashcard.png';
import sightwords from '../data/sightwords.json';
const data = sightwords.sightwords;
console.log(data);

class Home extends Component{
    
    renderData(data){
        var i = 0;
        if(data == null){
            data = "default";
        }
        console.log(data[i].word);
    return  <p>data[i].word</p>
    }
    
    render(){
        var background = {backgroundSize : 'cover'};
        var textStyle = {
          position: 'absolute', 
          top: '50%', 
          left: '50%'
        };
        return(            
            <Grid>
            <h2>Homepage</h2>
            <p>Thank you for visiting. Use this site to create your sight word list. Please go to the CreateJSON link to go to the form.</p>
        <div style={{width: 'auto'}}>
            <Button value="back">Back</Button>
                <Image  
                  src={flashcard}>
                </Image>
                 {
              <h1 style={textStyle}> {data.word}</h1>}
             <Button value="Next">Next</Button>
            </div>
                
           
           
            </Grid>
        
        );
    }
}

export default Home