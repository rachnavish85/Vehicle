const mongoose = require('mongoose');
// const url = ('mongodb+srv://shakeelareeba02:shakeelareeba@cluster0.wu8dtsx.mongodb.net/homemade-recipe?retryWrites=true&w=majority')
const url =('mongodb+srv://rachnavish85:RachnaVishwakarma@cluster0.kmtvkme.mongodb.net/vehicle?retryWrites=true&w=majority')
mongoose.connect(url)
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;