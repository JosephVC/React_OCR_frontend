import React from 'react';

function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<div>
				<p style={{ fontSize: '25px' }}>
				  We are waiting for the data to load! 
			    </p>
				<p style={{ fontSize: '25px' }}>	
				  You must be logged in to view posts.
				</p>
			</div>
						
		);
	};
}
export default PostLoading;