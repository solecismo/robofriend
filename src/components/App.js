import React ,{Component} from "react";
import { robots } from './robots';
import CardList from './CardList';
import Searchbox from "./SearchBox";
import Scrooll from './Scrooll';
import '../containers/App.css';

class App extends Component {
    
    constructor(){
        super();
        this.state={
            robots:robots,
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}))
        
    }

    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value});
    }

    render(){
        const filterRobot = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length===0){
            return <h1>Loading</h1> 
        }else{
            return (
                <div className='tc'>
                    <h1>Robot Friends</h1>
                    <Searchbox searchChange={this.onSearchChange}></Searchbox>
                    <Scrooll>
                        <CardList robots={filterRobot}></CardList>
                    </Scrooll>
                </div>
            )
        }
        
    }
    
}

export default App;