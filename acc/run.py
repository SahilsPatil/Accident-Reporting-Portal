# Import necessary libraries
from ultralytics import YOLO
import cv2

# Load the YOLO model from the specified path
model_path = "best.pt"  # Update to your local model path
model = YOLO(model_path)

# Path to the video file
video_path = "video2.mp4"  # Update to your local video path

# Function to process video frames for accident detection
def detect_accidents_in_video(video_path, conf_thres=0.4):
    # Open a connection to the video file
    cap = cv2.VideoCapture(video_path)

    # Check if the video was opened successfully
    if not cap.isOpened():
        print(f"Error: Could not open video file {video_path}")
        return

    while cap.isOpened():
        # Capture each frame from the video
        ret, frame = cap.read()
        if not ret:
            print("End of video reached or failed to read frame.")
            break

        # Run the YOLO model on the frame
        results = model(frame)

        # Track if an accident is detected and annotate the frame
        accident_detected = False

        for result in results:
            for box in result.boxes:
                # Only process detections above the confidence threshold
                confidence = box.conf.item()
                if confidence >= conf_thres:
                    accident_detected = True

                    # Bounding box coordinates and label
                    coords = box.xyxy[0].tolist()  # Extract the first element of `box.xyxy`
                    x1, y1, x2, y2 = map(int, coords)  # Convert each coordinate to an integer
                    label = f"Accident Detected: {confidence:.2f}"

                    # Draw the bounding box and label
                    cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 255), 2)
                    cv2.putText(frame, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

        # Display detection status in console
        if accident_detected:
            print("Accident detected in current frame.")
        else:
            print("No accident detected in current frame.")

        # Show the processed frame with bounding boxes and labels
        cv2.imshow("Accident Detection", frame)

        # Press 'q' to exit video early
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release video capture and close window
    cap.release()
    cv2.destroyAllWindows()

# Run the function to start accident detection in video
detect_accidents_in_video(video_path)
