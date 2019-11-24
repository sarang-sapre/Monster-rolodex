import React,{ Component } from 'react';
import './App.css';
import {CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [] ,
      searchfield:''
    };
  }

  componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(users => this.setState({monsters:users})) }

  render(){
    const {monsters , searchfield} = this.state;

    const filteredcard = monsters.filter(monsters => 
      monsters.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
      );

    return (
      
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <SearchBox 
        placeholder='search monters'
        handelchange={e => this.setState({searchfield:e.target.value})}
        />
       <CardList monsters={filteredcard}/>
      </div>
 
    );
  }
}

export default App;
