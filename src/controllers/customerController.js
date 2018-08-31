const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM estacionamientos', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO estacionamientos set ?', data, (err, customer) => {
      console.log(customer)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id_est } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM estacionamientos WHERE id_est = ?", [id_est], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id_est } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE estacionamientos set ? where id_est = ?', [newCustomer, id_est], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id_est } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM estacionamientos WHERE id_est = ?', [id_est], (err, rows) => {
      res.redirect('/');
    });
  });
};
controller.buscar = (req, res) => {
  req.getConnection((err, conn) => {
    const { query } = req.params;
    conn.query('SELECT * FROM estacionamientos where id_est like"'+ query +'%";', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('buscar', {
        data: customers
     });
    });
  });
};


module.exports = controller;
