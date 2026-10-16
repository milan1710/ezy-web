/**
 * Technology stack.
 *
 * Only technologies we actually work with are listed. This is a capability list,
 * not a claim that every project uses every technology - the stack is selected
 * per project based on the client's requirements.
 */
export const techDisclaimer =
  'The stack is chosen for each project based on your requirements, budget and hosting setup. Not every project uses every technology listed here.'

export const techGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Monitor',
    items: [
      { name: 'HTML5', mono: '</>' },
      { name: 'CSS3', mono: '#' },
      { name: 'JavaScript', mono: 'JS' },
      { name: 'React', mono: 'Re' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    items: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: '{}' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Database',
    items: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mo' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: 'Wrench',
    items: [
      { name: 'Git', mono: 'Gi' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Vite', mono: 'Vi' },
      { name: 'Payment gateways', mono: 'Rs' },
      { name: 'Cloud hosting & deployment', mono: 'Cl' },
    ],
  },
]

/** Short technology labels used in the hero's floating device mockups. */
export const heroTechLabels = ['React', 'Node.js', 'REST APIs', 'Database', 'Tailwind CSS']
