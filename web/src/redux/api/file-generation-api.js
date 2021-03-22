import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'http://localhost:3000/',
  headers: {'Content-Type': 'application/json'}
});

export const generateFileApi = async () => {
	try {
		const file = await axios.get('generate');
console.log(file);
		return file.data;
	} catch(err) {
		return console.error(err)
	}
};

export const getFileContentReportApi = async (fileName) => {
	try {
		const report = await axios.get(`generate?${fileName}`);

		return report.data;
	} catch(err) {
		return console.error(err)
	}
};