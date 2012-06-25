
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

// success page
exports.success = function(req, res) {
	Todo.find(function ( err, todos, count ){
		res.render('suc', { title: 'success', suc: '保存成功！', todos: todos });
	});
};