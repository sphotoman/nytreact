import React, { Component } from 'react';

export class Jumbotron extends Component{
	render(){
		return(
			
			<div className="container jumbotron">
				<h1 className="display-4">Search New York Times</h1>
				<hr className="my-4" />
				<p className="lead">Search by Subject in a given period of time.</p>

				<ul className="nav nav-pills">
					<li className="nav-item">
					<a className="nav-link active" href="http://scottfaber.com">Home</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="http://scottfaber.com">Saved Results</a>
					</li>
				</ul>
			</div>
			)
	}
}