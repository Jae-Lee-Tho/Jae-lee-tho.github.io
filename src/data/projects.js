// ─── REPLACE with your actual project content ───────────────────────────────
export const projects = [
  {
    slug: 'drone-control',
    title: 'Voice & EMG Assistive Drone Control',
    shortDesc:
      'A multimodal UAV control system integrating voice recognition and EMG signal processing for hands-free drone navigation.',
    description:
      'Designed a multimodal assistive UAV control system that combines voice recognition and EMG signal processing, enabling fully hands-free drone navigation. The system processes real-time signals through a Python pipeline (Voice → Intent Classification → EMG Processing → Flight Commands) using embedded firmware for low-latency actuation. Signal filtering, threshold tuning, and command validation were optimized to improve accuracy and stability during dynamic flight testing.',
    tags: ['Python', 'Arduino', 'Embedded Systems', 'Signal Processing', 'UAV'],
    tech: ['Python', 'Arduino', 'EMG Sensors', 'Embedded C', 'Signal Filtering'],
    github: 'https://github.com/jlee1296',
    live: null,
    period: 'Feb 2025 – Present',
    highlights: [
      'Real-time multimodal control pipeline with <50ms latency',
      'EMG signal filtering and threshold auto-calibration',
      'Voice intent classification with custom wake-word detection',
      'Stable flight performance validated through dynamic testing sessions',
    ],
    bgColor: '#2563eb',
  },
  {
    slug: 'fpga-slot-machine',
    title: 'FPGA Jackpot Slot Machine',
    shortDesc:
      'A hardware slot machine on a DE1-SoC FPGA board with state-based control logic, memory registers, and multi-display output.',
    description:
      'Designed a full hardware system on a DE1-SoC FPGA board integrating memory registers, control logic, and datapath components. Implemented state-based control logic and register memory modules that manage data write, hold, and read operations across multiple hardware components. Developed a hardware comparator and multi-display output system, applying fundamental digital design principles relevant to semiconductor memory architecture.',
    tags: ['SystemVerilog', 'FPGA', 'Digital Logic'],
    tech: ['SystemVerilog', 'DE1-SoC FPGA', 'Digital Logic Design', 'Hardware Simulation'],
    github: 'https://github.com/jlee1296',
    live: null,
    period: 'Feb 2026 – Mar 2026',
    highlights: [
      'Synthesized full design on Altera DE1-SoC FPGA',
      'State machine with write, hold, and read operations',
      'Hardware comparator logic for jackpot detection',
      'Multi-7-segment display output with custom decoder',
    ],
    bgColor: '#7c3aed',
  },
  {
    slug: 'teragotchi',
    title: 'Dr. Teragotchi – AI Emotional Companion',
    shortDesc:
      'A cross-platform mental wellness app featuring AI virtual pets that respond to emotions and evolve through consistent interaction.',
    description:
      'Designed and developed a cross-platform mental wellness app featuring AI-powered virtual pets that respond to user emotions and evolve through consistent interaction. Built a FastAPI backend with Supabase integration and connected OpenAI APIs for emotional context processing, enabling dynamic diary generation and mood tracking. Engineered therapeutic prompt design and conversation logic to deliver emotionally coherent, engaging support.',
    tags: ['Flutter', 'FastAPI', 'Supabase', 'OpenAI', 'AI'],
    tech: ['Flutter', 'FastAPI', 'Supabase', 'OpenAI API', 'Dart'],
    github: 'https://github.com/jlee1296',
    live: null,
    period: 'Apr 2025',
    highlights: [
      'Cross-platform mobile app (iOS & Android) with Flutter',
      'OpenAI integration for dynamic emotional diary generation',
      'Virtual pet evolution system based on interaction streaks',
      'Therapeutic prompt engineering for non-clinical support',
    ],
    bgColor: '#059669',
  },
  {
    slug: 'ai-compatibility',
    title: 'AI Couple Compatibility Scoring',
    shortDesc:
      'A TensorFlow AI model for couple compatibility scoring trained on 50,000+ labeled images with 95% accuracy.',
    description:
      'Developed a TensorFlow AI model for couple compatibility scoring, trained on 50,000+ labeled images with 95% accuracy. Created real-time scoring APIs using Django and AWS, employing embedding-based similarity techniques. Delivered responsive AI-powered user experiences across both web (React) and mobile (Flutter) platforms.',
    tags: ['Flutter', 'React', 'TensorFlow', 'Django', 'AWS'],
    tech: ['TensorFlow', 'Flutter', 'React', 'Django', 'AWS', 'TailwindCSS'],
    github: 'https://github.com/jlee1296',
    live: null,
    period: 'Dec 2024 – Feb 2025',
    highlights: [
      'TensorFlow model trained on 50K+ labeled image pairs',
      '95% accuracy on validation set',
      'Real-time scoring API on AWS with embedding similarity',
      'Dual-platform delivery: React web + Flutter mobile',
    ],
    bgColor: '#dc2626',
  },
  {
    slug: 'food-chatbot',
    title: 'Food Delivery Chatbot',
    shortDesc:
      'A DialogFlow chatbot system for handling food delivery orders and customer interactions with FastAPI and MySQL.',
    description:
      'Built a chatbot system for handling food delivery orders and customer interactions using DialogFlow for natural language understanding. Implemented backend logic using FastAPI and integrated MySQL database functionalities for order tracking. Enhanced real-time capabilities through API and webhook integrations.',
    tags: ['DialogFlow', 'Python', 'FastAPI', 'MySQL'],
    tech: ['DialogFlow', 'Python', 'FastAPI', 'MySQL', 'Webhooks'],
    github: 'https://github.com/jlee1296',
    live: null,
    period: 'Dec 2024 – Jan 2025',
    highlights: [
      'Natural language order processing via DialogFlow',
      'FastAPI webhook handler with under 100ms response time',
      'MySQL schema for order lifecycle management',
      'Handles order placement, tracking, and cancellation flows',
    ],
    bgColor: '#ea580c',
  },
  {
    slug: 'otv',
    title: 'Over Terrain Vehicle (OTV)',
    shortDesc:
      'An autonomous vehicle prototype that identifies plantable substrates and navigates through obstacles using Jetson ML and Arduino.',
    description:
      'Partnered with a multidisciplinary team to prototype an autonomous vehicle that identifies plantable substrates and navigates through obstacles. Enhanced vision systems using Jetson-based machine learning for accurate substrate classification. Programmed Arduino-integrated navigation algorithms enabling efficient obstacle avoidance and destination navigation.',
    tags: ['Arduino', 'Jetson', 'C++', 'Robotics', 'ML'],
    tech: ['Arduino', 'NVIDIA Jetson', 'C++', 'Computer Vision', 'Autonomous Navigation'],
    github: 'https://github.com/jlee1296',
    live: null,
    period: 'Aug 2023 – Dec 2023',
    highlights: [
      'Jetson-based vision system for substrate classification',
      'Arduino PID controller for smooth obstacle navigation',
      'Real-time sensor fusion from ultrasonic + camera array',
      'Team project demonstrated in competitive engineering showcase',
    ],
    bgColor: '#0891b2',
  },
]
