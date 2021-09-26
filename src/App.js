import React, {Component}  from 'react';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import Navbar from './components/Navigation/Navigation';
import Loader from './components/Loader';
import axios from 'axios';
import './App.css'


class App extends Component{

    constructor(props){
        super(props)
        //defining the states
        this.state={
            robots: [],
            searchfeild: '',
            isButtonClicked: false
        }
    }

    //function when the button is clicked .
    //it fetches the api
    //and stores in robots

    onButtonSubmit =  async() => {
        //changes the state of the button is clicked
        // this.setState({isButtonClicked: !this.isButtonClicked})
        const response = await axios.get('https://reqres.in/api/users');
        this.setState({robots: response.data.data})
      
    }

    //function used to change the searchfield
    onSearchChange = (event) => {
        this.setState({searchfeild: event.target.value})
    }

    render(){
      let filteredRobots
        //used to filter the robots bt their first name
        if(this.state.robots && this.state.robots.length >0 ){
          filteredRobots = this.state.robots.filter(robots=>{
            return robots.first_name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        })
        }
        

        //at the starting
        //when the user has not clicked the button
        //and the api is not fetched
        if(this.state.robots.length === 0 && this.state.isButtonClicked === false){
            return (
              <>
                <Navbar onButtonSubmit={this.onButtonSubmit}/>
                <h1 className='tc'>Please click on get users to get all details</h1>
              </>
            );

        }

        //when the button is clicked and the api is being called
        //but no data is fetched
        else if(this.state.robots.length === 0){
            return (
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <h1 className='tc'>Loading...</h1>
                  <Loader className='loader'></Loader>
                </>
              );
        }

        //when the button is clicked and the api has fetched data
        else{
            return(
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <div className='container'>
                      <h1>Client Info</h1>
                      <SearchBox searchChange={this.onSearchChange}/>
                        <CardList robots={filteredRobots}/>
                  </div>
                 </>
              );
        }

    }

}

export default App;