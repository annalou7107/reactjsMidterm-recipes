import React,{Component} from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import recipe from '../data/recipes.json';
const data = recipe.recipe;
console.log(data);
const jsonfile = require('jsonfile')

class Recipes extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            image:"",
            ingredients: "",
            directions:""
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }
        
    handleSubmit(event){
        event.preventDefault();
        
        //I couldn't get the writeFile or writeFileSync to write to my file when form button was clicked
//        var i = 2;
//        var file = '/recipes.json'
//        var obj = {id:i,title:this.state.title,image:this.state.image, ingredients:this.state.ingredients, directions:this.state.directions}
// 
//        jsonfile.writeFileSync(file, obj, {flag: 'a'}, function (err) {
//            console.error(err)
//        });
//        i++;
    }
      
    renderForm(){
        return(
            <form onSubmit={this.handleSubmit} className="form-group" id="saveRecipe">
            <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
            </label><br></br>
             <label>
            Image:
            <input type="url" name="image" value={this.state.image} onChange={this.handleChange}/>
            </label><br></br>
             <label>
            Ingredients:
            <input type="text" name="ingredients" value={this.state.ingredients} onChange={this.handleChange}/>
            </label><br></br>
             <label>
            Directions:
            <input type="text" name="directions" value={this.state.directions} onChange={this.handleChange}/>
            </label><br></br>
            <input type="submit" value="Save Recipe"/>
            </form>
        );
    }
    
    renderData(data){
        if(data == null){
            data = "default";
        }
    return  <Col key={data.id} xs={12} sm={6} md={4}>
            <Thumbnail src={data.image} alt={data.image}>
            <p>{data.title}</p>
            <p>{data.ingredients}</p>
            <p>{data.directions}</p>
            </Thumbnail>
             </Col>
    }
      
    render(){
        return(
            <Grid>
            <h1>Insert Recipe</h1>
             {this.renderForm()} 
                <Row> 
                 {data.map((i) =>
                  <Col key={this.renderData(i).id}> {this.renderData(i)}</Col>)}
                </Row>
            </Grid>
        );
    }
};

export default Recipes;