import React from 'react';


const Card = (props) =>{
	//destructuring
	const {name,email} = props;
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div>
				<img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;