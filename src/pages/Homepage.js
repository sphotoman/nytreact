import React from 'react';
import { Jumbotron } from '../components/Jumbotron';

export const Homepage () => (
	<div>
// props for jumbotrom
		<Jumbotron
			title="Search New York Times"
			subTitle="Search by Subject in a given period of time." />


// props for search - 
//		gathers users data and searches NYT
//		displays results in Results
//		gives button for savinging
//			button saves to DB

//props for results
//		gets all saved articles from DB with option to delete button
//		delete button removes from DB
	</div>	
)