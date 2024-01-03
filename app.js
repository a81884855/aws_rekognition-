import AWS from "aws-sdk";

const bucket = "turo.ai.screenshots"; // the bucketname without s3://
const photo = "res1_suspended.png"; // the name of file

const config = new AWS.Config({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
AWS.config.update({ region: "us-west-1" });
const client = new AWS.Rekognition();
const params = {
  Image: {
    S3Object: {
      Bucket: bucket,
      Name: photo,
    },
  },
};
client.detectText(params, function (err, response) {
  if (err) {
    console.log(err, err.stack); // handle error if an error occurred
  } else {
    // console.log(`Detected Text for: ${photo}`);
    // console.log(response);
    const allText = response.TextDetections.reduce(
      (text, curr) => (text += curr.DetectedText + " "),
      ""
    );
    console.log(allText);
  }
});
