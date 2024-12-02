from ultralytics import YOLO
import cv2

def detect_objects(image_path, model_path, conf_thres=0.4):
    # Load the YOLOv8 model (from the .pt file)
    model = YOLO(model_path)

    # Load the image using OpenCV
    image = cv2.imread(image_path)

    # Check if the image is loaded correctly
    if image is None:
        print(f"Error: Unable to load image at {image_path}")
        return

    # Perform inference (object detection) using the YOLO model
    results = model(image)

    # Get the class IDs, confidences, and bounding boxes from the results
    class_ids = []
    confidences = []
    boxes = []

    # Parse the results for detections
    for result in results:
        for box in result.boxes:
            class_ids.append(box.cls.item())  # Class ID
            confidences.append(box.conf.item())  # Confidence score
            boxes.append(box.xyxy.tolist())  # Bounding box coordinates (x1, y1, x2, y2)

    # Return the detected class IDs, confidences, and bounding boxes
    return class_ids, confidences, boxes


# Set the path to your YOLO model and the image for detection
image_path = "/content/drive/MyDrive/Accident Detection model/runs/detect/predict2/testing1.jpg"
model_path = "/content/drive/MyDrive/Accident Detection model/runs/detect/train/weights/best.pt"

# Detect objects in the image
class_ids, confidences, boxes = detect_objects(image_path, model_path)

# Check if any objects were detected
if len(class_ids) > 0:
    print("Accident detected!")
else:
    print("No accidents detected.")
