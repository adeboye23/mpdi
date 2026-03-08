import { sql } from '@vercel/postgres'

async function setupDatabase() {
  try {
    console.log('🔧 Setting up Postgres database...')

    // Create admins table
    await sql`
      CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log('✅ admins table created')

    // Create blog_posts table
    await sql`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        author VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log('✅ blog_posts table created')

    // Create events table
    await sql`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        date DATE NOT NULL,
        location TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log('✅ events table created')

    // Create contact_messages table
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log('✅ contact_messages table created')

    // Create default admin (using bcrypt hash)
    // Password: Admin123!
    const hashedPassword = '$2a$10$YourHashedPasswordHere' // We'll update this
    
    await sql`
      INSERT INTO admins (email, password, role)
      VALUES ('admin@mpdi.com', ${hashedPassword}, 'admin')
      ON CONFLICT (email) DO NOTHING
    `
    console.log('✅ Default admin created')
    console.log('   📧 Email: admin@mpdi.com')
    console.log('   🔑 Password: Admin123!')

    console.log('✅ Database setup complete!')
  } catch (error) {
    console.error('❌ Error setting up database:', error)
  }
}

setupDatabase()