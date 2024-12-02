from ultralytics import YOLO
import cv2
import concurrent.futures
import queue
from pymongo import MongoClient
from datetime import datetime
import time

# Load the YOLO model from the specified path
model_path = "best.pt"  # Update to your local model path
model = YOLO(model_path)

# Path to the video file
video_path = "video2.mp4"  # Update to your local video path

# Queue for holding frames
frame_queue = queue.Queue(maxsize=10)

# MongoDB connection setup
client = MongoClient("mongodb://localhost:27017")  # Update with your MongoDB URI
db = client["ARS"]
accident_collection = db["Accidents"]

# Threshold time to avoid duplicate detection (in seconds)
DUPLICATE_TIME_THRESHOLD = 10  # Adjust as needed
last_detection_time = 0

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

# Function to save accident data to MongoDB
def save_accident_data(coords, confidence, vehicle_type, accident_type, severity, location):
    global last_detection_time
    
    current_time = time.time()
    # Check if enough time has passed since the last detection to avoid duplicates
    if current_time - last_detection_time < DUPLICATE_TIME_THRESHOLD:
        return  # Skip saving to avoid duplicate
    
    last_detection_time = current_time  # Update last detection time
    
    accident_data = {
        "time": datetime.now(),
        "spot": "Camera No - 1",  # Default camera spot
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
                    location = {"lat": 19.8762, "lon": 75.3433}  # Example coordinates
                    
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
    with concurrent.futures.ThreadPoolExecutor() as executor:
        # Start the read_frames function in a separate thread
        executor.submit(read_frames, video_path)
        # Process frames in the main thread
        process_frames()

# Run the main function to start accident detection in video
main()
