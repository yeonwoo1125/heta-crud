/**
	Global Constants 
	모든 Class에서 this._root이런식으로 사용가능
*/ 

const port = process.env.PORT ?? 5000;

module.exports = {

	_port: port,
	_root: __dirname,

};
