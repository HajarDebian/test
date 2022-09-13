const addBlog = require('./controller/addBlog');
const { deleteBlog } = require('./controller/deleteBlog');
const { displayBlogs } = require('./controller/displayBlogs');
const { blogNuser } = require('./controller/getBlogs&UserInfo');
const { updateBlog } = require('./controller/updateBlog');

const router = require('express').Router();

router.post('/blog' , addBlog)

router.get('/blog/:id' , displayBlogs)

router.get('/blog' , blogNuser)

router.patch('/blog/:id' , updateBlog)

router.delete('/blog/:id' , deleteBlog)

module.exports = router;