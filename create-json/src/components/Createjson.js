import React,{Component} from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import sightwords from '../data/sightwords.json';
const data = sightwords.sightwords;
console.log(data);


class Createjson extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            data: [],
            word: ""
        };
        
        this.handleWordChange = this.handleWordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleWordChange(event){
        this.setState({word: event.target.value});
    }
    
    handleSubmit(event){
        event.preventDefault();
        sightwords.push(this.state.word);
    }

    renderForm(){
        return(
            <form onSubmit={this.handleSubmit} className="form-group" id="saveJSON">
            <label>
            Word:
            <input type="text" value={this.state.word} onChange={this.handleWordChange}/>
            </label><br></br>
            <input type="submit" value="Save words"/>
            </form>
        );
    }
    
    renderData(data){
        var i =0;
        if(data == null){
            data = "default";
        }
    return  <Col xs={12} sm={6} md={4}>{data.word}
             </Col>
    }
        
    render(){
        console.log(this.state.data);
        return(
            <Grid>
            <h1>Create JSON</h1>
             {this.renderForm()}
             <Row className="row"> 
             {data.map((obj,i) =>
              <Col key={i}> {obj.word}</Col>)}
            </Row>
            </Grid>
        );
    }
};

export default Createjson;