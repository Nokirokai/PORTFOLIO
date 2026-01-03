// Portfolio Information Database
const PROFILE_IMAGE = 'avatar.jpg'; // Replace with your actual image filename

const portfolioData = {
    name: "Angel Mabael Bitangcol",
    location: "Tarlac City, Tarlac, Philippines",
    phone: "09453322496",
    email: "bitangcolangel@gmail.com",
    
    about: "I am a versatile IT Professional and Aspiring Developer with a unique blend of experience in systems infrastructure and software development. My background includes a strong foundation in hardware diagnostics, software troubleshooting, and basic networking, ensuring that I can manage the physical and logical layers of technology. On the development side, I leverage my knowledge of HTML, CSS, and JavaScript to build responsive interfaces, while utilizing Python, Java, and Node.js to create efficient backend logic.",
    
    education: [
        {
            school: "Golden Olympus Colleges",
            level: "Senior High School – STEM",
            year: "2022-2023"
        },
        {
            school: "San Luis Educational Foundation INC",
            level: "Junior High School",
            year: "2017-2021"
        }
    ],
    
    experience: [
        {
            position: "Hardware/Software Support",
            company: "Tarlac City Hall IT Department",
            period: "May 2023 - June 2023",
            responsibilities: [
                "Server Switching Basic Configuration",
                "Budget Department PC Monitoring",
                "Register Department PC Monitoring"
            ]
        },
        {
            position: "On the Job Training (OJT)",
            company: "Tarlac City Hall IT Department",
            period: "April 2023",
            responsibilities: ["Gained experience in IT operations"]
        }
    ],
    
    skills: {
        technical: [
            "Computer hardware troubleshooting",
            "Microsoft Office (Word, Excel, PowerPoint)",
            "Basic programming (Python, Java)",
            "Network configuration",
            "Operating Systems: Windows, Linux"
        ],
        soft: [
            "Good verbal and written communication",
            "Problem-solving and analytical thinking",
            "Team collaboration",
            "Time management"
        ]
    },
    
    techStack: {
        frontend: ["JavaScript", "HTML5", "CSS3"],
        backend: ["Node.js"],
        database: ["SQL"],
        foundational: ["Python", "Java"],
        tools: ["GitHub", "Figma", "VSCode", "NetBeans"]
    },
    
    certifications: [
        "Switching And Routing – CCNA 2 (2024)",
        "Introduction To Network – CCNA 1 (2023)",
        "Information Technology Division Office – OJT (2023)"
    ]
};

