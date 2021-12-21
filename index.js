const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json());

//ROUTES//

//get all alphabets
app.get("/alphabets",async(req, res)=>{
    try {
       const AllAlphabets = await pool.query("SELECT * FROM alphabet")

       res.json(AllAlphabets.rows)
    } catch (error) {
        console.error(error.message);
    }
})
// get a alphabet

app.get("/alphabets/:id", async(req, res)=>{
    const {id}=req.params
    try {
        const alphabet = await pool.query("SELECT * FROM alphabet WHERE alphabet_id = $1", [id])

        res.json(alphabet.rows[0])
    } catch (error) {
        console.error(error.message);
    }
})

//create a alphabet
app.post('/alphabets', async (req, res) => {
	try {
		const { description } = req.body;
		const newAlphabet = await pool.query(
			'INSERT INTO alphabet (description) VALUES ($1) RETURNING *', [description]
		);

        res.json(newAlphabet.rows[0])
	} catch (error) {
		console.error(error.message);
	}
});

app.listen(3000, () => {
	console.log('listening on port 3000');
});
