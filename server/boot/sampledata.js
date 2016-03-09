module.exports = function(app) {
var post = app.models.post;
var share = app.models.share;

var postdata = [
  {
    "postid": 1,
    "postname": "abc",
    "userid": 10
  },
  {
    "postid": 2,
    "postname": "xxx",
    "userid": 10
  },
  {
    "postid": 3,
    "postname": "yyy",
    "userid": 11
  },
  {
    "postid": 4,
    "postname": "zzz",
    "userid": 12
  },
  {
    "postid": 5,
    "postname": "bbb",
    "userid": 13
  }
];

var sharedata = [
  {
    "shareid": 1,
    "postid": 3,
    "userid": 10
  },
  {
    "shareid": 2,
    "postid": 4,
    "userid": 10
  },
  {
    "shareid": 3,
    "postid": 3,
    "userid": 11
  },
  {
    "shareid": 4,
    "postid": 1,
    "userid": 12
  }
];


	post.create(postdata,function(err, data)
	{
		console.log("postdata",data);
		share.create(sharedata,function(err, data)
		{
			console.log("sharedata",data);
		});
		

	});


};