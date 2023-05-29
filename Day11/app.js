const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Simulasi database artikel
let articles = [
    { id: 1, title: 'Artikel 1', content: 'Ini adalah artikel pertama.' },
    { id: 2, title: 'Artikel 2', content: 'Ini adalah artikel kedua.' },
    { id: 3, title: 'Artikel 3', content: 'Ini adalah artikel ketiga.' }
];

// Mendapatkan semua artikel
app.get('/articles', (req, res) => {
    res.json(articles);
});

// Mendapatkan artikel berdasarkan ID
app.get('/articles/:id', (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = articles.find(article => article.id === articleId);

    if (!article) {
        res.status(404).json({ error: 'Artikel tidak ditemukan' });
    } else {
        res.json(article);
    }
});

// Menambahkan artikel baru
app.post('/articles', (req, res) => {
    const newArticle = req.body;
    articles.push(newArticle);
    res.status(201).json(newArticle);
});

// Memperbarui artikel berdasarkan ID
app.put('/articles/:id', (req, res) => {
    const articleId = parseInt(req.params.id);
    const updatedArticle = req.body;
    const index = articles.findIndex(article => article.id === articleId);

    if (index === -1) {
        res.status(404).json({ error: 'Artikel tidak ditemukan' });
    } else {
        articles[index] = { ...articles[index], ...updatedArticle };
        res.json(articles[index]);
    }
});

// Menghapus artikel berdasarkan ID
app.delete('/articles/:id', (req, res) => {
    const articleId = parseInt(req.params.id);
    const index = articles.findIndex(article => article.id === articleId);

    if (index === -1) {
        res.status(404).json({ error: 'Artikel tidak ditemukan' });
    } else {
        const deletedArticle = articles[index];
        articles.splice(index, 1);
        res.json(deletedArticle);
    }
});

// Penanganan kesalahan (error handling)
app.on('error', (err) => {
    console.error('Error:', err.message);
});

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`)
})