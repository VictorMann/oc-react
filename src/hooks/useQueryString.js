import { useLocation } from 'react-router-dom';

export const useQueryString = () => {
	let obj = {};
	new URLSearchParams(useLocation().search).forEach((val, key) => obj[key] = val);
	return obj;
};