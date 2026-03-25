import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiX, FiChevronRight, FiCheck } from 'react-icons/fi'

const projects = [
  {
    name: 'ForceBrands',
    type: 'Web App',
    category: 'Rails',
    desc: 'Full-stack talent recruitment marketplace for the CPG industry connecting brands with top-tier professionals.',
    tech: ['Ruby on Rails', 'JavaScript', 'jQuery', 'Sass'],
    link: 'https://forcebrands.com/',
    color: '#6C63FF',
    pattern: 'dots',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ', // Replace with your video URL
    details: {
      overview: 'ForceBrands is a comprehensive talent recruitment marketplace designed specifically for the Consumer Packaged Goods (CPG) industry. The platform connects brands with top-tier professionals across various roles, from executive leadership to creative and marketing positions.',
      challenge: 'The CPG industry had a fragmented hiring landscape with no dedicated platform for connecting brands with niche talent. ForceBrands needed to create a seamless experience for both recruiters and job seekers while handling complex role requirements and company cultures.',
      solution: 'Built a full-stack solution with advanced filtering, candidate matching algorithms, and real-time messaging. Implemented role-specific assessment workflows and integrated with major job boards for extended reach.',
      contributions: [
        'Developed the core recruitment workflow system with drag-and-drop kanban boards for candidate tracking',
        'Built real-time messaging system with WebSocket integration for instant communication',
        'Implemented advanced search with Elasticsearch for filtering candidates by skills, experience, and industry vertical',
        'Created an admin dashboard with analytics and reporting for hiring managers',
        'Optimized database queries reducing page load times by 60%',
        'Implemented automated email workflows for candidate engagement',
      ],
      impact: 'Platform now serves over 500+ CPG brands and has facilitated thousands of successful placements in the consumer goods industry.',
    },
  },
  {
    name: 'FlipDeals',
    type: 'Ecommerce',
    category: ['MERN', 'Ecommerce'],
    desc: 'Dynamic online deals & shopping platform with real-time inventory, user auth, and seamless checkout.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    link: 'https://flipdeals.com/',
    color: '#00D4FF',
    pattern: 'grid',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ',
    details: {
      overview: 'FlipDeals is a dynamic online shopping platform that connects buyers with exclusive deals across multiple categories. The platform features real-time inventory management, secure user authentication, and a streamlined checkout experience designed for conversions.',
      challenge: 'Creating a seamless shopping experience with real-time inventory updates across multiple vendors while maintaining fast page loads and preventing overselling. The platform needed to handle high traffic during flash sales without performance degradation.',
      solution: 'Built a MERN stack application with WebSocket integration for real-time inventory updates, JWT-based authentication with refresh tokens, and an optimized checkout flow with Stripe payment processing.',
      contributions: [
        'Developed real-time inventory system using Socket.io for instant stock updates',
        'Built secure authentication system with JWT tokens and OAuth integration',
        'Created responsive product catalog with advanced filtering and search',
        'Implemented shopping cart with persistent state and cross-device sync',
        'Integrated Stripe payment gateway with subscription support',
        'Optimized database queries and implemented caching for high performance',
      ],
      impact: 'Platform handles thousands of concurrent users during flash sales with 99.9% uptime.',
    },
  },
  {
    name: 'Kulta Properties',
    type: 'Real Estate',
    category: ['Rails', 'Deployments'],
    desc: 'Finnish real estate platform with advanced property listings, search filters, and agent dashboards.',
    tech: ['Ruby on Rails', 'JavaScript', 'jQuery', 'PostgreSQL'],
    link: 'https://kultaproperties.com/',
    color: '#F59E0B',
    pattern: 'diagonal',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ',
    details: {
      overview: 'Kulta Properties is a comprehensive real estate platform serving the Finnish market. The platform connects property buyers, sellers, and agents through an intuitive interface with advanced search capabilities and agent management tools.',
      challenge: 'Building a bilingual platform with complex property search filters, virtual tour integration, and an agent dashboard for managing listings. Required seamless integration with Finnish real estate data standards.',
      solution: 'Developed a Ruby on Rails application with PostgreSQL for handling complex queries, implemented Google Maps integration for property locations, and created a custom CMS for agent listing management.',
      contributions: [
        'Built property search with advanced filters (price, size, location, amenities)',
        'Developed agent dashboard with listing management and lead tracking',
        'Integrated Google Maps API for property location visualization',
        'Created virtual tour embedding system for property viewings',
        'Implemented multi-language support for Finnish and English',
        'Set up CI/CD pipeline with automated testing and deployment',
      ],
      impact: 'Platform serves over 10,000 property listings and connects hundreds of agents with potential buyers.',
    },
  },
  {
    name: 'FromThePage',
    type: 'Web App',
    category: 'Rails',
    desc: 'Collaborative transcription platform enabling communities to transcribe and index historical documents.',
    tech: ['Ruby on Rails', 'PostgreSQL', 'JavaScript'],
    link: 'https://fromthepage.com/',
    color: '#8B5CF6',
    pattern: 'circles',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ',
    details: {
      overview: 'FromThePage is a collaborative platform that allows communities to transcribe, index, and annotate historical documents. The platform brings together historians, genealogists, and volunteers to preserve and make accessible historical records.',
      challenge: 'Creating an intuitive transcription interface that handles various document types while enabling collaboration between thousands of users working on the same materials without conflicts.',
      solution: 'Built a Ruby on Rails application with real-time collaboration features, version control for transcriptions, and sophisticated diffing tools to track changes made by multiple users.',
      contributions: [
        'Developed OCR-assisted transcription interface with auto-save',
        'Built version control system for tracking transcription changes',
        'Created wiki-style linking between transcribed terms and subjects',
        'Implemented role-based access for collections and documents',
        'Designed annotation system for marginalia and document comments',
        'Created export tools for various formats (PDF, TEI, CSV)',
      ],
      impact: 'Over 50,000 pages transcribed by community volunteers preserving historical records.',
    },
  },
  {
    name: 'Dear Brightly',
    type: 'SaaS / Ecommerce',
    category: 'MERN',
    desc: 'Custom retinoid skincare subscription platform with AI-driven product recommendations and telemedicine integrations.',
    tech: ['React', 'Rails', 'Microservices', 'Stripe'],
    link: 'https://www.dearbrightly.com/',
    color: '#EC4899',
    pattern: 'dots',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ',
    details: {
      overview: 'Dear Brightly is a subscription-based skincare platform offering personalized retinoid treatments with AI-powered product recommendations and telemedicine consultations with dermatologists.',
      challenge: 'Building a complex e-commerce platform with subscription management, AI integration for personalized recommendations, and HIPAA-compliant telemedicine features for prescription consultations.',
      solution: 'Created a microservices architecture with React frontend, Rails API, and dedicated services for subscriptions, recommendations, and telemedicine. Implemented Stripe billing with complex subscription logic.',
      contributions: [
        'Built subscription management system with multiple billing cycles',
        'Developed AI recommendation engine for personalized skincare routines',
        'Integrated telemedicine platform with video consultations',
        'Created prescription management and renewal workflow',
        'Implemented personalized dashboard with progress tracking',
        'Built review system with verified purchase validation',
      ],
      impact: 'Platform has served over 100,000 subscribers with personalized skincare solutions.',
    },
  },
  {
    name: 'Doctors Galaxy',
    type: 'HealthTech',
    category: 'MERN',
    desc: 'Healthcare ecosystem connecting patients with medical professionals for appointments, records, and consultations.',
    tech: ['Node.js', 'React', 'MongoDB', 'Socket.io'],
    link: 'https://www.doctorsgalaxy.com/',
    color: '#10B981',
    pattern: 'grid',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ',
    details: {
      overview: 'Doctors Galaxy is a comprehensive healthcare platform connecting patients with medical professionals for appointments, teleconsultations, and health record management. The platform streamlines the entire healthcare journey.',
      challenge: 'Building a HIPAA-compliant healthcare platform with real-time appointment booking, video consultations, and secure health record management while maintaining an intuitive patient experience.',
      solution: 'Developed a MERN stack application with Socket.io for real-time features, encrypted database storage for health records, and WebRTC integration for video consultations.',
      contributions: [
        'Built appointment booking system with calendar sync and reminders',
        'Developed video consultation platform with WebRTC',
        'Created patient health record management with encryption',
        'Implemented doctor search with specialty and availability filters',
        'Built prescription management and pharmacy integration',
        'Designed notification system for appointments and reminders',
      ],
      impact: 'Platform connects thousands of patients with healthcare providers across multiple specialties.',
    },
  },
  {
    name: 'WellFunded',
    type: 'FinTech / SaaS',
    category: 'Rails',
    desc: 'Philanthropy and Donor Advised Fund platform for Canadian nonprofits with automated compliance reporting.',
    tech: ['Ruby on Rails', 'React', 'PostgreSQL', 'Stripe'],
    link: 'https://www.wellfunded.io/',
    color: '#3B82F6',
    pattern: 'diagonal',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ',
    details: {
      overview: 'WellFunded is a philanthropy platform enabling Canadian nonprofits to manage Donor Advised Funds (DAFs) with automated compliance reporting. The platform simplifies charitable giving for individuals and organizations.',
      challenge: 'Building a financial platform with complex fund management, Canadian tax compliance automation, and integration with multiple payment providers while ensuring bank-level security.',
      solution: 'Developed a Ruby on Rails application with React frontend, PostgreSQL for financial data, Stripe for payments, and custom compliance reporting tools specific to Canadian charity regulations.',
      contributions: [
        'Built Donor Advised Fund management with contribution tracking',
        'Created automated tax receipt generation for Canadian regulations',
        'Developed grant management and disbursement workflow',
        'Implemented investment tracking for fund growth',
        'Built compliance reporting dashboard for nonprofits',
        'Integrated with Canadian payment processors and banks',
      ],
      impact: 'Platform manages millions in charitable donations for Canadian nonprofits.',
    },
  },
  {
    name: 'Catalister',
    type: 'AI Tool',
    category: 'AI',
    desc: 'AI-powered product research and listing expert that automates marketplace content generation.',
    tech: ['Node.js', 'OpenAI API', 'React', 'MongoDB'],
    link: 'https://catalister.com/',
    color: '#F97316',
    pattern: 'circles',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ',
    details: {
      overview: 'Catalister is an AI-powered product research platform that helps sellers automate marketplace content generation. The tool uses OpenAI to generate optimized product listings, descriptions, and pricing recommendations.',
      challenge: 'Creating an AI system that understands marketplace trends, generates compelling product content, and integrates seamlessly with major e-commerce platforms while maintaining content quality.',
      solution: 'Built a Node.js backend with OpenAI API integration, React dashboard for managing products, and automated workflows for listing generation and platform publishing.',
      contributions: [
        'Developed OpenAI integration for product description generation',
        'Built keyword research and SEO optimization tools',
        'Created automated marketplace listing generator',
        'Implemented competitor analysis and pricing recommendations',
        'Designed bulk operations for managing multiple listings',
        'Built analytics dashboard for listing performance tracking',
      ],
      impact: 'Helps sellers generate thousands of optimized product listings with AI.',
    },
  },
  {
    name: 'BooqX',
    type: 'SaaS',
    category: 'Rails',
    desc: 'Appointment automation system for German service businesses with smart scheduling and calendar sync.',
    tech: ['Ruby on Rails', 'JavaScript', 'PostgreSQL', 'Stripe'],
    link: 'https://booqx.de/',
    color: '#6366F1',
    pattern: 'dots',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ',
    details: {
      overview: 'BooqX is an appointment scheduling platform designed for German service businesses. The platform offers smart scheduling, calendar sync, and automated reminders to streamline booking operations.',
      challenge: 'Building a scheduling system that handles German business requirements, multiple time zones, GDPR compliance, and seamless integration with popular calendar applications.',
      solution: 'Developed a Ruby on Rails application with iCal integration, multi-language support, and a customizable booking widget that can be embedded on any website.',
      contributions: [
        'Built smart scheduling engine with availability management',
        'Created multi-language support for German and English',
        'Integrated with Google Calendar and Outlook for sync',
        'Developed automated SMS and email reminders',
        'Implemented online payment processing with Stripe',
        'Designed embeddable booking widget for client websites',
      ],
      impact: 'Used by hundreds of German service businesses for appointment management.',
    },
  },
  {
    name: 'Diyas Direct',
    type: 'Shopify',
    category: ['Shopify', 'Ecommerce', 'Deployments'],
    desc: 'Premium Asian bridal and groomswear Shopify store for UK market with custom Liquid theme and UX.',
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    link: 'https://diyasdirect.co.uk/',
    color: '#E11D48',
    pattern: 'grid',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ',
    details: {
      overview: 'Diyas Direct is a premium Shopify store specializing in Asian bridal and groomswear for the UK market. The store features an elegant design with custom functionality for sizing, customization, and cultural requirements.',
      challenge: 'Creating a visually stunning e-commerce experience for luxury bridal wear with custom sizing options, cultural customization features, and seamless UK shipping integration.',
      solution: 'Built a custom Shopify theme with Liquid templates, JavaScript-driven product customization, and integrations with UK delivery services.',
      contributions: [
        'Designed custom Shopify theme with premium aesthetics',
        'Built product customization options for measurements',
        'Created size guide system with regional variations',
        'Integrated UK delivery services and international shipping',
        'Implemented wishlist and save-for-later features',
        'Optimized for mobile shopping experience',
      ],
      impact: 'Successfully serves the Asian bridal market across the UK with premium products.',
    },
  },
  {
    name: 'Experfy',
    type: 'Platform',
    category: 'Rails',
    desc: 'AI and big data talent marketplace — built and maintained backend APIs for matching algorithms.',
    tech: ['Ruby on Rails', 'APIs', 'PostgreSQL', 'AWS'],
    link: 'https://www.experfy.com/',
    color: '#0EA5E9',
    pattern: 'diagonal',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ',
    details: {
      overview: 'Experfy is an AI and big data talent marketplace connecting organizations with specialized professionals. The platform uses sophisticated matching algorithms to pair companies with experts for project-based work.',
      challenge: 'Building a talent marketplace with complex matching algorithms, skills verification, and project management tools while handling sensitive hiring data securely.',
      solution: 'Developed Ruby on Rails backend with PostgreSQL, custom matching algorithms, AWS infrastructure for scalability, and real-time project collaboration features.',
      contributions: [
        'Built backend APIs for talent matching and search',
        'Developed skills verification and credentialing system',
        'Created project management and milestone tracking',
        'Implemented real-time messaging between clients and experts',
        'Built analytics dashboard for project insights',
        'Optimized database for complex matching queries',
      ],
      impact: 'Platform has facilitated thousands of AI and data science project engagements.',
    },
  },
  {
    name: 'A&A Services',
    type: 'Charity',
    category: 'Deployments',
    desc: 'West Midlands charity services website providing accessible resources and donation management.',
    tech: ['WordPress', 'PHP', 'CSS', 'MySQL'],
    link: 'https://aandaserviceswestmidlands.co.uk/',
    color: '#84CC16',
    pattern: 'circles',
    videoUrl: 'https://www.youtube.com/watch?v=MzEFeIRJ0eQ',
    details: {
      overview: 'A&A Services is a charity website serving the West Midlands community with accessible resources, donation management, and volunteer coordination. The platform focuses on making charity services easily accessible to all.',
      challenge: 'Creating an accessible website meeting WCAG guidelines while providing secure donation processing, volunteer sign-up, and resource distribution management for a community charity.',
      solution: 'Built a WordPress site with custom theme development, accessible design patterns, and integrations with payment providers for donations.',
      contributions: [
        'Developed accessible WordPress theme meeting WCAG 2.1 AA standards',
        'Built donation processing system with Gift Aid support',
        'Created volunteer registration and scheduling system',
        'Implemented resource library with categorization',
        'Designed contact forms with accessibility features',
        'Set up hosting and ongoing maintenance',
      ],
      impact: 'Platform helps connect community members with essential charity services.',
    },
  },
]

