# Roadmap

This document outlines the planned features and development milestones for the Poster application, accessible at [https://poster.gmarroquio.dev](https://poster.gmarroquio.dev).

## Core Functionality and Roadmap

- [x] Subject Description Input: User interface (CLI or simple web form) to input a detailed description of the subject, including key points or specific angles.
- [x] Blog Post Generation: Backend logic calls a text generation model with the detailed description to create the blog post content.
- [x] Tweet Generation: Backend logic takes the generated blog post, summarizes it based on the initial description, adds a hook, and appends a placeholder link (e.g., `[Link]`).
- [x] Output Display: Present the generated blog post text and the generated tweet text to the user.
- [ ] Login
- [x] Save created posts
- [ ] Save images
- [ ] Image Generation:
  - [ ] Integrate an image generation model.
    - [ ] Chatgpt image generator (5 credits)
    - [ ] Some other model from Replicate (2 credits)
- [ ] Paywall:
  - [ ] Implement a payment system (Stripe).
  - [ ] Create a credit system (instead of subscriptions).
  - [ ] Restrict image generation to paid users (Credits per image generated).
- [ ] Text Editor: Implement a basic text editor to allow users to modify the generated blog post.
- [ ] Image Regeneration Button: Implement a button that allows paid users to regenerate the image.
- [ ] Image Integration:
  - [ ] Display image with blog post and tweet.
- [ ] Custom Prompts:
  - [ ] Let users add custom prompts.
  - [ ] Implement blacklisted words.
  - [ ] Let users add Blog writer styles
- [ ] Scheduled Posts:
  - [ ] Add a cron job to create posts.
  - [ ] Let users schedule posts.
- [ ] Let users change llm
  - [ ] [open router](https://openrouter.ai/)

## Running Locally

To run the Poster project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd poster
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Set up the environment variables:**

    - Create a `.env` file in the root directory of the project.
    - Add your Gemini API token to the `.env` file:

      ```
      GEMINI_TOKEN=YOUR_GEMINI_API_TOKEN
      ```

4.  **Run the development server:**

    ```bash
    pnpm dev
    ```

    This will start the development server, and you can access the application in your browser at `http://localhost:3000`.
