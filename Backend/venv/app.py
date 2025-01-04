# app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data - In a real application, this would come from a database
products = [
    {"id": 1, "name": "Product 1", "description": "Description 1"},
    {"id": 2, "name": "Product 2", "description": "Description 2"},
    {"id": 3, "name": "Product 3", "description": "Description 3"},
]

solutions = [
    {"id": 1, "name": "Solution 1", "description": "Description 1"},
    {"id": 2, "name": "Solution 2", "description": "Description 2"},
    {"id": 3, "name": "Solution 3", "description": "Description 3"},
]

reviews = [
    {
        "id": 1,
        "name": "John Doe",
        "role": "CEO",
        "company": "Tech Corp",
        "text": "Amazing service and support!"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "role": "CTO",
        "company": "Innovation Inc",
        "text": "Transformed our business completely."
    },
]

@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/api/solutions', methods=['GET'])
def get_solutions():
    return jsonify(solutions)

@app.route('/api/reviews', methods=['GET'])
def get_reviews():
    return jsonify(reviews)

@app.route('/api/updates', methods=['GET'])
def get_updates():
    updates = [
        {
            "id": 1,
            "title": "New Product Launch",
            "description": "Exciting new product launch coming soon!",
            "date": "2024-01-01"
        },
        {
            "id": 2,
            "title": "Company Milestone",
            "description": "We've reached a significant milestone!",
            "date": "2024-01-15"
        }
    ]
    return jsonify(updates)

if __name__ == '__main__':
    app.run(debug=True)