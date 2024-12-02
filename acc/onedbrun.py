# from ultralytics import YOLO
# import cv2
# import concurrent.futures
# import queue
# from pymongo import MongoClient
# from datetime import datetime

# # Load the YOLO model from the specified path
# model_path = "best.pt"  # Update to your local model path
# model = YOLO(model_path)

# # Path to the video file
# video_path = "video2.mp4"  # Update to your local video path

# # Queue for holding frames
# frame_queue = queue.Queue(maxsize=10)

# # MongoDB connection setup
# client = MongoClient("mongodb://localhost:27017/")  # Update with your MongoDB URI
# db = client["ARS"]
# accident_collection = db["Accidents"]

# # Flag to track if an accident has been saved in this run
# accident_saved = False

# # Function to read frames from video in a separate thread
# def read_frames(video_path):
#     cap = cv2.VideoCapture(video_path)
#     if not cap.isOpened():
#         print(f"Error: Could not open video file {video_path}")
#         return
    
#     while cap.isOpened():
#         ret, frame = cap.read()
#         if not ret:
#             break
#         frame_queue.put(frame)  # Add frame to the queue

#     cap.release()
#     frame_queue.put(None)  # Signal that video reading is done

# # Function to save accident data to MongoDB
# def save_accident_data(coords, confidence, vehicle_type, accident_type, severity, location):
#     global accident_saved
#     # Check if an accident has already been saved in this run
#     if accident_saved:
#         return  # Skip saving to prevent duplicates in the current run
    
#     accident_data = {
#         "time": datetime.now(),
#         "spot": "Camera - 1 Railway Station Road, Aurangabad",  # Default camera spot
#         "severity": severity,
#         "type": accident_type,
#         "vehicle": vehicle_type,
#         "location": location,
#         "coordinates": coords,
#         "confidence": confidence,
#         "status": "Open"
#     }
#     accident_collection.insert_one(accident_data)
#     print("Accident data saved:", accident_data)

#     # Set the flag to prevent further saves in this run
#     accident_saved = True

# # Function to process frames for accident detection
# def process_frames(conf_thres=0.4):
#     while True:
#         frame = frame_queue.get()
#         if frame is None:
#             break

#         # Run the YOLO model on the frame
#         results = model(frame)
#         accident_detected = False

#         for result in results:
#             for box in result.boxes:
#                 confidence = box.conf.item()
#                 if confidence >= conf_thres:
#                     accident_detected = True

#                     # Bounding box coordinates and label
#                     coords = box.xyxy[0].tolist()
#                     x1, y1, x2, y2 = map(int, coords)
#                     label = f"Accident Detected: {confidence:.2f}"
                    
#                     # Mock data for accident type, severity, vehicle, and location
#                     accident_type = "Vehicle Collision"
#                     vehicle_type = "Car"  # Example type; update based on detection model
#                     severity = "High"  # Example severity level
#                     location = {"lat": 19.8762, "lng": 75.3433}  # Example coordinates
                    
#                     # Draw the bounding box and label
#                     cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 255), 2)
#                     cv2.putText(frame, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

#                     # Save accident data to MongoDB
#                     save_accident_data(coords, confidence, vehicle_type, accident_type, severity, location)

#         # Show the frame
#         cv2.imshow("Accident Detection", frame)

#         # Press 'q' to exit video early
#         if cv2.waitKey(1) & 0xFF == ord('q'):
#             break

#     cv2.destroyAllWindows()

# # Main function to start threads
# def main():
#     global accident_saved
#     accident_saved = False  # Reset the flag at the start of each run
#     with concurrent.futures.ThreadPoolExecutor() as executor:
#         # Start the read_frames function in a separate thread
#         executor.submit(read_frames, video_path)
#         # Process frames in the main thread
#         process_frames()

# # Run the main function to start accident detection in video
# main()

from ultralytics import YOLO
import cv2
import concurrent.futures
import queue
from pymongo import MongoClient
from datetime import datetime

