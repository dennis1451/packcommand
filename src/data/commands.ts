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
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800',
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
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
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
    imageUrl: 'https://images.unsplash.com/photo-1601758174110-0862868639c5?auto=format&fit=crop&q=80&w=800',
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
  }
];