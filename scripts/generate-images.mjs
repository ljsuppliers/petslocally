import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

// Load API key from .env
const envPath = path.join(process.cwd(), ".env");
const envContent = fs.readFileSync(envPath, "utf8");
const apiKey = envContent.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();

if (!apiKey) {
  console.error("GEMINI_API_KEY not found in .env");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

const images = [
  {
    filename: "london.jpg",
    prompt: "Create a warm, friendly photograph of a golden retriever sitting in a London park with autumn trees, Big Ben visible in the distant background. Professional pet photography, natural daylight, cozy atmosphere. High quality, photorealistic."
  },
  {
    filename: "manchester.jpg", 
    prompt: "Create a cheerful photograph of a border collie playing fetch in a green park with modern city buildings in the background. Warm inviting colors, natural outdoor lighting, community feel. High quality, photorealistic."
  },
  {
    filename: "birmingham.jpg",
    prompt: "Create a heartwarming photograph of a friendly chocolate labrador walking along a scenic canal towpath with brick warehouse buildings and narrowboats. Golden hour lighting, warm tones. High quality, photorealistic."
  },
  {
    filename: "edinburgh.jpg",
    prompt: "Create a beautiful photograph of a Scottish terrier on a cobblestone street with historic stone buildings and a castle on a hill in the background. Atmospheric Scottish lighting with warm undertones. High quality, photorealistic."
  },
  {
    filename: "bristol.jpg",
    prompt: "Create a vibrant photograph of a fluffy cockapoo on a scenic viewpoint overlooking a suspension bridge and colorful Georgian houses. Bright cheerful atmosphere, warm colors. High quality, photorealistic."
  },
  {
    filename: "how-to-choose-a-vet.jpg",
    prompt: "Create a reassuring photograph of a friendly veterinarian in a white coat gently examining a calm orange tabby cat on an examination table. Warm professional lighting, modern clinic setting, conveying trust and care. High quality, photorealistic."
  },
  {
    filename: "dog-grooming-guide.jpg",
    prompt: "Create a professional photograph of a happy white poodle being groomed by a skilled groomer with scissors, grooming table and tools visible. Dog looks relaxed and pampered. Bright clean salon setting. High quality, photorealistic."
  },
  {
    filename: "first-time-pet-owner-tips.jpg",
    prompt: "Create a joyful photograph of a smiling person sitting on a couch cuddling a golden retriever puppy, with pet supplies like a food bowl, toys and dog bed visible nearby. Warm welcoming home environment. High quality, photorealistic."
  },
  {
    filename: "choosing-the-right-pet-food.jpg",
    prompt: "Create a clean appetizing photograph of premium dog food kibble in a stylish stainless steel bowl, with fresh ingredients like chicken pieces, carrots and brown rice artistically arranged nearby on a wooden table. Natural lighting. High quality, photorealistic."
  }
];

const outputDir = path.join(process.cwd(), "public/images/articles");

async function generateImage(image) {
  const outputPath = path.join(outputDir, image.filename);
  
  // Check if image already exists
  if (fs.existsSync(outputPath)) {
    console.log(`Skipping ${image.filename} - already exists`);
    return;
  }

  console.log(`Generating ${image.filename}...`);
  
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
      generationConfig: {
        responseModalities: ["image", "text"],
      }
    });

    const response = await model.generateContent(image.prompt);
    
    // Look for image parts in the response
    for (const part of response.response.candidates[0].content.parts) {
      if (part.inlineData && part.inlineData.mimeType.startsWith("image/")) {
        const buffer = Buffer.from(part.inlineData.data, "base64");
        fs.writeFileSync(outputPath, buffer);
        console.log(`Saved ${image.filename}`);
        return;
      }
    }
    
    console.error(`No image in response for ${image.filename}`);
  } catch (error) {
    console.error(`Error generating ${image.filename}:`, error.message);
  }
  
  // Rate limiting
  await new Promise(resolve => setTimeout(resolve, 3000));
}

async function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const image of images) {
    await generateImage(image);
  }
  
  console.log("Done!");
}

main();
