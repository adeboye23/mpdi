const sqlite3 = require('sqlite3').verbose()
const fs = require('fs')

// Create database
const db = new sqlite3.Database('./mpdi.db', (err) => {
  if (err) {
    console.error('Error opening database:', err)
  } else {
    console.log('✅ Connected to SQLite database')
  }
})

// Create blog_posts table
db.run(`
  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) console.error('Error creating blog_posts table:', err)
  else console.log('✅ blog_posts table created')
})

// Create events table
db.run(`
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    location TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) console.error('Error creating events table:', err)
  else console.log('✅ events table created')
})

// Create contact_messages table
db.run(`
  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) console.error('Error creating contact_messages table:', err)
  else console.log('✅ contact_messages table created')
})

// Create admins table
db.run(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT DEFAULT 'admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) {
    console.error('Error creating admins table:', err)
  } else {
    console.log('✅ admins table created')
    
    // Create default admin account
    const bcrypt = require('bcryptjs')
    const defaultEmail = 'admin@mpdi.com'
    const defaultPassword = bcrypt.hashSync('Admin123!', 10)
    
    db.run(
      'INSERT OR IGNORE INTO admins (email, password, role) VALUES (?, ?, ?)',
      [defaultEmail, defaultPassword, 'admin'],
      (err) => {
        if (err) {
          console.error('Error creating default admin:', err)
        } else {
          console.log('✅ Default admin created')
          console.log('   📧 Email: admin@mpdi.com')
          console.log('   🔑 Password: Admin123!')
          console.log('   ⚠️  CHANGE THIS PASSWORD AFTER FIRST LOGIN!')
        }
        
        // Close database after everything is done
        db.close((err) => {
          if (err) {
            console.error('Error closing database:', err)
          } else {
            console.log('✅ Database setup complete')
          }
        })
      }
    )
  }
})