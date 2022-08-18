// CONFIGURATIONS
const express = require("express")
const snacks = express.Router()

// IMPORT QUERIES
const {getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack} = require("../queries/snacks.js")


// ROUTES
// ALL SNACKS
snacks.get("/", async (req, res) => {
    const allSnacks = await getAllSnacks()
    if (allSnacks[0]) {
        res.status(200).json(allSnacks)
    } else {
        res.status(500).json({ error: "server error"})
    }
})

// ONE SNACK
snacks.get("/:id", async (req, res) => {
    const  { id } = req.params;
    const snack = await getSnack(id)
    if (snack) {
        res.json(snack)
    } else {
        res.status(404).json({ error: "snack not found"})
    }
})

// CREATE A SNACK
snacks.post("/", async (req, res) => {
    try {
        const snack = await createSnack(req.body)
        res.json(snack)
    } catch (error) {
        return error;
    }
})

// DELETE A SNACK 
snacks.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSnack = await deleteSnack(id)
    if (deletedSnack.id) {
        res.status(200).json(deletedSnack)
    } else {
        res.status(400).json("Snack not Found Please")
    }
})

// UPDATE A SNACK
snacks.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSnack = await updateSnack(req.body, id)
    if (updatedSnack.id) {
        res.status(200).json(updatedSnack)
    } else {
        res.status(404).json({ error: "Your Snack was not updated...Want to do it again"})
    }
})

module.exports = snacks;