var express = require('express');
var router = express.Router();

function fetchTodos(req, res, options = {}) {
  try {
    req.db.query('SELECT * FROM todos ORDER BY id ASC;', (err, results) => {
      if (err) {
        console.error('Error fetching todos:', err);
        return res.status(500).send('Error fetching todos');
      }

      res.status(options.status || 200).render('index', {
        title: 'Task Tracker',
        todos: results,
        errorMessage: options.errorMessage || '',
        newTaskValue: options.newTaskValue || ''
      });
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Error fetching items');
  }
}

/* GET home page. */
router.get('/', function(req, res, next){
  fetchTodos(req, res);
});

router.post('/create', function (req, res, next) {
    const task = (req.body.task || '').trim();

    if (!task) {
      return fetchTodos(req, res, {
        status: 400,
        errorMessage: 'Task descriptions cannot be blank.',
        newTaskValue: ''
      });
    }

    try {
      req.db.query('INSERT INTO todos (task) VALUES (?);', [task], (err, results) => {
        if (err) {
          console.error('Error adding todo:', err);
          return res.status(500).send('Error adding todo');
        }
        console.log('Todo added successfully:', results);
        // Redirect to the home page after adding
        res.redirect('/');
      });
    } catch (error) {
      console.error('Error adding todo:', error);
      res.status(500).send('Error adding todo');
    }
});

router.post('/update', function (req, res, next) {
    const { id } = req.body;
    const task = (req.body.task || '').trim();
    const completed = req.body.completed === '1' ? 1 : 0;

    if (!task) {
      return fetchTodos(req, res, {
        status: 400,
        errorMessage: 'Task descriptions cannot be blank.'
      });
    }

    try {
      req.db.query(
        'UPDATE todos SET task = ?, completed = ? WHERE id = ?;',
        [task, completed, id],
        (err, results) => {
          if (err) {
            console.error('Error updating todo:', err);
            return res.status(500).send('Error updating todo');
          }
          console.log('Todo updated successfully:', results);
          res.redirect('/');
        }
      );
    } catch (error) {
      console.error('Error updating todo:', error);
      res.status(500).send('Error updating todo');
    }
});

router.post('/delete', function (req, res, next) {
    const { id } = req.body;
    try {
      req.db.query('DELETE FROM todos WHERE id = ?;', [id], (err, results) => {
        if (err) {
          console.error('Error deleting todo:', err);
          return res.status(500).send('Error deleting todo');
        }
        console.log('Todo deleted successfully:', results);
        // Redirect to the home page after deletion
        res.redirect('/');
    });
    }catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).send('Error deleting todo:');
    }
});

module.exports = router;
