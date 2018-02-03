import React, { Component } from 'react';
import {helper} from '../api/articles';
import {Results} from './Results';

export class Search extends React.Component{
	constructor (props) {
		super(props);
		this.state= {
			searchTopic: '',
			startYear: '',
			endYear: '',
			data: []
		}
		this.handleInputChange=this.handleInputChange.bind(this)
		this.handleFormSubmit=this.handleFormSubmit.bind(this)
		this.displayResults=this.displayResults.bind(this)
	}
	
  	handleInputChange (event) {
	    const { name, value }= event.target;

	    this.setState({
	      [name]: value
	    })
	  }

  	handleFormSubmit (event) {
   		event.preventDefault();
    	alert(`searchTopic: ${this.state.searchTopic} between Starting Year : ${this.state.startYear} and Ending Year: ${this.state.endYear}`);
    	const articles = helper.query(this.state.searchTopic, this.state.startYear, this.state.endYear, this.displayResults)

	  }

	displayResults (data) {
		console.log(data);
		this.setState({
			searchTopic: '',
			startYear: '',
			endYear: '',
			data: data
		});
	}

	render(){
		return(
			<div className="container border border-dark">
				<div class="form-row">
					<div className="form-group col-md-6">
						<label for='topicSearch'>Topic to Search</label>
						<input className="form-control form-control-sm" 
								value={this.state.searchTopic}
								type="text"
								name="searchTopic"
								id="fromControlInput1"
								placeholder="ie. Unicorns" 
								onChange = {this.handleInputChange}
						/>
					</div>	
					<div className="form-group col-md-2">
						<label for='startYear'>Start Year</label>
						<input className="form-control form-control-sm"
								value={this.state.startYear} 
								type="text"
								name="startYear"
								id="fromControlInput1" 
								placeholder="ie. 2015"
								onChange = {this.handleInputChange}
						/>
					</div>
					<div className="form-group col-md-2">
						<label for='endYear'>End Year</label>
						<input className="form-control form-control-sm"
								value={this.state.endYear} 
								type="text"
								name="endYear"
								id="fromControlInput1" 
								placeholder="ie. 2017" 
								onChange = {this.handleInputChange}
						/>
					</div>
						<div className="form-group col-md-2">
						<br />
						<button type="button" 
								class="btn btn-primary"
								onClick={this.handleFormSubmit}>Search</button>
					</div>
				</div>
				{this.state.data.map((e)=>{
					return <Results key={e.headline.main} title={e.headline.main} snippet={e.snippet} url={e.web_url}/>
				})}
			</div>

		)

	}
}