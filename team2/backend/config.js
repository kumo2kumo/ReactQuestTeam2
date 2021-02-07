const env = process.env.NODE_ENV || 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
	development :{
		APIKey : 'nJTtqXAKTFWW5Ttx85_Lvw',
		APISecret : 'FLbywctnr7pO1vyQ8Vr333MrqkBHFkK4TRJw'
	},
	production:{
		APIKey : 'nJTtqXAKTFWW5Ttx85_Lvw',
		APISecret : 'FLbywctnr7pO1vyQ8Vr333MrqkBHFkK4TRJw'
	}
};

module.exports = config[env]