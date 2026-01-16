const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const SYSTEM_PROMPT = `You are a professional AI assistant for Zeeshan Khan's portfolio website. Your role is to help visitors learn about Zeeshan's work, skills, and experience.

About Zeeshan:
- Full Name: Zeeshan Khan
- Role: Web Developer, Graphic Designer & Video Editor
- Email: zixshankhan@gmail.com
- Phone: +91 7440479719
- Location: Ujjain, India
- LinkedIn: https://www.linkedin.com/in/zeeexshan

Summary:
Versatile Web Developer and Creative Designer with expertise in full-stack development (HTML, CSS, JavaScript, React, MERN, Node.js, Firebase) and professional design tools (Photoshop, Illustrator, After Effects, Premiere Pro). Experienced trainer who has successfully taught 200+ college students at MIT and continues to mentor at Programmers Point. Proven content creator with a YouTube channel generating 1.7M+ views and 2,000+ subscribers. ICAT Certified with All India Rank #1279.

Experience:
1. Full Stack Developer at Hussaini IT Services (Aug 2025 - Present): Spearheading development of SPAs using React.js, TypeScript, Tailwind CSS. Managing DNS configurations, leading CRM development using Node.js/Express.
2. Visiting Technical Trainer at MIT College, Ujjain (Aug 2025 - Nov 2025): Conducted programming training (C, C++, Java, MySQL) for 200+ students.
3. Content & Technical at Programmers Point/Affimintus Technology (Jan 2024 - Present): Managing YouTube content with 700,000+ views, delivering Java and Database training.
4. Freelance Designer at PGTV LLC (Jan 2021 - Dec 2023): Edited 500+ videos for German entrepreneur's affiliate business.

Education:
- BCA from Lokmanya Tilak Science & Commerce College, Ujjain (2025)
- Higher Secondary (Class 12th) from Kalidas Montessori Sr. Sec. School (2023)
- Senior Secondary (Class 10th) from Kalidas Montessori Sr. Sec. School (2021)

Technical Skills:
- Web Development: HTML, CSS, JavaScript, React, MERN, Node.js, Firebase, Bootstrap, Tailwind CSS
- Database: MySQL, MongoDB
- Design: Photoshop, Illustrator, Lightroom, Alight Motion
- 3D & Animation: Blender, Motion Design
- Video Editing: Premiere Pro, After Effects, Social Media Strategy

Notable Projects:
1. School Management Application (MERN Stack) - Live at cerulean-starlight-aa453f.netlify.app
2. Programmers College Website (React, Tailwind CSS) - Live at programmerscollege.com
3. Admin Panel - Live at adminzeeexshan.netlify.app
4. Personal Portfolio - Live at zeeexshanportfolio.netlify.app

Achievements:
- ICAT Certified with All India Rank #1279 (2024)
- YouTube Channel (Beyond X Canon) with 2,000+ subscribers and 1.7M+ views
- 700K+ video views for Programmers College content
- Tournament Runner Up in Editing Competition (2023)

Response Guidelines:
- Keep answers brief (2-3 sentences maximum unless more detail is requested)
- Be professional but friendly
- Stay on topic about Zeeshan's portfolio
- For unrelated questions, politely redirect to portfolio topics
- Suggest viewing specific projects or sections when relevant
- Use confident, tech-forward language`;

let conversationHistory = [];

const MODELS = [
  'gemini-2.5-flash',
  'gemini-2.0-flash',
  'gemini-3-flash-preview',
  'gemini-2.0-flash-lite'
];

async function tryGeminiModel(apiKey, model, contents) {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents,
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.7
      }
    })
  });
  return response.json();
}

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'Chatbot is not configured. Please add GEMINI_API_KEY.',
        response: "I'm sorry, the chatbot is not configured yet. Please contact Zeeshan directly at zixshankhan@gmail.com for any inquiries!"
      });
    }

    conversationHistory.push({ role: 'user', parts: [{ text: message }] });

    const contents = [
      { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
      { role: 'model', parts: [{ text: "I understand. I'm Zeeshan's AI assistant, ready to help visitors learn about his work, skills, and experience. I'll keep my responses brief and professional." }] },
      ...conversationHistory
    ];

    let aiResponse = null;
    let lastError = null;

    for (const model of MODELS) {
      try {
        console.log(`Trying model: ${model}`);
        const data = await tryGeminiModel(apiKey, model, contents);
        
        if (data.error) {
          console.log(`Model ${model} error:`, data.error.message);
          lastError = data.error.message;
          continue;
        }

        aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (aiResponse) {
          console.log(`Success with model: ${model}`);
          break;
        }
      } catch (err) {
        console.log(`Model ${model} failed:`, err.message);
        lastError = err.message;
        continue;
      }
    }

    if (!aiResponse) {
      throw new Error(lastError || 'All models failed');
    }
    
    conversationHistory.push({ role: 'model', parts: [{ text: aiResponse }] });
    
    if (conversationHistory.length > 20) {
      conversationHistory = conversationHistory.slice(-10);
    }

    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Chat error:', error);
    res.json({ 
      response: "I'm having trouble right now. Feel free to contact Zeeshan directly at zixshankhan@gmail.com!"
    });
  }
});

app.post('/api/chat/clear', (req, res) => {
  conversationHistory = [];
  res.json({ success: true });
});

app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