// Chatbot Response Logic
function getBotResponse(userMessage) {
    const msg = userMessage.toLowerCase().trim();
    
    // Greetings
    if (msg.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
        return `Hi! 👋 I'm ${portfolioData.name}'s portfolio assistant. I can help you learn about my experience, skills, education, and projects. What would you like to know?`;
    }
    
    // Name
    if (msg.includes('name') || msg.includes('who are you')) {
        return `I'm ${portfolioData.name}, an IT Professional and Aspiring Developer from ${portfolioData.location}.`;
    }
    
    // About/Introduction
    if (msg.includes('about') || msg.includes('introduce') || msg.includes('tell me about yourself')) {
        return `${portfolioData.about}\n\nWould you like to know more about my skills, experience, or education?`;
    }
    
    // Contact Information
    if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach')) {
        return `You can reach me at:\n📧 Email: ${portfolioData.email}\n📱 Phone: ${portfolioData.phone}\n📍 Location: ${portfolioData.location}`;
    }
    
    // Skills
    if (msg.includes('skill') || msg.includes('what can you do') || msg.includes('abilities')) {
        let response = "Here are my key skills:\n\n💻 Technical Skills:\n";
        portfolioData.skills.technical.forEach(skill => {
            response += `• ${skill}\n`;
        });
        response += "\n🤝 Soft Skills:\n";
        portfolioData.skills.soft.forEach(skill => {
            response += `• ${skill}\n`;
        });
        return response;
    }
    
    // Tech Stack
    if (msg.includes('tech stack') || msg.includes('technology') || msg.includes('programming language') || msg.includes('tools')) {
        let response = "My Tech Stack:\n\n";
        response += `🎨 Frontend: ${portfolioData.techStack.frontend.join(', ')}\n\n`;
        response += `⚙️ Backend: ${portfolioData.techStack.backend.join(', ')}\n\n`;
        response += `🗄️ Database: ${portfolioData.techStack.database.join(', ')}\n\n`;
        response += `📚 Foundational: ${portfolioData.techStack.foundational.join(', ')}\n\n`;
        response += `🛠️ Tools: ${portfolioData.techStack.tools.join(', ')}`;
        return response;
    }
    
    // Experience
    if (msg.includes('experience') || msg.includes('work') || msg.includes('job') || msg.includes('employment')) {
        let response = "My Professional Experience:\n\n";
        portfolioData.experience.forEach((exp, index) => {
            response += `${index + 1}. ${exp.position}\n`;
            response += `   ${exp.company} | ${exp.period}\n`;
            exp.responsibilities.forEach(resp => {
                response += `   • ${resp}\n`;
            });
            response += "\n";
        });
        return response;
    }
    
    // Education
    if (msg.includes('education') || msg.includes('school') || msg.includes('study') || msg.includes('degree')) {
        let response = "My Educational Background:\n\n";
        portfolioData.education.forEach((edu, index) => {
            response += `${index + 1}. ${edu.school}\n`;
            response += `   ${edu.level}\n`;
            response += `   Graduated: ${edu.year}\n\n`;
        });
        return response;
    }
    
    // Certifications
    if (msg.includes('certification') || msg.includes('certificate') || msg.includes('ccna')) {
        let response = "My Certifications:\n\n";
        portfolioData.certifications.forEach((cert, index) => {
            response += `${index + 1}. ${cert}\n`;
        });
        return response;
    }
    
    // Projects
    if (msg.includes('project') || msg.includes('portfolio') || msg.includes('work sample')) {
        return "I've worked on various projects including:\n\n• Server configuration and monitoring at Tarlac City Hall\n• PC troubleshooting and maintenance\n• Network configuration (CCNA certified)\n• Web development using HTML, CSS, and JavaScript\n\nI'm continuously building my portfolio with new projects. Feel free to ask about specific technologies!";
    }
    
    // Resume
    if (msg.includes('resume') || msg.includes('cv') || msg.includes('download')) {
        return "You can download my resume by clicking the 'Download Resume' button in the header section of this portfolio. It contains detailed information about my experience, skills, and certifications!";
    }
    
    // Location
    if (msg.includes('where') && (msg.includes('live') || msg.includes('from') || msg.includes('located'))) {
        return `I'm based in ${portfolioData.location}. I'm open to both local and remote opportunities!`;
    }
    
    // Availability/Hire
    if (msg.includes('available') || msg.includes('hire') || msg.includes('looking for work') || msg.includes('open to opportunities')) {
        return `Yes, I'm currently seeking opportunities as a Technical Support Representative or IT Support role where I can apply my troubleshooting skills and technical knowledge. Feel free to contact me at ${portfolioData.email}!`;
    }
    
    // Python
    if (msg.includes('python')) {
        return "Yes! I have experience with Python programming. It's one of my foundational skills along with Java. I use Python for scripting, automation, and backend development.";
    }
    
    // JavaScript
    if (msg.includes('javascript') || msg.includes('js')) {
        return "JavaScript is a key part of my frontend development stack! I use it along with HTML5 and CSS3 to build responsive and interactive web interfaces.";
    }
    
    // Node.js
    if (msg.includes('node') || msg.includes('nodejs')) {
        return "I work with Node.js for backend development. It allows me to use JavaScript on the server-side, creating efficient and scalable applications.";
    }
    
    // Networking
    if (msg.includes('network') || msg.includes('ccna') || msg.includes('routing') || msg.includes('switching')) {
        return "I have networking knowledge backed by CCNA certifications (CCNA 1 & CCNA 2). I've worked on server switching, basic configurations, and network troubleshooting during my time at Tarlac City Hall IT Department.";
    }
    
    // Hardware
    if (msg.includes('hardware') || msg.includes('troubleshoot')) {
        return "Hardware troubleshooting is one of my core strengths! I have hands-on experience with computer hardware diagnostics, PC monitoring, and maintenance from my work at Tarlac City Hall IT Department.";
    }
    
    // Thank you
    if (msg.includes('thank') || msg.includes('thanks')) {
        return "You're welcome! 😊 Feel free to ask me anything else about my experience, skills, or background. I'm here to help!";
    }
    
    // Goodbye
    if (msg.match(/^(bye|goodbye|see you|take care)/)) {
        return "Thank you for visiting my portfolio! Feel free to reach out anytime at bitangcolangel@gmail.com. Have a great day! 👋";
    }
    
    // Help
    if (msg.includes('help') || msg.includes('what can you tell me')) {
        return "I can help you learn about:\n\n• My background and experience\n• Technical and soft skills\n• Education and certifications\n• Tech stack and tools I use\n• Projects I've worked on\n• Contact information\n• How to download my resume\n\nJust ask me anything!";
    }
    
    // Default response
    return "I'm not sure I understand that question. I can tell you about my experience, skills, education, projects, tech stack, or contact information. What would you like to know?";
}

