
import {CodeComparison} from "@/components/ui/code-comparison"

export function Code1() {
  const code =
`import cv2
import dlib 

detector = dlib.get_frontal_face_detector()

img = cv2.imread("path/image.png")
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

faces = detector(gray)
for face in faces:
  x, y, w, h = face.left(), face.top(), face.width(), face.height()
  cv2.rectangle(img, (x, y), (x + w, y + h), (238, 111, 0), 2)

while True:
  cv2.imshow("Face", img)
  key = cv2.waitKey(1)
  if key == ord('q'):
    break

cv2.destroyAllWindows()`

  return (
    <CodeComparison 
    code={code}
    language="python" 
    filename="main.py"
    lightTheme="github-light"
    darkTheme="github-dark"
    />
  )
}

export function Code2(){
  const code =
`import cv2
import matplotlib.pyplot as plt
from skimage.feature import hog

# โหลดภาพ
image_path = "images/me.png"  # ใส่ path ของภาพที่ต้องการ
image = cv2.imread(image_path)
image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
image_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# แสดงภาพต้นฉบับและภาพขาวดำ
plt.figure(figsize=(12, 6))
plt.subplot(1, 2, 1)
plt.imshow(image_rgb)
plt.title("Original Image")
plt.axis("off")

plt.subplot(1, 2, 2)
plt.imshow(image_gray, cmap="gray")
plt.title("Grayscale Image")
plt.axis("off")
plt.show()

# การแบ่งภาพเป็นเซลล์และการคำนวณ HOG
cell_size = (8, 8)  # ขนาดของเซลล์
block_size = (2, 2)  # ขนาดของบล็อก (กี่เซลล์ต่อบล็อก)
nbins = 9  # จำนวน bins สำหรับทิศทางกราดิเอนต์

# คำนวณ HOG features
hog_features, hog_image = hog(
    image_gray,
    orientations=nbins,
    pixels_per_cell=cell_size,
    cells_per_block=block_size,
    block_norm="L2-Hys",
    visualize=True,
    feature_vector=True,
)

# แสดงภาพ HOG
plt.figure(figsize=(12, 6))
plt.subplot(1, 2, 1)
plt.imshow(image_gray)
plt.title("Image (for comparison)")
plt.axis("off")

plt.subplot(1, 2, 2)
plt.imshow(hog_image)
plt.title("HOG Image")
plt.axis("off")
plt.show()

# แสดงเวกเตอร์คุณลักษณะ (Feature Vector)
plt.figure(figsize=(12, 4))
plt.plot(hog_features, color='blue')
plt.title("Feature Vector from HOG")
plt.xlabel("Feature Index")
plt.ylabel("Value")
plt.show()
`

  return (
    <CodeComparison 
    code={code}
    language="python" 
    filename="main.py"
    lightTheme="github-light"
    darkTheme="github-dark"
    />
  )
}

export function Code3() {
  const code =
`import cv2
import dlib
import matplotlib.pyplot as plt

# โหลดโมเดลตรวจจับใบหน้าและจุด landmark
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor("models/68_face_landmarks.dat") #shape_predictor_68_face_landmarks.dat

# อ่านภาพ
image_path = "Image.jpg"
img = cv2.imread(image_path)
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # แปลงภาพเป็น RGB เพื่อการแสดงผล
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)    # แปลงภาพเป็นขาวดำ (Grayscale)

# ขั้นตอนที่ 1: แสดงภาพต้นฉบับและภาพขาวดำ
plt.figure(figsize=(12, 6))
plt.subplot(1, 2, 1)
plt.imshow(img_rgb)
plt.title("Original Image")
plt.axis("off")

plt.subplot(1, 2, 2)
plt.imshow(gray, cmap='gray')
plt.title("Grayscale Image")
plt.axis("off")
plt.show()

# ตรวจจับใบหน้าในภาพ
faces = detector(gray)

# ขั้นตอนที่ 2: วาดกรอบรอบใบหน้าที่ตรวจจับได้
img_faces = img_rgb.copy()
for face in faces:
    x, y, w, h = (face.left(), face.top(), face.width(), face.height())
    cv2.rectangle(img_faces, (x, y), (x + w, y + h), (255, 0, 0), 2)  # วาดกรอบสีน้ำเงินรอบใบหน้า

plt.figure(figsize=(8, 6))
plt.imshow(img_faces)
plt.title("Detected Faces with Bounding Boxes")
plt.axis("off")
plt.show()

# ขั้นตอนที่ 3: ตรวจจับจุด landmark และวาดบนภาพ
for face in faces:
    # ตรวจจับจุด landmark บนใบหน้า
    landmarks = predictor(gray, face)
    
    # วาดจุด landmark (68 จุด)
    for n in range(68):
        x = landmarks.part(n).x
        y = landmarks.part(n).y
        cv2.circle(img_rgb, (x, y), 2, (0, 255, 0), -1)  # วาดจุดสีเขียวบนจุด landmark

# แสดงภาพพร้อมจุด landmark
plt.figure(figsize=(8, 6))
plt.imshow(img_rgb)
plt.title("Face Landmarks (68 Points)")
plt.axis("off")
plt.show()`

  return (
    <CodeComparison 
    code={code}
    language="python" 
    filename="main.py"
    lightTheme="github-light"
    darkTheme="github-dark"
    />
  )
}

