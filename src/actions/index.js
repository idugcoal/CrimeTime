import axios from 'axios';

import {
	FETCH_CRIMES
} from './types';

export function fetchCrimes() {

  const crimeApiUrl = "https://data.lacity.org/resource/y9pe-qdrd.json?$where=date_occ%20between%20%272015-10-01T12:00:00%27%20and%20%272016-01-01T00:00:00%27";
  const request = axios.get(crimeApiUrl);

	return {
		type: FETCH_CRIMES,
		payload: request
	}
}