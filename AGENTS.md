# Agent instructions

Plan and track work on the Kanvas board; follow .agents/skills/kanvas/SKILL.md.

- **No self-approval:** when work is finished, the agent must only `finish` the task (it goes to review) and stop. Marking it done is the human's job in the browser. If the human wants an agent to continue without waiting for review, the human turns on YOLO on the board — never the agent.
- **Verify images with vision before trusting them.** The Pexels CDN URL pattern `images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg` works with `curl`, but the `<id>` in the URL is not always the real photo — the same file name can serve different content. Always run `read <file>?q="describe this photo"` on the downloaded JPEG before using it.
