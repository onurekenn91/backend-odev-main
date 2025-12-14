//Şemalar
//Alt şemalar bağlantılı oldukları üst şemaların üstünde yazılır ve bağlantılı oldukları şemaya isim:[isim]=> hours:[hours] olarak eklenir.
var mongoose = require('mongoose');

var hour = new mongoose.Schema({
    days: {type: String, required: true},
    open: String,
    close: String,
    isClosed: {type: Boolean, required: false}
});

var comment = new mongoose.Schema({
    author: {type: String, required: true},
    rating: {type: Number, required: true, min: 0, max: 5},
    text: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

var venue = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    rating: {type: Number, default: 0, min: 0, max: 5},
    foodanddrink: [String], //String dizisi [] içinde
    coordinates: {type: [Number], index: '2dsphere'},
    hours: [hour],
    comments: [comment]
});
mongoose.model('venue', venue,'venues'); // (tablo adı(string), hangi tablo, tablonun çoğul adı(string))