import { motion } from 'framer-motion'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { fadeUp } from '@/animations/motionVariants'

const skills = [
  { skill: 'React', level: 100 },
  { skill: 'Next.js', level: 100 },
  { skill: 'TypeScript', level: 80 },
  { skill: 'Laravel', level: 80 },
  { skill: 'Node.js', level: 85 },
  { skill: 'Figma Design', level: 85 },
  { skill: 'UI/UX', level: 100 },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass px-3 py-2 rounded-lg text-sm text-slate-200">
        <p className="font-semibold text-[#FF6B35]">{payload[0].payload.skill}</p>
        <p>Level: <span className="text-white">{payload[0].value}%</span></p>
      </div>
    )
  }
  return null
}

export default function SkillRadar() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-[#FF6B35]">Technical Skills</CardTitle>
          <p className="text-sm text-slate-500 mt-1">Proficiency across key domains</p>
        </CardHeader>
        <CardContent>
          {/* Recharts requires explicit height via inline style */}
          <div style={{ width: '100%', height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skills} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 500 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Radar
                  name="Skills"
                  dataKey="level"
                  stroke="#FF6B35"
                  strokeWidth={2}
                  fill="#FF6B35"
                  fillOpacity={0.18}
                  dot={{ fill: '#FF6B35', r: 4 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Skill Bars */}
          <div className="mt-6 space-y-3">
            {skills.map((s) => (
              <div key={s.skill} className="flex items-center gap-3">
                <span className="w-20 text-xs text-slate-400 text-right shrink-0">{s.skill}</span>
                <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: '#FF6B35' }}
                  />
                </div>
                <span className="w-10 text-xs text-slate-500 shrink-0">{s.level}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
