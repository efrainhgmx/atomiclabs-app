import React from 'react'

const Progressbar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 0
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
		textAlign: 'right'
	}
	
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
	</div>
	</div>
	)
}

export default Progressbar;
