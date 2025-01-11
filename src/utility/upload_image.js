import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  region: "ap-southeast-3", // Asia Pacific (Hanoi) RegionID
  endpoint: "https://mos.ap-southeast-3.sufybkt.com", // Asia Pacific (Hanoi) Endpoint
  credentials: {
    accessKeyId: "q4GKjPXa_VRF2UBBqFydgblwnP9gIc-BFhYM91PZ",
    secretAccessKey: "_ojYnD2JcO2W8A9mITXRAg0zYORKMxqpTey170Lz",
  },
});

// upload file
// getSignedUrl(
//   s3,
//   new PutObjectCommand({
//     Bucket: "schoolpay",
//     Key: "asd2.jpeg",
//     ContentType: "jpeg",
//   })
// )
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