export function Code4() {
  const code =
  `import cv2
import dlib
import numpy as np
import matplotlib.pyplot as plt

# โหลดโมเดลตรวจจับใบหน้าและจุด landmark
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor("models/68_face_landmarks.dat") #shape_predictor_68_face_landmarks.dat
face_rec_model = dlib.face_recognition_model_v1("models/face_model_v1.dat") #dlib_face_recognition_resnet_model_v1.dat


def readVideoEncoding(video_path):
    encodings = []  # For storing encoding of each face found in frames
    print(f"Processing video: {video_path} ...")
    # Open the video file
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Could not open {video_path}. Skipping.")
        return None

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        # Convert frame to grayscale
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = detector(gray)
        # Process each detected face
        for face in faces:
            landmarks = predictor(gray, face)
            # Get the encoding
            encoding = np.array(face_rec_model.compute_face_descriptor(frame, landmarks))
            print(encoding)
            encodings.append(encoding)
    
    # Release the video capture object
    cap.release()
    # Calculate the average encoding for the person in this video
    if encodings:
        avg_encoding = np.mean(encodings, axis=0)
        print("Avg_encoding")
        print(f"{avg_encoding}\n")
        return avg_encoding
    else:
        print(f"No face detected in {video_path}.")
        return None
    
def readImg_encoding(image_path):
    # อ่านภาพ
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # ตรวจจับใบหน้าในภาพ
    faces = detector(gray)

    if len(faces) == 0:
        print(f"No face detected in {image_path}")
        return None, img

    for face in faces:
        # ตรวจจับจุด landmark บนใบหน้า
        landmarks = predictor(gray, face)

        # วาดจุด landmark บนใบหน้า (68 จุด)
        for n in range(68):
            x = landmarks.part(n).x
            y = landmarks.part(n).y
            cv2.circle(img, (x, y), 2, (0, 255, 0), -1)

        # สร้าง Face Encoding โดยใช้เวกเตอร์ 128 ค่า
        encoding = np.array(face_rec_model.compute_face_descriptor(img, landmarks))
        return encoding, cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # แปลงเป็น RGB สำหรับการแสดงผลด้วย plt

# กำหนดพาธสำหรับภาพสองใบหน้า
face_A_path = "video/b1.mp4"  # ใบหน้า A
face_B_path = "images/193674.jpg"  # ใบหน้า B

# รับ Face Encoding และภาพพร้อม landmarks สำหรับทั้งสองใบหน้า
encoding_A = readVideoEncoding(face_A_path)
encoding_B, img_B = readImg_encoding(face_B_path)

if encoding_B is not None:
    # เปรียบเทียบ Face Encoding
    if encoding_A.shape != encoding_B.shape:
       print(f"Shape mismatch: karina has shape {encoding_A.shape}, while encoding_B has shape {encoding_B.shape}")
    else:
      distance = np.linalg.norm(encoding_A - encoding_B)
      print(f"Distance: {distance}")
      threshold = 0.45  # ระยะทางที่ตั้งไว้เพื่อพิจารณาว่าใบหน้าตรงกัน

    # คำนวณเปอร์เซ็นต์ความคล้ายคลึง
    similarity_percentage = max(0, (1 - distance / threshold) * 100)

    if distance < threshold:
        match_result = "Faces match!"
    else:
        match_result = "Faces do not match."

    # แสดงภาพและข้อความผลลัพธ์
    plt.figure(figsize=(12, 6))


    # แสดงภาพใบหน้า B
    plt.subplot(1, 2, 2)
    plt.imshow(img_B)
    plt.title("Face B with Landmarks")
    plt.axis("off")

    # แสดงผลลัพธ์
    plt.suptitle(
        f"{match_result}\nDistance: {distance:.4f} | Threshold: {threshold}\nSimilarity: {similarity_percentage:.2f}%",
        fontsize=14, color='blue'
    )
    plt.show()
else:
    print("Face encoding could not be generated for one or both images.")`

  return (
    <CodeComparison 
    code={code}
    language="python" 
    filename="main.py"
    lightTheme="github-light"
    darkTheme="github-dark"
    />
  )
}