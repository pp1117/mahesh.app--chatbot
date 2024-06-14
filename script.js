document.addEventListener("DOMContentLoaded", function() {
    showWelcomeMessage();
    setTimeout(hideWelcomeMessage, 5000); // Hide the welcome message after 5 seconds
});

document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("chatbot-text").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function showWelcomeMessage() {
    const welcomeMessage = "Hello! Welcome to Mahesh.app. Ask me anything about our company.";
    addMessage(welcomeMessage, "bot", "welcome-message");
}

function hideWelcomeMessage() {
    const welcomeMessageElement = document.querySelector(".welcome-message");
    if (welcomeMessageElement) {
        welcomeMessageElement.style.display = "none";
    }
}

function sendMessage() {
    var userInput = document.getElementById("chatbot-text").value;
    if (userInput.trim() === "") {
        return;
    }

    addMessage(userInput, "user");
    document.getElementById("chatbot-text").value = "";

    setTimeout(function() {
        var botResponse = getBotResponse(userInput);
        addMessage(botResponse, "bot");
    }, 500);
}

function addMessage(message, type, customClass = "") {
    var messageContainer = document.createElement("div");
    messageContainer.classList.add("message", type);
    if (customClass) {
        messageContainer.classList.add(customClass);
    }
    messageContainer.textContent = message;

    var chatbotMessages = document.getElementById("chatbot-messages");
    chatbotMessages.appendChild(messageContainer);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(userInput) {
    const responses = {
        "hi": "Hi there! How can I assist you today?",
        "hello": "Hi there! How can I assist you today?",
        "what is mahesh.app": "Mahesh.app is a leading AI voice robot company specializing in advanced voice solutions to enhance communication and efficiency.",
        "services": "We offer AI voice solutions, robotics integration, GIS mapping, blockchain consultancy, and digital marketing.",
        "contact": "You can reach us at +91 8828624374 or email us at info@mahesh.app.",
        "founders": "Mahesh Nellore, CEO & Founder, and Maha Prasad Kadam, Co-Founder, lead the strategic direction of Mahesh.app.",
        "location": "We are located at IT Towers, 3rd Floor, Hyderabad - Ramagundam Rd, Nancharpally, Telangana 502277.",
        "coo": "Chief Operating Officer is Ms. Machavaram Sai Sree.",
        "cio": "Chief Innovation Officer is Mr. Mohammed Mustaq Ahmad.",
        "ccso": "Chief Cyber Security Officer is Mr. Ayyammagari Akhil Reddy.",
        "managers": "Managers include Mr. Prashanth Peddapuli & Ms. Rangu Bhargavi.",
        "hr": "Human Resource Manager is Ms. Bathini Madhuri.",
        "hrr": "Human Resource Recruiter is Ms. Bandaram Namratha.",
        "relationship manager": "Relationship Manager is Ms. Narra Radhika.",
        "product brand": "'Ramana's Home Products' features items like beetroot malt and various spices.",
        "product labels": "Product labels include Garam Masala, Turmeric Powder, Chilli Powder, Coriander Powder, Cumin Powder, Black Pepper Powder, Ginger Powder, Garlic Powder, Cardamom Powder, and Cinnamon Powder.",
        "additional products": "There are 40 more product labels for 'Ramana's Home Products' following the same standards.",
        "website launch": "We are preparing to launch our website and form a board of directors with a detailed agenda.",
        "evaluation": "We are evaluating the valuation of a company named agre.ai with a team of 7 members.",
        "debt and equity": "We seek guidance on debt and equity structuring, including standards for self-investment, debt, and private equity percentages.",
        "incentives": "Mahesh, as an SC/ST candidate, seeks to apply for incentives from the Telangana government and establish an MSME with a minimum salary expectation of 30k.",
        "training": "Mahesh is exploring opportunities for training in AI, GIS, blockchain, and robotics, and pursuing entrepreneurship in partnership with Mahesh.app for 2 years.",
        "legal agreements": "We prepare legal agreements and MoUs for Mahesh.app.",
        "peddapuli prashanth": "Peddapuli Prashanth is a regional sales and hiring manager known for his aggressive approach, leading a team of 150 members.",
        "valuation team": "The valuation team for agre.ai includes members with aliases MSS, MMA, RBG, PPP, NBG, BMG, and NMR.",
        "resources": "Our team includes AI Prompt Engineers, AI Developers, GIS Mapping Specialists, Digital Marketers, Sales and Marketing professionals, and Business Development Managers.",
        "about us": "At AI Voice Robot Company, we create advanced voice technologies to assist businesses. Our team works tirelessly to develop systems that make communication more natural and efficient. We believe in the power of voice to transform interactions, helping organizations improve customer service, streamline operations, and enhance user experience.",
        "mission": "Our mission is to leverage AI and robotics to provide innovative solutions that drive business efficiency and customer satisfaction.",
        "vision": "We envision a future where AI and robotics seamlessly integrate into everyday business operations, enhancing productivity and service quality.",
        "careers": "Join our team to work on cutting-edge AI and robotic technologies. Visit our Careers page for more information.",
        "news": "Stay updated with the latest news and developments at Mahesh.app by visiting our News section.",
        "events": "Check out our upcoming events and webinars to learn more about our technologies and solutions.",
        "partnerships": "We collaborate with industry leaders to deliver top-notch AI and robotic solutions. Contact us to learn more about partnership opportunities.",
        "customer support": "Our dedicated customer support team is here to help you with any inquiries or issues you may have. Reach out to us anytime.",
        "industries": "We serve various industries including healthcare, finance, retail, and more with our AI and robotic solutions.",
        "testimonials": "Read testimonials from our satisfied clients who have benefited from our innovative solutions.",
        "blog": "Visit our blog for insights, tips, and updates on AI and robotics.",
        "ai prompt engineers": "AI Prompt Engineers design and optimize AI prompts for various applications, ensuring effective and efficient AI outputs. They possess strong skills in natural language processing and a deep understanding of AI model behavior.",
        "ai developers": "AI Developers design intelligent websites and apps, enhancing user experience through advanced AI solutions and seamless functionality integration.",
        "gis mapping engineers": "GIS Mapping Specialists create, analyze, and manage spatial data and digital maps for various projects. They must possess proficiency in GIS software, data visualization, and spatial analysis techniques.",
        "digital marketing": "Digital marketers strategize and execute comprehensive online campaigns, driving brand awareness, engagement, and conversions through innovative digital channels.",
        "sales and marketing": "Sales and marketing teams drive revenue growth by developing and executing strategic sales and marketing plans, building strong customer relationships, and promoting brand awareness to achieve company objectives.",
        "business development management": "Business Development Managers drive growth through strategic partnerships and innovative sales strategies, maximizing market expansion and revenue generation.",
        "ev policy": "Our EV policy aims to create a sustainable transportation system, reduce carbon footprint, and create jobs. Key points include leveraging tourist footfall for EV rentals, using hydroelectric power for clean energy, and developing battery storage and charging stations.",
        "green data centers policy": "Our Green Data Centers policy focuses on attracting investments by leveraging the state's hydroelectric power, offering tax incentives, and promoting the use of green energy. The cold climate reduces cooling costs, making it a cost-effective solution.",
        "pharma and healthcare industry": "Our objective is to establish Himachal Pradesh as a hub for pharmaceutical manufacturing and medical devices. Key points include developing a Pharma Bulk Drug Manufacturing Park and a Medical Devices Park, creating job opportunities, and offering tax breaks and subsidies.",
        "sectors & industries": "We help businesses integrate advanced voice AI technology to enhance customer interactions. In agriculture, our real estate initiative, Oxygen Farms, focuses on sustainable housing through Sri Stay Farms, ensuring seamless and efficient operations with tailored voice solutions.",
        "mass communications and brand building": "We create custom voice interfaces that enhance user experience across different applications. Our team integrates AI voice solutions into your systems to improve efficiency and user engagement. We analyze voice interactions to provide actionable insights that help optimize performance.",
        "business models and technology": "Our bespoke voice models, such as Idlicoin and Roticoin, meet specific business needs, ensuring optimal user interaction. Enhance customer service with intelligent chatbots that deliver timely and accurate responses. Leverage our Business Communication Robots for instant voice analysis to improve communication efficiency and quality."
    };

    return responses[userInput.toLowerCase()] || "Sorry, I didn't understand that. Please ask about our services, founders, or contact information.";
}
