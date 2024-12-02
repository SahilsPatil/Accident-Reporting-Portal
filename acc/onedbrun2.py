# Import necessary libraries
from ultralytics import YOLO
import cv2
import concurrent.futures
import queue

# Load the YOLO model from the specified path
model_path = "best.pt"  # Update to your local model path
model = YOLO(model_path)

# Queue for holding frames
frame_queue = queue.Queue(maxsize=10)

# Function to read frames from webcam in a separate thread
def read_frames():
    cap = cv2.VideoCapture(0)  # Use 0 for default webcam, or replace with the appropriate camera index if you have multiple cameras
    if not cap.isOpened():
        print("Error: Could not open webcam")
        return
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        frame_queue.put(frame)  # Add frame to the queue

    cap.release()
    frame_queue.put(None)  # Signal that video reading is done

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

                    # Draw the bounding box and label
                    cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 255), 2)
                    cv2.putText(frame, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

        # Display detection status
        status_text = "Accident detected!" if accident_detected else "No accident detected."
        color = (0, 0, 255) if accident_detected else (0, 255, 0)
        cv2.putText(frame, status_text, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, color, 2)

        # Show the frame
        cv2.imshow("Live Accident Detection", frame)

        # Press 'q' to exit video early
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cv2.destroyAllWindows()

# Main function to start threads
def main():
    with concurrent.futures.ThreadPoolExecutor() as executor:
        # Start the read_frames function in a separate thread
        executor.submit(read_frames)
        # Process frames in the main thread
        process_frames()

# Run the main function to start live accident detection with the webcam
main()