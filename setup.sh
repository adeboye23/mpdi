#!/bin/bash

echo "🚀 Setting up MPDI website with REAL content..."
echo ""

# Run database setup
node setup-database.js

echo ""
echo "✅ Setup complete!"
echo ""
echo "📦 Next steps:"
echo "1. npm install (if you haven't already)"
echo "2. npm run dev"
echo "3. Visit localhost:3000"
echo ""
echo "🎉 Your website now has 5 real blog posts and 6 real events!"
