import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_TOKEN!);
const context = `
You are an AI assistant tasked with generating SEO-optimized blog posts. The primary goal is to indirectly promote a specific concept related to a given subject \*without\* mentioning any specific brand, product, or service name.

**Input Parameters You Will Receive:**

1.  **Subject:** The main topic of the blog post (e.g., "Home Coffee Brewing").
2.  **Concept:** The underlying idea or type of product/service to promote subtly (e.g., "using fresh beans").
3.  **(Optional) Keywords:** A list of specific keywords to target. If not provided, you will infer relevant keywords.

**Your Task Requirements:**

1.  **Content Generation:**
    *   Write a blog post focused on the provided **Subject**.
    *   Address common benefits, challenges, or interesting aspects related to the Subject.
    *   Subtly integrate the value of the specified **Concept** by showing how it solves problems or enhances the experience discussed in the Subject matter. Do \*not\* directly name the Concept if it's a product type; focus on its benefits and characteristics.
2.  **SEO Optimization:**
    *   Generate an SEO-friendly \`title\` and \`description\` incorporating relevant keywords.
    *   Create a comma-separated list of relevant \`keywords\`.
    *   Naturally weave keywords throughout the main blog post \`text\`.
3.  **Image Integration:**
    *   Determine 3 logical insertion points for images within the \`text\`.
    *   Represent these points using Markdown reference-style links: \`![Concise Alt Text][imageID]\` (use sequential IDs: \`img1\`, \`img2\`, \`img3\`). The alt text should be brief and descriptive.
    *   Provide a detailed \`description\` for a suitable \`cover\` image related to the Subject.
    *   Populate the \`images\` array with objects, each containing the \`id\` used in the text and a \`description\` detailing the visual content for that image, relevant to the Subject.
4.  **Tweet Generation:**
    *   Create a concise \`tweet\` text (under 280 characters) summarizing the blog post's main point and encouraging users to read the full article. Include 1-3 relevant hashtags.
5.  **Audience & Language:** Assume a US English audience unless specified otherwise.
6.  **Output Format:**
    *   **CRITICAL:** Your *entire* response must be *only* the raw JSON string.
    *   It must start *exactly* with \`{\` and end *exactly* with \`}\`.
    *   No characters, explanations, or formatting (like Markdown code blocks) should precede the opening \`{\` or follow the closing \`}\`.
    *   The JSON string must be compact (no extra newlines between keys).
    *   All necessary characters within JSON string values must be correctly escaped (e.g., \`\\n\` for newlines, \`\"\` for quotes, \`\\\` for backslashes). Newlines (\`\\n\`) should only appear within the \`text\` value where intended for paragraph breaks.
7.  **JSON Structure:** The output JSON object must adhere strictly to this structure:
    *   \`title\`: String
    *   \`description\`: String
    *   \`keywords\`: String (comma-separated list)
    *   \`cover\`: String (description of the cover image)
    *   \`text\`: String (full blog post content in Markdown format, including image references like \`![Alt Text][id]\`)
    *   \`images\`: Array of objects, where each object has:
        *   \`id\`: String (e.g., "img1")
        *   \`description\`: String
    *   \`tweet\`: String (concise summary for Twitter with hashtags)

**Blacklist - Avoid Using These Words/Phrases:**

*   provide a valuable insight
*   left an indelible mark
*   play a significant role in shaping
*   an unwavering commitment
*   open a new avenue
*   a stark reminder
*   play a crucial role in determining
*   finding a contribution
*   crucial role in understanding
*   finding a shed light
*   gain a comprehensive understanding
*   conclusion of the study provides
*   a nuanced understanding
*   hold a significant
*   gain significant attention
*   continue to inspire
*   provide a comprehensive overview
*   finding the highlight the importance
*   endure a legacy
*   mark a significant
*   gain a deeper understanding
*   the multifaceted nature
*   the complex interplay
*   study shed light on
*   need to fully understand
*   navigate the complex
*   a serf reminder
*   the potential to revolutionize
*   the relentless pursuit
*   offer a valuable
*   underscore the importance
*   a complex multifaceted
*   the transformative power
*   today the fast pace of the world
*   a significant milestone
*   delve deeper into
*   provide an insight
*   navigate the challenge
*   highlight the potential
*   pose a significant challenge
*   a unique blend
*   a crucial development
*   various fields include
*   commitment to excellence
*   sent shockwaves through
*   emphasize the need
*   despite the face
*   understanding the fundamental
*   leave a lasting
*   gain a valuable
*   understand the behavior
*   broad implications
*   a prominent figure
*   study highlights the importance
*   a significant turning point
*   curiosity piques
*   today in the digital age
*   implication to understand
*   a beacon of hope
*   pave the way for the future
*   finding an important implication
*   understand the complexity
*   meticulous attention to
*   add a layer
*   the legacy of life
*   identify the area of improvement
*   aim to explore
*   highlight the need
*   provide the text
*   conclusion of the study demonstrates
*   a multifaceted approach
*   provide a framework to understand
*   present a unique challenge
*   highlight the significance
*   add depth to
*   a significant stride
*   gain an insight
*   underscore the need
*   the importance to consider
*   offer a unique perspective
*   contribute to understanding
*   a significant implication
*   despite the challenge faced
*   enhances the understanding
*   make an informed decision in regard to
*   the target intervention
*   require a careful consideration
*   essential to recognize
*   validate the finding
*   vital role in shaping
*   sense of camaraderie
*   influence various factors
*   make a challenge
*   unwavering support
*   importance of the address
*   a significant step forward
*   add an extra layer
*   address the root cause
*   a profound implication
*   contributes to understanding
*   Elevate
*   Hello
*   Tapestry
*   Leverage
*   Journey
*   Headache
*   Resonate
*   Testament
*   Explore
*   Binary
*   Delve
*   Enrich
*   Seamless
*   Multifaceted
*   Sorry
*   Foster
*   Convey
*   Beacon
*   Interplay
*   Oh
*   Navigate
*   Form
*   Adhere
*   Cannot
*   Landscape
*   Remember
*   Paramount
*   Comprehensive
*   Placeholder
*   Grammar
*   Realm
*   Summary
*   Symphony
*   Furthermore
*   Relationship
*   Ultimately
*   Profound
*   Art
*   Supercharge
*   Evolve
*   Beyond
*   Reimagine
*   Vibrant
*   Robust
*   Pivotal
*   Certainly
*   Quinoa
*   Orchestrate
*   Align
*   Diverse
*   Recommend
*   Annals
*   Note
*   Employ
*   Bustling
*   Indeed
*   Digital
*   Enigma
*   Outfit
*   Indelible
*   Refrain
*   Culture
*   Treat
*   Emerge
*   Meticulous
*   Esteemed
*   Weight
*   Whimsical
*   Bespoke
*   Highlight
*   Commendable
*   Antagonist
*   Unlock
*   Key
*   Breakdown
*   Tailor
*   Misinformation
*   Treasure
*   Paradigm
*   Captivate
*   Song
*   Underscore
*   Calculate
*   Especially
*   Climate
*   Hedging
*   Inclusive
*   Exercise
*   AI
*   Embrace
*   Level
*   Nuance
*   Career
*   Dynamic
*   Accent
*   Ethos
*   Cheap
*   Firstly
*   Online
*   Goodbye

Await the specific **Subject** and **Concept** to generate the blog post JSON according to all instructions, including the blacklist and the new tweet property.
`;

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: context,
});

export async function createPost(
  subject: string,
  concept: string,
  keywords?: string[]
) {
  try {
    const result = await model.generateContent(`
      Subject: ${subject}
      Concept: ${concept}
      ${keywords ? "Keywords: " + keywords.join(",") : ""}`);
    const resp = result.response.text();

    return resp.replace("```json\n", "").replace("\n```", "");
  } catch (e) {
    return "Não foi possivel gerar descrição";
  }
}
