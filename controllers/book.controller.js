const fs = require("fs");
const path = require("path");
const { deserialize } = require("v8");

const {Book} = require("../models/book.model");
const getAll = function(req,res){
    fs.readFile(path.join(__dirname,"../list.json"),function(err,data){
        if(!err){
            const books = JSON.parse(data).books;
            console.log(books);

            var livres = [];

            for(let i = 0; i<books.length; i++){
                var livre = Book.fromJson(books[i])
                
                livres.push(livre);
            }
            res.render("list",{livres : livres});
        }
    });
}


const getBookById = function(req,res){
    const id = req.params.id;
    fs.readFile(path.join(__dirname,"../list.json"),function(err,data){
        if(!err){
            const books = JSON.parse(data).books;
            console.log(books);

            const livre = books.find(function(el){
                return el.id == id;
            })
           // res.json(livre);
            res.render("book",{livre : new Book.fromJson(livre)});
        }
    });
}

module.exports.getBooks = getAll;
module.exports.getBookById = getBookById;