import React, { Component } from 'react';

export class Search extends Component{
	render(){
		return(
			<div className="container border border-dark">
				<div class="form-row">
					<div className="form-group col-md-6">
						<label for='topicSearch'>Topic to Search</label>
						<input className="form-control form-control-sm" 
								type="text"
								name="searchTopic"
								id="fromControlInput1"
								placeholder="ie. Unicorns" />
					</div>	
					<div className="form-group col-md-2">
						<label for='startYear'>Start Year</label>
						<input className="form-control form-control-sm" 
								type="text"
								name="startYear"
								id="fromControlInput1" 
								placeholder="ie. 2015" />
					</div>
					<div className="form-group col-md-2">
						<label for='endYear'>End Year</label>
						<input className="form-control form-control-sm" 
								type="text"
								name="endYear"
								id="fromControlInput1" 
								placeholder="ie. 2017" />
						
					</div>
						<div className="form-group col-md-2">
						<br />
						<button type="button" 
								class="btn btn-primary"
								onClick>Search</button>
					</div>
				</div>
			</div>

		)

	}
}