# Load the YOLO model from the specified path
model_path = "best.pt"  # Update to your local model path
model = YOLO(model_path)

# Path to the video file
video_path = "video.mp4"  # Update to your local video path

# Queue for holding frames
frame_queue = queue.Queue(maxsize=10)

# MongoDB connection setup
client = MongoClient("mongodb://localhost:27017/")  # Update with your MongoDB URI
db = client["ARS"]
accident_collection = db["Accidents"]
summary_collection = db["AccidentSummary"]  # New collection for graph data

# Flag to track if an accident has been saved in this run
accident_saved = False

# Function to read frames from video in a separate thread
def read_frames(video_path):
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error: Could not open video file {video_path}")
        return
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        frame_queue.put(frame)  # Add frame to the queue

    cap.release()
    frame_queue.put(None)  # Signal that video reading is done


# Function to save accident data to Accident collection and update summary in AccidentSummary collection
def save_accident_data(coords, confidence, vehicle_type, accident_type, severity, location):
    global accident_saved
    if accident_saved:
        return  # Skip if already saved in this run
    
    # Set current date only (exclude time) for date-based aggregation
    current_date = datetime.now().strftime('%Y-%m-%d')
    
    # Insert data into the main Accidents collection
    accident_data = {
        "time": datetime.now(),
        "spot": "Camera - 1 Railway Station Road, Aurangabad",
        "severity": severity,
        "type": accident_type,
        "vehicle": vehicle_type,
        "location": location,
        "coordinates": coords,
        "confidence": confidence,
        "status": "Open"
    }
    accident_collection.insert_one(accident_data)
    print("Accident data saved:", accident_data)


    # Update or insert in the summary collection
    existing_summary = summary_collection.find_one({
        "date": current_date,
        "location": "Camera - 1 Railway Station Road, Aurangabad"
    })

    if existing_summary:
        # Increment count if entry exists
        summary_collection.update_one(
            {"_id": existing_summary["_id"]},
            {"$inc": {"count": 1}}
        )
        print(f"Updated accident summary count for {location} on {current_date}")
    else:
        # Insert new summary record if no entry exists
        summary_data = {
            "date": current_date,
            "location": location,
            "count": 1  # Start count at 1 for new entry
        }
        summary_collection.insert_one(summary_data)
        print("New accident summary data saved:", summary_data)

    # Set flag to prevent further saves in this run
    accident_saved = True

# Function to process frames for accident detection
def process_frames(conf_thres=0.4):
    while True:
        frame = frame_queue.get()
        if frame is None:
            break

        # Run the YOLO model on the frame
        results = model(frame)
        accident_detected = False

        for result in results:
            for box in result.boxes:
                confidence = box.conf.item()
                if confidence >= conf_thres:
                    accident_detected = True

                    # Bounding box coordinates and label
                    coords = box.xyxy[0].tolist()
                    x1, y1, x2, y2 = map(int, coords)
                    label = f"Accident Detected: {confidence:.2f}"
                    
                    # Mock data for accident type, severity, vehicle, and location
                    accident_type = "Vehicle Collision"
                    vehicle_type = "Car"  # Example type; update based on detection model
                    severity = "High"  # Example severity level
                    location = {"lat": 19.8762, "lng": 75.3433}  # Example coordinates
                    
                    # Draw the bounding box and label
                    cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 255), 2)
                    cv2.putText(frame, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

                    # Save accident data to MongoDB
                    save_accident_data(coords, confidence, vehicle_type, accident_type, severity, location)

        # Show the frame
        cv2.imshow("Accident Detection", frame)

        # Press 'q' to exit video early
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cv2.destroyAllWindows()

# Main function to start threads
def main():
    global accident_saved
    accident_saved = False  # Reset the flag at the start of each run
    with concurrent.futures.ThreadPoolExecutor() as executor:
        # Start the read_frames function in a separate thread
        executor.submit(read_frames, video_path)
        # Process frames in the main thread
        process_frames()

# Run the main function to start accident detection in video
main()