import express from 'express';
import bodyParser from 'body-parser';

class Post {
    constructor(id, title, content, date) {
        this._id = id
        this.title = title
        this.content = content
    }
    get id() {
        return this._id.toString()
    }
    set id(id) {
        this._id = id
    }
    toJSON() {
        const {_id, ...post} = this
        return {id: _id, ...post}
    }
}

// Mock array of posts
const posts = [
    new Post(1, 'Daddy\'s...', '...flown across the ocean'),
    new Post(2, 'Leaving...', '...just a memory')
]
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/posts', (req, res) => {
    res.json(posts)
})

app.use(checkContentType)

app.get('/posts/:id', getPost, (req, res) => {
    const post = res.locals.post
    res.json(post)
})

app.post('/posts', (req, res) => {
    const { title, content } = req.body
    const newPost = new Post(posts.length + 1, title, content)
    posts.push(newPost)
    res.json(newPost)
})

app.patch('/posts/:id', getPost, (req, res) => {
    const post = res.locals.post
    const { title, content } = req.body
    post.title = title ?? post.title
    post.content = content ?? post.content
    res.json(post)
})

app.delete('/posts/:id', getPost, (req, res) => {
    const post = res.locals.post
    if (!post) return notFound(res)
    posts.splice(posts.indexOf(post), 1)
    res.json(post)
})

// Catch all other routes
app.all('*', (req, res) => {
    res.status(404).send('Not Found')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

// Not found middleware 
function getPost(req, res, next) {
    const post = posts.find(p => p.id === req.params.id)
    if (!post) {
        return res.status(404).send('Not Found')
    } else {
        res.locals.post = post
    }
    next()
}

function checkContentType(req, res, next) {
    if (req.method !== 'POST' && req.method !== 'PATCH') {
        return next()
    }
    if (!req.headers['content-type']?.includes('application/json')) {
        return res.status(400).send('Content-Type must be application/json')
    }
    next()
}