function getInitials(name) {
  const words = name.replace(/[^a-zA-Z\s]/g, '').trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

function getPattern(type, color) {
  const c = color + '28'
  switch (type) {
    case 'dots':
      return {
        backgroundImage: `radial-gradient(circle, ${c} 1.5px, transparent 1.5px)`,
        backgroundSize: '22px 22px',
      }
    case 'grid':
      return {
        backgroundImage: `linear-gradient(${c} 1px, transparent 1px), linear-gradient(90deg, ${c} 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
      }
    case 'diagonal':
      return {
        backgroundImage: `repeating-linear-gradient(45deg, ${c} 0, ${c} 1px, transparent 0, transparent 50%)`,
        backgroundSize: '18px 18px',
      }
    case 'circles':
      return {
        backgroundImage: `radial-gradient(circle at 50% 50%, transparent 30%, ${c} 31%, ${c} 32%, transparent 33%), radial-gradient(circle at 50% 50%, transparent 55%, ${c} 56%, ${c} 57%, transparent 58%)`,
        backgroundSize: '60px 60px',
      }
    default:
      return {}
  }
}

function getVideoEmbedUrl(url) {
  if (!url) return null
  
  const youtubeMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`
  }
  
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  }
  
  if (url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com')) {
    return url
  }
  
  return null
}

function ProjectThumbnail({ project, onHover }) {
  const initials = getInitials(project.name)
  const patternStyle = getPattern(project.pattern, project.color)

  return (
    <div
      className="relative h-40 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}06 100%)`,
      }}
    >
      <div className="absolute inset-0" style={patternStyle} />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 60% 70% at 50% 60%, ${project.color}18 0%, transparent 70%)`,
        }}
      />
      <div
        className="relative z-10 flex items-center gap-1.5 px-3 py-2 border-b"
        style={{ borderColor: `${project.color}20` }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <div
          className="flex-1 mx-2 h-4 rounded-full flex items-center px-2"
          style={{ background: 'rgba(255,255,255,0.06)', maxWidth: '140px' }}
        >
          <span
            className="text-[9px] font-body truncate"
            style={{ color: `${project.color}80` }}
          >
            {project.link !== '#' ? project.link.replace('https://', '') : project.name.toLowerCase().replace(/\s/g, '') + '.com'}
          </span>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pt-3">
        <span
          className="font-heading font-black select-none"
          style={{
            fontSize: '4.5rem',
            lineHeight: 1,
            color: project.color,
            opacity: 0.22,
            letterSpacing: '-0.04em',
            userSelect: 'none',
          }}
        >
          {initials}
        </span>
      </div>
      <div className="absolute bottom-3 left-4 z-10">
        <span
          className="font-heading font-bold text-xs tracking-wide"
          style={{ color: project.color, opacity: 0.9 }}
        >
          {project.name}
        </span>
      </div>
      <div className="absolute top-8 right-3 z-10">
        <span
          className="px-2 py-0.5 rounded text-xs font-heading font-semibold"
          style={{
            background: `${project.color}18`,
            border: `1px solid ${project.color}40`,
            color: project.color,
          }}
        >
          {project.type}
        </span>
      </div>

      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: onHover ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          background: `linear-gradient(135deg, ${project.color}95 0%, ${project.color}80 100%)`,
        }}
      >
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/20 flex items-center justify-center">
            <FiChevronRight className="text-white" size={24} />
          </div>
          <span className="text-white font-heading font-bold text-sm tracking-wide">
            Click for details
          </span>
        </div>
      </motion.div>
    </div>
  )
}

function ProjectModal({ project, onClose, darkMode }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!project.details) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`relative max-w-lg rounded-2xl p-8 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
          >
            <FiX size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
          </button>
          <h3 className={`font-heading font-bold text-2xl mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {project.name}
          </h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Project details coming soon. Please provide the details and I'll update the modal.
          </p>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: `0 0 60px ${project.color}30`,
        }}
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
        >
          <FiX size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
        </button>

        <div
          className="h-32 relative"
          style={{
            background: `linear-gradient(135deg, ${project.color}30 0%, ${project.color}10 100%)`,
          }}
        >
          <div className="absolute inset-0" style={getPattern(project.pattern, project.color)} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-heading font-black"
              style={{
                fontSize: '5rem',
                color: project.color,
                opacity: 0.3,
              }}
            >
              {getInitials(project.name)}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <h2 className={`font-heading font-bold text-3xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {project.name}
            </h2>
            <span
              className="px-3 py-1 rounded-full text-sm font-heading font-semibold"
              style={{
                background: `${project.color}20`,
                border: `1px solid ${project.color}40`,
                color: project.color,
              }}
            >
              {project.type}
            </span>
          </div>

          <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {project.details.overview}
          </p>

          {project.videoUrl && (
            <div className="mb-8">
              <h3 className={`font-heading font-bold text-lg mb-3 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${project.color}20` }}
                >
                  <FiChevronRight style={{ color: project.color }} />
                </span>
                Project Demo
              </h3>
              <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={getVideoEmbedUrl(project.videoUrl)}
                  title={`${project.name} demo video`}
                  className="absolute inset-0 w-full h-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <div className="space-y-8">
            <div>
              <h3 className={`font-heading font-bold text-lg mb-3 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${project.color}20` }}
                >
                  <FiChevronRight style={{ color: project.color }} />
                </span>
                The Challenge
              </h3>
              <p className={`ml-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.details.challenge}
              </p>
            </div>

            <div>
              <h3 className={`font-heading font-bold text-lg mb-3 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${project.color}20` }}
                >
                  <FiChevronRight style={{ color: project.color }} />
                </span>
                The Solution
              </h3>
              <p className={`ml-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.details.solution}
              </p>
            </div>

            <div>
              <h3 className={`font-heading font-bold text-lg mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${project.color}20` }}
                >
                  <FiChevronRight style={{ color: project.color }} />
                </span>
                Key Contributions
              </h3>
              <ul className="ml-10 space-y-3">
                {project.details.contributions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${project.color}30` }}
                    >
                      <FiCheck size={12} style={{ color: project.color }} />
                    </span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl p-5"
              style={{
                background: `${project.color}10`,
                border: `1px solid ${project.color}30`,
              }}
            >
              <h3 className={`font-heading font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Project Impact
              </h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {project.details.impact}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200/20">
            <h4 className={`font-heading font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-sm font-body font-medium"
                  style={{
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}35`,
                    color: project.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold text-white transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                boxShadow: `0 4px 20px ${project.color}40`,
              }}
            >
              View Live Site <FiExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const filters = ['All', 'Rails', 'MERN', 'Ecommerce', 'Shopify', 'AI', 'Deployments']

