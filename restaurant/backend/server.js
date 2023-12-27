const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const server = express()
server.use(bodyParser.json());
const path = require('path');
const fs = require('fs');
//Taille du fichier joint
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const cors =require('cors');
server.use(cors())

//Connexion à la base de données

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"menu",
});

db.connect(function (error){
    if (error){
        console.log("Erreur lors de la connexion à la base")
    }
    else{
        console.log("Connexion réussie")
    }
});
//Etablissement du port
server.listen(8085,function check(error){
    if (error) console.log("Erreur detectée");
    else console.log("En service sur le port 8085");
});

//Methode POST
server.post("/api/articles/add", (req,res) =>{
    let details ={
        stname: req.body.stname,
        course: req.body.course,
        fee : req.body.fee,
    };
    let sql = "INSERT INTO articles SET ?";
    db.query(sql,details, (error) => {
        if(error){
            res.send({status:false, message: "Erreur lors de la creation"});
        }
        else{
            res.send({status:true, message: "Article créee avec succes"});
        }
    });
});
//Methode GET

server.get("/api/articles",(req,res)=>{
    var sql = "SELECT * from articles";
    db.query(sql,function (error,result){
        if (error)  console.log("Erreur lors de la requete");
        else res.send({status:true, data:result});
    });
});

//Methode SELECT
server.get("/api/articles/:id", (req, res) => {
    const articleId = req.params.id;
    const sql = "SELECT * FROM articles WHERE id=" + articleId;

    db.query(sql, (error, result) => {
        if (error) {
            console.log("Erreur lors de la requete");
            res.status(500).send({ status: false, message: "Erreur lors de la requete" });
        } else {
            if (result.length === 0) {
                res.status(404).send({ status: false, message: "ID introuvable" });
            } else {
                res.send({ status: true, data: result });
            }
        }
    });
});


//Methode PUT
server.put("/api/articles/update/:id", (req, res) => {
    const articleId = req.params.id;
    const { titre, prix} = req.body;

    const sql =
        "UPDATE articles SET titre=?, prix=? WHERE id=?";

    db.query(sql, [titre, prix], (error, result) => {
        if (error) {
            res.status(500).send({ status: false, message: "Echec lors de la modification" });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).send({ status: false, message: "ID introuvable" });
            } else {
                res.send({ status: true, message: "Modification réussie" });
            }
        }
    });
});



