from pymongo import MongoClient

# Replace the following with your MongoDB Atlas connection string
uri = "mongodb+srv://testingskills07:<ev3H3ALsndlSXLhg>@accidentdetection.bdrak.mongodb.net/?retryWrites=true&w=majority&appName=Accidentdetection"

# Create a MongoDB client
client = MongoClient(uri)

# Access the database and collection
db = client['accidentdetection']
collection = db['users']

# Example operation
new_user = {
    "name": "Alice Smith",
    "age": 25,
    "city": "San Francisco"
}

# Insert the document
result = collection.insert_one(new_user)
print("Inserted document ID:", result.inserted_id)

# Find the document
user = collection.find_one({"name": "Alice Smith"})
print("Found user:", user)

client.close()