export default function Projects({ darkMode }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const headColor = darkMode ? 'text-white' : 'text-gray-900'

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) =>
        Array.isArray(p.category)
          ? p.category.includes(activeFilter)
          : p.category === activeFilter
      )

  return (
    <>
      <section id="projects" className={`py-24 px-6 ${darkMode ? 'bg-[#111111]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className={`section-heading ${headColor}`}>Selected Projects</h2>
            <p className="section-subheading mx-auto text-center">
              A curated showcase of real-world applications across diverse industries.
            </p>
            <div className="w-16 h-1 accent-gradient rounded-full mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all duration-300"
                style={{
                  background: activeFilter === filter
                    ? 'linear-gradient(135deg, #6C63FF, #00D4FF)'
                    : darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                  color: activeFilter === filter
                    ? '#fff'
                    : darkMode ? '#A0A0A0' : '#666',
                  border: activeFilter === filter
                    ? 'none'
                    : darkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                  boxShadow: activeFilter === filter ? '0 0 20px rgba(108,99,255,0.4)' : 'none',
                }}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                  className="group rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    background: darkMode ? 'rgba(26,26,26,0.8)' : 'rgba(255,255,255,0.95)',
                    border: `1px solid ${darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = `1px solid ${project.color}55`
                    e.currentTarget.style.boxShadow = `0 0 30px ${project.color}25, 0 20px 40px rgba(0,0,0,0.15)`
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    setHoveredCard(project.name)
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = darkMode
                      ? '1px solid rgba(255,255,255,0.06)'
                      : '1px solid rgba(0,0,0,0.06)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                    setHoveredCard(null)
                  }}
                >
                  <ProjectThumbnail project={project} onHover={hoveredCard === project.name} />

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`font-heading font-bold text-lg group-hover:text-accent transition-colors ${headColor}`}>
                        {project.name}
                      </h3>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-1 text-sm font-medium"
                        style={{ color: project.color }}
                      >
                        <span className="text-xs">View Details</span>
                        <FiChevronRight size={16} />
                      </motion.div>
                    </div>
                    <p className="text-textSecondary font-body text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span key={t} className="skill-pill text-xs">{t}</span>
                      ))}
                    </div>

                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold transition-colors"
                        style={{ color: project.color }}
                      >
                        View Live <FiExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <motion.div
                    className="h-1 mx-5 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    style={{
                      background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`,
                      transformOrigin: 'left',
                    }}
                  />
                  <div className="h-3" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            darkMode={darkMode}
          />
        )}
      </AnimatePresence>
    </>
  )
}
