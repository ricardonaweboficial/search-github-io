import React from 'react';

export default function LanguageColor(color) {
	if(color === 'JavaScript') {
		return '#F1E05A';
	} else if (color === 'CSS') {
		return '#563D7C'	
	} else if (color === 'HTML') {
		return '#E34C26';
	} else if (color === 'Python' || color === 'PHP') {
		return '#3572A5';
	} else if (color === 'Java' || color === 'Swift') {
		return '#FFAC45';
	} else if (color === 'TypeScript') {
		return '#2B7489';
	} else if (color === 'Objective-C') {
		return '#438EFF';
	} else {
		return '#555555';
	}
}