import { Command, CommandCategory } from '../types';

export const commandCategories: Record<CommandCategory, {
  title: string;
  description: string;
  icon: string;
}> = {
  'basic-obedience': {
    title: 'Basic Obedience',
    description: 'Foundational commands every dog should know',
    icon: '🦮'
  },
  'pack-leadership': {
    title: 'Pack Leadership',
    description: 'Commands that establish trust and improve behavior',
    icon: '👑'
  },
  'tricks': {
    title: 'Tricks & Performance',
    description: 'Fun and entertaining commands that showcase dog skills',
    icon: '🎪'
  },
  'agility': {
    title: 'Agility & Fitness',
    description: 'Commands focused on physical activities and coordination',
    icon: '🏃‍♂️'
  },
  'utility': {
    title: 'Utility & Practical',
    description: 'Useful commands for day-to-day activities',
    icon: '🔧'
  },
  'advanced': {
    title: 'Advanced & Specialized',
    description: 'Commands requiring higher levels of training',
    icon: '🎓'
  }
};

export const commands: Command[] = [
  {
    id: 'sit',
    name: 'Sit',
    category: 'basic-obedience',
    description: 'Teach your dog to sit on command',
    difficulty: 1,
    imageUrl: 'https://images.unsplash.com/photo-1678558262072-4ba7b35fcf2e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    progress: 30,
    tutorial: {
      steps: [
        {
          title: 'Prepare the Treat',
          description: 'Hold a treat close to your dog\'s nose to get their attention.'
        },
        {
          title: 'Move the Treat Upward',
          description: 'Slowly move the treat up and back over their head. This encourages their head to follow the treat, causing their bottom to lower.'
        },
        {
          title: 'Say "Sit"',
          description: 'As their bottom touches the ground, say "Sit" firmly and clearly.'
        },
        {
          title: 'Reward and Praise',
          description: 'Immediately reward your dog with the treat and praise ("Good sit!").'
        },
        {
          title: 'Repeat and Practice',
          description: 'Practice multiple times in short sessions, gradually reducing the use of treats.'
        }
      ],
      tips: [
        'Keep training sessions short (5-10 minutes)',
        'Practice in a quiet environment initially',
        'Use high-value treats for better motivation',
        'Be patient and consistent with the command word'
      ]
    }
  },
  {
    id: 'stay',
    name: 'Stay',
    category: 'basic-obedience',
    description: 'Train your dog to remain in position',
    difficulty: 2,
    imageUrl: 'https://images.unsplash.com/photo-1700893945560-f1e4f3513e33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2l0dGluZyUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D',
    progress: 45,
    tutorial: {
      steps: [
        {
          title: 'Start in "Sit" Position',
          description: 'Begin with your dog in a sitting position.'
        },
        {
          title: 'Use the Stay Command',
          description: 'Hold your palm out like a stop signal and say "Stay."'
        },
        {
          title: 'Take a Step Back',
          description: 'Take one step back while keeping eye contact. If they stay, praise them but don\'t move yet.'
        },
        {
          title: 'Extend the Time and Distance',
          description: 'Gradually increase the distance and time. Return to them and reward if they remain in place.'
        },
        {
          title: 'Add Distractions',
          description: 'Introduce small distractions (e.g., moving objects) to build focus. Reward successful stays.'
        }
      ],
      tips: [
        'Start with short durations (2-3 seconds)',
        'Build duration before distance',
        'Use a release word consistently',
        'Practice in different environments'
      ]
    }
  },
  {
    id: 'heel',
    name: 'Heel',
    category: 'pack-leadership',
    description: 'Walk properly beside you without pulling',
    difficulty: 2,
    imageUrl: 'https://images.unsplash.com/photo-1610926575123-01f7b8dadcf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZyUyMGFuZCUyMG93bmVyfGVufDB8fDB8fHww',
    tutorial: {
      steps: [
        {
          title: 'Position Your Dog',
          description: 'Stand with your dog beside your left leg. Hold a treat in your left hand near their nose.'
        },
        {
          title: 'Start Walking with "Heel" Command',
          description: 'Say "Heel" and take a step forward, letting them follow the treat.'
        },
        {
          title: 'Reward for Staying Close',
          description: 'Reward them when they stay close to your side. Use a calm tone to encourage them.'
        },
        {
          title: 'Correct Lagging or Pulling',
          description: 'If they lag or pull, stop walking and reset them beside you. Repeat the "Heel" command.'
        },
        {
          title: 'Increase Distance and Practice',
          description: 'Gradually walk longer distances and reduce treat use. Maintain consistent practice.'
        }
      ],
      tips: [
        'Keep the leash loose',
        'Practice in quiet areas first',
        'Reward frequently at first',
        'Stay consistent with your pace'
      ]
    }
  },
  {
    id: 'spin',
    name: 'Spin',
    category: 'tricks',
    description: 'Teach your dog to spin in a circle',
    difficulty: 1,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1667520191690-61a3c1d640dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNwaW4lMjBkb2d8ZW58MHx8MHx8fDA%3D',
    tutorial: {
      steps: [
        {
          title: 'Lure with a Treat',
          description: 'Hold a treat close to your dog\'s nose and slowly move it in a circular motion.'
        },
        {
          title: 'Guide the Movement',
          description: 'Lead your dog\'s nose with the treat in a complete circle.'
        },
        {
          title: 'Add the Command',
          description: 'Say "Spin" just before they complete the circle.'
        },
        {
          title: 'Reward and Repeat',
          description: 'Give the treat and praise immediately after they complete the spin.'
        },
        {
          title: 'Practice and Perfect',
          description: 'Gradually reduce the treat luring and rely more on the verbal command.'
        }
      ],
      tips: [
        'Start with small circles',
        'Keep the treat close to their nose',
        'Practice in both directions',
        'Make it fun and exciting'
      ]
    }
  },
  {
    id: 'fetch',
    name: 'Fetch',
    category: 'utility',
    description: 'Train your dog to retrieve items',
    difficulty: 1,
    imageUrl: 'https://images.unsplash.com/photo-1626031494498-9fdf88e595aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmV0Y2glMjBkb2d8ZW58MHx8MHx8fDA%3D',
    tutorial: {
      steps: [
        {
          title: 'Choose the Right Toy',
          description: 'Select a toy your dog loves and is easy to carry.'
        },
        {
          title: 'Create Interest',
          description: 'Play with the toy yourself to build excitement.'
        },
        {
          title: 'Throw and Encourage',
          description: 'Toss the toy a short distance and encourage your dog to get it.'
        },
        {
          title: 'Call Them Back',
          description: 'Call your dog back to you while showing excitement.'
        },
        {
          title: 'Exchange for Reward',
          description: 'Trade the toy for a treat and lots of praise.'
        }
      ],
      tips: [
        'Start with short distances',
        'Use two identical toys',
        'Keep sessions short and fun',
        'Never chase your dog'
      ]
    }
  },
  {
    id: 'come',
    name: 'Come',
    category: 'basic-obedience',
    description: 'Train your dog to come when called',
    difficulty: 2,
    imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taW5nJTIwZG9nfGVufDB8fDB8fHww',
    tutorial: {
      steps: [
        {
          title: 'Start Close',
          description: 'Begin training with your dog just a few feet away.'
        },
        {
          title: 'Use Excited Voice',
          description: 'Call your dog\'s name followed by "Come!" in a happy, inviting tone.'
        },
        {
          title: 'Reward Immediately',
          description: 'Give treats and praise as soon as they reach you.'
        },
        {
          title: 'Increase Distance',
          description: 'Gradually increase the distance as they master the command.'
        },
        {
          title: 'Add Distractions',
          description: 'Practice in different environments with varying levels of distraction.'
        }
      ],
      tips: [
        'Never punish after calling',
        'Use high-value treats',
        'Practice regularly',
        'Make it a fun game'
      ]
    }
  }
];