"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <ul className="space-y-6">
      {experience.map((item, index) => (
        <motion.li
          key={index}
          className="shadow-lg border-2 border-transparent dark:border-white/25 hover:shadow-xl hover:border-gray-400 dark:hover:border-gray-600 transition-all rounded-xl p-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          <h4 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{item.jobTitle}</h4>
          <p className="mb-1 text-gray-700 dark:text-gray-300">
            <span className="font-medium">{item.company}</span> &middot; {item.location}
          </p>

          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            <span className="inline-block text-xs sm:text-sm rounded-xl py-1 px-2 bg-gray-100 dark:bg-gray-800">
              {item.startDate + " - " + item.endDate}
            </span>

            {item.current && (
              <span className="inline-block text-xs sm:text-sm text-black rounded-xl py-1 px-2 ml-2 bg-black text-white dark:text-black dark:bg-white dark:text-black">
                Current
              </span>
            )}
          </div>

          {/* DESCRIPTION */}
          {item.description && (
            <p className="mb-4 text-gray-800 dark:text-gray-200">{item.description}</p>
          )}

          {/* RESPONSIBILITY */}
          {item.points && Object.values(item.points).length > 0 && (
            <>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Key Responsibilities
              </p>
              <ul className="text-sm list-disc list-inside text-gray-800 dark:text-gray-200 mb-4">
                {Object.values(item.points).map((point, i) => (
                  <li key={i}>{point as string}</li>
                ))}
              </ul>
            </>
          )}

          {/* SKILLS */}
          {item.skills && (
            <>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Skills & Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {item.skills.split(',').map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block text-xs sm:text-sm border border-gray-300 dark:border-white/20 rounded-xl py-1 px-2 transition-transform duration-200 ease-in-out transform hover:scale-105 hover:text-blue-500 hover:border-blue-500 cursor-default"
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </>
          )}
        </motion.li>
      ))}
    </ul>
  );
};

const experience = [
  {
    jobTitle: 'Software Developer Intern',
    company: 'IT Partners Inc.',
    location: 'Kelowna, BC',
    startDate: 'Apr. 2025',
    endDate: 'Aug. 2025',
    description: '',
    points: {},
    skills: '',
    current: true,
  },
  {
    jobTitle: 'Post-Production Video Editor',
    company: 'Freelance',
    location: 'Kelowna, BC',
    startDate: 'May 2017',
    endDate: 'Jul. 2023',
    description: 'Created high-quality promotional content with Adobe Premiere Pro and After Effects.',
    points: {
      1: '250+ projects completed among various industries while maintaining a 5-star rating',
      2: 'Achieved 100% on-time delivery rate, 100% order completion rate, and served clients across 19 different countries',
    },
    skills: 'Adobe Premiere Pro, Adobe After Effects, Graphic Design',
    current: false,
  },
  {
    jobTitle: 'E-Commerce Web Designer & Business Owner',
    company: 'Self-employed',
    location: 'Kelowna, BC',
    startDate: 'Aug. 2020',
    endDate: 'Feb. 2021',
    description: 'Created, designed, and managed an interior vehicle lighting business.',
    points: {
      1: 'Optimized SEO, Google Ads, Facebook Ads, and UI/UX design',
      2: 'Performed A/B testing to optimize ad campaigns, resulting in a 50% increase in return on ad spend (ROAS)',
      3: 'Sold the business through escrow to a private buyer after 7 months of development',
    },
    skills: 'Shopify, Google Ads, Facebook Ads, SEO, UI/UX Design',
    current: false,
  },
];

export default Experience;
