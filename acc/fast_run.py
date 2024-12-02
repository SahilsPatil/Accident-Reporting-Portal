import cv2
from ultralytics import YOLO

# Load the YOLO model
model_path = "best.pt"  # Update with the correct path to your model
model = YOLO(model_path)

# Path to the video file
video_path = "video.mp4"  # Update with the correct video path

def detect_accidents_in_video(video_path, conf_thres=0.4):
    # Open a connection to the video file
    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        print(f"Error: Could not open video file {video_path}")
        return

    while cap.isOpened():
        # Capture each frame
        ret, frame = cap.read()
        if not ret:
            print("End of video reached or failed to read frame.")
            break

        # Run the model on the current frame
        results = model(frame)

        # Annotate and display the frame
        for result in results:
            for box in result.boxes:
                confidence = box.conf.item()
                if confidence >= conf_thres:
                    # Extract the coordinates correctly
                    coords = box.xyxy.tolist()[0]  # Get the first (and only) list inside the returned list
                    x1, y1, x2, y2 = map(int, coords)  # Convert the coordinates to integers
                    label = f"Accident Detected: {confidence:.2f}"
                    
                    # Draw bounding box and label
                    cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 255), 2)
                    cv2.putText(frame, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)

        # Display the frame with bounding boxes and labels
        cv2.imshow("Accident Detection", frame)

        # Exit on 'q' key
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release video capture and close window
    cap.release()
    cv2.destroyAllWindows()

# Run the detection on the video
detect_accidents_in_video(video_path)
