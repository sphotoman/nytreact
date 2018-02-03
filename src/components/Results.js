import React, { Component } from 'react';
import axios from 'axios';

export class Results extends Component{
	handleSave (event){
		axios.post("/articles", {title: this.props.title, snippet:this.props.snippet, url:this.props.url})
		.then (()=>alert("monsters are loose"))
	}

	render(){
		return(
			<div className="container border border-dark">
				<h3>{this.props.title}</h3>
				<h5>{this.props.snippet}</h5>
				<a href={this.props.url}>{this.props.url}</a>
				<button type="button" 
								class="btn btn-primary"
								onClick={this.handleSave}>Save Article</button>

			</div>
		)

	}
}