import { s3 } from "../utility/upload_image.js";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const filesController = {
  uploadImage: async (req, res) => {
    const imageBuffer = req.body;

    // Validasi ukuran
    if (imageBuffer.length > 5 * 1024 * 1024) {
      // 5MB dalam bytes
      return res.status(400).json({
        error: "File too large. Maximum size is 5MB",
      });
    }

    try {
      const genFileName = uuidv4();
      // generate url
      const signedUrl = await getSignedUrl(
        s3,
        new PutObjectCommand({
          Bucket: "schoolpay",
          Key: genFileName + ".jpeg",
          ContentType: "jpeg",
        })
      );

      // eksekusi upload image ke cloud
      const response = axios.put(signedUrl, req.body, {
        headers: {
          "Content-Type": "image/jpeg",
        },
      });

      res
        .status(200)
        .json({ message: "berhasil unggah gambar!", fileName: genFileName });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

export default filesController;
