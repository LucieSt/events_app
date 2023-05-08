import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

export default function handler(req, res) {
  console.log(buildPath());
  const { method } = req;
  if (method === "POST") {
    const { email, eventId } = req.body;

    res.status(200).json({
      message: `You have been registered succesfully with an email: ${email}`,
    });
  }
}
