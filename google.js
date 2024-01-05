import vision from "@google-cloud/vision";
// More vision docs in https://cloud.google.com/vision/docs/drag-and-drop

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: "./APIKey.json",
});

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const fileName = "./res1_suspended.png";
// 'Local image file, e.g. /path/to/image.png';

// Performs text detection on the local file
const [result] = await client.textDetection(fileName);
// const detections = result;
console.log(result);
// detections.forEach((text) => console.log(text));
