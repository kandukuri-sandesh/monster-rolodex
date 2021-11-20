import React,{Component} from "react";
import "./App.css";
import {CardList} from "./components/card-list/card-list.component.jsx";
import {SearchBox} from "./components/search-box/search-box.component.jsx";


class App extends Component{
  
    constructor(){
      super();
      this.state = {
        monsters: [],
        SearchField : ""
        
      }
    }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>response.json())
      .then(users=> this.setState({monsters:users }) );
    }
    
    render(){
      //const {monsters,SearchField} = this.state;
      const filteredMonsters = this.state.monsters.filter(monster=> monster.name.toLowerCase().includes(this.state.SearchField.toLowerCase()));
      return (
        <div className="App" >
        <h1> Monsters-Rolodex</h1>
        
        <SearchBox placeholder = "monsters name" handlechange ={(e)=> this.setState({SearchField:e.target.value})} />
        
        <CardList monster={filteredMonsters} className="card-list">
      
        
        </CardList>
        </div>)
    }

}
export default App