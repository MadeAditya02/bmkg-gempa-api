const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
	res.json({
		message: "Unoficiall BMKG API Wrapper",
		source: "https://data.bmkg.go.id/gempabumi",
		sumber: "Data Resmi BMKG",
		github: "https://github.com/madeaditya02/bmkg-gempa-api",
		terbaru: {
			info: "Menampilkan data gempa terbaru (1 data gempa dalam bentuk object)",
			endpoint: 'https://bmkg-gempa-api.vercel.app/gempa'
		},
		terkini: {
			info: "Menampilkan 15 data gempa terkini dengan magnitudo 5.0+ (15 data gempa dalam bentuk array)",
			endpoint: 'https://bmkg-gempa-api.vercel.app/terkini'
		},
		dirasakan: {
			info: "Menampilkan 15 data gempa dirasakan (15 data gampa dalam bentuk array)",
			endpoint: 'https://bmkg-gempa-api.vercel.app/dirasakan'
		},
	})
})
app.get('/gempa', async (req, res) => {
	let data = (await axios.get('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json')).data.Infogempa.gempa
	data.Gambar_Shakemap = `https://data.bmkg.go.id/DataMKG/TEWS/${data.Shakemap}`;
	[data.Lat, data.Lng] = data.Coordinates.split(',').map(val => parseFloat(val))
	res.json(data)
})
app.get('/terkini', async (req, res) => {
	const data = (await axios.get('https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json')).data.Infogempa.gempa;
	for (const gempa of data) {
		[gempa.Lat, gempa.Lng] = gempa.Coordinates.split(',').map(val => parseFloat(val))
	}
	res.json(data)
})
app.get('/dirasakan', async (req, res) => {
	const data = (await axios.get('https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json')).data.Infogempa.gempa;
	for (const gempa of data) {
		[gempa.Lat, gempa.Lng] = gempa.Coordinates.split(',').map(val => parseFloat(val))
	}
	res.json(data)
})
// app.use('/', (req, res) => {
// 	res.status(404)
// 	res.send('404')
// })

const server = app.listen(3000, async () => {
	console.log('Express is listening on port 3000..')
})

module.exports = app