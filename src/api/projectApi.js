// Mock project data API

const projects = [
  {
    id: 1,
    title: 'AI Dashboard',
    description: 'A real-time analytics dashboard powered by machine learning for predictive insights.',
    category: 'AI/ML',
    tags: ['Python', 'React', 'TensorFlow'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with cart, payments, and admin management.',
    category: 'Web App',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform mobile app for workout tracking with AI-powered coaching.',
    category: 'Mobile',
    tags: ['React Native', 'Firebase', 'ML Kit'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'DevOps Pipeline Tool',
    description: 'Automated CI/CD pipeline manager with Kubernetes orchestration support.',
    category: 'DevOps',
    tags: ['Docker', 'Kubernetes', 'Go'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    description: 'Sentiment analysis and trend tracking across major social platforms.',
    category: 'AI/ML',
    tags: ['Python', 'NLP', 'D3.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 6,
    title: 'Portfolio CMS',
    description: 'Headless CMS for creative portfolio management with drag-and-drop editing.',
    category: 'Web App',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
  },
]

export const getProjects = () => Promise.resolve(projects)

export const getProjectsByCategory = (category) => {
  if (!category || category === 'All') return Promise.resolve(projects)
  return Promise.resolve(projects.filter((p) => p.category === category))
}

export const getCategories = () => {
  const cats = ['All', ...new Set(projects.map((p) => p.category))]
  return Promise.resolve(cats)
}

export default projects