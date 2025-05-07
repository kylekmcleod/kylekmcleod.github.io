import React from "react";
import { Progress } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function SchoolProgress() {
  // Calculate progress percentage
  const totalYears = 5;
  const currentYear = 4;
  const progress = (currentYear / totalYears) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full mb-24">
      {/* Left Section: Heading and Progress Bar */}
      <div className="flex flex-col">
        {/* Fade-in effect for the university name */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          <span className="font-light">CS Student @ The</span> University{" "}
          <span className="font-light">of</span> British Columbia
        </motion.h2>

        {/* Fade-in effect for the progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          <Progress
            classNames={{
              base: "w-full",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-green-500 to-blue-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label={`${currentYear} out of ${totalYears} years completed`}
            radius="sm"
            showValueLabel={false}
            size="sm"
            value={progress}
          />
        </motion.div>
      </div>

      {/* Right Section: Additional Info */}
      <div className="text-left font-light">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          I&apos;m <strong>Kyle McLeod</strong>, a fourth-year Computer Science student at the University of British Columbia, and I am expected to graduate in May 2026. My studies focus on software development, machine learning, and data science. I&apos;m currently on the lookout for a 2026 summer internship in Canada or the U.S.
        </motion.p>

        <motion.p
          className="mt-8 text-blue-300 font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.7 }}
        >
          Honors & Awards:
        </motion.p>

        <motion.ul
          className="list-disc pl-5 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.7 }}
        >
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 1.7 }}
          >
            Deans List (May 2024)
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4, duration: 1.7 }}
          >
            Deputy Vice-Chancellor Scholarship (Sep 2024)
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.6, duration: 1.7 }}
          >
            Deputy Vice-Chancellor Scholarship (Sep 2023)
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}
