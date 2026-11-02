// Display order is set by hand (array order = row order on the homepage).
// Add a photo by putting it in /public/experience/ and setting `image: '/experience/<file>.jpg'` (4:3 recommended).
// `category` and `techLine` are shown on the homepage row.
export const experience = [
  {
    slug: 'arc-lab',
    category: 'RESEARCH',
    techLine: 'Computer Vision · Tracking',
    role: 'Undergraduate Research Intern',
    org: 'ARC Lab (Autonomy, Robotics & Connectivity Lab), University of Washington',
    orgShort: 'UW ARC Lab',
    location: 'Seattle, WA',
    period: 'Mar 2026 – Present',
    image: null,
    shortDesc:
      'Developing a vision-based Detect-and-Avoid pipeline that tracks aerial objects using onboard camera systems.',
    description:
      'Undergraduate research at the Autonomy, Robotics & Connectivity Lab at the University of Washington, focused on vision-based Detect-and-Avoid (DAA) for aerial autonomy.',
    highlights: [
      'Developed a vision-based Detect-and-Avoid (DAA) pipeline for tracking aerial objects using onboard camera systems',
      'Implemented core perception modules including frame alignment, object detection, and multi-frame tracking for aerial objects',
      'Integrated perception outputs with downstream control components to support end-to-end autonomous system development',
    ],
    tags: ['Computer Vision', 'Detect-and-Avoid', 'Tracking', 'Python'],
    tech: ['Python', 'Object Detection', 'Multi-frame Tracking', 'Frame Alignment'],
    link: null,
    linkLabel: null,
    bgColor: '#4f46e5',
  },
  {
    slug: 'husky-robotics',
    category: 'STUDENT TEAM',
    techLine: 'C++ · STM32H7 · PX4',
    role: 'Firmware Subteam Member',
    org: 'Husky Robotics — Drone Subteam',
    orgShort: 'Husky Robotics',
    location: 'Seattle, WA',
    period: 'Apr 2026 – Present',
    image: null,
    shortDesc:
      'Building STM32H743 flight controller firmware for a custom drone board, from sensors and motors to automated hardware tests.',
    description:
      'Firmware work on the Husky Robotics drone subteam at the University of Washington, building the low-level firmware for a custom flight controller board as the base for porting the PX4 autopilot.',
    highlights: [
      "Built the flight controller's sensor and motor firmware in C++ on an STM32H743, giving the team a working base to port the PX4 autopilot onto the custom board",
      'Created automated hardware test firmware that validates the IMUs, barometer and motor outputs in a single run, replacing manual board debugging',
      'Implemented DShot600 motor control to AM32-based ESCs and fixed an STM32H7 DMA cache issue that silently blocked motor commands',
    ],
    tags: ['C++', 'STM32H7', 'PX4', 'DShot', 'Embedded'],
    tech: ['C++', 'STM32H743', 'PX4', 'DShot600', 'AM32 ESC', 'DMA'],
    link: null,
    linkLabel: null,
    bgColor: '#7c3aed',
  },
  {
    slug: 'snu-ari-lab',
    category: 'RESEARCH',
    techLine: 'ROS 2 · Isaac Sim · MuJoCo',
    role: 'Research Intern',
    org: 'Autonomous Robot Intelligence Lab, Seoul National University',
    orgShort: 'SNU ARI Lab',
    location: 'Seoul, South Korea',
    period: 'May 2025 – Sep 2025',
    image: null,
    shortDesc:
      'Built ROS 2 simulation and perception pipelines for a G1 humanoid robot and supported autonomous golf cart navigation tests.',
    description:
      'Research internship at the Autonomous Robot Intelligence Lab at Seoul National University. Worked on simulation and perception for a Unitree G1 humanoid robot and on hardware integration for an autonomous golf cart.',
    highlights: [
      'Developed ROS 2–based simulation pipelines in Isaac Sim and MuJoCo for the G1 humanoid, integrating perception modules (LiDAR, vision models) with control policies to enable reproducible experiments',
      'Analyzed circuit issues on an autonomous golf cart and integrated Arduino modules with its control system for navigation tests',
      'Built a perception pipeline for a humanoid robot with scene graph generation and Intel RealSense–based object detection',
    ],
    tags: ['ROS 2', 'Isaac Sim', 'MuJoCo', 'RealSense', 'Humanoid'],
    tech: ['ROS 2', 'Isaac Sim', 'MuJoCo', 'Intel RealSense', 'LiDAR', 'Arduino', 'Python'],
    link: 'https://arisnu.squarespace.com/',
    linkLabel: 'Lab Website',
    bgColor: '#0f766e',
  },
  {
    slug: 'dogu-robotics',
    category: 'INDUSTRY',
    techLine: 'STM32 · CAN · ROS · GNSS',
    role: 'Software Engineering Intern',
    org: 'Dogu Robotics',
    orgShort: 'Dogu Robotics',
    location: 'Seattle, WA / South Korea',
    period: 'Jul 2026 – Sep 2026',
    image: null,
    shortDesc:
      'Firmware timing validation, GNSS-based localization logic, and an LLM agent pipeline for automated certification testing.',
    description:
      'Software engineering internship at Dogu Robotics working across firmware validation, ROS localization and navigation, and test automation for an autonomous robot platform.',
    highlights: [
      'Instrumented STM32 firmware with DWT cycle-counter timing to measure worst-case CAN round-trip latency across four motor-driver nodes with zero timeouts, and E-Stop response; found and fixed a trigger-counting defect in the measurement path',
      'Developed ROS localization logic that switches indoor/boundary/outdoor modes from GNSS horizontal accuracy with hysteresis and dwell gating, validated against design timing, and implemented waypoint navigation to GPS-coordinate goals',
      'Built an LLM agent pipeline using tool calling that routes validation requests to per-test agents, which provision the containerized environment and launch certification tests, from fully automated runs to operator-guided procedures',
    ],
    tags: ['STM32', 'CAN', 'ROS', 'GNSS/RTK', 'LLM Agents'],
    tech: ['STM32', 'CAN', 'ROS', 'GNSS/RTK', 'Docker', 'Python', 'LLM Tool Calling'],
    link: null,
    linkLabel: null,
    bgColor: '#2563eb',
  },
]
