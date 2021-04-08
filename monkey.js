//randomStringRandomLenght()
module.exports ={
    createRandomString: function createRandomString(string_lenght) {

            var random_string = ''

            var characters = 'ABCDEFGHIJKLM NOPQRSTUVWXYZABCDEFGHIJKLM NOPQRSTUVWXYZABCDEFGHIJKLM NOPQRSTUVWXYZ'

            for(var i, i = 0; i < string_lenght; i++){
                
                random_string += characters.charAt(Math.floor(Math.random() * characters.length))
            }
            return random_string
    }
}
