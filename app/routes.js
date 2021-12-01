module.exports = function(app, passport, db, ObjectId) {


// GET Routes ===============================================================

  // HOME Page=========================
  app.get('/', function(req, res) {
      res.render('index.ejs');
  });

  // PROFILE Page=========================
  app.get('/profile', isLoggedIn, function(req, res) {
      db.collection('content').find({postedBy: req.user._id}).toArray((err, result) => { //only find posts posted by the signed in user req.user._id(logged in users ID)
        if (err) return console.log(err)
        res.render('profile.ejs', {
          user : req.user,
          content: result
        })
      })
  });

  //FEED page=========================
  app.get('/feed', isLoggedIn, function(req, res) {  //isLoggedIn middleware removed to make feed page public
    db.collection('posts').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('feed.ejs', {
        posts: result
      })
    })
  });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// POST routes ===============================================================


// post route used to bookmark content
app.post('/content', (req, res) => { 
  let user = req.user._id  //saves the logged in user to a variable
  //console.log(user)
  db.collection('content').save({name: req.body.name, address: req.body.address, postedBy: user}, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
  
  }) 
})


// PUT Routes ===============================================================

  app.put('/messages', (req, res) => {
    let postId = ObjectId(req.body.postId)
    db.collection('posts')
    .findOneAndUpdate({
      _id: postId}, {
      $set: {
        heartsUp: req.body.likes + 1
      }
    }, {
      sort: {_id: -1},
      upsert: true
    }, (err, result) => {
      if (err) return res.send(err)
      res.send(result)
    })
  })

// DELETE Routes ===============================================================

    app.delete('/messages', (req, res) => {
      db.collection('content').findOneAndDelete({name: req.body.name, address: req.body.address}, (err, result) => {
        if (err) return res.send(500, err)
        res.send('Message deleted!')
      })
    })

    
// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/feed', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/feed', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
