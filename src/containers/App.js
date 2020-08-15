import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';



class App extends React.Component {
	constructor(){
		super();
		this.state = {
			robots : [],
			searchField : ''
		}
	}
	onSearchChange = (event) =>{
		this.setState({searchField : event.target.value});
		
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
		.then(users =>this.setState({robots:users}))
	}

	render(){
		const filteredRobots = this.state.robots.filter((robots) =>{
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		console.log(filteredRobots);
		if(this.state.robots.length ===0)
		{
			return <h1>LOADING</h1>;
		}else{
			return (
				<div className='tc'>
					<h1 className="f1">Robo Friends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;