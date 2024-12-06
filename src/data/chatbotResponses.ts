export const chatbotResponses = [
  {
    keywords: ['hello', 'hi', 'hey'],
    responses: [
      "Hello! I'm Pack Commander, your professional dog training assistant. How can I help you today?",
      "Hi there! Ready to work on your dog's training? What would you like to know?",
      "Welcome! I'm here to help you become a better dog trainer. What's on your mind?"
    ]
  },
  {
    keywords: ['puppy', 'new dog', 'started'],
    responses: [
      "Congratulations on your new puppy! The key to successful training is starting early with basics like potty training and simple commands. Would you like specific guidance on puppy training?",
      "New puppies require patience and consistency. Let's start with establishing a routine and basic commands. What specific challenges are you facing?",
      "That's exciting! The first few weeks with a puppy are crucial for building good habits. What would you like to focus on first?"
    ]
  },
  {
    keywords: ['aggressive', 'biting', 'growling'],
    responses: [
      "Aggression needs to be addressed carefully and professionally. I recommend consulting with a certified behaviorist for a proper evaluation. In the meantime, avoid situations that trigger the behavior and ensure everyone's safety.",
      "Dog aggression can be complex and requires professional assessment. While we can discuss management strategies, it's important to work with a local professional who can observe the behavior directly.",
      "This is a serious concern that needs professional attention. Let's focus on safety first, and I can suggest some management techniques while you seek professional help."
    ]
  },
  {
    keywords: ['bark', 'barking', 'quiet'],
    responses: [
      "Excessive barking often stems from boredom, anxiety, or alerting behavior. Have you identified what triggers your dog's barking?",
      "To address barking, we need to understand the cause. Is it happening at specific times or in response to particular situations?",
      "There are several positive reinforcement techniques we can use to manage barking. Would you like to learn about the 'quiet' command training method?"
    ]
  },
  {
    keywords: ['leash', 'pulling', 'walk'],
    responses: [
      "Leash pulling is common but manageable with consistent training. The key is to make walking beside you more rewarding than pulling ahead. Shall we discuss specific techniques?",
      "For leash training, I recommend starting in a low-distraction environment and using positive reinforcement. Would you like to learn about the 'stop and go' method?",
      "A proper walking position starts with engagement. Have you tried the 'be a tree' technique when your dog pulls?"
    ]
  }
];

export function getResponse(input: string): string {
  const lowercaseInput = input.toLowerCase();
  
  // Find matching response category
  const matchingCategory = chatbotResponses.find(category =>
    category.keywords.some(keyword => lowercaseInput.includes(keyword))
  );

  if (matchingCategory) {
    // Return random response from matching category
    return matchingCategory.responses[
      Math.floor(Math.random() * matchingCategory.responses.length)
    ];
  }

  // Default responses if no keywords match
  const defaultResponses = [
    "That's an interesting question about dog training. Could you provide more details so I can give you a more specific answer?",
    "I understand you're looking for training advice. Could you elaborate on your specific situation?",
    "Every dog is unique, and training should be tailored to their needs. What specific behavior would you like to work on?"
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}