from ultralytics import YOLO
import cv2

# Load the YOLO model from the specified path
model_path = "best.pt"  # Update to your local model path
model = YOLO(model_path)

# Path to the video file
video_path = "video.mp4"  # Update to your local video path

# Function to process video frames for accident detection
def detect_accidents_in_video(video_path, conf_thres=0.4):
    # Open a connection to the video file
    cap = cv2.VideoCapture(video_path)

    # Check if the video was opened successfully
    if not cap.isOpened():
        print(f"Error: Could not open video file {video_path}")
        return

    frame_count = 0
    while cap.isOpened():
        # Capture each frame from the video
        ret, frame = cap.read()
        if not ret:
            print("End of video reached or failed to read frame.")
            break

        # Process every 2nd frame to reduce the load
        if frame_count % 2 == 0:  # Process every 2nd frame
            # Resize the frame to reduce resolution and speed up processing
            frame_resized = cv2.resize(frame, (640, 384))  # Adjust the resolution as needed

            # Run the YOLO model on the frame
            results = model(frame_resized)

            # Track if an accident is detected and annotate the frame
            accident_detected = False

            for result in results:
                for box in result.boxes:
                    # Only process detections above the confidence threshold
                    confidence = box.conf.item()
                    if confidence >= conf_thres:
                        accident_detected = True

                        # Bounding box coordinates and label
                        x1, y1, x2, y2 = map(int, box.xyxy.tolist())
                        label = f"Accident Detected: {confidence:.2f}"

                        # Draw the bounding box and label
                        cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 255), 2)
                        cv2.putText(frame, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

            # Display detection status in console (can be commented out for faster performance)
            if accident_detected:
                print("Accident detected in current frame.")
            else:
                print("No accident detected in current frame.")

            # Show the processed frame with bounding boxes and labels
            cv2.imshow("Accident Detection", frame)

            # Press 'q' to exit video early
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
        
        frame_count += 1

    # Release video capture and close window
    cap.release()
    cv2.destroyAllWindows()

# Run the function to start accident detection in video
detect_accidents_in_video(video_path)
