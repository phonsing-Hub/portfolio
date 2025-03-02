export const metadata = {
  title: "Face Recognition & Dlib OpenCV",
  description: "เทคโนโลยีการรู้จำใบหน้า (Face Recognition)",
};

export default function FaceRecognitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose prose-sm prose-neutral dark:prose-invert max-w-3xl mx-auto container">
      {children}
    </article>
  );
}
