import React from 'react';
import axios from 'axios';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            user: [],
            firstname:'',
            lastname:'',
            name:''
        };

    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            name:`${this.state.firstname} ${this.state.lastname}`
        })
        this.state.firstname="";
        this.state.lastname="";
        // console.log(this.state);
    }

    getUser = async() => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        this.setState({
            user: response.data
        })
    }

    componentDidMount() {
        this.getUser();
    }


    render() {

        const myname = this.state.user;
        const me=this.state.name;
        return ( 
            <div className="p-5">
                <div className="container">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Learn React by {myname.name}</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="firstname" className="form-label">firstname</label>
                                        <input type="text" value={this.state.firstname} onChange={this.handleChange} name="firstname" id="firstname" className="form-control" placeholder="firstname"/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="lastname" className="form-label">lastname</label>
                                        <input type="text" value={this.state.lastname} onChange={this.handleChange}  name="lastname" id="lastname" className="form-control" placeholder="lastname"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Show</button>
                                </form>
                            </div>
                            <div className="card-body">
                                My Name is {me?me:'...'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

// https://www.youtube.com/watch?v=9nTYPeFtKqg&list=PLRKMmwY3-5MwXT8zMPbezhDnTM3cTA5cZ&index=5