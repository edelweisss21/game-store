import React, { useMemo } from 'react';
import Select from 'react-select';
import './SortSelect.scss';

const options = [
	{
		value: 'popular',
		label: 'Popular',
	},
	{
		value: 'alphabet',
		label: 'A-Z',
	},
	{
		value: 'rating',
		label: 'By rating',
	},
];

const SortSelect = ({ onChange, value }) => {
	const handleSelect = selectedOption => {
		onChange(selectedOption.value);
	};
	console.log('value', value);
	return (
		<Select
			className='select'
			classNamePrefix='custom-select'
			placeholder='Sort by...'
			onChange={handleSelect}
			options={options}
			value={value}
		/>
	);
};

export default SortSelect;