// Global variables
let conversationHistory = [];

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    const themeIcon = document.querySelector('.theme-toggle');
    
    // Update icon
    if (isDark) {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeIcon) themeIcon.textContent = '☀️';
    } else {
        if (themeIcon) themeIcon.textContent = '🌙';
    }
}

// Toggle chatbot
function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('active');
    
    // Send welcome message if first time opening
    if (chatbot.classList.contains('active') && conversationHistory.length === 0) {
        addMessage('bot', `Hi! 👋 I'm ${portfolioData.name}'s portfolio assistant. I can help you learn about my experience, skills, education, and projects. What would you like to know?`);
    }
    
    // Focus input when opening
    if (chatbot.classList.contains('active')) {
        document.getElementById('chatInput').focus();
    }
}

// Add message to chat
function addMessage(sender, text) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    // Add avatar for bot messages
    if (sender === 'bot') {
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'message-avatar';
        
        const img = document.createElement('img');
        img.src = PROFILE_IMAGE;
        img.alt = 'Bot Avatar';
        img.onerror = function() {
            // Fallback if image doesn't load
            this.style.display = 'none';
            avatarDiv.style.background = '#0084ff';
        };
        
        avatarDiv.appendChild(img);
        messageDiv.appendChild(avatarDiv);
    }
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    messagesDiv.appendChild(messageDiv);
    
    // Smooth scroll to bottom with a slight delay for animation
    requestAnimationFrame(() => {
        messagesDiv.scrollTo({
            top: messagesDiv.scrollHeight,
            behavior: 'smooth'
        });
    });
}

// Show/hide typing indicator
function showTyping(show) {
    const indicator = document.getElementById('typingIndicator');
    const messagesDiv = document.getElementById('chatMessages');
    
    if (show) {
        indicator.classList.add('active');
        // Smooth scroll to show typing indicator
        requestAnimationFrame(() => {
            messagesDiv.scrollTo({
                top: messagesDiv.scrollHeight,
                behavior: 'smooth'
            });
        });
    } else {
        indicator.classList.remove('active');
    }
}

// Send message
function sendMessage() {
    const input = document.getElementById('chatInput');
    const sendBtn = document.querySelector('.chat-input button');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Disable input while processing
    input.disabled = true;
    sendBtn.disabled = true;
    
    // Add user message
    addMessage('user', message);
    input.value = '';
    
    // Show typing indicator
    showTyping(true);
    
    // Simulate thinking time (realistic bot behavior)
    setTimeout(() => {
        showTyping(false);
        
        // Get bot response
        const botResponse = getBotResponse(message);
        addMessage('bot', botResponse);
        
        // Save to conversation history
        conversationHistory.push(
            { role: 'user', message: message },
            { role: 'bot', message: botResponse }
        );
        
        // Re-enable input
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
    }, 800 + Math.random() * 700); // Random delay between 800-1500ms for natural feel
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// Resume download
function downloadResume() {
    // Option 1: If your PDF is in the same folder as your HTML file
    window.location.href = 'RESUME.pdf';
    
    // Option 2: Force download with specific filename
    // const link = document.createElement('a');
    // link.href = 'RESUME.pdf';
    // link.download = 'Angel_Bitangcol_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
}

// Send email
function sendEmail() {
    window.location.href = 'mailto:bitangcolangel@gmail.com';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load theme
    loadTheme();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});